import { Mail, MapPin, Phone } from 'lucide-react'
import { Link } from 'react-router-dom'
import { company } from '../data/site'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-container footer-grid">
        <div className="footer-brand">
          <Link className="brand-link brand-link-footer" to="/" aria-label="SYNO SOLUTIONS home">
            <img
              src="/assets/syno-mark-transparent.png"
              alt=""
              width="620"
              height="520"
              loading="lazy"
            />
            <span>SYNO SOLUTIONS</span>
          </Link>
          <p>Business consultation, technology distribution, and practical implementation support in Malaysia.</p>
        </div>

        <div className="footer-column">
          <h2>Company</h2>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/privacy">Privacy</Link>
        </div>

        <div className="footer-column">
          <h2>Explore</h2>
          <Link to="/solutions">Solutions</Link>
          <Link to="/products">Products</Link>
          <Link to="/products/kotti">Kotti</Link>
          <Link to="/products/innox">Visel</Link>
        </div>

        <div className="footer-column footer-contact">
          <h2>Contact</h2>
          <a href={`mailto:${company.email}`}>
            <Mail aria-hidden="true" size={17} strokeWidth={1.7} />
            <span>{company.email}</span>
          </a>
          <a href={`tel:${company.phoneHref}`}>
            <Phone aria-hidden="true" size={17} strokeWidth={1.7} />
            <span>{company.phoneDisplay}</span>
          </a>
          <p>
            <MapPin aria-hidden="true" size={17} strokeWidth={1.7} />
            <span>{company.location}</span>
          </p>
        </div>
      </div>
      <div className="site-container footer-bottom">
        <span>© {new Date().getFullYear()} SYNO SOLUTIONS. All rights reserved.</span>
        <span>Petaling Jaya, Malaysia</span>
      </div>
    </footer>
  )
}
