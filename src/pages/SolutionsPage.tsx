import { Bot, BriefcaseBusiness, MonitorCog, Workflow } from 'lucide-react'
import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { usePageMeta } from '../components/Seo'
import { solutions } from '../data/site'

const solutionIcons = [BriefcaseBusiness, Workflow, MonitorCog, Bot]

export default function SolutionsPage() {
  usePageMeta({
    title: 'Business Solutions',
    description:
      'Explore SYNO SOLUTIONS services for business consultation, process improvement, digital transformation, and practical automation support in Malaysia.',
    path: '/solutions',
  })

  return (
    <>
      <PageHero
        title="Business Solutions Built Around Practical Needs"
        description="We help organisations clarify challenges, improve working methods, and make considered technology decisions without unnecessary complexity."
      >
        <ActionLink to="/contact">Discuss Your Business Needs</ActionLink>
      </PageHero>

      <section className="section section-white solutions-detail-section">
        <div className="site-container solution-detail-list">
          {solutions.map((solution, index) => {
            const Icon = solutionIcons[index]

            return (
              <article key={solution.id} id={solution.id} className="solution-detail-row">
                <div className="solution-detail-heading">
                  <span>{solution.number}</span>
                  <Icon aria-hidden="true" size={28} strokeWidth={1.5} />
                  <h2>{solution.title}</h2>
                </div>
                <div className="solution-detail-copy">
                  <p className="solution-lead">{solution.summary}</p>
                  <p>{solution.detail}</p>
                </div>
                <ul>
                  {solution.outcomes.map((outcome) => (
                    <li key={outcome}>{outcome}</li>
                  ))}
                </ul>
              </article>
            )
          })}
        </div>
      </section>

      <ProcessTimeline compact />

      <section className="section section-light distribution-bridge">
        <div className="site-container distribution-bridge-layout">
          <div>
            <span className="accent-rule" aria-hidden="true" />
            <h2>Product Distribution & Market Support</h2>
          </div>
          <div>
            <p>
              Alongside our consulting work, SYNO SOLUTIONS distributes Kotti and Visel products
              manufactured by InnoX for the Malaysian market.
            </p>
            <ActionLink to="/products" variant="outline-dark">
              Explore InnoX Products
            </ActionLink>
          </div>
        </div>
      </section>

      <CtaBand
        title="Start with the Business Challenge"
        description="Tell us what is slowing the team down, creating uncertainty, or limiting progress."
        label="Start a Conversation"
        to="/contact?topic=Business%20consultation"
      />
    </>
  )
}
