import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSection from '@/components/NewsletterSection'

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
          <div className="section-label">About The Founder</div>
          
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
                <div className="mt-8 space-y-4">
                  <p className="text-sm text-muted">
                    <a href="https://drive.google.com/file/d/1C4ksHla5bttjS9S_on_dwylaBkkfqSLp/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-brass-dim transition-colors font-medium">
                      Executive Bio →
                    </a>
                  </p>
                  <p className="text-sm text-muted">
                    <a href="https://www.brandonmweaver.com" target="_blank" rel="noopener noreferrer" className="text-brass hover:text-brass-dim transition-colors font-medium">
                      Learn more about Brandon M. Weaver →
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Right column */}
            <div className="space-y-6 text-sm md:text-base leading-relaxed text-muted">
              <h3 className="font-display text-2xl md:text-3xl font-light text-brass">Many Rooms, One Frequency</h3>
              
              <p>
                I've spent much of my life trying to answer a simple question: <strong style={{ fontWeight: 500 }}>How do you build something that truly matters?</strong>
              </p>

              <p>
                Growing up in Los Angeles, I was surrounded by people who had already achieved success. The expected path was fairly straightforward—medicine, education, or another respected profession. I chose a different route.
              </p>

              <p>
                That decision led me from <strong style={{ fontWeight: 500 }}>the University of Southern California's Annenberg School of Communication</strong> to <strong style={{ fontWeight: 500 }}>the Harvard Kennedy School</strong> and <strong style={{ fontWeight: 500 }}>Northwestern University's Kellogg School of Management</strong>. Each institution challenged me to think differently, but together they reinforced a belief that has shaped my career: <strong style={{ fontWeight: 500 }}>meaningful growth happens at the intersection of people, ideas, and opportunity.</strong>
              </p>

              <p>
                My career has taken me across industries, continents, and cultures. I've lived and worked throughout the United States, the United Kingdom, and Africa, experiencing firsthand that <strong style={{ fontWeight: 500 }}>commerce and community are not opposites—they're in constant negotiation.</strong> The best builders are fluent in both.
              </p>

              <p>
                From leading <strong style={{ fontWeight: 500 }}>Diageo's</strong> luxury portfolio vision across Africa to scaling and eventually selling a PE-backed hospitality platform, <strong style={{ fontWeight: 500 }}>I built a career at the intersection of connectivity, creativity, and opportunity. I didn't inherit a playbook. I wrote one.</strong>
              </p>

              <p>
                That same instinct brought me to real estate technology. Navigate wasn't a pivot. It was the logical conclusion of two decades spent watching an industry resist modernisation until someone forces the issue.
              </p>

              <p>
                But the thread running through all of it isn't the résumé. It's the relationships. I move through rooms differently, not as the loudest voice, but as the most connected one. <strong style={{ fontWeight: 500 }}>I build relationship capital the way others build financial capital: deliberately, generously, and with a long time horizon.</strong> The "plug" who knows someone for everything, and shares that access freely.
              </p>

              <p>
                In a world increasingly mediated by algorithms, my conviction is simple. <strong style={{ fontWeight: 500 }}>Success moves at the speed of connectivity.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT I DO - DARK SECTION */}
      <section style={{ background: '#1C1A17', color: '#F0EDE6' }} className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          {/* Header */}
          <div className="mb-16">
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '1rem', color: '#F0EDE6' }}>
              What I <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Do</em>
            </h2>
            <p style={{ fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', maxWidth: '600px' }}>
              The core competencies that drive growth, operational excellence, and sustainable value creation.
            </p>
          </div>

          {/* 2x2 Competencies Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginBottom: '4rem' }}>
            {/* P&L Management */}
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#F0EDE6', marginBottom: '1rem' }}>
                P&L Management
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
                Full P&L ownership across pricing strategy, unit economics, and financial modeling. Reduced data enrichment costs by 25% through vendor negotiation and demand-based optimization.
              </p>
            </div>

            {/* Go-to-Market Strategy */}
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#F0EDE6', marginBottom: '1rem' }}>
                Go-to-Market Strategy
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
                GTM execution, demand generation, and sales leadership. Built Compass partnership driving +75% trial participation and 90% trial-to-paid conversion.
              </p>
            </div>

            {/* Operating Model Design */}
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#F0EDE6', marginBottom: '1rem' }}>
                Operating Model Design
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
                Re-architected sales organizations, supply portfolios, and cross-functional workflows to align inventory with demand and improve execution.
              </p>
            </div>

            {/* Team Building */}
            <div>
              <h3 style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 600, color: '#F0EDE6', marginBottom: '1rem' }}>
                Team Building
              </h3>
              <p style={{ fontSize: '0.9rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
                Led organizations from 20 to 65 people across Sales, Marketing, Operations, and Client Services. Recognized for sales leadership and performance management.
              </p>
            </div>
          </div>

          {/* Operating Philosophy */}
          <div style={{ marginBottom: '4rem', padding: '2rem', borderTop: '1px solid #2e2b26', borderBottom: '1px solid #2e2b26' }}>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.8, color: '#F0EDE6' }}>
              I operate at the intersection of revenue, marketing, and product—ensuring strategy translates into execution and measurable growth. My focus: aligning product, go-to-market, and unit economics to build defensible revenue growth.
            </p>
          </div>

          {/* Stats Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', border: '1px solid #2e2b26', marginBottom: '3rem' }}>
            {/* Stat 1: 8+ */}
            <div style={{ padding: '2rem', borderRight: '1px solid #2e2b26', borderBottom: '1px solid #2e2b26' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#B8924A', marginBottom: '0.5rem' }}>
                8+
              </div>
              <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                B2C & B2B Brands Launched & Scaled
              </p>
            </div>

            {/* Stat 2: $10M+ */}
            <div style={{ padding: '2rem', borderBottom: '1px solid #2e2b26' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#B8924A', marginBottom: '0.5rem' }}>
                $10M+
              </div>
              <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                Capital Raised Across Ventures
              </p>
            </div>

            {/* Stat 3: 20+ */}
            <div style={{ padding: '2rem', borderRight: '1px solid #2e2b26' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#B8924A', marginBottom: '0.5rem' }}>
                20+
              </div>
              <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                Years Working Across FMCG, Hospitality, Real Estate, Finance and Technology
              </p>
            </div>

            {/* Stat 4: $750M+ */}
            <div style={{ padding: '2rem' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#B8924A', marginBottom: '0.5rem' }}>
                $750M+
              </div>
              <p style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                P&L Management
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div style={{ padding: '2rem', border: '1px solid #2e2b26', textAlign: 'center' }}>
            <div style={{ fontSize: '2rem', color: '#B8924A', marginBottom: '1rem' }}>∞</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, color: '#F0EDE6' }}>
              Experience Forged Across Industry, A Perspective Built For What's Next...
            </h3>
          </div>
        </div>
      </section>

      {/* CREDIBILITY BAR - 2 COLUMN LAYOUT */}
      <section className="border-b border-rule">
        <div className="container-max py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {/* Left column */}
            <div>
              <p className="text-sm md:text-base font-normal tracking-wide uppercase text-muted mb-4 font-medium">
                Brandon Weaver has led commercial and operating teams at
              </p>
              <div className="w-px h-8 bg-brass mb-6" />
              <p className="text-sm md:text-base leading-relaxed text-muted max-w-sm">
                Across luxury, hospitality, technology, and real estate, Brandon has driven revenue growth, launched new business units, managed $750M+ in P&L responsibility, and built teams from startup to scale-up operations.
              </p>
            </div>

            {/* Right column - Companies Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">Diageo</h3>
                <p className="text-xs tracking-tight text-muted">
                  Marketing Leadership, Reserve Portfolio
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">Lacure</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Commercial Officer · 65-person org
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">Sonder</h3>
                <p className="text-xs tracking-tight text-muted">
                  Regional General Manager
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">Bonotel Exclusive Travel</h3>
                <p className="text-xs tracking-tight text-muted">
                  Executive, Commercial & Operations
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">General Electric</h3>
                <p className="text-xs tracking-tight text-muted">
                  Sales Leadership, Consumer Finance
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">Bacardi</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Marketing Officer
                </p>
              </div>
              <div>
                <h3 className="font-display text-lg md:text-xl font-medium text-ink mb-1">Stillhouse Spirits</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Marketing Officer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-about" />

      <Footer />
    </>
  )
}
