'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CheatSheetPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Resource</span>
          </div>
          <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
            The Acquisition Engine<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Cheat Sheet.</em>
          </h1>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: 'rgba(240,237,230,0.65)', maxWidth: '54ch', marginBottom: '2rem' }}>
            You've learned what the four machines are. Here's how they connect, which to build first, and the one move you can make today to get started—no agency required.
          </p>
          <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#a07e40')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
            Ask for help building this
          </Link>
        </div>
      </section>

      {/* THE SEQUENCE */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1.5rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              The Flow
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1 }}>
              How the Four Machines <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Connect.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: '#D4CFC6' }}>
            {[
              { num: '01', name: 'Awareness Machine', desc: 'Gets the right people to know you exist. Traffic arrives.', goal: 'Prospects' },
              { num: '02', name: 'Acquisition Machine', desc: 'Converts visitors into contacts in your database.', goal: 'Leads' },
              { num: '03', name: 'Activation Machine', desc: 'Follows up and closes. Leads become customers.', goal: 'Customers' },
              { num: '04', name: 'Amplification Machine', desc: 'Turns customers into repeat buyers and referrers.', goal: 'Promoters' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#F0EDE6', padding: '2.5rem' }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '0.5rem' }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.3rem', fontWeight: 400, color: '#1C1A17', marginBottom: '1rem', lineHeight: 1.15 }}>{item.name}</h3>
                <p style={{ fontSize: '0.875rem', color: '#6B6760', lineHeight: 1.6, fontWeight: 300, marginBottom: '1.5rem' }}>{item.desc}</p>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#6B6760', fontWeight: 500 }}>Result: <strong style={{ color: '#1C1A17', fontWeight: 600 }}>{item.goal}</strong></div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3rem', padding: '2rem', background: 'rgba(184,146,74,0.05)', border: '1px solid rgba(184,146,74,0.15)' }}>
            <div style={{ fontSize: '0.85rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300 }}>
              <strong style={{ color: '#1C1A17', fontWeight: 500 }}>The math:</strong> Traffic × Conversion Rate = Results. Every engine must account for all three. A high-traffic, low-conversion machine wastes money. A high-conversion, low-traffic machine doesn't scale. Build all four, and they compound.
            </div>
          </div>
        </div>
      </section>

      {/* WHICH ENGINE FIRST */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#1C1A17', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '1.5rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              The Diagnostic
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.1, marginBottom: '1rem' }}>
              Which Machine Do <em style={{ fontStyle: 'italic', color: '#B8924A' }}>You</em> Build First?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'rgba(240,237,230,0.55)', lineHeight: 1.8, fontWeight: 300, maxWidth: '54ch' }}>
              The answer depends on where your business is breaking. Answer these three questions.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'rgba(240,237,230,0.08)' }}>
            {[
              { q: 'Do you have consistent traffic?', a: "If no, build Awareness first. You can't convert traffic you don't have.", next: 'Awareness Machine' },
              { q: 'Do you capture contacts from that traffic?', a: "If no, build Acquisition next. You're leaving money on the table by letting visitors leave untracked.", next: 'Acquisition Machine' },
              { q: 'Do you follow up on those contacts?', a: "If no, build Activation next. Most sales happen after the first touch. Without follow-up, you're ghosting your leads.", next: 'Activation Machine' },
              { q: 'Do customers come back or refer you?', a: "If no, build Amplification last. This is how growth compounds. It's also the cheapest channel you have.", next: 'Amplification Machine' }
            ].map((item, i) => (
              <div key={i} style={{ background: '#1C1A17', padding: '2.5rem', position: 'relative' }}>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.2rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '1rem', lineHeight: 1.2 }}>{item.q}</h3>
                <p style={{ fontSize: '0.9rem', color: 'rgba(240,237,230,0.6)', lineHeight: 1.7, fontWeight: 300, marginBottom: '1.5rem' }}>{item.a}</p>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500 }}>👉 {item.next}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK WIN */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#F0EDE6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1.5rem' }}>
              <span style={{ width: '2rem', height: '1px', background: '#B8924A' }}></span>
              Start Today
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: '#1C1A17', lineHeight: 1.1 }}>
              One Move You Can Make <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Right Now.</em>
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.6rem', fontWeight: 400, color: '#1C1A17', marginBottom: '1.25rem', lineHeight: 1.15 }}>Map your current journey.</h3>
              <p style={{ fontSize: '1rem', color: '#6B6760', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>
                Don't wait for a consultant. Take an hour and draw your customer journey:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 2rem 0' }}>
                {["Where do new people first hear about you?", "What happens when they visit your site?", "How do you capture their contact info?", "What's your follow-up sequence?", "How do you ask for referrals?"].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.85rem', padding: '0.65rem 0', fontSize: '0.9rem', color: '#6B6760', lineHeight: 1.6, fontWeight: 300 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9rem', color: '#6B6760', lineHeight: 1.7, fontWeight: 300, fontStyle: 'italic' }}>
                Be honest. Where are you losing people? That's where to build first.
              </p>
            </div>
            <div style={{ padding: '2.5rem', background: '#1C1A17', borderRadius: '2px' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A', fontWeight: 500, marginBottom: '1.25rem' }}>Example</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '0.9rem', color: '#F0EDE6', lineHeight: 1.7, fontWeight: 300 }}>
                <div>
                  <strong style={{ color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: '0.3rem' }}>Awareness:</strong>
                  <span>Google, Facebook Ads, Referrals</span>
                </div>
                <div>
                  <strong style={{ color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: '0.3rem' }}>Acquisition:</strong>
                  <span>Landing page → Newsletter signup</span>
                </div>
                <div>
                  <strong style={{ color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: '0.3rem' }}>Activation:</strong>
                  <span>5-email onboarding sequence</span>
                </div>
                <div>
                  <strong style={{ color: '#B8924A', fontWeight: 500, display: 'block', marginBottom: '0.3rem' }}>Amplification:</strong>
                  <span>Monthly referral incentive email</span>
                </div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '4rem', padding: '2rem', background: 'rgba(184,146,74,0.08)', border: '1px solid rgba(184,146,74,0.2)' }}>
            <div style={{ fontSize: '0.9rem', color: '#1C1A17', lineHeight: 1.8, fontWeight: 300 }}>
              <strong style={{ color: '#1C1A17', fontWeight: 500 }}>Need help?</strong> This is where Aperture starts. A one-hour Revenue Leak Audit maps your journey, identifies the leak, and gives you a clear roadmap.{' '}
              <Link href="/contact" style={{ color: '#B8924A', textDecoration: 'none', fontWeight: 500 }}>
                Let's talk.
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
