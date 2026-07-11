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
      'Contact SYNO SOLUTIONS in Petaling Jaya for business consultation, process improvement, technology support, Kotti, Visel, and distribution enquiries.',
    path: '/contact',
  })

  return (
    <>
      <PageHero
        title="Start a Practical Conversation"
        description="Tell us about the business challenge, product enquiry, or distribution opportunity you would like to discuss."
      />
      <ContactSection
        heading="Let's Talk About What Needs to Work Better"
        description="Complete the form and your enquiry will be sent directly to SYNO SOLUTIONS."
        initialTopic={initialTopic}
      />
    </>
  )
}
