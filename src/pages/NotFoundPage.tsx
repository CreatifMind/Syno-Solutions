import { ActionLink } from '../components/ActionLink'
import { usePageMeta } from '../components/Seo'

export function NotFoundContent() {
  return (
    <section className="not-found-section">
      <div className="site-container not-found-inner">
        <span>404</span>
        <h1>We Could Not Find That Page</h1>
        <p>The page may have moved, or the address may be incomplete.</p>
        <ActionLink to="/">Return Home</ActionLink>
      </div>
    </section>
  )
}

export default function NotFoundPage() {
  usePageMeta({
    title: 'Page Not Found',
    description: 'The requested SYNO SOLUTIONS page could not be found.',
    path: window.location.pathname,
    noIndex: true,
  })

  return <NotFoundContent />
}
