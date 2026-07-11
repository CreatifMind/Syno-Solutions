import { ActionLink } from './ActionLink'

type CtaBandProps = {
  title: string
  description: string
  label: string
  to: string
}

export function CtaBand({ title, description, label, to }: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="site-container cta-band-inner">
        <div>
          <span className="accent-rule" aria-hidden="true" />
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        <ActionLink to={to}>{label}</ActionLink>
      </div>
    </section>
  )
}
