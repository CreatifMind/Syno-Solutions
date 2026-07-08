import {
  ArrowRight,
  Bot,
  Briefcase,
  Building2,
  CheckCircle2,
  GitBranch,
  Handshake,
  Mail,
  MapPin,
  Menu,
  MonitorCog,
  Network,
  Phone,
  ShieldCheck,
  Workflow,
  X,
  Zap,
} from 'lucide-react'
import { useState } from 'react'
import './App.css'

const logoPath = '/assets/syno-logo-cropped.png'
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
      'Kotti represents practical and innovative solutions designed to support modern business and consumer needs.',
  },
  {
    name: 'InnoX',
    description:
      'InnoX focuses on forward-thinking products and solutions that align with efficiency, innovation, and business value.',
  },
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/88 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
        <a href="#home" className="flex items-center gap-3" aria-label="Syno Solutions home">
          <span className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-md border border-slate-200 bg-white shadow-sm">
            <img src={markPath} alt="" className="h-10 w-10 object-cover" />
          </span>
          <span className="text-base font-semibold text-slate-950 sm:text-lg">Syno Solutions</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-cyan-600"
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
          className="inline-flex h-11 w-11 items-center justify-center rounded-md border border-slate-200 text-slate-700 lg:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50"
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
    <section id="home" className="relative overflow-hidden bg-slate-950 pt-28 text-white">
      <div className="absolute inset-0 hero-grid opacity-40" />
      <div className="absolute -right-24 top-24 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
      <div className="absolute left-1/3 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl" />

      <div className="section-container relative grid min-h-[680px] items-center gap-12 py-16 lg:grid-cols-[1.02fr_0.98fr] lg:py-20">
        <div className="max-w-3xl animate-fade-up">
          <h1 className="max-w-4xl text-5xl font-semibold leading-[1.03] text-white sm:text-6xl lg:text-7xl">
            Smart Business Solutions for a More Efficient Future
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300">
            Syno Solutions helps businesses improve operations, adopt practical technologies, and
            connect with innovative products through consultation, business solutions, and trusted
            distribution partnerships.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
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
    </section>
  )
}

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[560px] animate-fade-up animation-delay-150">
      <div className="absolute -inset-8 rounded-[2rem] bg-cyan-400/10 blur-2xl" />
      <div className="relative overflow-hidden rounded-[1.5rem] border border-white/15 bg-white/[0.07] p-5 shadow-2xl shadow-cyan-950/30 backdrop-blur">
        <div className="flex items-center justify-between border-b border-white/10 pb-5">
          <div>
            <p className="text-sm font-medium text-cyan-200">Operational clarity</p>
            <p className="mt-1 text-2xl font-semibold text-white">Solution roadmap</p>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200">
            <Network className="h-6 w-6" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="visual-card sm:col-span-2">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-md bg-cyan-300/15 text-cyan-200">
                <GitBranch className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="text-sm font-semibold text-white">Workflow diagnosis</p>
                <p className="text-xs text-slate-400">Map gaps, priorities, and next steps</p>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-4 gap-2">
              {[72, 88, 64, 96].map((height) => (
                <span
                  key={height}
                  className="block rounded-sm bg-gradient-to-t from-cyan-300 to-blue-500"
                  style={{ height: `${height}px` }}
                />
              ))}
            </div>
          </div>

          <div className="visual-card">
            <Zap className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-white">Automation</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">Reduce repetitive work</p>
          </div>
          <div className="visual-card">
            <ShieldCheck className="h-5 w-5 text-cyan-200" aria-hidden="true" />
            <p className="mt-4 text-sm font-semibold text-white">Market support</p>
            <p className="mt-1 text-xs leading-5 text-slate-400">Kotti and InnoX distribution</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function About() {
  return (
    <section id="about" className="bg-white py-24 sm:py-28">
      <div className="section-container grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <div>
          <SectionHeading
            title="About Syno Solutions"
            description="A newly formed Malaysia-based company built for practical, modern business improvement."
          />
          <div className="mt-8 max-w-sm rounded-lg border border-slate-200 bg-white p-5 shadow-lg shadow-slate-100">
            <img src={logoPath} alt="Syno Solutions logo" className="w-full object-contain" />
          </div>
        </div>
        <div className="space-y-6 text-lg leading-8 text-slate-600">
          <p>
            Syno Solutions is a Malaysia-based business solutions and consultation company focused
            on helping organizations identify challenges, improve processes, and implement practical
            solutions. We work with businesses that want to become more efficient, structured, and
            future-ready through strategic consultation, digital solutions, and innovative product
            partnerships.
          </p>
          <p>
            Newly formed and agile by design, Syno Solutions brings a solution-oriented approach to
            clients that need clear thinking, practical technology adoption, and dependable support
            for operational improvement.
          </p>
        </div>
      </div>
    </section>
  )
}

