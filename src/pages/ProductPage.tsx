import {
  ArrowRight,
  Captions,
  Glasses,
  HeartHandshake,
  Languages,
  Presentation,
  Sparkles,
} from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { usePageMeta } from '../components/Seo'
import { products, type ProductSlug } from '../data/site'
import { NotFoundContent } from './NotFoundPage'

const kottiApplicationIcons = [HeartHandshake, Languages, Sparkles]
const viselApplicationIcons = [Captions, Presentation, Glasses]

export default function ProductPage() {
  const { slug = '' } = useParams()
  const product = products[slug as ProductSlug]

  usePageMeta(
    product
      ? {
          title: `${product.name} | InnoX Product`,
          description: `${product.summary} Manufactured by InnoX and distributed in Malaysia by SYNO SOLUTIONS.`,
          path: `/products/${product.slug}`,
          image: product.heroImage,
        }
      : {
          title: 'Product Not Found',
          description: 'The requested product page could not be found.',
          path: `/products/${slug}`,
          noIndex: true,
        },
  )

  if (!product) return <NotFoundContent />

  const applicationIcons = product.slug === 'kotti' ? kottiApplicationIcons : viselApplicationIcons

  return (
    <>
      <section className="product-hero">
        <div className="site-container product-hero-layout">
          <div className="product-hero-copy">
            <Link className="product-back-link" to="/products">
              Products / {product.name}
            </Link>
            <h1>{product.heroTitle}</h1>
            <span className="accent-rule" aria-hidden="true" />
            <p className="product-hero-summary">{product.summary}</p>
            <p className="product-provenance">
              Manufactured by InnoX. Distributed in Malaysia by SYNO SOLUTIONS.
            </p>
            <div className="product-hero-actions">
              <ActionLink to={`/contact?topic=${encodeURIComponent(product.enquiryTopic)}`}>
                Enquire About {product.name}
              </ActionLink>
              <ActionLink to="#features" variant="outline-light">
                View Key Features
              </ActionLink>
            </div>
          </div>
          <figure className="product-hero-media">
            <img
              src={product.heroImage}
              alt={product.heroAlt}
              width="1800"
              height="1013"
              decoding="async"
              fetchPriority="high"
            />
          </figure>
        </div>
      </section>

      <section className="section section-white product-features-section" id="features">
        <div className="site-container product-features-layout">
          <div className="product-feature-copy">
            <span className="accent-rule" aria-hidden="true" />
            <h2>{product.detailHeading}</h2>
            <p>{product.detail}</p>
            <ul className="product-feature-list">
              {product.features.map((feature) => (
                <li key={feature}>
                  <ArrowRight aria-hidden="true" size={17} strokeWidth={1.7} />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
          <div className="product-detail-gallery">
            {product.gallery.map((image) => (
              <figure key={image.src}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width="1800"
                  height="1013"
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light product-applications-section">
        <div className="site-container">
          <div className="applications-heading">
            <span className="accent-rule" aria-hidden="true" />
            <h2>Potential Applications</h2>
          </div>
          <div className="application-grid">
            {product.applications.map((application, index) => {
              const Icon = applicationIcons[index]
              return (
                <article key={application.title}>
                  <Icon aria-hidden="true" size={30} strokeWidth={1.5} />
                  <h3>{application.title}</h3>
                  <p>{application.description}</p>
                </article>
              )
            })}
          </div>
          <p className="product-market-note">
            Manufacturer descriptions are presented for general product information. Specifications
            and availability may vary. Contact SYNO SOLUTIONS for current Malaysia-market details.
          </p>
        </div>
      </section>

      <CtaBand
        title={`Discuss ${product.name} for Your Organisation`}
        description="Share your intended use, questions, or distribution requirements with our team."
        label="Start an Enquiry"
        to={`/contact?topic=${encodeURIComponent(product.enquiryTopic)}`}
      />
    </>
  )
}
