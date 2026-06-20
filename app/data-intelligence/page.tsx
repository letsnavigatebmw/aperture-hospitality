import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export default function DataIntelligencePage() {
  return (
    <>
      <Nav />
      
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">Data & Intelligence</div>
          
          <h1 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
            Intelligence <em className="italic">Driven</em>
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
