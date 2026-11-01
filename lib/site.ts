export const site = {
  name: 'Aperture Hospitality',
  url: 'https://www.aperturehospitality.com',
  // TODO(Brandon): confirm one address everywhere (one-pager uses brandon@, old site used inquiries@)
  email: 'brandon@aperturehospitality.com',
  bookingUrl: 'https://calendar.app.google/Z5iZP6bsn5Xze1QN8',
  linkedin: 'https://www.linkedin.com/company/aperture-hospitality/',
  substack: 'https://expandyouraperture.substack.com/',
  personal: 'https://www.brandonmweaver.com',
  title: 'Aperture Hospitality | Fractional Commercial Leadership',
  description:
    'Fractional Chief Commercial and Marketing Officer for hospitality, travel and consumer brands. Senior commercial leadership, without the full-time hire.',
}

export const engagements = [
  {
    id: 'diagnostic',
    title: 'Commercial Diagnostic',
    format: '4 to 6 weeks · Fixed fee',
    body: 'A clear read on where growth is stuck, the three priorities that matter and a 90-day action plan.',
  },
  {
    id: 'fractional',
    title: 'Fractional CCO / CMO',
    format: '1 to 3 days a week · Monthly retainer',
    body: 'Hands-on leadership of the commercial team, GTM execution, partner deals and board-level reporting.',
  },
  {
    id: 'sprint',
    title: 'Revenue Sprint',
    format: '8 to 12 weeks · Project fee',
    body: 'One focused outcome: a pricing reset, channel or product launch, partnership program or turnaround plan.',
  },
] as const

export type InsightType = 'Article' | 'Guide' | 'E-Book' | 'Playbook' | 'White Paper'
export type Insight = { title: string; type: InsightType; topic: string; link: string }

// Featured on the homepage, in order.
export const featuredInsights: Insight[] = [
  {
    title: 'The Hotel Exists Before the Opening',
    type: 'White Paper',
    topic: 'Commercial Strategy',
    link: 'https://drive.google.com/file/d/1pWp7AO27qvfaEKEBtS3MtJ4TO5Um5yBl/view?usp=sharing',
  },
  {
    title: 'Brand-to-Demand: How Luxury Brand Thinking Makes Performance Marketing Better',
    type: 'Guide',
    topic: 'Lessons in Luxury',
    link: 'https://drive.google.com/file/d/1pLur9KDw4xYY239aYOrxdXjsAd6iYjma/view?usp=drive_link',
  },
  {
    title: 'The Architecture of Luxury Hotel Opening: A Practitioner’s Playbook for Systems, People and Sequence',
    type: 'Playbook',
    topic: 'Operations',
    link: 'https://drive.google.com/file/d/1dkeh3c4sxKWCw7aOYOXpGbOJB9CPxJEj/view?usp=sharing',
  },
]

