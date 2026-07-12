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

    const sheetsWebAppUrl = process.env.GOOGLE_SHEETS_WEB_APP_URL
    const formToken = process.env.GOOGLE_SHEETS_FORM_TOKEN

    if (!sheetsWebAppUrl || !formToken) {
      return json(
        `Online enquiry storage is being configured. Please email us directly at ${CONTACT_EMAIL}.`,
        503,
      )
    }

    try {
      const sheetsResponse = await fetch(sheetsWebAppUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          token: formToken,
          receivedAt: new Date().toISOString(),
          name,
          company,
          email,
          phone,
          topic,
          message,
        }),
      })

      const responseData = (await sheetsResponse.json().catch(() => null)) as {
        ok?: boolean
        message?: unknown
      } | null
      if (!sheetsResponse.ok || !responseData?.ok) {
        const sheetsMessage = asText(responseData?.message, 240)
        console.error('Google Sheets delivery failed', sheetsResponse.status, sheetsMessage)
        return json(
          sheetsMessage
            ? `We could not submit your enquiry. Google Sheets reported: ${sheetsMessage}`
            : `We could not submit your enquiry. Please email us directly at ${CONTACT_EMAIL}.`,
          502,
        )
      }

      return json('Thank you. Your enquiry has been submitted to SYNO SOLUTIONS.', 200)
    } catch (error) {
      console.error('Google Sheets delivery failed', error)
      return json(
        `We could not submit your enquiry. Please email us directly at ${CONTACT_EMAIL}.`,
        500,
      )
    }
  },
}
