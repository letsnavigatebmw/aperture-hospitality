import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Insights from '@/components/Insights'
import HowWeThink from '@/components/HowWeThink'
import WhereWeFocused from '@/components/WhereWeFocused'
import AboutFounder from '@/components/AboutFounder'
import PodcastsMedia from '@/components/PodcastsMedia'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Nav />
      
      {/* HERO */}
      <div className="border-b border-rule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {/* LEFT: Content Panel with Logo, Headline, Copy, CTAs */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: 'clamp(2rem, 4vw, 3rem)',
            paddingBottom: 'clamp(2rem, 4vw, 3rem)',
            paddingLeft: 'clamp(1.5rem, 4vw, 4rem)',
            paddingRight: 'clamp(1.5rem, 4vw, 4rem)',
            background: '#F0EDE6',
            minHeight: 'auto',
            order: 1
          }}>

            {/* Logo lockup */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'clamp(0.75rem, 2vw, 1.25rem)',
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}>

              {/* Arc mark SVG */}
              <svg width="clamp(36, 10vw, 48)" height="clamp(36, 10vw, 48)" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
                <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>

              {/* Vertical rule */}
              <div style={{
                width: '1px',
                height: 'clamp(40px, 10vw, 52px)',
                background: '#D4CFC6',
                flexShrink: 0
              }}></div>

              {/* Wordmark */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 'clamp(4px, 1vw, 6px)'
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.875rem, 2.5vw, 1.375rem)',
                  fontWeight: 300,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: '#1C1A17',
                  lineHeight: 1
                }}>APERTURE</span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: 'clamp(0.4rem, 1vw, 0.5625rem)',
                  fontWeight: 400,
                  letterSpacing: '0.32em',
                  textTransform: 'uppercase',
                  color: '#6B6760',
                  lineHeight: 1
                }}>HOSPITALITY</span>
              </div>

            </div>

            {/* Thin rule below lockup */}
            <div style={{
              width: '100%',
              maxWidth: '480px',
              height: '1px',
              background: '#D4CFC6',
              marginBottom: 'clamp(1.5rem, 3vw, 2.5rem)'
            }}></div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#1C1A17',
              marginBottom: 'clamp(1rem, 3vw, 2rem)'
            }}>
              Results, not a <em style={{ fontStyle: 'italic', color: '#B8924A' }}>deck.</em>
            </h1>

            {/* Body copy */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              maxWidth: '44ch',
              marginBottom: 'clamp(0.75rem, 2vw, 1.25rem)'
            }}>
              Founder & CEO of Aperture Hospitality, advising brands across real estate, luxury travel, and hospitality on the marketing, sales, and operations decisions that unlock value.
            </p>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(0.9375rem, 2vw, 1.0625rem)',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              maxWidth: '44ch',
              marginBottom: 0
            }}>
              20+ years driving growth and transformation across consumer brands, hospitality, and technology platforms. Previously led commercial and operating roles at Sonder and Lacure.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'clamp(0.5rem, 1vw, 0.75rem)',
              marginTop: 'clamp(1.5rem, 3vw, 2.5rem)',
              maxWidth: '480px',
              width: '100%'
            }}>
              <Link href="/contact" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                background: '#1C1A17',
                color: '#F0EDE6',
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.625rem, 1.5vw, 0.6875rem)',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}>LET'S TALK</Link>
              <Link href="/about" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 'clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2rem)',
                background: 'transparent',
                color: '#1C1A17',
                border: '1px solid #1C1A17',
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(0.625rem, 1.5vw, 0.6875rem)',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}>LEARN MORE</Link>
            </div>

          </div>

          {/* RIGHT: Headshot */}
          <div className="h-64 sm:h-80 md:h-[600px] lg:h-screen order-2 md:order-2 overflow-hidden bg-parchment">
            <img
              src="/brandon-headshot.jpg"
              alt="Brandon Weaver"
              className="w-full h-full object-cover"
            />
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
                  Luxury Portfolio & Commercial Strategy
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
                  VP, Commercial Strategy
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
                  Commercial Roles, Appliances Division
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

      {/* INSIGHTS */}
      <Insights />

      {/* HOW WE THINK */}
      <HowWeThink />

      {/* ABOUT THE FOUNDER */}
      <AboutFounder />

      {/* WHERE WE'RE FOCUSED */}
      <WhereWeFocused />

      {/* PODCASTS & MEDIA */}
      <PodcastsMedia />

      {/* CONTACT CTA */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="max-w-3xl">
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
              Ready to work <em className="italic">together?</em>
            </h2>
            <p className="text-lg leading-relaxed text-muted mb-8 max-w-2xl">
              Let's talk about your business, your challenges, and how Aperture can help unlock the next phase of growth.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center px-8 py-4 bg-ink text-parchment font-medium uppercase tracking-wider text-sm hover:bg-muted transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
