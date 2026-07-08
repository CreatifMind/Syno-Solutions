import {
  ArrowRight,
  Bot,
  Brain,
  Briefcase,
  Building2,
  Captions,
  CheckCircle2,
  ChevronLeft,
  Download,
  Eye,
  Glasses,
  Handshake,
  Languages,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Phone,
  Presentation,
  Radar,
  Rocket,
  ScanFace,
  Sparkles,
  Target,
  Volume2,
  Workflow,
  X,
} from 'lucide-react'
import { useEffect, useState } from 'react'
import './App.css'

const markPath = '/assets/syno-mark.png'

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Brands', href: '#brands' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  {
    title: 'Business Consultation',
    description:
      'Helping companies identify pain points, improve workflows, and develop practical strategies for growth.',
    icon: Briefcase,
  },
  {
    title: 'Process Improvement',
    description:
      'Analyzing current operations and recommending better structures, systems, and working methods.',
    icon: Workflow,
  },
  {
    title: 'Digital Transformation Support',
    description:
      'Supporting businesses in adopting tools, platforms, and technologies that improve productivity.',
    icon: MonitorCog,
  },
  {
    title: 'Automation & Smart Solutions',
    description:
      'Exploring automation opportunities to reduce repetitive work and improve operational efficiency.',
    icon: Bot,
  },
  {
    title: 'Product Distribution & Market Support',
    description:
      'Representing and supporting innovative brands such as Kotti and InnoX in the Malaysian market.',
    icon: Handshake,
  },
]

const brands = [
  {
    name: 'Kotti',
    description:
      'Kotti is presented as a multimodal companion that understands user context through vision, auditory sensing, and haptic feedback.',
  },
  {
    name: 'InnoX',
    description:
      'InnoX focuses on AR smart glasses and accessibility-focused visual communication technologies.',
  },
]

const productHighlights = [
  {
    brand: 'Kotti',
    title: 'Kotti The Multimodal Companion',
    summary:
      'Kotti perceives not just commands, but contexts. Through the fusion of computer vision, auditory sensing, and haptic feedback, it recognizes micro-expressions, anticipates emotional states, and cultivates a learning relationship unique to each user.',
    image: '/assets/kotti-product-info.png',
    features: [
      { label: 'Built-in mainstream AI model', icon: Brain },
      { label: 'Supports multiple languages', icon: Languages },
      { label: 'Personality customization', icon: Sparkles },
      { label: 'Proactive proximity sensing', icon: Radar },
    ],
  },
  {
    brand: 'InnoX',
    title: 'Let sound be seen.',
    summary:
      'InnoX smart glasses are described as accessibility-focused AR glasses that combine voice interaction, gaze tracking, and AI description capabilities to support people with hearing impairments and everyday users.',
    image: '/assets/innox-product-info.png',
    features: [
      { label: 'Binocular display with near-eye Venus OS system', icon: Glasses },
      { label: 'Core AR optical waveguide technology', icon: Eye },
      { label: 'Multimodal AI recognition', icon: ScanFace },
      { label: 'Real-time speech-to-text projected onto the lenses', icon: Captions },
      { label: 'Zero-latency visual communication', icon: Volume2 },
      { label: 'Prompter artifact for more composed presentations', icon: Presentation },
    ],
  },
]

const productNotes = [
  'Medical-grade design suitable for daily and clinical scenarios',
  'Ultra-light body for comfortable wearing',
  'High-definition display resistant to strong light',
  'Designed to support efficient and natural communication',
]

const reasons = [
  'Practical, business-focused solutions',
  'Modern and agile approach',
  'Consultation tailored to each client',
  'Access to innovative products and partnerships',
]

function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#020a1f]/92 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-5 sm:px-8 lg:px-6">
        <a href="#home" className="flex items-center gap-3" aria-label="Syno Solutions home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md bg-white/5 shadow-sm">
            <img src={markPath} alt="" className="h-10 w-10 object-cover" />
          </span>
          <span className="text-base font-semibold uppercase tracking-[0.12em] text-white sm:text-lg">Syno Solutions</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/82 transition hover:text-cyan-300"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-white/20 text-white lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#020a1f] px-5 py-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-white/85 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a href="#contact" className="btn-primary mt-2 justify-center" onClick={() => setIsOpen(false)}>
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

