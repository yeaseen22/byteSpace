export const site = {
  name: 'byteSpace',
  tagline: 'Build faster, together',
  description:
    'byteSpace is the collaborative workspace where product teams plan, build, and ship software in one place.',
}

export const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Product', href: '#product' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

export const features = [
  {
    title: 'Real-time collaboration',
    description:
      'Edit docs, specs, and designs with your team. Every change syncs instantly with live cursors and comments.',
    icon: 'users',
  },
  {
    title: 'Built-in issue tracking',
    description:
      'Turn ideas into tasks in one click. Prioritise, assign, and ship without leaving the workspace.',
    icon: 'check',
  },
  {
    title: 'Developer friendly',
    description:
      'A first-class API, webhooks, and Git sync. Connect your stack in minutes, not sprints.',
    icon: 'code',
  },
  {
    title: 'Insightful analytics',
    description:
      'See velocity, burndown, and cycle time in real time so you know exactly where work stands.',
    icon: 'chart',
  },
  {
    title: 'Automations',
    description:
      'Build rules that move work forward. Route issues, notify channels, and close stale tasks automatically.',
    icon: 'bolt',
  },
  {
    title: 'Enterprise security',
    description:
      'SOC 2 Type II, SSO, SCIM provisioning, and granular permissions your security team will love.',
    icon: 'shield',
  },
]

export const stats = [
  { value: '12k+', label: 'teams shipping with byteSpace' },
  { value: '99.99%', label: 'uptime over the last 12 months' },
  { value: '4.9/5', label: 'average customer rating' },
  { value: '38%', label: 'faster delivery cycles' },
]

export const testimonials = [
  {
    quote:
      'byteSpace replaced three tools for us. Our team ships faster and nobody misses a deadline in the channel anymore.',
    name: 'Amara Osei',
    role: 'VP Engineering, Northwind',
    initials: 'AO',
  },
  {
    quote:
      'The migration took an afternoon. By the end of the week the whole product org was living in byteSpace.',
    name: 'Daniel Reyes',
    role: 'Head of Product, Lumen Labs',
    initials: 'DR',
  },
  {
    quote:
      'It is the rare tool that our engineers and our designers both genuinely enjoy using every day.',
    name: 'Priya Nair',
    role: 'Design Lead, Corvus',
    initials: 'PN',
  },
]

export const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting organised.',
    price: '$0',
    period: 'forever',
    cta: 'Start for free',
    featured: false,
    features: [
      'Up to 5 members',
      'Unlimited docs and issues',
      '10 GB file storage',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    description: 'For teams that ship every week.',
    price: '$10',
    period: 'per user / month',
    cta: 'Start 14-day trial',
    featured: true,
    features: [
      'Unlimited members',
      'Real-time collaboration',
      'Automations and workflows',
      'API access and webhooks',
      'Priority support',
    ],
  },
  {
    name: 'Enterprise',
    description: 'For organisations with complex needs.',
    price: 'Custom',
    period: 'annual billing',
    cta: 'Talk to sales',
    featured: false,
    features: [
      'Everything in Pro',
      'SSO and SCIM provisioning',
      'Audit logs and data residency',
      'Dedicated success manager',
      'Custom SLA',
    ],
  },
]

export const faqs = [
  {
    question: 'Can I import from other tools?',
    answer:
      'Yes. Our importers support Jira, Linear, Trello, Notion, and Asana. You can also use our API to migrate anything custom.',
  },
  {
    question: 'Is there a free plan?',
    answer:
      'Yes, the Starter plan is free forever for teams of up to five members. No credit card required.',
  },
  {
    question: 'How does billing work?',
    answer:
      'Pro is billed per member monthly or annually. You can add or remove members at any time and we prorate the difference.',
  },
  {
    question: 'Do you offer discounts for startups or nonprofits?',
    answer:
      'We do. Eligible startups get 50% off Pro for the first year, and registered nonprofits receive a permanent discount.',
  },
  {
    question: 'What is your security posture?',
    answer:
      'byteSpace is SOC 2 Type II compliant with encryption at rest and in transit. We also support SSO, SCIM, and granular admin controls.',
  },
  {
    question: 'Can I self-host?',
    answer:
      'Self-hosting is available on the Enterprise plan. Talk to our sales team about deployment options and pricing.',
  },
]
