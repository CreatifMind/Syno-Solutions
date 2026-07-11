import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ProductBand } from '../components/ProductBand'
import { SectionIntro } from '../components/SectionIntro'
import { usePageMeta } from '../components/Seo'
import { productList } from '../data/site'

export default function ProductsPage() {
  usePageMeta({
    title: 'Kotti & Visel Products by InnoX',
    description:
      'Explore Kotti and Visel products manufactured by InnoX and distributed in Malaysia by SYNO SOLUTIONS.',
    path: '/products',
    image: '/assets/kotti-product-lineup.jpg',
  })

  return (
    <>
      <PageHero
        title="Products Manufactured by InnoX"
        description="SYNO SOLUTIONS supports the Malaysian market as a distributor for Kotti and Visel, two product lines manufactured by InnoX."
      >
        <ActionLink to="/contact?topic=Distribution%20or%20partnership">Discuss Distribution</ActionLink>
      </PageHero>

      <section className="section section-white manufacturer-section">
        <div className="site-container manufacturer-layout">
          <SectionIntro
            title="One Manufacturer. Two Distinct Product Lines."
            description="Kotti and Visel address different interaction needs while sharing InnoX as their manufacturer."
          />
          <div className="manufacturer-name" aria-label="InnoX">
            INNO<span>X</span>
          </div>
        </div>
      </section>

      <section className="section section-light products-catalogue-section">
        <div className="site-container products-catalogue">
          {productList.map((product, index) => (
            <ProductBand key={product.slug} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="section section-white distribution-support-section">
        <div className="site-container distribution-support-layout">
          <div>
            <span className="accent-rule" aria-hidden="true" />
            <h2>Malaysia Distribution Support</h2>
          </div>
          <div>
            <p>
              Contact SYNO SOLUTIONS for current Malaysia-market product information, enquiry support,
              availability discussions, and potential distribution partnerships.
            </p>
            <p className="product-disclaimer">
              Product specifications and availability may vary. Current information will be confirmed
              during the enquiry process.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Explore the Right Product for Your Use Case"
        description="Tell us whether you are evaluating Kotti, Visel, or a broader distribution opportunity."
        label="Start a Product Enquiry"
        to="/contact?topic=Distribution%20or%20partnership"
      />
    </>
  )
}
