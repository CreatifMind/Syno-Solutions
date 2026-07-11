import { ArrowRight, BriefcaseBusiness, MonitorCog, PackageCheck, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { ActionLink, TextLink } from '../components/ActionLink'
import { ContactSection } from '../components/ContactSection'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { ProductBand } from '../components/ProductBand'
import { SectionIntro } from '../components/SectionIntro'
import { usePageMeta } from '../components/Seo'
import { productList, solutions } from '../data/site'

const credibilityItems = [
  { label: 'Business consultation', icon: BriefcaseBusiness },
  { label: 'Process improvement', icon: Workflow },
  { label: 'Technology adoption', icon: MonitorCog },
  { label: 'Product distribution', icon: PackageCheck },
] as const

export default function HomePage() {
  usePageMeta({
    title: 'SYNO SOLUTIONS | Business Solutions & InnoX Product Distribution',
    description:
      'Practical business consultation, process improvement, digital transformation, automation support, and Malaysia distribution for Kotti and Visel products manufactured by InnoX.',
  })

  return (
    <>
      <section className="home-hero">
        <div className="site-container home-hero-inner">
          <div className="home-hero-copy">
            <h1>Practical Business Solutions for More Efficient Operations</h1>
            <p>
              We help businesses improve processes, adopt practical technology, and access selected
              InnoX products through trusted distribution support in Malaysia.
            </p>
            <div className="hero-actions">
              <ActionLink to="/contact">Discuss a Business Challenge</ActionLink>
              <ActionLink to="/products" variant="outline-light">
                Explore Products
              </ActionLink>
            </div>
          </div>
        </div>
      </section>

      <section className="pathway-section" aria-label="How SYNO SOLUTIONS can help">
        <div className="site-container pathway-grid">
          <Link to="/solutions" className="pathway-link">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Business Solutions</h2>
            <p>Improve processes, strengthen operations, and support practical technology adoption.</p>
            <ArrowRight className="pathway-arrow" aria-hidden="true" size={30} strokeWidth={1.5} />
          </Link>
          <Link to="/products" className="pathway-link">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Product Distribution</h2>
            <p>Access selected Kotti and Visel products manufactured by InnoX.</p>
            <ArrowRight className="pathway-arrow" aria-hidden="true" size={30} strokeWidth={1.5} />
          </Link>
        </div>
      </section>

      <section className="section section-white home-solutions-section">
        <div className="site-container home-solutions-layout">
          <div>
            <SectionIntro
              title="Improve the Way Your Business Works"
              description="Practical support for clearer processes, stronger systems, and better technology adoption."
            />
            <div className="editorial-link-list">
              {solutions.map((solution) => (
                <Link key={solution.id} to={`/solutions#${solution.id}`}>
                  <span>{solution.number}</span>
                  <strong>{solution.title}</strong>
                  <ArrowRight aria-hidden="true" size={19} strokeWidth={1.7} />
                </Link>
              ))}
            </div>
            <TextLink to="/solutions">View All Solutions</TextLink>
          </div>
          <figure className="editorial-media">
            <img
              src="/assets/process-workshop.jpg"
              alt="A business team reviewing a practical process workflow"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section section-dark home-products-section">
        <div className="site-container">
          <SectionIntro
            inverse
            title="InnoX Products for the Malaysian Market"
            description="SYNO SOLUTIONS distributes selected products manufactured by InnoX."
          />
          <div className="home-product-list">
            {productList.map((product, index) => (
              <ProductBand key={product.slug} product={product} dark reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <ProcessTimeline />

      <section className="section credibility-section">
        <div className="site-container credibility-layout">
          <div className="credibility-copy">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Malaysia-Based, Business-Focused</h2>
            <p>
              SYNO SOLUTIONS supports organisations with practical consultation and selected InnoX
              product distribution in Malaysia.
            </p>
            <ActionLink to="/about" variant="outline-light">
              About SYNO SOLUTIONS
            </ActionLink>
          </div>
          <ul className="credibility-list">
            {credibilityItems.map(({ label, icon: Icon }) => (
              <li key={label}>
                <Icon aria-hidden="true" size={25} strokeWidth={1.6} />
                <span>{label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactSection />
    </>
  )
}
