export default function WhereWeFocused() {
  const focuses = [
    {
      title: 'Unlocking Value in Established Brands',
      description: 'We help hospitality and real estate brands identify the operating gaps that constrain performance, and design the structural moves that unlock hidden value and reposition for transformative growth.',
    },
    {
      title: 'Building Commercial Engines That Scale',
      description: 'We design and execute the go-to-market strategies, partnership models, and revenue architectures that turn positioning into repeatable, scalable pipeline. Alignment across sales, marketing, and operations compounds growth.',
    },
    {
      title: 'Guiding Operators Through Transformation',
      description: 'We support founders, operators, and investors through the complexities of organizational restructuring, team alignment, and operational excellence as companies scale beyond their initial model.',
    },
  ]

  return (
    <section id="where-we-focused" className="border-b border-rule">
      <div className="container-max py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label">Current Focus</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            Where We're <em className="italic">Focused</em>
          </h2>
          <p className="text-lg leading-relaxed text-muted max-w-2xl">
            What we're actively working on and learning. Not resting on past successes—building what's next for our clients.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* Focus Areas */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-12">
          {focuses.map((focus, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-display text-xl font-normal text-ink">
                {focus.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                {focus.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="border-t border-rule pt-8 flex flex-col gap-6">
          <p className="text-muted italic text-base max-w-2xl">
            If any of this resonates—or if you're working on something similar—let's talk.
          </p>
          <a
            href="/contact"
            className="text-brass font-medium uppercase tracking-wider text-xs hover:text-brass-dim transition-colors w-fit"
          >
            Start a conversation →
          </a>
        </div>
      </div>
    </section>
  )
}
