import { Check, Copy, Mail, MapPin, Phone } from 'lucide-react'
import { useState } from 'react'
import { company } from '../data/site'
import { ContactForm } from './ContactForm'

type ContactSectionProps = {
  initialTopic?: string
  heading?: string
  description?: string
}

export function ContactSection({
  initialTopic,
  heading = "Let's Talk About What Needs to Work Better",
  description = 'Share the challenge, opportunity, or product enquiry you would like to discuss.',
}: ContactSectionProps) {
  const [emailCopied, setEmailCopied] = useState(false)

  const copyEmailAddress = async () => {
    try {
      let copied = false
      if (navigator.clipboard?.writeText) {
        try {
          await navigator.clipboard.writeText(company.email)
          copied = true
        } catch {
          copied = false
        }
      }

      if (!copied) {
        const copyTarget = document.createElement('textarea')
        copyTarget.value = company.email
        copyTarget.setAttribute('readonly', '')
        copyTarget.style.position = 'fixed'
        copyTarget.style.opacity = '0'
        document.body.appendChild(copyTarget)
        copyTarget.select()
        copied = document.execCommand('copy')
        document.body.removeChild(copyTarget)
        if (!copied) throw new Error('Clipboard access was unavailable.')
      }
      setEmailCopied(true)
      window.setTimeout(() => setEmailCopied(false), 2200)
    } catch {
      setEmailCopied(false)
    }
  }

  return (
    <section className="section section-white contact-section" id="contact">
      <div className="site-container contact-layout">
        <div className="contact-copy">
          <span className="accent-rule" aria-hidden="true" />
          <h2>{heading}</h2>
          <p>{description}</p>
          <address className="contact-details">
            <a href={`mailto:${company.email}`}>
              <Mail aria-hidden="true" size={20} strokeWidth={1.7} />
              <span>{company.email}</span>
            </a>
            <button className="copy-email-button" type="button" onClick={copyEmailAddress}>
              {emailCopied ? (
                <Check aria-hidden="true" size={18} strokeWidth={2} />
              ) : (
                <Copy aria-hidden="true" size={18} strokeWidth={1.8} />
              )}
              <span>{emailCopied ? 'Email Copied' : 'Copy Email Address'}</span>
            </button>
            <a href={`tel:${company.phoneHref}`}>
              <Phone aria-hidden="true" size={20} strokeWidth={1.7} />
              <span>{company.phoneDisplay}</span>
            </a>
            <p>
              <MapPin aria-hidden="true" size={20} strokeWidth={1.7} />
              <span>{company.location}</span>
            </p>
          </address>
        </div>
        <ContactForm initialTopic={initialTopic} />
      </div>
    </section>
  )
}
