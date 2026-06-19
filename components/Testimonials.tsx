export default function Testimonials() {
  const testimonials = [
    {
      quote: '[Client quote about working with Aperture]',
      author: 'Client Name',
      title: 'Title / Company',
    },
    {
      quote: '[Client quote about working with Aperture]',
      author: 'Client Name',
      title: 'Title / Company',
    },
    {
      quote: '[Client quote about working with Aperture]',
      author: 'Client Name',
      title: 'Title / Company',
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
