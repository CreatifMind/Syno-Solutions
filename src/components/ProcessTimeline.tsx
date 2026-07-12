import { processSteps } from '../data/site'
import { SectionIntro } from './SectionIntro'

type ProcessTimelineProps = {
  compact?: boolean
}

export function ProcessTimeline({ compact = false }: ProcessTimelineProps) {
  return (
    <section className={`section section-white process-section ${compact ? 'process-section-compact' : ''}`.trim()}>
      <div className="site-container">
        <SectionIntro title="A Practical Path Forward" />
        <ol className="process-timeline">
          {processSteps.map((step) => (
            <li key={step.number}>
              <span className="process-number">{step.number}</span>
              <span className="process-node" aria-hidden="true" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