function Hero() {
  return (
    <section id="home" className="hero-shell relative overflow-hidden bg-slate-950 pt-20 text-white">
      <div className="absolute inset-0 hero-grid opacity-45" />
      <div className="absolute -right-24 top-20 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/3 top-8 h-72 w-72 rounded-full bg-blue-600/18 blur-3xl" />

      <div className="section-container relative grid min-h-[560px] items-center gap-8 pb-24 pt-12 lg:grid-cols-[0.9fr_1.1fr] lg:pb-24 lg:pt-10">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="max-w-4xl text-5xl font-extrabold leading-[1.03] text-white sm:text-6xl lg:text-[3.2rem] xl:text-[3.5rem]">
            Smart Business Solutions for a More{' '}
            <span className="text-cyan-300">Efficient Future</span>
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-200 lg:text-lg lg:leading-8">
            Syno Solutions helps businesses improve operations, adopt practical technologies, and
            connect with innovative products through consultation, business solutions, and trusted
            distribution partnerships.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <a href="#services" className="btn-primary">
              Explore Our Services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
            <a href="#contact" className="btn-secondary-dark">
              Contact Us
            </a>
          </div>
        </div>

        <HeroVisual />
      </div>
      <div className="hero-curve" aria-hidden="true" />
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[620px] animate-fade-up animation-delay-150">
      <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
      <img
        src="/assets/hero-dashboard-concept.png"
        alt="Digital business dashboard visual"
        className="relative w-full rounded-xl object-cover"
      />
    </div>
  )
}

function About() {
  return (
    <section id="about" className="relative bg-white py-14 sm:py-16">
      <div className="section-container grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
        <div>
          <p className="section-kicker">About Us</p>
          <SectionHeading
            title="About Syno Solutions"
            description="Syno Solutions is a Malaysia-based business solutions and consultation company focused on helping organizations identify challenges, improve processes, and implement practical solutions."
          />
          <p className="mt-5 text-base leading-7 text-slate-600">
            We work with businesses that want to become more efficient, structured, and future-ready
            through strategic consultation, digital solutions, and innovative product partnerships.
          </p>
          <div className="mt-8 flex items-center gap-3 text-sm font-bold text-slate-800">
            <Rocket className="h-5 w-5 text-cyan-600" aria-hidden="true" />
            Newly formed. Modern. Agile. Solution-oriented.
          </div>
        </div>
        <div className="about-media">
          <img src="/assets/about-kl-concept.png" alt="Kuala Lumpur business skyline" className="relative z-10 w-full rounded-xl object-cover" />
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-gradient-to-b from-slate-50 to-white py-14 sm:py-16">
      <div className="section-container">
        <p className="section-kicker text-center">What We Do</p>
        <SectionHeading
          title="Our Services"
          description=""
          centered
        />
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.title} className="service-card group text-center">
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md bg-white text-blue-600 ring-1 ring-blue-100 transition group-hover:bg-blue-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-4 text-base font-extrabold leading-tight text-slate-950">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Brands() {
  return (
    <section id="brands" className="bg-white py-14 sm:py-16">
      <div className="section-container">
        <div className="text-center">
          <p className="section-kicker">Our Partners</p>
          <SectionHeading
            title="Our Distribution Brands"
            description=""
            centered
          />
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {brands.map((brand) => (
            <article key={brand.name} className="brand-card text-center">
              <div className="brand-wordmark" aria-hidden="true">
                {brand.name === 'InnoX' ? (
                  <>
                    INNO<span>X</span>
                  </>
                ) : (
                  'KOTTI'
                )}
              </div>
              <h3 className="mt-3 text-xl font-bold text-blue-600">{brand.name}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{brand.description}</p>
            </article>
          ))}
          <a href="#/products" className="brand-card flex flex-col items-center justify-center text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full border border-blue-100 text-blue-900">
              <Building2 className="h-6 w-6" aria-hidden="true" />
            </span>
            <p className="mt-5 text-lg font-extrabold leading-7 text-slate-950">
              More product and brand information has been updated.
            </p>
          </a>
        </div>
      </div>
    </section>
  )
}

function ProductsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-slate-950 pt-32 text-white">
        <div className="absolute inset-0 hero-grid opacity-35" />
        <div className="absolute -right-24 top-20 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="section-container relative grid gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="animate-fade-up">
            <a href="#brands" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition hover:text-white">
              <ChevronLeft className="h-4 w-4" aria-hidden="true" />
              Back to Brands
            </a>
            <h1 className="mt-7 max-w-4xl text-5xl font-semibold leading-[1.04] text-white sm:text-6xl">
              Product Information for Kotti and InnoX
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
              Syno Solutions supports the Malaysian market as a distributor for selected innovative
              products. The information below is summarized from the attached Kotti and InnoX
              brochure.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <a href="#contact" className="btn-primary">
                Discuss Distribution
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="/assets/kotti-and-innox.pdf" className="btn-secondary-dark" target="_blank" rel="noreferrer">
                Download Brochure
                <Download className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
            <div className="grid gap-4 sm:grid-cols-2">
              {productHighlights.map((product) => (
                <div key={product.brand} className="rounded-lg border border-white/10 bg-slate-950/50 p-5">
                  <p className="text-sm font-semibold uppercase text-cyan-200">{product.brand}</p>
                  <h2 className="mt-3 text-2xl font-semibold text-white">{product.title}</h2>
                  <p className="mt-4 text-sm leading-6 text-slate-300">{product.summary}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 sm:py-28">
        <div className="section-container space-y-20">
          {productHighlights.map((product, index) => (
            <ProductDetail key={product.brand} product={product} reverse={index % 2 === 1} />
          ))}
        </div>
      </section>

      <section className="bg-slate-50 py-24 sm:py-28">
        <div className="section-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <SectionHeading
            title="Malaysia Distribution Support"
            description="Syno Solutions can support business inquiries, market conversations, and product partnership discussions for Kotti and InnoX in Malaysia."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {productNotes.map((note) => (
              <div key={note} className="flex gap-4 rounded-md border border-slate-200 bg-white p-5 shadow-sm">
                <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-600" aria-hidden="true" />
                <p className="font-medium leading-7 text-slate-700">{note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
      <Contact />
    </main>
  )
}

type ProductDetailProps = {
  product: (typeof productHighlights)[number]
  reverse?: boolean
}

function ProductDetail({ product, reverse = false }: ProductDetailProps) {
  return (
    <article className={`grid gap-10 lg:grid-cols-2 lg:items-center ${reverse ? 'lg:[&>*:first-child]:order-2' : ''}`}>
      <div>
        <p className="text-sm font-semibold uppercase text-cyan-700">{product.brand}</p>
        <h2 className="mt-3 text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl">
          {product.title}
        </h2>
        <p className="mt-6 text-lg leading-8 text-slate-600">{product.summary}</p>
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {product.features.map((feature) => {
            const Icon = feature.icon

            return (
              <div key={feature.label} className="product-feature">
                <span className="flex h-11 w-11 flex-none items-center justify-center rounded-md bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="font-semibold leading-6 text-slate-800">{feature.label}</p>
              </div>
            )
          })}
        </div>
      </div>
      <div className="product-brochure">
        <img src={product.image} alt={`${product.brand} product brochure page`} className="w-full rounded-lg object-cover" />
      </div>
    </article>
  )
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-white py-10 text-slate-950 sm:py-12">
      <div className="section-container">
        <p className="section-kicker text-center">Why Choose Us</p>
        <SectionHeading
          title="Why Work With Syno Solutions?"
          description=""
          centered
        />
        <div className="mt-7 grid gap-4 md:grid-cols-4">
          {reasons.map((reason) => (
            <div key={reason} className="why-item">
              <Target className="h-9 w-9 text-blue-600" aria-hidden="true" />
              <p className="font-extrabold leading-6 text-slate-900">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-strip bg-[#03184d] py-9 text-white">
      <div className="section-container grid gap-7 md:grid-cols-[auto_1fr_auto] md:items-center">
        <div className="flex h-24 w-24 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-400 text-white shadow-lg shadow-cyan-900/30">
          <TrendingIcon />
        </div>
        <div>
          <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">
            Ready to Improve Your Business Operations?
          </h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-200">
            Let’s discuss how Syno Solutions can support your business with consultation,
            solutions, and innovative brand partnerships.
          </p>
        </div>
        <div>
          <a href="#contact" className="btn-primary">
            Contact Syno Solutions
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <section id="contact" className="bg-white py-12 sm:py-14">
      <div className="section-container">
        <p className="section-kicker text-center">Contact Us</p>
        <SectionHeading title="Get in Touch" description="" centered />
      </div>
      <div className="section-container mt-8 grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <div className="grid gap-4">
            <ContactItem icon={Mail} label="Email" value="synosolutions26@gmail.com" href="mailto:synosolutions26@gmail.com" />
            <ContactItem icon={Phone} label="Phone" value="+60122818212" href="tel:+60122818212" />
            <ContactItem icon={MapPin} label="Location" value="Petaling Jaya, Malaysia" />
          </div>
        </div>

        <form
          className="rounded-lg border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/70 sm:p-6"
          onSubmit={(event) => {
            event.preventDefault()
            setSubmitted(true)
          }}
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Name" name="name" autoComplete="name" required />
            <FormField label="Company Name" name="company" autoComplete="organization" required />
            <FormField label="Email" name="email" type="email" autoComplete="email" required />
            <FormField label="Phone Number" name="phone" type="tel" autoComplete="tel" required />
            <div className="sm:col-span-2">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="form-input resize-none"
                placeholder="Tell us about your business goals or support needs."
              />
            </div>
          </div>
          <button type="submit" className="btn-primary mt-7 w-full justify-center">
            Submit
          </button>
          {submitted && (
            <p className="mt-4 rounded-md bg-cyan-50 px-4 py-3 text-sm font-medium text-cyan-800">
              Thank you. Your message has been prepared for future Syno Solutions follow-up.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

type ContactItemProps = {
  icon: typeof Mail
  label: string
  value: string
  href?: string
}

function ContactItem({ icon: Icon, label, value, href }: ContactItemProps) {
  const content = (
    <>
      <span className="flex h-11 w-11 items-center justify-center rounded-md bg-white text-cyan-700 ring-1 ring-slate-200">
        <Icon className="h-5 w-5" aria-hidden="true" />
      </span>
      <span>
        <span className="block text-sm font-semibold text-slate-950">{label}</span>
        <span className="mt-1 block text-slate-600">{value}</span>
      </span>
    </>
  )

  if (href) {
    return (
      <a href={href} className="flex items-center gap-4 rounded-md border border-slate-200 bg-white p-4 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
        {content}
      </a>
    )
  }

  return <div className="flex items-center gap-4 rounded-md border border-slate-200 bg-white p-4">{content}</div>
}

function TrendingIcon() {
  return (
    <svg className="h-14 w-14" viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <path d="M10 50h44" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M16 43V31" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M29 43V24" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M42 43V17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M14 27l12-10 10 8 16-17" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43 8h9v9" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

type FormFieldProps = {
  label: string
  name: string
  type?: string
  autoComplete?: string
  required?: boolean
}

function FormField({ label, name, type = 'text', autoComplete, required }: FormFieldProps) {
  return (
    <div>
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        className="form-input"
      />
    </div>
  )
}

function Footer() {
  return (
    <footer className="bg-slate-950 py-12 text-slate-300">
      <div className="section-container grid gap-10 md:grid-cols-[1fr_0.65fr_0.9fr_0.95fr]">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-md bg-white">
              <img src={markPath} alt="" className="h-9 w-9 object-cover" />
            </span>
            <h2 className="text-2xl font-semibold text-white">Syno Solutions</h2>
          </div>
          <p className="mt-4 max-w-sm leading-7 text-slate-400">
            Business solutions, consultation, and innovation partnerships.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-white">Quick Links</h3>
          <div className="mt-4 grid gap-2">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-slate-400 hover:text-cyan-200">
                {item.label}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-white">Services</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <p>Business Consultation</p>
            <p>Process Improvement</p>
            <p>Digital Transformation</p>
            <p>Automation Solutions</p>
            <p>Product Distribution</p>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase text-white">Contact</h3>
          <div className="mt-4 grid gap-2 text-sm text-slate-400">
            <a href="mailto:synosolutions26@gmail.com" className="hover:text-cyan-200">
              synosolutions26@gmail.com
            </a>
            <a href="tel:+60122818212" className="hover:text-cyan-200">
              +60122818212
            </a>
            <p>Petaling Jaya, Malaysia</p>
          </div>
        </div>
      </div>
      <div className="section-container mt-10 border-t border-white/10 pt-6 text-sm text-slate-500">
        © 2026 Syno Solutions. All rights reserved.
      </div>
    </footer>
  )
}

type SectionHeadingProps = {
  title: string
  description: string
  centered?: boolean
  dark?: boolean
}

function SectionHeading({ title, description, centered = false, dark = false }: SectionHeadingProps) {
  return (
    <div className={centered ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      <h2 className={`text-4xl font-semibold leading-tight sm:text-5xl ${dark ? 'text-white' : 'text-slate-950'}`}>
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

function App() {
  const page = useHashPage()

  return (
    <>
      <Header />
      {page === 'products' ? <ProductsPage /> : <LandingPage />}
      <Footer />
    </>
  )
}

function LandingPage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Brands />
      <WhyChooseUs />
      <CTA />
      <Contact />
    </main>
  )
}

function useHashPage() {
  const [hash, setHash] = useState(() => window.location.hash)

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (hash === '#/products') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (hash.startsWith('#') && hash.length > 1) {
      window.requestAnimationFrame(() => {
        document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' })
      })
    }
  }, [hash])

  return hash === '#/products' ? 'products' : 'home'
}

export default App
