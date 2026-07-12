import { useSearchParams } from 'react-router-dom'
import { ContactSection } from '../components/ContactSection'
import { PageHero } from '../components/PageHero'
import { usePageMeta } from '../components/Seo'

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const initialTopic = searchParams.get('topic') || ''

  usePageMeta({
    title: 'Contact SYNO SOLUTIONS',
    description:
      'Contact SYNO SOLUTIONS in Petaling Jaya for business consultation, selected InnoX technologies, and partnership enquiries.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        title="Talk to SYNO SOLUTIONS"
        description="Tell us about your business requirement, product enquiry, or partnership opportunity."
      />
      <ContactSection
        heading="How Can We Help?"
        description="Submit an enquiry for secure recording, or email the SYNO SOLUTIONS team directly."
        initialTopic={initialTopic}
      />
    </>
  )
}
