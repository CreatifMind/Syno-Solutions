type SectionIntroProps = {
  title: string
  description?: string
  inverse?: boolean
}

export function SectionIntro({ title, description, inverse = false }: SectionIntroProps) {
  return (
    <div className={`section-intro ${inverse ? 'section-intro-inverse' : ''}`.trim()}>
      <span className="accent-rule" aria-hidden="true" />
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  )
}
