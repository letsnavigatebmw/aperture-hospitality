'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PhilosophyPage() {
  return (
    <>
      <Nav />
      
      {/* OPENING QUOTE */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <blockquote style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, lineHeight: 1.4, color: '#F0EDE6', margin: 0, fontStyle: 'italic' }}>
            Organizations don't change because they learn something new.
            <br/><br/>
            They change because they begin seeing themselves differently.
          </blockquote>
        </div>
      </section>

      {/* REFLECTION STORY */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Twenty years ago, I believed businesses succeeded because they had better products, better marketing, or better leaders.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            I was wrong.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Over the course of my career, I had the opportunity to work inside luxury hospitality companies, global consumer brands, technology startups, and real estate platforms.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Every industry looked different.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Every balance sheet looked different.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Every customer looked different.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Yet I kept encountering the same problem.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Brilliant people.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Good intentions.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            Endless effort.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            And organizations that somehow struggled to translate intelligence into coordinated action.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.5rem' }}>
            At first, I thought these were isolated management problems.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
            Eventually, I realized I was looking at the same phenomenon wearing different clothes.
          </p>
        </div>
      </section>

      {/* ORGANIZATIONAL INTELLIGENCE */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
            <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
            The Framework
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '2rem' }}>
            Organizational <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Intelligence.</em><br/>A New Management Philosophy for the AI Era.
          </h2>
        </div>
      </section>

      {/* THE COORDINATION PARADOX */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.2, marginBottom: '2.5rem' }}>
            The Coordination <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Paradox.</em>
          </h3>
          
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            We live in the most intelligent period in human history.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            Organizations have more data than ever.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            More software.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            More dashboards.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            More AI.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            More experts.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            More meetings.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2.5rem' }}>
            More communication.
          </p>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem', paddingTop: '2rem', borderTop: '1px solid #D4CFC6' }}>
            Yet leaders consistently describe the same frustrations:
          </p>

          <ul style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 2, color: '#1C1A17', marginBottom: '2.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.75rem' }}>We're not aligned.</li>
            <li style={{ marginBottom: '0.75rem' }}>Execution is inconsistent.</li>
            <li style={{ marginBottom: '0.75rem' }}>Everyone is busy, but progress feels slow.</li>
            <li style={{ marginBottom: '0.75rem' }}>Marketing and sales aren't on the same page.</li>
            <li>We keep having the same conversations.</li>
          </ul>

          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem', paddingTop: '2rem', borderTop: '1px solid #D4CFC6' }}>
            This is the paradox of modern organizations.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
            As intelligence has increased, coordination has not kept pace.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
            The defining constraint of the AI era is no longer access to information.
          </p>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
            It is the ability to transform distributed intelligence into <em style={{ fontStyle: 'italic', color: '#B8924A' }}>coordinated action.</em>
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <Link href="/philosophy/chapter1" style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '2.5rem', background: 'transparent', border: '1.5px solid #B8924A', borderRadius: '0px', textDecoration: 'none', transition: 'all 0.3s', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(184,146,74,0.1)'; e.currentTarget.style.borderColor = '#D4A574'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = '#B8924A'; }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: '#F0EDE6', margin: 0, marginBottom: '0.25rem' }}>
                Chapter 1
              </h3>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, color: 'rgba(240,237,230,0.6)', margin: 0 }}>
                Every Organization is Intelligent, Very Few Are Designed to Think
              </p>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B8924A" strokeWidth="1.5" style={{ marginLeft: 'auto', flexShrink: 0 }}>
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
