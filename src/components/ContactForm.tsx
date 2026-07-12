import { LoaderCircle, Send } from 'lucide-react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { company } from '../data/site'

const enquiryTypes = [
  'Business Consultation',
  'Product Enquiry',
  'Partnership Opportunity',
  'General Enquiry',
] as const

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'
type FieldName = 'name' | 'email' | 'topic' | 'message' | 'privacy'
type FieldErrors = Partial<Record<FieldName, string>>

type ContactFormProps = {
  initialTopic?: string
}

function getText(formData: FormData, key: string) {
  const value = formData.get(key)
  return typeof value === 'string' ? value.trim() : ''
}

function validateForm(formData: FormData): FieldErrors {
  const errors: FieldErrors = {}
  const name = getText(formData, 'name')
  const email = getText(formData, 'email')
  const topic = getText(formData, 'topic')
  const message = getText(formData, 'message')

  if (!name) errors.name = 'Please enter your full name.'
  if (!email) errors.email = 'Please enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = 'Please enter a valid email address.'
  }
  if (!topic) errors.topic = 'Please select an area of interest.'
  if (!message) errors.message = 'Please tell us how we can help.'
  if (formData.get('privacy') !== 'accepted') {
    errors.privacy = 'Please agree to the privacy notice before sending.'
  }

  return errors
}

export function ContactForm({ initialTopic = '' }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [statusMessage, setStatusMessage] = useState('')
  const [errors, setErrors] = useState<FieldErrors>({})

  const clearError = (field: FieldName) => {
    setErrors((current) => {
      if (!current[field]) return current
      const next = { ...current }
      delete next[field]
      return next
    })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)
    const nextErrors = validateForm(formData)

    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors)
      setStatus('error')
      setStatusMessage('Please review the highlighted fields and try again.')
      const firstError = Object.keys(nextErrors)[0] as FieldName
      const firstInvalidControl = form.elements.namedItem(firstError)
      if (firstInvalidControl instanceof HTMLElement) firstInvalidControl.focus()
      return
    }

    setErrors({})
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
      setStatusMessage(data?.message || 'Thank you. Your enquiry has been submitted to SYNO SOLUTIONS.')
    } catch (error) {
      setStatus('error')
      setStatusMessage(error instanceof Error ? error.message : 'We could not send your enquiry.')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <div className="field-group">
          <label htmlFor="contact-name">Full name *</label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'contact-name-error' : undefined}
            onChange={() => clearError('name')}
          />
          {errors.name ? (
            <span className="field-error" id="contact-name-error">
              {errors.name}
            </span>
          ) : null}
        </div>
        <div className="field-group">
          <label htmlFor="contact-company">Company name</label>
          <input id="contact-company" name="company" type="text" autoComplete="organization" />
        </div>
        <div className="field-group">
          <label htmlFor="contact-email">Email *</label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'contact-email-error' : undefined}
            onChange={() => clearError('email')}
          />
          {errors.email ? (
            <span className="field-error" id="contact-email-error">
              {errors.email}
            </span>
          ) : null}
        </div>
        <div className="field-group">
          <label htmlFor="contact-phone">Telephone number</label>
          <input id="contact-phone" name="phone" type="tel" autoComplete="tel" />
        </div>
        <div className="field-group field-group-wide">
          <label htmlFor="contact-topic">Area of interest *</label>
          <select
            id="contact-topic"
            name="topic"
            defaultValue={initialTopic}
            aria-invalid={Boolean(errors.topic)}
            aria-describedby={errors.topic ? 'contact-topic-error' : undefined}
            onChange={() => clearError('topic')}
          >
            <option value="" disabled>
              Select an area of interest
            </option>
            {enquiryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
          {errors.topic ? (
            <span className="field-error" id="contact-topic-error">
              {errors.topic}
            </span>
          ) : null}
        </div>
        <div className="field-group field-group-wide">
          <label htmlFor="contact-message">Message *</label>
          <textarea
            id="contact-message"
            name="message"
            rows={6}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'contact-message-error' : undefined}
            onChange={() => clearError('message')}
          />
          {errors.message ? (
            <span className="field-error" id="contact-message-error">
              {errors.message}
            </span>
          ) : null}
        </div>
      </div>

      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <label className="privacy-consent" htmlFor="contact-privacy">
          <input
            id="contact-privacy"
            name="privacy"
            type="checkbox"
            value="accepted"
            aria-invalid={Boolean(errors.privacy)}
            aria-describedby={errors.privacy ? 'contact-privacy-error' : undefined}
            onChange={() => clearError('privacy')}
          />
          <span>
            I have read and agree to the <Link to="/privacy">privacy notice</Link>.
          </span>
        </label>
        {errors.privacy ? (
          <span className="field-error privacy-error" id="contact-privacy-error">
            {errors.privacy}
          </span>
        ) : null}
      </div>

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
        {status === 'error' && Object.keys(errors).length === 0 ? (
          <span>
            {' '}
            You can also email <a href={`mailto:${company.email}`}>{company.email}</a>.
          </span>
        ) : null}
      </div>
    </form>
  )
}
