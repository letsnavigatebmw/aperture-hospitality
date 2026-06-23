'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import AISolutions from '@/components/AISolutions'
import IntakeForm from '@/components/IntakeForm'
import WhereWeFocused from '@/components/WhereWeFocused'
import Testimonials from '@/components/Testimonials'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Nav />
      
      <AISolutions />
      
      {/* HERO */}
      <div className="border-b border-rule">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0" style={{ minHeight: '600px' }}>
          {/* LEFT: Hero Interior Image */}
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
              src="/hero-interior.jpg"
              alt="Aperture Hospitality - Luxury Interior Design"
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
              Aperture Hospitality is driven by a passion for problem solving and a relentless commitment to creating bespoke solutions that meet the needs of our clients. If you are a small business owner in need of solutions you can implement in your business or an operator of a business that is growing and needs help scaling, our team can assist.
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
              With a combined 30+ years of hospitality experience, the Aperture team harnesses its diverse background and experiences to deliver durable, dependable and defensible solutions for our clients.
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
                background: '#B8924A',
                color: '#FFFFFF',
                border: 'none',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.6875rem',
                fontWeight: 600,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#9a7a3e'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#B8924A'
              }}>
                Learn More
              </Link>
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

      {/* WHERE WE'RE FOCUSED */}
      <WhereWeFocused />

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

            {/* Engagement 5 */}
            <div>
              <h3 className="font-display text-xl font-medium text-ink mb-2">Beverly Spirits</h3>
              <p className="text-xs tracking-tight text-muted mb-3">Premium Spirits Portfolio</p>
              <p className="text-muted leading-relaxed">
                Commercial acceleration and market expansion strategy.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI SOLUTIONS SUITE */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#F0EDE6', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          
          {/* Section label */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '3rem' }}>
            <div style={{ width: '2px', height: '1.25rem', background: '#B8924A', flexShrink: 0 }}></div>
            <span style={{ fontFamily: "'Inter',sans-serif", fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760' }}>AI Solutions Suite</span>
          </div>

          {/* Cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>

            {/* CARD 1: AI Employee */}
            <div style={{ background: '#FFFFFF', border: '1.5px solid #B8924A', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px' }}>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 300, color: '#1C1A17', marginBottom: '1rem' }}>AI Employee</h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760' }}>
                  24/7 automated voice, chat, and review responses. Handle missed calls, conversations, and reputation management without adding headcount.
                </p>
              </div>
              <a href="tel:786-706-8231" style={{ display: 'block', textAlign: 'center', padding: '2rem', background: '#1C1A17', color: '#F0EDE6', border: '2px solid #B8924A', borderRadius: '12px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', marginTop: '2rem' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#B8924A'; e.currentTarget.style.color = '#1C1A17'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; e.currentTarget.style.color = '#F0EDE6'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 300, marginBottom: '0.5rem' }}>Try Now</div>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase' }}>Click, Call, Or Text 786-706-8231</div>
              </a>
            </div>

            {/* CARD 2: Traffic System */}
            <div style={{ background: '#FFFFFF', border: '1.5px solid #D4CFC6', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px' }}>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 300, color: '#1C1A17', marginBottom: '1rem' }}>Traffic System</h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760' }}>
                  Proven framework for driving qualified leads and traffic to your business. Data-driven targeting and conversion optimization built in.
                </p>
              </div>
              <a href="https://request.revenuefactory.com/widget/bookings/ai-employee-convo" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '2rem', background: '#1C1A17', color: '#FFFFFF', border: '1.5px solid #B8924A', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', marginTop: '2rem' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#B8924A'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.5rem', color: '#FFFFFF' }}>Launch My Lead</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#FFFFFF' }}>Acquisition Machine →</div>
              </a>
            </div>

            {/* CARD 3: Workspace Kit */}
            <div style={{ background: '#FFFFFF', border: '1.5px solid #D4CFC6', borderRadius: '8px', padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: '400px' }}>
              <div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 300, color: '#1C1A17', marginBottom: '1rem' }}>AI Marketing Workspace Kit</h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760' }}>
                  Complete toolkit for team enablement, training, and operational excellence.
                </p>
              </div>
              <a href="https://request.revenuefactory.com/widget/bookings/ai-employee-convo" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', padding: '2rem', background: '#1C1A17', color: '#FFFFFF', border: '1.5px solid #B8924A', borderRadius: '8px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer', marginTop: '2rem' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#B8924A'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 300, marginBottom: '0.5rem', color: '#FFFFFF' }}>Get The Workspace Kit</div>
                <div style={{ fontSize: '1rem', fontWeight: 300, color: '#FFFFFF' }}>$1,497</div>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT FORM */}
      <IntakeForm />

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-home" />

      <Footer />
    </>
  )
}
