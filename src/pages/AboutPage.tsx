import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { usePageMeta } from '../components/Seo'

export default function AboutPage() {
  usePageMeta({
    title: 'About SYNO SOLUTIONS',
    description:
      'Learn about SYNO SOLUTIONS, a Malaysia-based company focused on practical business consultation, operational improvement, technology adoption, and InnoX product distribution.',
    path: '/about',
  })

  return (
    <>
      <PageHero
        title="Modern, Practical, Solution-Oriented"
        description="SYNO SOLUTIONS is a Malaysia-based business solutions and consultation company focused on helping organisations identify challenges, improve processes, and implement practical solutions."
      >
        <ActionLink to="/contact">Talk to Our Team</ActionLink>
      </PageHero>

      <section className="section section-white about-story-section">
        <div className="site-container about-story-layout">
          <div className="about-story-copy">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Helping Businesses Move from Challenge to Action</h2>
            <p>
              We work with businesses that want to become more efficient, structured, and future-ready
              through strategic consultation, digital solutions, and practical technology decisions.
            </p>
            <p>
              Our role is to bring clarity to the challenge, evaluate realistic options, and support a
              path that makes sense for the organisation rather than forcing a one-size-fits-all answer.
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
            <h2>Business Solutions</h2>
            <p>
              Consultation, process improvement, digital transformation, and automation support built
              around practical business needs.
            </p>
            <ActionLink to="/solutions" variant="outline-dark">
              Explore Solutions
            </ActionLink>
          </article>
          <article>
            <span>02</span>
            <h2>Product Distribution</h2>
            <p>
              Malaysia-market support for Kotti and Visel, two product lines manufactured by InnoX.
            </p>
            <ActionLink to="/products" variant="outline-dark">
              Explore Products
            </ActionLink>
          </article>
        </div>
      </section>

      <ProcessTimeline compact />

      <CtaBand
        title="A Practical Conversation Is the Best Place to Start"
        description="Tell us what your organisation is trying to improve or which InnoX product you are evaluating."
        label="Get in Touch"
        to="/contact"
      />
    </>
  )
}
