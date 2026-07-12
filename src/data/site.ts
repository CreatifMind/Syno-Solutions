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
    id: 'business-consultation',
    number: '01',
    title: 'Business Consultation',
    summary:
      'Clarify business requirements, operational challenges, and suitable solution approaches.',
    detail:
      'We help owners and teams frame the problem, identify practical priorities, and make more informed decisions about what to address next.',
    outcomes: ['Requirement discovery', 'Priority alignment', 'Practical recommendations'],
  },
  {
    id: 'technology-sourcing',
    number: '02',
    title: 'Technology Sourcing',
    summary:
      'Identify products and technologies that fit the organisation, intended use, and local context.',
    detail:
      'Our approach starts with the business need, then considers available technologies and how they may support the intended outcome.',
    outcomes: ['Needs assessment', 'Solution evaluation', 'Supplier coordination'],
  },
  {
    id: 'product-distribution',
    number: '03',
    title: 'Product Distribution',
    summary:
      'Support access to selected InnoX technologies for customers in Malaysia.',
    detail:
      'We coordinate product enquiries, current information, availability discussions, and Malaysia-market communication.',
    outcomes: ['Product enquiries', 'Market coordination', 'Availability support'],
  },
  {
    id: 'implementation-coordination',
    number: '04',
    title: 'Implementation Coordination',
    summary:
      'Help teams move from product or solution selection toward practical adoption and implementation.',
    detail:
      'We support communication between customers and technology partners so requirements, responsibilities, and next steps remain clear.',
    outcomes: ['Adoption planning', 'Stakeholder coordination', 'Implementation support'],
  },
  {
    id: 'partnership-support',
    number: '05',
    title: 'Partnership Support',
    summary:
      'Explore appropriate market, product, and business partnership opportunities in Malaysia.',
    detail:
      'We welcome practical conversations with organisations seeking local coordination, product support, or a business-focused market partner.',
    outcomes: ['Opportunity review', 'Market discussion', 'Partner coordination'],
  },
] as const

export const processSteps = [
  {
    number: '01',
    title: 'Understand',
    description: 'Discuss your business requirements, intended use, and current challenges.',
  },
  {
    number: '02',
    title: 'Recommend',
    description: 'Identify a suitable product, technology, or practical solution approach.',
  },
  {
    number: '03',
    title: 'Implement',
    description: 'Coordinate adoption, implementation, and ongoing communication as needed.',
  },
] as const

export type ProductSlug = 'kotti' | 'innox'

export type Product = {
  slug: ProductSlug
  name: string
  category: string
  heroTitle: string
  summary: string
  benefit: string
  audience: string
  problemHeading: string
  problem: string
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
      'A responsive companion product designed around visual, auditory, and haptic interaction.',
    benefit:
      'Supports engaging, multilingual interaction through a tangible companion format.',
    audience:
      'Organisations exploring interactive companion experiences, engagement, or shared environments.',
    problemHeading: 'A More Tangible Way to Interact',
    problem:
      'Kotti is intended for situations where a physical, multimodal interaction may be more appropriate than a screen-only experience.',
    detailHeading: 'Interaction Designed Around Context',
    detail:
      'Manufacturer materials describe Kotti as a multimodal companion that combines sensing and feedback to support more personalised interaction.',
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
    enquiryTopic: 'Kotti Product Enquiry',
  },
  innox: {
    slug: 'innox',
    name: 'InnoX',
    category: 'AR smart glasses',
    heroTitle: 'InnoX AR Smart Glasses',
    summary:
      'Smart-glasses technology with manufacturer-described visual communication and presentation support features.',
    benefit:
      'Makes selected spoken or prompted information available in a wearable display format.',
    audience:
      'Organisations evaluating accessible communication, presentation, or smart-glasses workflows.',
    problemHeading: 'Information Within the Wearer’s View',
    problem:
      'InnoX smart glasses are designed for scenarios where selected information may be useful without relying on a separate handheld screen.',
    detailHeading: 'Designed to Make Sound Visible',
    detail:
      'Manufacturer materials describe a near-eye display with speech-to-text, optical, and AI-assisted features for communication and presentation scenarios.',
    heroImage: '/assets/innox-lifestyle-smart-glasses.jpg',
    heroAlt: 'A person wearing InnoX AR smart glasses',
    gallery: [
      {
        src: '/assets/innox-smart-glasses-product.jpg',
        alt: 'Front and side views of InnoX AR smart glasses',
      },
      {
        src: '/assets/innox-smart-glasses-detail.jpg',
        alt: 'Close-up detail of the InnoX smart glasses frame',
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
        title: 'Wearable information',
        description: 'A near-eye display format intended for practical everyday use.',
      },
    ],
    enquiryTopic: 'InnoX Product Enquiry',
  },
}

export const productList = [products.kotti, products.innox]
