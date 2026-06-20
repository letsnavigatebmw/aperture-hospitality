export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Brandon has a unique ability to connect strategy with execution. During our growth initiatives, he consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion while maintaining a strong focus on agent success. His combination of commercial acumen, relationship-building, and operational discipline makes him an invaluable partner.',
      author: 'Leadership Team',
      title: 'Voyage Real Estate',
    },
    {
      quote: 'Working with Brandon felt like having a true strategic partner rather than an outside advisor. He quickly understood our business, challenged our assumptions in the right ways, and helped translate complex growth objectives into practical, measurable actions. His ability to bridge data, marketing, and business development is exceptional.',
      author: 'Executive Team',
      title: 'Foto Comercio',
    },
    {
      quote: 'Brandon brings a rare blend of luxury brand expertise, commercial leadership, and authentic relationship-building. He understands how to create meaningful customer connections while never losing sight of revenue and operational performance. His strategic thinking and professionalism consistently elevate every project he touches.',
      author: 'Leadership Team',
      title: 'Beverly Spirits',
    },
  ]

  return (
    <section id="testimonials" className="border-b border-rule">
      <div className="container-max py-16 md:py-24">
        {/* Header */}
        <div className="mb-12">
          <div className="section-label">What Clients Say</div>
          <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            Trusted by Leaders <em className="italic">in Hospitality</em>
          </h2>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-rule mb-12" />

        {/* Testimonials Horizontal Scroll */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex gap-8 pb-4 min-w-max md:min-w-full">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:w-1/3 space-y-6 p-8 border border-rule rounded-lg bg-parchment-dark hover:border-brass transition-all"
              >
                {/* Quote */}
                <blockquote className="text-base leading-relaxed text-muted italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-rule space-y-1">
                  <p className="font-medium text-ink">
                    {testimonial.author}
                  </p>
                  <p className="text-xs tracking-wide uppercase text-muted">
                    {testimonial.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
