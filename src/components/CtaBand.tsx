import { Mail } from 'lucide-react'
import { ActionLink } from './ActionLink'

type CtaBandProps = {
  title: string
  description: string
  label: string
  to: string
  secondaryLabel?: string
  secondaryHref?: string
}

export function CtaBand({
  title,
  description,
  label,
  to,
  secondaryLabel,
  secondaryHref,
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="site-container cta-band-inner">
        <div>
          <span className="accent-rule" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <div className="cta-band-actions">
          <ActionLink to={to}>{label}</ActionLink>
          {secondaryLabel && secondaryHref ? (
            <a className="action-link action-link-outline-light" href={secondaryHref}>
              <span>{secondaryLabel}</span>
              <Mail aria-hidden="true" size={18} strokeWidth={1.8} />
            </a>
          ) : null}
        </div>
      </div>
    </section>
  )
}
