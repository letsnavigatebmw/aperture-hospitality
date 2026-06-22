'use client'

import Link from 'next/link'

export default function AISolutions() {
  return (
    <section style={{
      padding: 'clamp(4rem, 8vw, 6rem) clamp(1.5rem, 4vw, 4rem)',
      background: 'linear-gradient(135deg, #1C1A17 0%, #2e2b26 100%)',
      borderBottom: '1px solid #B8924A',
      borderTop: '1px solid #B8924A'
    }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
        
        {/* Section label */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          marginBottom: '2.5rem'
        }}>
          <div style={{
            width: '2px',
            height: '1.25rem',
            background: '#B8924A',
            flexShrink: 0
          }}></div>
          <span style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.6875rem',
            fontWeight: 500,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#F0EDE6'
          }}>New Capability</span>
        </div>

        {/* Heading + intro */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'start',
          marginBottom: '3rem'
        }}>
          <h2 style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(2.5rem, 4vw, 3.75rem)',
            fontWeight: 300,
            lineHeight: 1.1,
            color: '#F0EDE6',
            margin: 0
          }}>
            AI-Powered <span style={{ fontStyle: 'italic', color: '#B8924A' }}>Intelligence</span>
          </h2>

          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '1.0625rem',
            fontWeight: 300,
            lineHeight: 1.8,
            color: '#F0EDE6',
            margin: 0,
            paddingTop: '0.5rem'
          }}>
            Leverage advanced AI to optimize your revenue strategy, forecast demand, and unlock growth opportunities. We integrate cutting-edge AI insights into your existing revenue factory.
          </p>
        </div>

        {/* CTA */}
        <Link href="/solutions" style={{
          display: 'inline-block',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          color: '#B8924A',
          textDecoration: 'none',
          paddingBottom: '0.5rem',
          borderBottom: '2px solid #B8924A',
          transition: 'all 0.3s ease'
        }} onMouseEnter={(e) => {
          (e.target as HTMLElement).style.color = '#F0EDE6'
          ;(e.target as HTMLElement).style.borderBottomColor = '#F0EDE6'
        }} onMouseLeave={(e) => {
          (e.target as HTMLElement).style.color = '#B8924A'
          ;(e.target as HTMLElement).style.borderBottomColor = '#B8924A'
        }}>
          Explore Aperture's AI Solutions →
        </Link>

      </div>
    </section>
  )
}
