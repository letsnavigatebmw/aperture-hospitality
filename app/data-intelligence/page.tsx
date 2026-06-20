'use client'

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

          {/* Discover Navigate Section */}
          <div style={{ 
            background: '#1C1A17', 
            border: '1px solid #2e2b26', 
            borderRadius: '12px',
            padding: 'clamp(2rem, 5vw, 4rem)',
            marginBottom: '4rem'
          }}>
            <h2 style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
              fontWeight: 600,
              color: '#F0EDE6',
              marginBottom: '1.5rem'
            }}>
              Discover <span style={{ color: '#9370DB' }}>Navigate</span>
            </h2>

            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '1rem',
              fontWeight: 300,
              lineHeight: 1.8,
              color: '#6B6760',
              marginBottom: '2rem',
              maxWidth: '700px'
            }}>
              Navigate is a property intelligence platform designed to create opportunity at the intersection of people, property, and possibility. The platform combines owner, property, and marketing intelligence to help you find qualified prospects and reach them at scale.
            </p>

            {/* CTAs */}
            <div style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap'
            }}>
              <a href="https://navigatenow.com" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 2rem',
                background: '#9370DB',
                color: '#F0EDE6',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.background = '#7a5bb3'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.background = '#9370DB'
              }}>
                Ready to Navigate
              </a>

              <a href="https://navigatenow.com/seed-round" target="_blank" rel="noopener noreferrer" style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '0.875rem 2rem',
                background: 'transparent',
                color: '#F0EDE6',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.875rem',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1px solid #2e2b26',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }} onMouseEnter={(e) => {
                (e.target as HTMLElement).style.borderColor = '#B8924A'
                ;(e.target as HTMLElement).style.color = '#B8924A'
              }} onMouseLeave={(e) => {
                (e.target as HTMLElement).style.borderColor = '#2e2b26'
                ;(e.target as HTMLElement).style.color = '#F0EDE6'
              }}>
                Learn More About our Seed Round
              </a>
            </div>
          </div>

          {/* Additional content placeholder */}
          <div className="max-w-3xl mt-16">
            <p className="text-lg leading-relaxed text-muted">
              More insights and resources coming soon.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
