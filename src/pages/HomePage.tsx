import {
  BriefcaseBusiness,
  Handshake,
  Lightbulb,
  MapPin,
  MessagesSquare,
  PackageSearch,
  Settings2,
} from 'lucide-react'
import { ActionLink, TextLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { ProductBand } from '../components/ProductBand'
import { SectionIntro } from '../components/SectionIntro'
import { usePageMeta } from '../components/Seo'
import { company, productList } from '../data/site'

const coreSolutions = [
  {
    title: 'Business Consultation',
    description: 'Identify challenges, opportunities, and practical solution approaches.',
    icon: MessagesSquare,
    to: '/solutions#business-consultation',
  },
  {
    title: 'Technology Distribution',
    description: 'Access selected InnoX technologies within Malaysia.',
    icon: PackageSearch,
    to: '/solutions#product-distribution',
  },
  {
    title: 'Implementation Support',
    description: 'Coordinate adoption and communication between customers and technology partners.',
    icon: Settings2,
    to: '/solutions#implementation-coordination',
  },
] as const

const trustPoints = [
  { label: 'Malaysia-focused market understanding', icon: MapPin },
  { label: 'Access to innovative technology brands', icon: Lightbulb },
  { label: 'Business-first recommendations', icon: BriefcaseBusiness },
  { label: 'Responsive consultation and implementation coordination', icon: Handshake },
] as const

export default function HomePage() {
  usePageMeta({
    title: 'SYNO SOLUTIONS | Business Consultation & Technology Distribution Malaysia',
    description:
      'SYNO SOLUTIONS provides business consultation and distributes selected InnoX technologies across Malaysia.',
  })

  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero-inner">
          <div className="home-hero-copy">
            <h1>Smarter Solutions for Modern Businesses</h1>
            <p>
              SYNO SOLUTIONS provides practical business consultation and distributes innovative
              InnoX technologies across Malaysia.
            </p>
            <div className="hero-actions">
              <ActionLink to="/solutions">Explore Our Solutions</ActionLink>
              <ActionLink to="/contact" variant="outline-dark">
                Contact Us
              </ActionLink>
            </div>
          </div>
          <figure className="home-hero-media">
            <img
              src="/assets/business-operations-hero.jpg"
              alt="Business professionals reviewing an operational plan together"
              width="1672"
              height="941"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section section-tint company-positioning-section">
        <div className="site-container company-positioning-layout">
          <div>
            <span className="accent-rule" aria-hidden="true" />
            <h2>Practical Support from Requirement to Implementation</h2>
          </div>
          <div>
            <p>
              SYNO SOLUTIONS helps businesses identify suitable technologies, access innovative
              products, and coordinate practical implementation.
            </p>
            <TextLink to="/about">Learn About Our Approach</TextLink>
          </div>
        </div>
      </section>

      <section className="section section-white core-solutions-section">
        <div className="site-container">
          <SectionIntro
            title="How We Support Your Business"
            description="Focused support across business requirements, technology access, and practical adoption."
          />
          <div className="core-solutions-grid">
            {coreSolutions.map(({ title, description, icon: Icon, to }) => (
              <article className="solution-card" key={title}>
                <div className="solution-card-icon">
                  <Icon aria-hidden="true" size={29} strokeWidth={1.55} />
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
                <TextLink to={to}>Learn More</TextLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint home-products-section">
        <div className="site-container">
          <SectionIntro
            title="Technology for Practical Business Needs"
            description="Explore the selected technologies supported by SYNO SOLUTIONS in Malaysia."
          />
          <div className="home-product-list">
            {productList.map((product, index) => (
              <ProductBand key={product.slug} product={product} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="section why-section">
        <div className="site-container why-layout">
          <div className="why-copy">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Why Work with SYNO SOLUTIONS</h2>
            <p>
              Practical support grounded in local market understanding, clear communication, and
              business needs.
            </p>
            <ActionLink to="/about" variant="outline-light">
              About SYNO SOLUTIONS
            </ActionLink>
          </div>
          <ul className="why-list">
            {trustPoints.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Icon aria-hidden="true" size={25} strokeWidth={1.6} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        title="Let’s Find the Right Solution for Your Business"
        description="Speak with SYNO SOLUTIONS about business consultation, selected InnoX technologies, or a potential partnership."
        label="Start a Conversation"
        to="/contact"
        secondaryLabel="Email Us"
        secondaryHref={`mailto:${company.email}`}
      />
    </>
  )
}
