import { useEffect } from 'react'
import { SITE_URL } from '../data/site'

type PageMeta = {
  title: string
  description: string
  path?: string
  image?: string
  noIndex?: boolean
}

function setMeta(attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`)

  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.append(element)
  }

  element.content = content
}

export function usePageMeta({
  title,
  description,
  path = '/',
  image = '/assets/business-operations-hero.jpg',
  noIndex = false,
}: PageMeta) {
  useEffect(() => {
    const pageTitle = title.includes('SYNO SOLUTIONS') ? title : `${title} | SYNO SOLUTIONS`
    const canonicalUrl = new URL(path, SITE_URL).toString()
    const imageUrl = new URL(image, SITE_URL).toString()

    document.title = pageTitle
    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setMeta('property', 'og:title', pageTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:url', canonicalUrl)
    setMeta('property', 'og:image', imageUrl)
    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', pageTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', imageUrl)

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.rel = 'canonical'
      document.head.append(canonical)
    }
    canonical.href = canonicalUrl
  }, [description, image, noIndex, path, title])
}
