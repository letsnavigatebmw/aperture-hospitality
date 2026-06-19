'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AISolutions from '@/components/AISolutions'
import IntakeForm from '@/components/IntakeForm'


import WhereWeFocused from '@/components/WhereWeFocused'


import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Nav />
      
      <AISolutions />
      
      {/* HERO */}
      <div className="border-b border-rule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ minHeight: '600px' }}>
          {/* LEFT: Headshot */}
          <div style={{
            order: 1,
            overflow: 'hidden',
            background: '#f5f5f5',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minHeight: '600px'
          }}>
            <img
              src="/brandon-headshot.jpg"
              alt="Brandon Weaver"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />
          </div>

          {/* RIGHT: Content */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingLeft: 'clamp(2rem, 6vw, 4rem)',
            paddingRight: 'clamp(2rem, 6vw, 4rem)',
            paddingTop: 'clamp(3rem, 5vw, 4rem)',
            paddingBottom: 'clamp(3rem, 5vw, 4rem)',
            background: '#F0EDE6',
            order: 2,
            minHeight: '600px'
          }}>

            {/* Aperture Logo */}
            <div style={{
              marginBottom: '2rem',
              maxWidth: '280px'
            }}>
              <img 
                src="/aperture-logo.jpg" 
                alt="Aperture Hospitality" 
                style={{
                  width: '100%',
                  height: 'auto',
                  display: 'block'
                }}
              />
            </div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 300,
              lineHeight: 1.15,
              letterSpacing: '-0.01em',
              color: '#1C1A17',
              margin: '0 0 1.5rem 0'
            }}>
              Real Results, Not a <span style={{ color: '#B8924A' }}>Deck!</span>
            </h1>

            {/* Body copy */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              marginBottom: '1rem',
              margin: '0 0 1rem 0',
              maxWidth: '480px'
            }}>
              Founder & CEO of Aperture Hospitality, advising brands across real estate, luxury travel, and hospitality on the marketing, sales, and operations decisions that unlock value.
            </p>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.9375rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              marginBottom: '2rem',
              margin: '0 0 2rem 0',
              maxWidth: '480px'
            }}>
              20+ years driving growth and transformation across consumer brands, hospitality, and technology platforms. Previously led commercial strategy at Diageo, Sonder, and Lacuré.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              maxWidth: '360px'
            }}>
              <Link href="/contact" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 1.5rem',
                background: '#1C1A17',
                color: '#F0EDE6',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#2a2520'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#1C1A17'
              }}>
                Let's Talk
              </Link>
              <Link href="/about" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 1.5rem',
                background: 'transparent',
                color: '#1C1A17',
                border: '1px solid #1C1A17',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#1C1A17'
                ;(e.target as HTMLElement).style.color = '#F0EDE6'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = 'transparent'
                ;(e.target as HTMLElement).style.color = '#1C1A17'
              }}>
                Learn More
              </Link>
            </div>

          </div>
        </div>
      </div>

      {/* CREDIBILITY BAR */}
      <div className="border-b border-rule">
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
      </div>

      {/* WHAT WE DO (3 Pillars) */}
      <div className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="mb-12">
            <div className="section-label">Core Capabilities</div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
              What We <em className="italic">Do</em>
            </h2>
          </div>

          <div className="w-full h-px bg-rule mb-12" />

          <div className="grid md:grid-cols-3 gap-12">
            {/* Pillar 1 */}
            <div>
              <h3 className="font-display text-2xl font-normal text-ink mb-4">
                Commercial Strategy
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Revenue optimization, unit economics, pricing, and margin architecture. We help brands think differently about how they create value.
              </p>
            </div>

            {/* Pillar 2 */}
            <div>
              <h3 className="font-display text-2xl font-normal text-ink mb-4">
                Sales & Go-to-Market
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Building repeatable, scalable sales processes and distribution strategies. From acquisition to retention to expansion.
              </p>
            </div>

            {/* Pillar 3 */}
            <div>
              <h3 className="font-display text-2xl font-normal text-ink mb-4">
                Operations & Leadership
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                Organizational design, team scaling, process optimization, and the cross-functional alignment that drives execution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* ENGAGEMENTS */}
      <div className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="mb-12">
            <div className="section-label">Selected Engagements</div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
              Who We've <em className="italic">Worked With</em>
            </h2>
          </div>

          <div className="w-full h-px bg-rule mb-12" />

          <div className="grid md:grid-cols-2 gap-12">
            {/* Engagement 1 */}
            <div>
              <h3 className="font-display text-xl font-medium text-ink mb-2">Voyage</h3>
              <p className="text-xs tracking-tight text-muted mb-3">Luxury travel platform</p>
              <p className="text-muted leading-relaxed">
                Commercial strategy and revenue optimization for high-net-worth travel bookings.
              </p>
            </div>

            {/* Engagement 2 */}
            <div>
              <h3 className="font-display text-xl font-medium text-ink mb-2">Wilbur Labs</h3>
              <p className="text-xs tracking-tight text-muted mb-3">Hospitality software</p>
              <p className="text-muted leading-relaxed">
                GTM strategy and sales process design for enterprise hospitality clients.
              </p>
            </div>

            {/* Engagement 3 */}
            <div>
              <h3 className="font-display text-xl font-medium text-ink mb-2">Waratah</h3>
              <p className="text-xs tracking-tight text-muted mb-3">Premium accommodations</p>
              <p className="text-muted leading-relaxed">
                Strategic pricing and revenue management across luxury properties.
              </p>
            </div>

            {/* Engagement 4 */}
            <div>
              <h3 className="font-display text-xl font-medium text-ink mb-2">Compass</h3>
              <p className="text-xs tracking-tight text-muted mb-3">Real estate platform</p>
              <p className="text-muted leading-relaxed">
                Commercial acceleration and market expansion strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* WHERE WE'RE FOCUSED */}
      <WhereWeFocused />

      {/* CONTACT FORM */}
      <IntakeForm />

      <Footer />
    </>
  )
}
