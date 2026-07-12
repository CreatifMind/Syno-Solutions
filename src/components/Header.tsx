import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'

const primaryLinks = [
  { label: 'Home', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
] as const

const productLinks = [
  { label: 'All Products', to: '/products' },
  { label: 'Kotti', to: '/products/kotti' },
  { label: 'InnoX', to: '/products/innox' },
] as const

export function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const productMenuRef = useRef<HTMLDivElement>(null)
  const productButtonRef = useRef<HTMLButtonElement>(null)
  const mobileButtonRef = useRef<HTMLButtonElement>(null)
  const productsActive = location.pathname.startsWith('/products')

  useEffect(() => {
    setMobileOpen(false)
    setProductsOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const updateScrolled = () => setScrolled(window.scrollY > 8)
    updateScrolled()
    window.addEventListener('scroll', updateScrolled, { passive: true })
    return () => window.removeEventListener('scroll', updateScrolled)
  }, [])

  useEffect(() => {
    const desktopQuery = window.matchMedia('(min-width: 1001px)')
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setMobileOpen(false)
    }
    desktopQuery.addEventListener('change', closeOnDesktop)
    return () => desktopQuery.removeEventListener('change', closeOnDesktop)
  }, [])

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!productMenuRef.current?.contains(event.target as Node)) {
        setProductsOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [])

  useEffect(() => {
    if (!mobileOpen && !productsOpen) return

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        const restoreProductFocus = productsOpen && !mobileOpen
        setMobileOpen(false)
        setProductsOpen(false)
        if (restoreProductFocus) productButtonRef.current?.focus()
        else mobileButtonRef.current?.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [mobileOpen, productsOpen])

  useEffect(() => {
    if (!mobileOpen) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [mobileOpen])

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className={`site-header ${scrolled ? 'site-header-scrolled' : ''}`.trim()}>
        <div className="site-container header-inner">
          <Link className="brand-link" to="/" aria-label="SYNO SOLUTIONS home">
            <img
              src="/assets/syno-mark-transparent.png"
              alt=""
              width="620"
              height="520"
              decoding="async"
            />
            <span>SYNO SOLUTIONS</span>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/solutions">Solutions</NavLink>
            <div className="desktop-products" ref={productMenuRef}>
              <button
                ref={productButtonRef}
                type="button"
                className={productsActive ? 'nav-product-button active' : 'nav-product-button'}
                aria-expanded={productsOpen}
                aria-controls="desktop-product-menu"
                onClick={() => setProductsOpen((open) => !open)}
              >
                Products
                <ChevronDown aria-hidden="true" size={16} strokeWidth={1.8} />
              </button>
              {productsOpen ? (
                <div className="product-dropdown" id="desktop-product-menu">
                  {productLinks.map((item) => (
                    <NavLink key={item.to} to={item.to}>
                      {item.label}
                    </NavLink>
                  ))}
                </div>
              ) : null}
            </div>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/contact">Contact</NavLink>
          </nav>

          <Link className="header-cta" to="/contact">
            <span>Book a Consultation</span>
            <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
          </Link>

          <button
            ref={mobileButtonRef}
            type="button"
            className="mobile-menu-button"
            aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X aria-hidden="true" size={22} /> : <Menu aria-hidden="true" size={22} />}
          </button>
        </div>

      </header>
      {mobileOpen ? (
        <div className="mobile-navigation-layer">
          <button
            type="button"
            className="mobile-navigation-backdrop"
            aria-label="Close navigation panel"
            onClick={() => setMobileOpen(false)}
          />
          <nav className="mobile-navigation" id="mobile-navigation" aria-label="Mobile navigation">
            <div className="mobile-navigation-inner">
            {primaryLinks.slice(0, 2).map((item) => (
              <NavLink key={item.to} to={item.to} end={item.to === '/'}>
                {item.label}
              </NavLink>
            ))}
            <div className="mobile-product-group">
              <NavLink to="/products">Products</NavLink>
              <div>
                <NavLink to="/products/kotti">Kotti</NavLink>
                <NavLink to="/products/innox">InnoX</NavLink>
              </div>
            </div>
            {primaryLinks.slice(2).map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
            <Link className="mobile-navigation-cta" to="/contact">
              Book a Consultation
              <ArrowRight aria-hidden="true" size={18} strokeWidth={1.8} />
            </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </>
  )
}
