import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'About | Aperture Hospitality',
  description: 'Brandon M. Weaver, founder and CEO of Aperture Hospitality. 20+ years in hospitality, luxury travel, and real estate operations.',
  openGraph: {
    title: 'About | Aperture Hospitality',
    description: 'Brandon M. Weaver, founder and CEO of Aperture Hospitality.',
  },
}

export default function About() {
  return (
    <>
      <Nav />
      
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">About</div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Left column */}
            <div>
              {/* Photo */}
              <div className="mb-8 overflow-hidden rounded-sm">
                <img 
                  src="/brandon-headshot.jpg" 
                  alt="Brandon M. Weaver" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl font-light leading-tight mb-2 text-ink">
                Brandon M.<br />Weaver
              </h1>
              <p className="text-xs font-medium tracking-widest uppercase text-brass mb-8">
                Founder &amp; CEO
              </p>
              
              <div className="mt-12 pt-8 border-t border-rule">
                <div className="space-y-6">
                  <div>
                    <p className="font-medium text-sm text-ink mb-1">Kellogg School of Management</p>
                    <p className="text-xs text-muted">MBA, Northwestern University</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-ink mb-1">Harvard Kennedy School</p>
                    <p className="text-xs text-muted">Master in Public Administration</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm text-ink mb-1">University of Southern California</p>
                    <p className="text-xs text-muted">B.A., Communication</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted">
              <p>
                Brandon Weaver is the Founder and CEO of Aperture Hospitality, a boutique consulting practice formed in 2021 to help hospitality, real estate, and luxury brands develop strategies that unlock value, spot new opportunity, and reposition for transformative growth.
              </p>
              <p>
                Before founding Aperture, Brandon held senior operating roles across hospitality and luxury travel. As Chief Commercial Officer at Lacure, he led a 65-person organization across Sales, Contracting, Marketing, and Client Service, operating a global portfolio of 1,500 luxury private homes and villas. He drove field sales strategy and re-architected the supply portfolio and operating workflows to reduce service failures and improve quality control across secondary and tertiary markets.
              </p>
              <p>
                Prior to Lacure, Brandon served as Regional General Manager at Sonder, where he helped lead one of the short-term rental industry's most closely watched expansions. He currently serves on the Board of Directors at WES Brands and The Runda Lab.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
