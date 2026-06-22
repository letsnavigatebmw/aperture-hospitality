export default function Testimonials() {
  const testimonials = [
    {
      quote: 'Brandon has a unique ability to connect strategy with execution. During our growth initiatives, he consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion while maintaining a strong focus on agent success. His combination of commercial acumen, relationship-building, and operational discipline makes him an invaluable partner.',
      author: 'Voyage Real Estate',
      title: 'www.voyagerealestate.com',
      link: 'https://www.voyagerealestate.com',
    },
    {
      quote: 'Working with Brandon felt like having a true strategic partner rather than an outside advisor. He quickly understood our business, challenged our assumptions in the right ways, and helped translate complex growth objectives into practical, measurable actions. His ability to bridge data, marketing, and business development is exceptional.',
      author: 'Michael Silver',
      title: 'CEO, Foto Comercio',
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

        {/* Testimonials Horizontal Scroll */}
        <div className="w-full overflow-hidden">
          <div className="flex gap-8 pb-4 md:pb-0 w-full items-stretch justify-center md:justify-start">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="flex-shrink-0 w-full md:flex-1 space-y-6 p-8 border border-rule rounded-lg bg-parchment-dark hover:border-brass transition-all flex flex-col"
              >
                {/* Quote */}
                <blockquote className="text-base leading-relaxed text-muted italic flex-grow" style={{ overflow: 'visible' }}>
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-rule space-y-1 flex-shrink-0">
                  <p className="font-medium text-ink">
                    {testimonial.author}
                  </p>
                  {testimonial.link ? (
                    <a href={testimonial.link} target="_blank" rel="noopener noreferrer" className="text-xs tracking-wide uppercase text-brass hover:text-brass-dim transition-colors inline-block">
                      {testimonial.title}
                    </a>
                  ) : (
                    <p className="text-xs tracking-wide uppercase text-muted">
                      {testimonial.title}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
