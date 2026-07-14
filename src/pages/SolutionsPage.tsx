import {
  BriefcaseBusiness,
  Handshake,
  Network,
  PackageCheck,
  SearchCheck,
} from 'lucide-react'
import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ProcessTimeline } from '../components/ProcessTimeline'
import { usePageMeta } from '../components/Seo'
import { solutions } from '../data/site'

const solutionIcons = [PackageCheck, BriefcaseBusiness, SearchCheck, Network, Handshake]

export default function SolutionsPage() {
  usePageMeta({
    title: 'Product Distribution & Business Support',
    description:
      'Explore SYNO SOLUTIONS support for product distribution, business consultation, technology sourcing, implementation coordination, and partnerships in Malaysia.',
    path: '/solutions',
  })

  return (
    <>
      <PageHero
        title="Product Distribution and Practical Business Support"
        description="From product discovery and Malaysia-market coordination to broader business requirements, we keep each conversation focused on practical next steps."
      >
        <ActionLink to="/contact?topic=Product%20Enquiry">Discuss Product Requirements</ActionLink>
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

      <CtaBand
        title="Start with Your Product Requirement"
        description="Tell us what product you are evaluating or how your organisation needs support."
        label="Start a Product Enquiry"
        to="/contact?topic=Product%20Enquiry"
      />
    </>
  )
}
