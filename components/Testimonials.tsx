export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Brandon has a unique ability to connect strategy with execution. During our growth initiatives, he consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion while maintaining a strong focus on agent success. His combination of commercial acumen, relationship-building, and operational discipline makes him an invaluable partner.',
      name: 'Ari Afshar',
      position: 'Founder',
      company: 'Voyage Real Estate',
      website: 'www.voyagerealestate.com',
      link: 'https://www.voyagerealestate.com',
    },
    {
      quote: 'Working with Brandon felt like having a true strategic partner rather than an outside advisor. He quickly understood our business, challenged our assumptions in the right ways, and helped translate complex growth objectives into practical, measurable actions. His ability to bridge data, marketing, and business development is exceptional.',
      name: 'Michael Silver',
      position: 'CEO',
      company: 'Foto Comercio',
      website: 'www.fotocomercio.com',
      link: 'https://www.fotocomercio.com/',
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

        {/* Testimonials Grid */}
        <div className="w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="space-y-6 p-8 border border-rule rounded-lg bg-parchment-dark hover:border-brass transition-all flex flex-col"
              >
                {/* Quote */}
                <blockquote className="text-base leading-relaxed text-muted italic flex-grow" style={{ overflow: 'visible' }}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-rule space-y-1 flex-shrink-0">
                  <p className="font-medium text-ink text-sm">
                    {testimonial.name}, {testimonial.position}
                  </p>
                  <p className="text-xs text-muted">
                    {testimonial.company}
                  </p>
                  {testimonial.link ? (
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="text-xs text-brass hover:text-brass-dim transition-colors inline-block font-medium">
                      {testimonial.website}
                    </a>
                  ) : null}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
