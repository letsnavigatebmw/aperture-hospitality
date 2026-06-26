'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function PhilosophyPage() {
  return (
    <>
      <Nav />
      
      {/* ══ HERO: FRAMEWORK + COORDINATION PARADOX (2-COL) ══ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid rgba(184,146,74,0.2)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
            
            {/* LEFT: THE FRAMEWORK */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
                The Framework
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '0.5rem' }}>
                Organizational<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>Intelligence.</em>
              </h2>
              <p style={{ fontSize: 'clamp(0.875rem, 1vw, 1rem)', fontWeight: 300, color: 'rgba(240,237,230,0.7)', lineHeight: 1.6, marginTop: '1.5rem' }}>
                A new management philosophy<br/>for the AI era.
              </p>
            </div>

            {/* RIGHT: THE COORDINATION PARADOX */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
                The Coordination Paradox
              </div>
              
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                We live in the most intelligent period in human history. Organizations have more data than ever before. More software. More dashboards. More AI. More experts. More meetings. More communication.
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2rem' }}>
                Yet leaders consistently describe the same frustrations:
              </p>

              <ul style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', listStyle: 'none', paddingLeft: 0 }}>
                <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(212, 207, 198, 0.2)', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#B8924A', flexShrink: 0 }}>—</span>
                  <span>We're not aligned.</span>
                </li>
                <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(212, 207, 198, 0.2)', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#B8924A', flexShrink: 0 }}>—</span>
                  <span>Execution is inconsistent.</span>
                </li>
                <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(212, 207, 198, 0.2)', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#B8924A', flexShrink: 0 }}>—</span>
                  <span>Everyone is busy, but progress feels slow.</span>
                </li>
                <li style={{ marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(212, 207, 198, 0.2)', display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#B8924A', flexShrink: 0 }}>—</span>
                  <span>Marketing and sales aren't on the same page.</span>
                </li>
                <li style={{ display: 'flex', gap: '0.75rem' }}>
                  <span style={{ color: '#B8924A', flexShrink: 0 }}>—</span>
                  <span>We keep having the same conversations.</span>
                </li>
              </ul>

              <p style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6', fontStyle: 'italic', paddingTop: '1.5rem', borderTop: '1px solid rgba(212, 207, 198, 0.2)' }}>
                This is the paradox of modern organizations. As intelligence has increased, coordination has not kept pace. The defining constraint of the AI era is no longer access to information. It is the ability to transform distributed intelligence into <em style={{ fontStyle: 'normal', color: '#B8924A' }}>coordinated action.</em>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ IMPLICATION SECTION (2-COL) ══ */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: 'clamp(3rem, 6vw, 7rem)', alignItems: 'start' }}>
            
            {/* LEFT SIDEBAR */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1.5rem' }}>
                <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
                The Implication
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17' }}>
                The problem isn't<br/>what you <span style={{ color: '#B8924A', fontWeight: 400 }}>know.</span><br/>
                It's what you can<br/><span style={{ color: '#B8924A', fontWeight: 400 }}>do together.</span>
              </h2>
            </div>

            {/* RIGHT BODY */}
            <div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.45, color: '#1C1A17', fontStyle: 'italic', marginBottom: '2rem' }}>
                Most organizations aren't failing because they lack intelligence. They're failing because they can't coordinate it.
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }}>
                The leaders I've worked with across hospitality, consumer brands, technology, and real estate are, almost without exception, intelligent, capable, and committed. They understand their markets. They've read the strategy books. They have opinions, data, and frameworks for everything.
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }}>
                And yet their organizations move slowly. Decisions get relitigated. Functions operate at cross-purposes. The gap between what leadership intends and what the organization actually executes is wider than anyone is comfortable admitting.
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }}>
                This is not a talent problem. It is not a strategy problem. It is not even a communication problem — most organizations communicate constantly.
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }}>
                It is a <strong>commercial architecture problem.</strong>
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17', marginBottom: '1.5rem' }}>
                The organizations that consistently outperform their peers are not necessarily the ones with the best strategies or the most talented teams. They are the ones that have built the underlying architecture — the plans, processes, rhythms, and decision frameworks — that allow intelligence to become coordinated action.
              </p>

              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#6B6760' }}>
                That architecture is what Aperture exists to build.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ WHAT WE BELIEVE ══ */}
      <section style={{ background: '#E8E4DB', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          
          {/* HEADER */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1.5rem' }}>
              <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
              What We Believe
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 2.5vw, 2.125rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17', maxWidth: '500px' }}>
              Three <span style={{ color: '#B8924A', fontWeight: 400 }}>convictions</span><br/>that shape everything<br/>we do.
            </h2>
          </div>

          {/* CONVICTIONS - SINGLE COLUMN */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3.5rem', maxWidth: '100%' }}>
            
            {/* CONVICTION 01 */}
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Conviction 01</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, lineHeight: 1.4, color: '#1C1A17', marginBottom: '1.25rem', fontStyle: 'italic' }}>Strategy without a plan is noise.</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }}>Every organization has a strategy. Very few have the plans, calendars, briefs, and decision frameworks that translate that strategy into something every function can act on. We build the bridge between intention and execution — not by adding complexity, but by removing ambiguity.</p>
            </div>

            {/* CONVICTION 02 */}
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Conviction 02</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, lineHeight: 1.4, color: '#1C1A17', marginBottom: '1.25rem', fontStyle: 'italic' }}>Coordination is a competitive advantage.</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }}>In a world where every competitor has access to the same data, the same software, and the same talent pool, the ability to coordinate faster and more effectively is one of the few genuine differentiators left. We treat organizational alignment not as a management hygiene issue but as a strategic capability worth building deliberately.</p>
            </div>

            {/* CONVICTION 03 */}
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Conviction 03</div>
              <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, lineHeight: 1.4, color: '#1C1A17', marginBottom: '1.25rem', fontStyle: 'italic' }}>Systems outlast effort.</p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.85, color: '#1C1A17' }}>Extraordinary individual effort can compensate for structural gaps for a while. Eventually it cannot. The organizations that scale sustainably are the ones that replace heroic execution with repeatable systems — plans, rhythms, and frameworks that produce consistent results regardless of who is in the room on any given day.</p>
            </div>

          </div>

        </div>
      </section>

      {/* ══ CHAPTER CTA ══ */}
      <section style={{ background: '#F0EDE6', padding: 'clamp(5rem, 10vw, 9rem) 0' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.68rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2.5rem' }}>
            <span style={{ width: '2px', height: '1rem', background: '#B8924A' }}></span>
            The Philosophy — In Writing
          </div>

          <Link href="/philosophy/chapter1" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, border: '1px solid #D4CFC6', textDecoration: 'none', transition: 'all 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)'; }} onMouseLeave={(e) => { e.currentTarget.style.boxShadow = 'none'; }}>
            
            {/* LEFT CARD */}
            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', background: '#E8E4DB', borderRight: '1px solid #D4CFC6', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(4rem, 8vw, 6rem)', fontWeight: 300, color: '#D4CFC6', lineHeight: 1, marginBottom: '2rem' }}>01</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.5rem, 2vw, 1.875rem)', fontWeight: 300, lineHeight: 1.3, color: '#1C1A17', marginBottom: '1.5rem' }}>
                  Every Organization Is Intelligent. Very Few Are Designed <span style={{ color: '#B8924A', fontStyle: 'italic' }}>to Think.</span>
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760' }}>
                  On the difference between organizational intelligence and organizational thinking — and why most companies are sitting on more capability than they're using.
                </p>
              </div>
              <div style={{ display: 'inline-flex', flexDirection: 'column', gap: '3px', padding: '0.875rem 1.75rem', background: '#1C1A17', cursor: 'pointer', transition: 'background 0.2s', marginTop: '2rem', alignSelf: 'flex-start' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#2e2b26'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#1C1A17'; }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1 }}>Read Chapter One</div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A' }}>Organizational Intelligence →</div>
              </div>
            </div>

            {/* RIGHT CARD */}
            <div style={{ padding: 'clamp(2.5rem, 5vw, 4rem)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              <div>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>Coming Next</div>
                <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', paddingLeft: 0, marginBottom: 0 }}>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid #D4CFC6', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>The Coordination Gap</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid #D4CFC6', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>Why Strategy Fails at Execution</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', borderBottom: '1px solid #D4CFC6', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>The Architecture of Commercial Systems</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1.25rem 0', fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 300, color: '#6B6760', fontStyle: 'italic', gap: '1rem' }}>
                    <span>Intelligence in the Age of AI</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#D4CFC6', fontStyle: 'normal', whiteSpace: 'nowrap' }}>Coming Soon</span>
                  </li>
                </ul>
              </div>

              <div style={{ marginTop: '2.5rem' }}>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', marginBottom: '1.5rem', lineHeight: 1.6 }}>New chapters published periodically. No cadence promised — only quality.</p>
                <div style={{ display: 'flex', gap: 0 }}>
                  <input type="email" placeholder="your@email.com" style={{ flex: 1, padding: '0.75rem 1rem', background: '#F0EDE6', border: '1px solid #D4CFC6', borderRight: 'none', fontFamily: "'Inter', sans-serif", fontSize: '0.875rem', fontWeight: 300, color: '#1C1A17', outline: 'none' }} />
                  <button style={{ padding: '0.75rem 1.5rem', background: '#B8924A', border: 'none', fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#F0EDE6', cursor: 'pointer', transition: 'background 0.2s', whiteSpace: 'nowrap' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#9a7a3e'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#B8924A'; }}>Follow Along</button>
                </div>
              </div>
            </div>

          </Link>
        </div>
      </section>

      <Footer />
    </>
  )
}
