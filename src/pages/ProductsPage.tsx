import { ActionLink } from '../components/ActionLink'
import { CtaBand } from '../components/CtaBand'
import { PageHero } from '../components/PageHero'
import { ProductBand } from '../components/ProductBand'
import { SectionIntro } from '../components/SectionIntro'
import { usePageMeta } from '../components/Seo'
import { productList } from '../data/site'

export default function ProductsPage() {
  usePageMeta({
    title: 'InnoX Technology Solutions, Including Kotti',
    description:
      'Explore selected InnoX technologies, including Kotti, supported by SYNO SOLUTIONS for customers in Malaysia.',
    path: '/products',
    image: '/assets/kotti-product-lineup.jpg',
  })

  return (
    <>
      <PageHero
        title="InnoX Technologies, Including Kotti"
        description="SYNO SOLUTIONS supports product discovery, enquiries, and Malaysia-market coordination for selected InnoX technologies, including Kotti."
      >
        <ActionLink to="/contact?topic=General%20Enquiry">Discuss Your Requirements</ActionLink>
      </PageHero>

      <section className="section section-tint products-catalogue-section">
        <div className="site-container">
          <SectionIntro
            title="Technology for Practical Use Cases"
            description="Review the available product information, then speak with our team about current details and suitability."
          />
          <div className="products-catalogue">
            {productList.map((product, index) => (
              <ProductBand key={product.slug} product={product} reverse={index % 2 === 1} />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white distribution-support-section">
        <div className="site-container distribution-support-layout">
          <div>
            <span className="accent-rule" aria-hidden="true" />
            <h2>Malaysia Product Support</h2>
          </div>
          <div>
            <p>
              Contact SYNO SOLUTIONS for current product information, enquiry support, availability
              discussions, and potential partnership opportunities in Malaysia.
            </p>
            <p className="product-disclaimer">
              Product features and availability may vary. Current information will be confirmed
              during the enquiry process.
            </p>
          </div>
        </div>
      </section>

      <CtaBand
        title="Find the Right Product for Your Use Case"
        description="Tell us whether you are evaluating an InnoX technology, including Kotti, or a broader technology opportunity."
        label="Start a Product Enquiry"
        to="/contact?topic=General%20Enquiry"
      />
    </>
  )
}