export const insightGroups: { topic: string; items: Insight[] }[] = [
  {
    topic: 'Commercial Strategy',
    items: [
      { title: 'The Hotel Exists Before the Opening', type: 'White Paper', topic: 'Commercial Strategy', link: 'https://drive.google.com/file/d/1pWp7AO27qvfaEKEBtS3MtJ4TO5Um5yBl/view?usp=sharing' },
      // TODO(Brandon): these three reuse the Drive IDs of the Sales Strategy pieces below, so they open the wrong files. Replace with the correct links.
      { title: 'The Authorization Illusion', type: 'E-Book', topic: 'Commercial Strategy', link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link' },
      { title: 'Distribution-First Strategy', type: 'E-Book', topic: 'Commercial Strategy', link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link' },
      { title: 'Travel’s Overlooked and Undervalued Channel Delivers Outsized Value', type: 'Article', topic: 'Commercial Strategy', link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link' },
    ],
  },
  {
    topic: 'Lessons in Luxury',
    items: [
      { title: 'Feeling Is the New Luxury', type: 'Article', topic: 'Lessons in Luxury', link: 'https://drive.google.com/file/d/1eyd0vxq3D8xr8phIw2-w71P0EX7m5eVQ/view?usp=drive_link' },
      { title: 'Don’t Chase Them, Make Them Earn It', type: 'E-Book', topic: 'Lessons in Luxury', link: 'https://drive.google.com/file/d/1Dmr3uYRw38DMwO8oWA7j3FhN1AUU_AWn/view?usp=drive_link' },
      { title: 'Brand-to-Demand: How Luxury Brand Thinking Makes Performance Marketing Better', type: 'Guide', topic: 'Lessons in Luxury', link: 'https://drive.google.com/file/d/1pLur9KDw4xYY239aYOrxdXjsAd6iYjma/view?usp=drive_link' },
    ],
  },
  {
    topic: 'Marketing Strategy',
    items: [
      { title: 'What Spirits & Hospitality Taught Me About Emotional Brand Building at Scale', type: 'Guide', topic: 'Marketing Strategy', link: 'https://drive.google.com/file/d/1YfnbifrFnvxLNGymwz_0AYF-VUF65cME/view?usp=drive_link' },
      { title: 'Multi-Channel Campaign Architecture: Lessons from Diageo to Startups', type: 'Guide', topic: 'Marketing Strategy', link: 'https://drive.google.com/file/d/19Gnygvl0Dc6rOQlN3W6VZko2NuwnLLa4/view?usp=drive_link' },
      { title: 'The Gap Between Marketing and Revenue, and How to Fix It', type: 'Article', topic: 'Marketing Strategy', link: 'https://drive.google.com/file/d/1rZHQaXVEpHxITLhQoI2gcFLmu6g_vZ2W/view?usp=drive_link' },
      { title: 'The Death of the Funnel: Why Modern B2C Marketing Needs a New Model', type: 'Guide', topic: 'Marketing Strategy', link: 'https://drive.google.com/file/d/17OE9Ocp4-1WkogBV9cgbODbDJh3cg75E/view?usp=drive_link' },
      { title: 'The Data Is Already in the Stadium', type: 'Article', topic: 'Marketing Strategy', link: 'https://drive.google.com/file/d/1JoV2ce3DcIuaaFGC6P4aWm76hiC-IiJj/view?usp=drive_link' },
      { title: 'The Prospecting Problem Nobody Wants to Admit', type: 'Article', topic: 'Marketing Strategy', link: 'https://drive.google.com/file/d/1ctFTDmgkxhZETlKts_G7ZpU3KjAAkxvn/view?usp=drive_link' },
    ],
  },
  {
    topic: 'Sales Strategy',
    items: [
      { title: 'How to Unlock New Growth Verticals in Mature Companies', type: 'Article', topic: 'Sales Strategy', link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link' },
      { title: 'Why Most GTM Strategies Fail Post-Series C', type: 'Article', topic: 'Sales Strategy', link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link' },
      { title: 'State of Real Estate Prospecting', type: 'Guide', topic: 'Sales Strategy', link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link' },
    ],
  },
  {
    topic: 'Operations & Leadership',
    items: [
      { title: 'The Architecture of Luxury Hotel Opening: A Practitioner’s Playbook for Systems, People and Sequence', type: 'Playbook', topic: 'Operations', link: 'https://drive.google.com/file/d/1dkeh3c4sxKWCw7aOYOXpGbOJB9CPxJEj/view?usp=sharing' },
      { title: 'Cross-Functional Leadership: Why the Best Operators Are Translators', type: 'E-Book', topic: 'Leadership', link: 'https://drive.google.com/file/d/1PC-FKhF8O684POd64LPEMKVkMUjP-H1B/view?usp=drive_link' },
      { title: 'The Noise Is Real', type: 'E-Book', topic: 'Leadership', link: 'https://drive.google.com/file/d/1JCuKrMAria-dvPeLp_Urc47NuAj8MK8Q/view?usp=drive_link' },
    ],
  },
]
