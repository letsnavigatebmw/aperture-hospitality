import Link from 'next/link'

interface InsightCard {
  title: string
  type: 'Article' | 'Guide' | 'E-Book' | 'Playbook'
  link: string
}

const ContentGrid = ({ items }: { items: InsightCard[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
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

  const lessonsInLeadership = [
    {
      title: 'The Noise is Real',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1JCuKrMAria-dvPeLp_Urc47NuAj8MK8Q/view?usp=drive_link',
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
            I write on building businesses at scale, commercial strategy, and leadership. Here's what I've learned.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* Commercial Strategy */}
        <div className="mb-20">
          <h3 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
            Commercial Strategy
          </h3>
          <ContentGrid items={commercialStrategy} />
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
