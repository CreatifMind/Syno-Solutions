import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { usePageMeta } from '../components/Seo'

export default function AboutPage() {
  usePageMeta({
    title: 'About SYNO SOLUTIONS',
    description:
      'Learn about SYNO SOLUTIONS, a Malaysia-based company focused on technology distribution, business consultation, and practical implementation support.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        title="Practical Business and Technology Support in Malaysia"
        description="SYNO SOLUTIONS is a Malaysia-based business solutions company helping organisations clarify requirements, access suitable technologies, and coordinate practical next steps."
      >
        <ActionLink to="/contact">Talk to Our Team</ActionLink>
      </PageHero>

      <section className="section section-white about-story-section">
        <div className="site-container about-story-layout">
          <div className="about-story-copy">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Business Needs Come Before Technology</h2>
            <p>
              We begin by understanding the organisation, intended outcome, and practical constraints
              before discussing products or solution approaches.
            </p>
            <p>
              Our role is to bring clarity to the requirement, coordinate realistic options, and support
              communication between the customer and relevant technology partners.
            </p>
          </div>
          <figure className="about-story-media">
            <img
              src="/assets/process-workshop.jpg"
              alt="A business team working together on a process plan"
              width="1448"
              height="1086"
              loading="lazy"
              decoding="async"
            />
          </figure>
        </div>
      </section>

      <section className="section section-light about-pathways-section">
        <div className="site-container about-pathways-grid">
          <article>
            <span>01</span>
            <h2>Product Distribution</h2>
            <p>
              Product discovery, enquiry support, and Malaysia-market coordination for selected
              InnoX technologies, including Kotti and Visel.
            </p>
            <ActionLink to="/products" variant="outline-dark">
              Explore Products
            </ActionLink>
          </article>
          <article>
            <span>02</span>
            <h2>Business Solutions</h2>
            <p>
              Requirement discovery, business consultation, technology sourcing, and implementation
              coordination built around practical needs.
            </p>
            <ActionLink to="/solutions" variant="outline-dark">
              Explore Solutions
            </ActionLink>
          </article>
        </div>
      </section>

      <ProcessTimeline compact />

      <CtaBand
        title="A Practical Conversation Is the Best Place to Start"
        description="Tell us what your organisation is trying to improve or whether you are evaluating Kotti or Visel."
        label="Get in Touch"
        to="/contact"
      />
    </>
  )
}
