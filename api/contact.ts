const CONTACT_EMAIL = 'synosolutions.ent@gmail.com'
const MAX_BODY_BYTES = 12_000

type ContactPayload = {
  name?: unknown
  company?: unknown
  email?: unknown
  phone?: unknown
  topic?: unknown
  message?: unknown
  privacy?: unknown
  website?: unknown
}

function asText(value: unknown, maxLength: number) {
  return typeof value === 'string' ? value.trim().slice(0, maxLength) : ''
}

function escapeHtml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function json(message: string, status: number) {
  return Response.json({ message }, { status })
}

export default {
  async fetch(request: Request) {
    if (request.method !== 'POST') {
      return new Response(null, { status: 405, headers: { Allow: 'POST' } })
    }

    const contentLength = Number(request.headers.get('content-length') || '0')
    if (contentLength > MAX_BODY_BYTES) return json('The enquiry is too large to process.', 413)

    let payload: ContactPayload
    try {
      payload = (await request.json()) as ContactPayload
    } catch {
      return json('The enquiry could not be read. Please check the form and try again.', 400)
    }

    const website = asText(payload.website, 200)
    if (website) return json('Thank you. Your enquiry has been received.', 200)

    const name = asText(payload.name, 100)
    const company = asText(payload.company, 140)
    const email = asText(payload.email, 180).toLowerCase()
    const phone = asText(payload.phone, 60)
    const topic = asText(payload.topic, 140)
    const message = asText(payload.message, 5000)
    const privacyAccepted = payload.privacy === 'accepted'

    if (!name || !email || !topic || !message || !privacyAccepted) {
      return json('Please complete all required fields and accept the privacy notice.', 400)
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return json('Please enter a valid email address.', 400)
    }

    const resendApiKey = process.env.RESEND_API_KEY
    const fromEmail = process.env.CONTACT_FROM_EMAIL

    if (!resendApiKey || !fromEmail) {
      return json(
        `Email delivery is being configured. Please email us directly at ${CONTACT_EMAIL}.`,
        503,
      )
    }

    const safe = {
      name: escapeHtml(name),
      company: escapeHtml(company || 'Not provided'),
      email: escapeHtml(email),
      phone: escapeHtml(phone || 'Not provided'),
      topic: escapeHtml(topic),
      message: escapeHtml(message).replaceAll('\n', '<br />'),
    }

    try {
      const resendResponse = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: fromEmail,
          to: [CONTACT_EMAIL],
          reply_to: email,
          subject: `SYNO SOLUTIONS enquiry: ${topic}`,
          text: [
            'New enquiry from the SYNO SOLUTIONS website',
            '',
            `Name: ${name}`,
            `Company: ${company || 'Not provided'}`,
            `Email: ${email}`,
            `Phone: ${phone || 'Not provided'}`,
            `Enquiry type: ${topic}`,
            '',
            'Message:',
            message,
          ].join('\n'),
          html: `
            <h1>New SYNO SOLUTIONS website enquiry</h1>
            <p><strong>Name:</strong> ${safe.name}</p>
            <p><strong>Company:</strong> ${safe.company}</p>
            <p><strong>Email:</strong> ${safe.email}</p>
            <p><strong>Phone:</strong> ${safe.phone}</p>
            <p><strong>Enquiry type:</strong> ${safe.topic}</p>
            <h2>Message</h2>
            <p>${safe.message}</p>
          `,
        }),
      })

      if (!resendResponse.ok) {
        console.error('Resend delivery failed', resendResponse.status, await resendResponse.text())
        return json(
          `We could not deliver your enquiry. Please email us directly at ${CONTACT_EMAIL}.`,
          502,
        )
      }

      return json('Thank you. Your enquiry has been sent to SYNO SOLUTIONS.', 200)
    } catch (error) {
      console.error('Contact delivery failed', error)
      return json(
        `We could not deliver your enquiry. Please email us directly at ${CONTACT_EMAIL}.`,
        500,
      )
    }
  },
}
