'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PhilosophyPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 8rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ borderLeft: '4px solid #B8924A', paddingLeft: '1.5rem', marginBottom: '3rem' }}>
            <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760' }}>
              Founder's Philosophy
            </div>
          </div>
          
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, lineHeight: 1.1, color: '#1C1A17', marginBottom: '3rem', maxWidth: '20ch' }}>
            Many Rooms, <em style={{ fontStyle: 'italic' }}>One Frequency</em>
          </h1>

          <div style={{ borderTop: '1px solid #D4CFC6', paddingTop: '3rem' }}>
            <div style={{ maxWidth: '800px' }}>
              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
                I've spent much of my life trying to answer a simple question: <strong>How do you build something that truly matters?</strong>
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                Growing up in Los Angeles, I was surrounded by people who had already achieved success. The expected path was fairly straightforward—medicine, education, or another respected profession. I chose a different route.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                That decision led me from <strong>the University of Southern California's Annenberg School of Communication</strong> to the <strong>Harvard Kennedy School</strong> and <strong>Northwestern University's Kellogg School of Management</strong>. Each institution challenged me to think differently, but together they reinforced a belief that has shaped my career: <strong>meaningful growth happens at the intersection of people, ideas, and opportunity.</strong>
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                My career has taken me across industries, continents, and cultures. I've lived and worked throughout the United States, the United Kingdom, and Africa, experiencing firsthand that <strong>commerce and community are not opposites—they're in constant negotiation.</strong> The best builders are fluent in both.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                From leading <strong>Diageo's</strong> luxury portfolio vision across Africa to scaling and eventually selling a PE-backed hospitality platform, I built a career at the intersection of connectivity, creativity, and opportunity. I didn't inherit a playbook. I wrote one.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                That same instinct brought me to real estate technology. Navigate wasn't a pivot. It was the logical conclusion of two decades spent watching an industry resist modernisation until someone forces the issue.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                But the thread running through all of it isn't the résumé. It's the relationships. I move through rooms differently, not as the loudest voice, but as the most connected one. I build <strong>relationship capital the way others build financial capital: deliberately, generously, and with a long time horizon.</strong> The "plug" who knows someone for everything, and shares that access freely.
              </p>

              <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '1rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '2rem' }}>
                In a world increasingly mediated by algorithms, my conviction is simple: <strong>Success moves at the speed of connectivity.</strong>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderTop: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, lineHeight: 1.2, color: '#F0EDE6', maxWidth: '30ch' }}>
              Ready to build something that <em style={{ fontStyle: 'italic', color: '#B8924A' }}>matters?</em>
            </h2>
            
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/how-we-work" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
                How We Work
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2a2520')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
