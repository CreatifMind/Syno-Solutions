import { CircleCheck, UsersRound } from 'lucide-react'
import type { Product } from '../data/site'
import { ActionLink, TextLink } from './ActionLink'

type ProductBandProps = {
  product: Product
  reverse?: boolean
  dark?: boolean
}

export function ProductBand({ product, reverse = false, dark = false }: ProductBandProps) {
  return (
    <article className={`product-band ${reverse ? 'product-band-reverse' : ''} ${dark ? 'product-band-dark' : ''}`.trim()}>
      <div className="product-band-copy">
        <p className="product-category">{product.category}</p>
        <h3>{product.name}</h3>
        <p>{product.summary}</p>
        <div className="product-band-points">
          <div>
            <CircleCheck aria-hidden="true" size={21} strokeWidth={1.7} />
            <p>
              <strong>Main benefit</strong>
              <span>{product.benefit}</span>
            </p>
          </div>
          <div>
            <UsersRound aria-hidden="true" size={21} strokeWidth={1.7} />
            <p>
              <strong>Suitable for</strong>
              <span>{product.audience}</span>
            </p>
          </div>
        </div>
        <div className="product-band-actions">
          <TextLink to={`/products/${product.slug}`}>Explore {product.name}</TextLink>
          <ActionLink
            to={`/contact?topic=${encodeURIComponent(product.enquiryTopic)}`}
            variant={dark ? 'outline-light' : 'outline-dark'}
          >
            Enquire About {product.name}
          </ActionLink>
        </div>
      </div>
      <div className="product-band-media">
        <img
          src={product.heroImage}
          alt={product.heroAlt}
          width="1800"
          height="1013"
          loading="lazy"
          decoding="async"
        />
      </div>
    </article>
  )
}