function Services() {
  return (
    <section id="services" className="bg-slate-50 py-24 sm:py-28">
      <div className="section-container">
        <SectionHeading
          title="Our Services"
          description="Focused support for companies that want better structure, smarter workflows, and practical technology adoption."
          centered
        />
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon

            return (
              <article key={service.title} className="service-card group">
                <div className="flex h-12 w-12 items-center justify-center rounded-md bg-cyan-50 text-cyan-700 ring-1 ring-cyan-100 transition group-hover:bg-cyan-600 group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-7 text-xl font-semibold text-slate-950">{service.title}</h3>
                <p className="mt-4 leading-7 text-slate-600">{service.description}</p>
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
    <section id="brands" className="bg-white py-24 sm:py-28">
      <div className="section-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <SectionHeading
            title="Our Distribution Brands"
            description="Syno Solutions is proud to support the Malaysian market as a distributor of selected innovative brands."
          />
          <p className="max-w-2xl text-lg leading-8 text-slate-600 lg:ml-auto">
            The section is structured to stay flexible as more product and brand information becomes
            available.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {brands.map((brand) => (
            <article key={brand.name} className="brand-card">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold uppercase text-cyan-700">{brand.name}</p>
                  <h3 className="mt-3 text-3xl font-semibold text-slate-950">{brand.name}</h3>
                </div>
                <div className="flex h-14 w-14 items-center justify-center rounded-md bg-slate-950 text-cyan-200">
                  <Building2 className="h-7 w-7" aria-hidden="true" />
                </div>
              </div>
              <p className="mt-7 leading-7 text-slate-600">{brand.description}</p>
            </article>
          ))}
        </div>

        <p className="mt-8 rounded-md border border-cyan-100 bg-cyan-50 px-5 py-4 text-sm font-medium text-slate-700">
          More product and brand information will be updated soon.
        </p>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  return (
    <section id="why-us" className="relative overflow-hidden bg-slate-950 py-24 text-white sm:py-28">
      <div className="absolute inset-0 hero-grid opacity-25" />
      <div className="section-container relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <SectionHeading
          title="Why Work With Syno Solutions?"
          description="A grounded partner for companies that need practical guidance and access to innovation without unnecessary complexity."
          dark
        />
        <div className="grid gap-4 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div key={reason} className="flex gap-4 rounded-md border border-white/10 bg-white/[0.06] p-5 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40">
              <CheckCircle2 className="mt-1 h-5 w-5 flex-none text-cyan-300" aria-hidden="true" />
              <p className="font-medium leading-7 text-slate-100">{reason}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="bg-white py-20">
      <div className="section-container">
        <div className="overflow-hidden rounded-lg bg-gradient-to-br from-slate-950 via-blue-950 to-cyan-800 px-6 py-14 text-center text-white shadow-2xl shadow-blue-950/20 sm:px-10 lg:px-16">
          <h2 className="text-4xl font-semibold leading-tight sm:text-5xl">
            Ready to Improve Your Business Operations?
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-200">
            Let’s discuss how Syno Solutions can support your business with consultation,
            solutions, and innovative brand partnerships.
          </p>
          <a href="#contact" className="btn-light mt-9">
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
    <section id="contact" className="bg-slate-50 py-24 sm:py-28">
      <div className="section-container grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <SectionHeading
            title="Get in Touch"
            description="Share a few details and Syno Solutions will be ready to discuss the right consultation, solution, or distribution support for your business."
          />
          <div className="mt-10 grid gap-4">
            <ContactItem icon={Mail} label="Email" value="synosolutions26@gmail.com" href="mailto:synosolutions26@gmail.com" />
            <ContactItem icon={Phone} label="Phone" value="+60122818212" href="tel:+60122818212" />
            <ContactItem icon={MapPin} label="Location" value="Petaling Jaya, Malaysia" />
          </div>
        </div>

        <form
          className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8"
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
      <div className="section-container grid gap-10 md:grid-cols-[1.1fr_0.8fr_0.9fr]">
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
      <p className={`mt-5 text-lg leading-8 ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Brands />
        <WhyChooseUs />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
