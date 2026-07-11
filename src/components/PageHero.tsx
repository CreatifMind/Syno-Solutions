type PageHeroProps = {
  title: string
  description: string
  children?: React.ReactNode
  tone?: 'dark' | 'light'
}

export function PageHero({ title, description, children, tone = 'dark' }: PageHeroProps) {
  return (
    <section className={`page-hero page-hero-${tone}`}>
      <div className="site-container page-hero-inner">
        <div className="page-hero-copy">
          <span className="accent-rule" aria-hidden="true" />
          <h1>{title}</h1>
          <p>{description}</p>
          {children ? <div className="page-hero-actions">{children}</div> : null}
        </div>
      </div>
    </section>
  )
}
