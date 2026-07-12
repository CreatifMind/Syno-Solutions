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

const solutionIcons = [BriefcaseBusiness, SearchCheck, PackageCheck, Network, Handshake]

export default function SolutionsPage() {
  usePageMeta({
    title: 'Business Solutions & Technology Support',
    description:
      'Explore SYNO SOLUTIONS support for business consultation, technology sourcing, product distribution, implementation coordination, and partnerships in Malaysia.',
    path: '/solutions',
  })

  return (
    <>
      <PageHero
        title="Practical Support for Better Business Decisions"
        description="From understanding the requirement to coordinating technology and implementation, we keep the process focused on the organisation’s practical needs."
      >
        <ActionLink to="/contact?topic=Business%20Consultation">Discuss Your Requirements</ActionLink>
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
        title="Start with the Requirement"
        description="Tell us what your organisation is trying to solve, source, or implement."
        label="Book a Consultation"
        to="/contact?topic=Business%20Consultation"
      />
    </>
  )
}
