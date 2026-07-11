import { Mail, MapPin, Phone } from 'lucide-react'
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
