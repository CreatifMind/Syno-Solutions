export const SITE_URL = 'https://syno-solutions.vercel.app'

export const company = {
  name: 'SYNO SOLUTIONS',
  email: 'synosolutions.ent@gmail.com',
  phoneDisplay: '+60122818212',
  phoneHref: '+60122818212',
  location: 'Petaling Jaya, Malaysia',
}

export const solutions = [
  {
    id: 'consultation',
    number: '01',
    title: 'Business Consultation',
    summary:
      'Clarify business challenges, identify practical priorities, and shape an actionable path forward.',
    detail:
      'We work with business owners and teams to understand operational pain points, decision constraints, and opportunities for structured improvement.',
    outcomes: ['Challenge definition', 'Priority alignment', 'Practical recommendations'],
  },
  {
    id: 'process-improvement',
    number: '02',
    title: 'Process Improvement',
    summary:
      'Review current workflows and recommend clearer structures, systems, and working methods.',
    detail:
      'The focus is on making day-to-day work easier to understand, manage, and improve without adding unnecessary complexity.',
    outcomes: ['Workflow review', 'Bottleneck identification', 'Improvement roadmap'],
  },
  {
    id: 'digital-transformation',
    number: '03',
    title: 'Digital Transformation',
    summary:
      'Support the adoption of practical tools and platforms that fit the way your organisation works.',
    detail:
      'We help teams assess technology needs, prepare for change, and make considered decisions around digital ways of working.',
    outcomes: ['Technology assessment', 'Adoption planning', 'Change support'],
  },
  {
    id: 'automation',
    number: '04',
    title: 'Automation & Smart Solutions',
    summary:
      'Explore where repetitive work can be simplified through appropriate automation and connected solutions.',
    detail:
      'Automation opportunities are considered in the context of people, processes, and existing systems so that recommendations remain useful and realistic.',
    outcomes: ['Opportunity mapping', 'Solution evaluation', 'Implementation support'],
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Discover',
    description: 'We clarify the challenge, priorities, and outcomes that matter to your organisation.',
  },
  {
    number: '02',
    title: 'Assess',
    description: 'We review the current situation, working methods, and practical constraints.',
  },
  {
    number: '03',
    title: 'Recommend',
    description: 'We propose focused next steps that are appropriate for the business context.',
  },
  {
    number: '04',
    title: 'Support',
    description: 'We help your team move from recommendation to practical implementation.',
  },
] as const

export type ProductSlug = 'kotti' | 'visel'

export type Product = {
  slug: ProductSlug
  name: string
  category: string
  heroTitle: string
  summary: string
  detailHeading: string
  detail: string
  heroImage: string
  heroAlt: string
  gallery: Array<{ src: string; alt: string }>
  features: string[]
  applications: Array<{ title: string; description: string }>
  enquiryTopic: string
}

export const products: Record<ProductSlug, Product> = {
  kotti: {
    slug: 'kotti',
    name: 'Kotti',
    category: 'Multimodal companion',
    heroTitle: 'Kotti Multimodal Companion',
    summary:
      'A companion product designed to respond to context through visual, auditory, and haptic interaction.',
    detailHeading: 'Interaction Designed Around Context',
    detail:
      'Manufacturer materials describe Kotti as a multimodal companion that combines different forms of sensing and feedback to support more personalised interaction.',
    heroImage: '/assets/kotti-product-lineup.jpg',
    heroAlt: 'Kotti companion products displayed with their packaging',
    gallery: [
      {
        src: '/assets/kotti-desk-companions.jpg',
        alt: 'Kotti companions in a modern desk setting',
      },
      {
        src: '/assets/kotti-lifestyle-companion.jpg',
        alt: 'A person interacting with a Kotti companion',
      },
    ],
    features: [
      'AI model integration',
      'Multilingual interaction support',
      'Configurable personality experience',
      'Proximity sensing',
      'Visual, auditory, and haptic interaction',
    ],
    applications: [
      {
        title: 'Interactive companionship',
        description: 'A responsive companion experience for personal and shared environments.',
      },
      {
        title: 'Multilingual interaction',
        description: 'Potential support for users who prefer to interact in different languages.',
      },
      {
        title: 'Personalised engagement',
        description: 'Configurable interactions intended to adapt to individual preferences.',
      },
    ],
    enquiryTopic: 'Kotti product enquiry',
  },
  visel: {
    slug: 'visel',
    name: 'Visel',
    category: 'AR smart glasses',
    heroTitle: 'Visel AR Smart Glasses',
    summary:
      'Manufacturer-described visual communication features designed to support clearer, more accessible everyday interactions.',
    detailHeading: 'Designed to Make Sound Visible',
    detail:
      'Visel smart glasses combine a near-eye display with manufacturer-described speech-to-text, optical, and AI-assisted features for communication and presentation scenarios.',
    heroImage: '/assets/visel-lifestyle-smart-glasses.jpg',
    heroAlt: 'A person wearing Visel AR smart glasses',
    gallery: [
      {
        src: '/assets/visel-smart-glasses-product.jpg',
        alt: 'Front and side views of Visel AR smart glasses',
      },
      {
        src: '/assets/visel-smart-glasses-detail.jpg',
        alt: 'Close-up detail of the Visel smart glasses frame',
      },
    ],
    features: [
      'Real-time speech-to-text display',
      'Optical waveguide technology',
      'Multimodal AI recognition',
      'Presentation prompting support',
      'Lightweight daily-wear design',
      'Display visibility in bright environments',
    ],
    applications: [
      {
        title: 'Accessible communication',
        description: 'Visual transcription support for conversations and everyday interactions.',
      },
      {
        title: 'Presentations',
        description: 'Prompting support intended to help speakers follow prepared content.',
      },
      {
        title: 'Everyday smart-glasses support',
        description: 'A wearable display format designed for practical daily use.',
      },
    ],
    enquiryTopic: 'Visel product enquiry',
  },
}

export const productList = [products.kotti, products.visel]
