import Link from 'next/link'

interface InsightCard {
  title: string
  type: 'Article' | 'Guide' | 'E-Book' | 'Playbook'
  link: string
}

const ContentGrid = ({ items }: { items: InsightCard[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
    {items.map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-rule rounded-lg p-6 bg-parchment-dark hover:border-brass hover:bg-parchment transition-all"
      >
        <p className="text-brass font-bold uppercase tracking-widest text-xs mb-4">
          {item.type}
        </p>
        <h3 className="text-lg font-display text-ink mb-6 leading-tight">
          {item.title}
        </h3>
        <p className="text-brass font-bold uppercase tracking-widest text-xs">
          Read →
        </p>
      </a>
    ))}
  </div>
)

export default function Insights() {
  const salesStrategy = [
    {
      title: 'How to Unlock New Growth Verticals in Mature Companies',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link',
    },
    {
      title: 'Why Most GTM Strategies Fail Post-Series C',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link',
    },
    {
      title: 'State of Real Estate Prospecting',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link',
    },
  ]

  const commercialStrategy = [
    {
      title: 'The Authorization Illusion',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link',
    },
    {
      title: 'Distribution-First Strategy',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link',
    },
    {
      title: "Travel's Overlooked and Undervalued Channel Delivers Outsized Value",
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link',
    },
  ]

  const lessonsInLuxury = [
    {
      title: 'Feeling is the New Luxury',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1eyd0vxq3D8xr8phIw2-w71P0EX7m5eVQ/view?usp=drive_link',
    },
    {
      title: "Don't Chase Them, Make Them Earn It!",
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1Dmr3uYRw38DMwO8oWA7j3FhN1AUU_AWn/view?usp=drive_link',
    },
    {
      title: 'Brand-to-Demand: How Luxury Brand Thinking Makes Performance Marketing Better',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/1pLur9KDw4xYY239aYOrxdXjsAd6iYjma/view?usp=drive_link',
    },
  ]

  const marketingStrategy = [
    {
      title: 'The Data is Already in the Stadium',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1JoV2ce3DcIuaaFGC6P4aWm76hiC-IiJj/view?usp=drive_link',
    },
    {
      title: 'The Prospecting Problem Nobody Wants to Admit',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1ctFTDmgkxhZETlKts_G7ZpU3KjAAkxvn/view?usp=drive_link',
    },
    {
      title: 'The Gap Between Marketing and Revenue—And How to Fix It',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1rZHQaXVEpHxITLhQoI2gcFLmu6g_vZ2W/view?usp=drive_link',
    },
    {
      title: 'The Death of the Funnel: Why Modern B2C Marketing Needs a New Model',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/17OE9Ocp4-1WkogBV9cgbODbDJh3cg75E/view?usp=drive_link',
    },
    {
      title: 'What Spirits & Hospitality Taught Me About Emotional Brand Building at Scale',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/1YfnbifrFnvxLNGymwz_0AYF-VUF65cME/view?usp=drive_link',
    },
    {
      title: 'Multi-Channel Campaign Architecture — Lessons from Diageo to Startups',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/19Gnygvl0Dc6rOQlN3W6VZko2NuwnLLa4/view?usp=drive_link',
    },
  ]

  const lessonsInLeadership = [
    {
      title: 'The Noise is Real',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1JCuKrMAria-dvPeLp_Urc47NuAj8MK8Q/view?usp=drive_link',
    },
    {
      title: 'Cross-Functional Leadership: Why the Best Operators Are Translators',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1PC-FKhF8O684POd64LPEMKVkMUjP-H1B/view?usp=drive_link',
    },
  ]

  return (
    <section id="insights" className="border-b border-rule">
      <div className="container-max py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label">Insights & Expertise</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            Thought <em className="italic">Leadership</em>
          </h2>
          <p className="text-lg leading-relaxed text-muted max-w-2xl">
            We write on building businesses at scale, commercial strategy, and leadership. Here's what we've learned.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* Sales Strategy */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
            Sales Strategy
          </h3>
          <ContentGrid items={salesStrategy} />
        </div>

        {/* Commercial Strategy */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
            Commercial Strategy
          </h3>
          <ContentGrid items={commercialStrategy} />
        </div>

        {/* Lessons in Luxury */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
            Lessons in <em className="italic">Luxury</em>
          </h3>
          <ContentGrid items={lessonsInLuxury} />
        </div>

        {/* Marketing Strategy */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
            Marketing Strategy
          </h3>
          <ContentGrid items={marketingStrategy} />
        </div>

        {/* Lessons in Leadership */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
            Lessons in <em className="italic">Leadership</em>
          </h3>
          <ContentGrid items={lessonsInLeadership} />
        </div>
      </div>
    </section>
  )
}
