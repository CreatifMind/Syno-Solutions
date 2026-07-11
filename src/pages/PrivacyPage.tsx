import { PageHero } from '../components/PageHero'
import { usePageMeta } from '../components/Seo'
import { company } from '../data/site'

export default function PrivacyPage() {
  usePageMeta({
    title: 'Privacy Notice',
    description: 'Read how SYNO SOLUTIONS handles information submitted through this website.',
    path: '/privacy',
  })

  return (
    <>
      <PageHero
        title="Privacy Notice"
        description="This notice explains how information submitted through the SYNO SOLUTIONS website is used and handled."
        tone="light"
      />
      <article className="section section-white legal-content">
        <div className="site-container legal-content-inner">
          <p className="legal-updated">Last updated: 12 July 2026</p>

          <section>
            <h2>Information You Provide</h2>
            <p>
              When you submit an enquiry, we receive the information you choose to provide, which may
              include your name, company, email address, phone number, enquiry type, and message.
            </p>
          </section>

          <section>
            <h2>How We Use It</h2>
            <p>
              We use enquiry information to respond to you, understand your request, manage related
              correspondence, and provide appropriate information about our services or distributed products.
            </p>
          </section>

          <section>
            <h2>Service Providers</h2>
            <p>
              Website hosting and email-delivery providers may process submitted information only as
              needed to operate the website and deliver your enquiry to SYNO SOLUTIONS.
            </p>
          </section>

          <section>
            <h2>Retention and Disclosure</h2>
            <p>
              Enquiry information is retained only for as long as reasonably needed to manage the
              conversation and related business records. We do not sell personal information. We may
              disclose information where required by law or necessary to protect legitimate rights and interests.
            </p>
          </section>

          <section>
            <h2>Your Choices</h2>
            <p>
              You may contact us to ask about information you have submitted, request a correction, or
              withdraw from further correspondence where applicable.
            </p>
          </section>

          <section>
            <h2>Contact</h2>
            <p>
              Privacy questions can be sent to <a href={`mailto:${company.email}`}>{company.email}</a>.
            </p>
          </section>
        </div>
      </article>
    </>
  )
}
