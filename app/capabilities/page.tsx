import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function CapabilitiesPage() {
  return (
    <>
      <Nav />
      
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">Capabilities</div>
          
          <h1 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            What We <em className="italic">Offer</em>
          </h1>
          
          <div className="w-full h-px bg-rule my-12" />

          {/* Content placeholder */}
          <div className="max-w-3xl">
            <p className="text-lg leading-relaxed text-muted">
              Content coming soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
