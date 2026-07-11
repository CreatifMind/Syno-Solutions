import { LoaderCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/site'

const enquiryTypes = [
  'Business consultation',
  'Process improvement',
  'Digital transformation',
  'Automation and smart solutions',
  'Kotti product enquiry',
  'Visel product enquiry',
  'Distribution or partnership',
  'Other',
] as const

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type ContactFormProps = {
  initialTopic?: string
}

export function ContactForm({ initialTopic = '' }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    setStatus('submitting')
    setStatusMessage('Sending your enquiry...')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(formData)),
      })

      const data = (await response.json().catch(() => null)) as { message?: string } | null
      if (!response.ok) throw new Error(data?.message || 'We could not send your enquiry.')

      form.reset()
      setStatus('success')
      setStatusMessage('Thank you. Your enquiry has been sent to SYNO SOLUTIONS.')
    } catch (error) {
      setStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'We could not send your enquiry.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="contact-name">Name *</label>
          <input id="contact-name" name="name" type="text" autoComplete="name" required />
        </div>
        <div className="field-group">
          <label htmlFor="contact-company">Company (optional)</label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field-group">
          <label htmlFor="contact-email">Email *</label>
          <input id="contact-email" name="email" type="email" autoComplete="email" required />
        </div>
        <div className="field-group">
          <label htmlFor="contact-phone">Phone (optional)</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field-group field-group-wide">
          <label htmlFor="contact-topic">Enquiry type *</label>
          <select id="contact-topic" name="topic" defaultValue={initialTopic} required>
            <option value="" disabled>
              Select an enquiry type
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>
        <div className="field-group field-group-wide">
          <label htmlFor="contact-message">Message *</label>
          <textarea id="contact-message" name="message" rows={6} required />
        </div>
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className="privacy-consent" htmlFor="contact-privacy">
        <input id="contact-privacy" name="privacy" type="checkbox" value="accepted" required />
        <span>
          I have read and agree to the <Link to="/privacy">privacy notice</Link>.
        </span>
      </label>

      <button className="submit-button" type="submit" disabled={status === 'submitting'}>
        {status === 'submitting' ? (
          <LoaderCircle className="spin" aria-hidden="true" size={19} />
        ) : (
          <Send aria-hidden="true" size={18} strokeWidth={1.8} />
        )}
        <span>{status === 'submitting' ? 'Sending Enquiry' : 'Send Enquiry'}</span>
      </button>

      <div className={`form-status form-status-${status}`} aria-live="polite" role="status">
        {statusMessage}
        {status === 'error' ? (
          <span>
            {' '}
            You can also email <a href={`mailto:${company.email}`}>{company.email}</a>.
          </span>
        ) : null}
      </div>
    </form>
  )
}
