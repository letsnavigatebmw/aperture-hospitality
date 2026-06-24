import { Metadata } from 'next'
import Link from 'next/link'
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
          <div className="mb-12">
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1rem', color: '#F0EDE6' }}>
              What I <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Do</em>
            </h2>
            <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', maxWidth: '600px' }}>
              The core competencies that drive growth, operational excellence, and sustainable value creation.
            </p>
          </div>

          {/* 3-column + 2-column Competencies Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '3rem', marginBottom: '4rem' }}>
            {/* P&L Management */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>
                P&L Management
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>
                Full P&L ownership across pricing strategy, unit economics, and financial modeling. Reduced data enrichment costs by 25% through vendor negotiation and demand-based optimization.
              </p>
            </div>

            {/* Go-to-Market Strategy */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>
                Go-to-Market Strategy
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>
                GTM execution, demand generation, and sales leadership. Built Compass partnership driving +75% trial participation and 90% trial-to-paid conversion.
              </p>
            </div>

            {/* Operating Model Design */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>
                Operating Model Design
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>
                Re-architected sales organizations, supply portfolios, and cross-functional workflows to align inventory with demand and improve execution.
              </p>
            </div>

            {/* Team Building */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>
                Team Building
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>
                Led organizations from 20 to 65 people across Sales, Marketing, Operations, and Client Services. Recognized for sales leadership and performance management.
              </p>
            </div>

            {/* Data Strategy */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>
                Data Strategy
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>
                Architect data-driven business models by integrating customer, property, behavioral, and market intelligence into scalable operating systems. Leveraged analytics, automation, and predictive insights to improve targeting, optimize performance, and uncover new revenue opportunities.
              </p>
            </div>

            {/* Leadership Coaching */}
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>
                Leadership Coaching
              </h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>
                Coached executives and commercial teams through growth, restructuring, and business transformation. Built leadership capabilities, performance frameworks, and accountability systems that improved execution, strengthened culture, and accelerated individual and organizational performance.
              </p>
            </div>
          </div>

          {/* Operating Philosophy - Centered Quote */}
          <div style={{ marginBottom: '4rem', padding: '3rem', borderTop: '2px solid #B8924A', borderBottom: '2px solid #B8924A', textAlign: 'center' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.8, color: '#F0EDE6' }}>
              I operate at the intersection of revenue, marketing, and product—ensuring strategy translates into execution and measurable growth. My focus: aligning product, go-to-market, and unit economics to build defensible revenue growth.
            </p>
          </div>

          {/* Stats Grid - 2x2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0', border: '2px solid #B8924A', marginBottom: '3rem' }}>
            {/* Stat 1: 8+ */}
            <div style={{ padding: '3rem', borderRight: '2px solid #B8924A', borderBottom: '2px solid #B8924A' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: '#B8924A', marginBottom: '1rem' }}>
                8+
              </div>
              <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                B2C & B2B Brands Launched & Scaled
              </p>
            </div>

            {/* Stat 2: $10M+ */}
            <div style={{ padding: '3rem', borderBottom: '2px solid #B8924A' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: '#B8924A', marginBottom: '1rem' }}>
                $10M+
              </div>
              <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                Capital Raised Across Ventures
              </p>
            </div>

            {/* Stat 3: 20+ */}
            <div style={{ padding: '3rem', borderRight: '2px solid #B8924A' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: '#B8924A', marginBottom: '1rem' }}>
                20+
              </div>
              <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                Years Working Across FMCG, Hospitality, Real Estate, Finance and Technology
              </p>
            </div>

            {/* Stat 4: $750M+ */}
            <div style={{ padding: '3rem' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3.5rem', fontWeight: 300, color: '#B8924A', marginBottom: '1rem' }}>
                $750M+
              </div>
              <p style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#F0EDE6' }}>
                P&L Management
              </p>
            </div>
          </div>

          {/* Closing Statement */}
          <div style={{ padding: '3rem', border: '2px solid #B8924A', textAlign: 'center' }}>
            <div style={{ fontSize: '2.5rem', color: '#B8924A', marginBottom: '1rem' }}>∞</div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.3 }}>
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
                Brandon Weaver Led Commercial &amp; Operating Teams At
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

      {/* FINAL CTA */}
      <section style={{ background: '#1C1A17', padding: '7rem clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: '0.67rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              Ready When You Are
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.05, marginBottom: '1.25rem' }}>
              Let us Talk<br/>About Your<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Business.</em>
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.42)', lineHeight: 1.8, fontWeight: 300, marginBottom: '2.5rem' }}>
              Brandon reviews every submission personally and responds within one business day. No forms routed to a sales team. No discovery calls that are really demos. A direct conversation about your business and what would actually move it forward.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'rgba(240,237,230,0.06)' }}>
            {[
              { badge: 'Direct', title: 'Start a Conversation', desc: 'Tell Brandon where you are and what you are working on. He responds personally within one business day.', link: '/contact' },
              { badge: 'Learn More', title: 'Explore Capabilities', desc: 'See the full service breakdown and the acquisition engine framework in detail.', link: '/capabilities' },
              { badge: 'Methodology', title: 'How We Work', desc: 'Understand the approach before committing to anything. Diagnosis always comes first.', link: '/how-we-work' }
            ].map((cta, i) => (
              <Link key={i} href={cta.link} style={{ background: '#1C1A17', padding: '1.75rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '2rem', transition: 'background 0.2s', textDecoration: 'none', cursor: 'pointer' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#242219')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
                <div>
                  <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.3rem' }}>{cta.badge}</div>
                  <h4 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.05rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.2rem' }}>{cta.title}</h4>
                  <p style={{ fontSize: '0.75rem', color: 'rgba(240,237,230,0.28)', margin: 0, fontWeight: 300, lineHeight: 1.4 }}>{cta.desc}</p>
                </div>
                <div style={{ width: '34px', height: '34px', borderRadius: '50%', border: '1px solid rgba(240,237,230,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'border-color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(184,146,74,0.4)')} onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(240,237,230,0.1)')}>
                  <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="rgba(240,237,230,0.25)" strokeWidth="1.5" style={{ transition: 'stroke 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.stroke = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.stroke = 'rgba(240,237,230,0.25)')}>
                    <path d="M2 7h10M8 3l4 4-4 4"/>
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-about" />

      <Footer />
    </>
  )
}
