'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'

export default function WorkplaceKitPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A', display: 'block' }}></span>
                Marketing Solution
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 4.5rem)', fontWeight: 300, lineHeight: 1.08, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                Get The AI Marketing<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Workspace Kit.</em>
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                Complete toolkit for team enablement, training, and operational excellence. Everything your team needs to scale marketing without scaling complexity.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '280px' }}>
                <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#1C1A17', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
                  Get The Kit - $1,497
                </a>
                <a href="tel:786-706-8231" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                  Try Now: 786-706-8231
                </a>
              </div>
            </div>

            {/* Right: Info Box */}
            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>What's Included</div>
              
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  'AI-Powered Content Library',
                  'Team Training Framework',
                  'Marketing Automation Setup',
                  'Performance Dashboards',
                  'Ongoing Support & Updates'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #3a3733', fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-workplace" />

      <Footer />
    </>
  )
}
