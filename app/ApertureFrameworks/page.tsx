'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function ApertureFrameworksPage() {
  const frameworks = [
    {
      title: 'The Revenue Factory Framework',
      description: 'A systems approach to aligning product, go-to-market, and operations around a unified revenue goal.'
    },
    {
      title: 'Commercial Strategy Framework',
      description: 'A structured process for identifying market opportunities, positioning, and defining defensible competitive advantages.'
    },
    {
      title: 'Go-to-Market Execution Framework',
      description: 'A playbook for building repeatable sales and marketing processes that scale predictably.'
    },
    {
      title: 'Unit Economics Framework',
      description: 'A financial modeling approach to understand and optimize the profitability of every customer acquisition and retention activity.'
    }
  ]

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.1, color: '#F0EDE6', marginBottom: '1.5rem', margin: 0, marginBottom: '1.5rem' }}>
                Frameworks for <em style={{ fontStyle: 'italic', color: '#B8924A' }}>building real growth.</em>
              </h1>
            </div>
            <div>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', margin: 0 }}>
                The operating systems, mental models, and strategic tools we use to help brands build defensible revenue growth. Not proprietary secrets. How we think, made visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FRAMEWORKS GRID */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '4rem', margin: 0, marginBottom: '4rem' }}>
            Key Frameworks
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {frameworks.map((fw, i) => (
              <div key={i} style={{ padding: '2.5rem', background: '#FFFFFF', border: '1px solid #D4CFC6', borderRadius: '4px' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, marginBottom: '1rem', margin: 0, marginBottom: '1rem' }}>
                  {fw.title}
                </h3>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760', margin: 0 }}>
                  {fw.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) clamp(1.5rem, 4vw, 4rem)', textAlign: 'center', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.2, color: '#F0EDE6', marginBottom: '1.5rem', margin: 0, marginBottom: '1.5rem' }}>
            Ready to apply these frameworks to your business?
          </h2>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2rem', margin: 0, marginBottom: '2rem' }}>
            Let's talk about how Aperture can help you build a revenue factory tailored to your market.
          </p>
          <Link href="/contact" style={{ display: 'inline-block', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#1C1A17', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
            GET IN TOUCH
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
