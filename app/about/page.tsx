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
              
              <h1 className="font-display text-4xl md:text-5xl font-light leading-tight mb-2 text-ink whitespace-nowrap">
                Brandon M. Weaver
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

              <div className="mt-12 pt-8 border-t border-rule">
                <div className="space-y-4">
                  <div>
                    <p className="text-sm text-muted">
                      <a href="https://www.brandonmweaver.com" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-brass-dim transition-colors font-medium">
                        Want to Learn More About Brandon?
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted">
                      <a href="https://drive.google.com/file/d/1C4ksHla5bttjS9S_on_dwylaBkkfqSLp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-brass-dim transition-colors font-medium">
                        Professional Bio
                      </a>
                    </p>
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

      {/* OPERATING MODEL & STATS */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-16">
            {/* Left: Operating Model Design */}
            <div>
              <h3 className="font-display text-2xl font-normal text-ink mb-4">
                Operating Model Design
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Re-architected sales organizations, supply portfolios, and cross-functional workflows to align inventory with demand and improve execution.
              </p>
            </div>

            {/* Right: Team Building */}
            <div>
              <h3 className="font-display text-2xl font-normal text-ink mb-4">
                Team Building
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Led organizations from 20 to 65 people across Sales, Marketing, Operations, and Client Services. Recognized for sales leadership and performance management.
              </p>
            </div>
          </div>

          {/* Operating Philosophy */}
          <div className="mb-16 p-8 border border-rule rounded-sm">
            <p className="font-display text-base font-light italic text-ink leading-relaxed">
              I operate at the intersection of revenue, marketing, and product—ensuring strategy translates into execution and measurable growth. My focus: aligning product, go-to-market, and unit economics to build defensible revenue growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 gap-px border border-rule mb-8">
            {/* Stat 1 */}
            <div className="p-8 border-r border-b border-rule md:border-b-0">
              <div className="font-display text-4xl font-light text-brass mb-2">8+</div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted">
                B2C & B2B Brands Launched & Scaled
              </p>
            </div>

            {/* Stat 2 */}
            <div className="p-8 border-b border-rule md:border-b-0">
              <div className="font-display text-4xl font-light text-brass mb-2">$10M+</div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted">
                Capital Raised Across Ventures
              </p>
            </div>

            {/* Stat 3 */}
            <div className="p-8 border-r border-rule md:border-r-0">
              <div className="font-display text-4xl font-light text-brass mb-2">20+</div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted">
                Years Working Across FMCG, Hospitality, Real Estate, Finance and Technology
              </p>
            </div>

            {/* Stat 4 */}
            <div className="p-8">
              <div className="font-display text-4xl font-light text-brass mb-2">$750M+</div>
              <p className="text-xs font-medium tracking-widest uppercase text-muted">
                P&L Management
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div className="text-center p-8 border border-rule rounded-sm">
            <p className="font-display text-xl font-light text-ink">
              Experience Forged Across Industry. A Perspective Built For What's Next.
            </p>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR */}
      <section className="border-b border-rule">
        <div className="container-max py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="text-xs font-normal tracking-wide uppercase text-muted md:flex-shrink-0 max-w-xs">
              Brandon Weaver has led commercial and operating teams at
            </p>
            <div className="hidden md:block w-px h-10 bg-rule flex-shrink-0" />
            <div className="flex flex-col md:flex-row gap-8 flex-wrap">
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Diageo</h3>
                <p className="text-xs tracking-tight text-muted">
                  Marketing Leadership, Reserve Portfolio
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Lacure</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Commercial Officer · 65-person org
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Sonder</h3>
                <p className="text-xs tracking-tight text-muted">
                  Regional General Manager
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Bonotel Exclusive Travel</h3>
                <p className="text-xs tracking-tight text-muted">
                  Executive, Commercial & Operations
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">General Electric</h3>
                <p className="text-xs tracking-tight text-muted">
                  Sales Leadership, Consumer Finance
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Bacardi</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Marketing Officer
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Stillhouse Spirits</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Marketing Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
