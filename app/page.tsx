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
        <div className="grid md:grid-cols-2 min-h-screen md:min-h-auto">
          {/* LEFT: Headshot */}
          <div className="h-64 md:h-auto order-2 md:order-1">
            <img
              src="/brandon-headshot.jpg"
              alt="Brandon Weaver"
              className="w-full h-full object-cover"
            />
          </div>

          {/* RIGHT: Content Panel */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: 'clamp(3rem, 6vw, 6rem)',
            paddingBottom: 'clamp(3rem, 6vw, 6rem)',
            paddingLeft: 'clamp(2.5rem, 5vw, 5rem)',
            paddingRight: 'clamp(2.5rem, 5vw, 5rem)',
            background: '#F0EDE6',
            minHeight: 'auto'
          }}>

            {/* Logo lockup */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}>

              {/* Arc mark SVG */}
              <svg width="48" height="48" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
                <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
                <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>

              {/* Vertical rule */}
              <div style={{
                width: '1px',
                height: '52px',
                background: '#D4CFC6',
                flexShrink: 0
              }}></div>

              {/* Wordmark */}
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '6px'
              }}>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '1.375rem',
                  fontWeight: 300,
                  letterSpacing: '0.26em',
                  textTransform: 'uppercase',
                  color: '#1C1A17',
                  lineHeight: 1
                }}>APERTURE</span>
                <span style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.5625rem',
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
              marginBottom: '2.5rem'
            }}></div>

            {/* Headline */}
            <h1 style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
              fontWeight: 300,
              lineHeight: 1.08,
              letterSpacing: '-0.01em',
              color: '#1C1A17',
              marginBottom: '2rem'
            }}>
              Results, not a <em style={{ fontStyle: 'italic', color: '#B8924A' }}>deck.</em>
            </h1>

            {/* Body copy */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
              fontWeight: 300,
              lineHeight: 1.75,
              color: '#6B6760',
              maxWidth: '44ch',
              marginBottom: '1.25rem'
            }}>
              Founder & CEO of Aperture Hospitality, advising brands across real estate, luxury travel, and hospitality on the marketing, sales, and operations decisions that unlock value.
            </p>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1.0625rem',
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
              gap: '0.75rem',
              marginTop: '2.5rem',
              maxWidth: '480px'
            }}>
              <Link href="/contact" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: '#1C1A17',
                color: '#F0EDE6',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}>LET'S TALK</Link>
              <Link href="/about" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1rem 2rem',
                background: 'transparent',
                color: '#1C1A17',
                border: '1px solid #1C1A17',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 500,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none'
              }}>LEARN MORE</Link>
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
                  Regional General Manager
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Bonotel Exclusive Travel</h3>
                <p className="text-xs tracking-tight text-muted">
                  Strategic Leadership
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">General Electric</h3>
                <p className="text-xs tracking-tight text-muted">
                  Commercial Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">What We Do</div>
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:border-r border-rule p-0 md:pr-8 md:py-6 mb-8 md:mb-0">
              <div className="text-xs font-medium tracking-widest uppercase text-brass mb-4">01</div>
              <h3 className="font-display text-2xl font-normal leading-tight mb-4 text-ink">
                Marketing &amp; Brand Strategy
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Positioning and go-to-market work for hospitality, real estate, and luxury brands looking to reposition or scale.
              </p>
            </div>
            <div className="md:border-r border-rule p-0 md:px-8 md:py-6 mb-8 md:mb-0">
              <div className="text-xs font-medium tracking-widest uppercase text-brass mb-4">02</div>
              <h3 className="font-display text-2xl font-normal leading-tight mb-4 text-ink">
                Sales &amp; Commercial Strategy
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Building the commercial engine — partnerships, channel strategy, and revenue structure — that turns positioning into pipeline.
              </p>
            </div>
            <div className="p-0 md:pl-8 md:py-6">
              <div className="text-xs font-medium tracking-widest uppercase text-brass mb-4">03</div>
              <h3 className="font-display text-2xl font-normal leading-tight mb-4 text-ink">
                Operations &amp; Value Creation
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Identifying the operating gaps that limit performance, and the structural moves that close them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* WORK / ENGAGEMENTS */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">Selected Engagements</div>
          <div className="space-y-0">
            {[
              { client: 'Voyage Real Estate (Compass)', scope: 'Growth Strategy & GTM', date: 'Nov 2023 – Aug 2024' },
              { client: 'Wilbur Labs', scope: 'Strategic Advisory, Luxury Villas GTM', date: 'Oct 2025 – Apr 2026' },
              { client: 'Waratah, Inc. — Morrison Hotel', scope: 'Due Diligence & Launch Strategy', date: 'Jul 2023 – TBD' },
              { client: 'The Runda Lab & WES Brands', scope: 'Strategic Advisory', date: 'TBD' },
              { client: 'Beverly Spirits', scope: 'Go-to-Market Strategy', date: 'May 2023 – Jun 2025' },
              { client: 'Foto Comercio', scope: 'Go-to-Market Strategy', date: 'May 2026 – Present' },
              { client: 'Iterum Labs', scope: 'Go-to-Market Strategy', date: 'May 2026 – Present' },
            ].map((eng, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-4 py-4 border-t border-rule md:items-baseline">
                <h3 className="font-display text-lg md:text-xl font-normal text-ink hover:text-brass transition-colors">
                  {eng.client}
                </h3>
                <p className="text-xs md:text-sm text-muted tracking-tight">
                  {eng.scope}
                </p>
                <p className="text-xs md:text-sm text-muted tracking-tight md:text-right">
                  {eng.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
      <div className="bg-ink">
        <div className="container-max py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-parchment max-w-2xl">
            Have an asset that isn't performing the way it <em className="italic">should?</em>
          </h2>
          <Link href="/contact" className="btn-primary !bg-parchment !text-ink flex-shrink-0">
            Let's talk
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
