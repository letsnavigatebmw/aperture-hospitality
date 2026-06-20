'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function HospitalityRevenuePlanningPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Forecasting & Planning</span>
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0 }}>
                The Hospitality Revenue<br/>Planning<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Framework.</em>
              </h1>
            </div>
            <div style={{ paddingTop: '0.5rem' }}>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', margin: 0 }}>
                Math-based revenue planning for hospitality operators who are still running forecasts on gut-feel and prior-year comparisons. How to build a bottom-up revenue model, what inputs matter, and how to use it to drive real decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.2, marginBottom: '1.5rem', margin: 0, marginBottom: '1.5rem' }}>
              Coming Soon
            </h2>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1rem' }}>
              This framework is currently being published. Check back soon for the complete breakdown of hospitality revenue planning.
            </p>
          </div>

          <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
            ← Back to Frameworks
          </Link>
        </div>
      </section>
    </>
  )
}
