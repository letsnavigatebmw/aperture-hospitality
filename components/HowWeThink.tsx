export default function HowWeThink() {
  const principles = [
    {
      number: '01',
      title: 'Connectivity Is The Advantage',
      keyPoints: ['Most operators see their domain in isolation. We connect the dots across ', 'revenue, operations, and strategy', '. The advantage is never in one thing. It\'s in seeing how everything fits.'],
    },
    {
      number: '02',
      title: 'Alignment Creates Scale',
      keyPoints: ['You can\'t scale misalignment. Every function needs to understand the same mission. ', 'Unit economics, go-to-market, operations', ' — they only compound when they pull in the same direction.'],
    },
    {
      number: '03',
      title: 'Results Over Storytelling',
      keyPoints: ['We optimize for what actually works, not what looks good in a deck. ', 'Data over narrative. Efficiency over elegance. ', 'Results beat rhetoric every time.'],
    },
  ]

  return (
    <section id="how-we-think" className="border-b border-rule">
      <div className="container-max py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label">Operating Philosophy</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            How We <em className="italic">Think</em>.
          </h2>
          <p className="text-lg leading-relaxed text-muted max-w-2xl">
            Three principles that guide how we approach business, leadership, and creating lasting impact for our clients.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* 3-Column Grid */}
        <div className="grid md:grid-cols-3 gap-0 mb-12">
          {principles.map((principle, index) => (
            <div key={index} className="p-0 md:pr-8 md:pb-6 mb-8 md:mb-0 md:border-r border-rule md:last:border-r-0">
              {/* Number */}
              <p className="text-xs font-medium tracking-widest uppercase text-muted mb-4">
                {principle.number}
              </p>

              {/* Title */}
              <h3 className="font-display text-2xl md:text-xl font-normal text-ink mb-6 leading-tight">
                {principle.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-muted">
                {principle.keyPoints[0]}
                <span className="font-medium text-ink">{principle.keyPoints[1]}</span>
                {principle.keyPoints[2]}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* Quote & CTA */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8">
          <p className="text-muted italic text-base max-w-2xl">
            "Our experience has largely been about taking complex, multi-functional platforms and aligning product, marketing, and monetization into a cohesive growth engine."
          </p>
          <a
            href="/contact"
            className="text-brass font-medium uppercase tracking-wider text-xs hover:text-brass-dim transition-colors flex-shrink-0"
          >
            Let's talk →
          </a>
        </div>
      </div>
    </section>
  )
}
