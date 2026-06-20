'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function RevenueFactoryPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Commercial Strategy Framework</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0, marginBottom: '1.75rem' }}>
                Stop relying on superstars.<br/>Build a system that<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>produces revenue.</em>
              </h1>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Apply this framework
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  ← All frameworks
                </Link>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', margin: 0, marginBottom: '1.25rem' }}>
                The Revenue Factory is the operating model Aperture applies across every commercial strategy engagement. It treats your go-to-market motion like a production line — predictable, measurable, and not dependent on any single person to keep it running.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26' }}>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Category</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6' }}>Commercial Strategy</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Status</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#B8924A' }}>Published</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE PROBLEM */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Problem
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
                Most commercial operations run on instinct.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>That's a liability.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Most boutique hospitality and luxury brands run their commercial operations on instinct, relationships, and the energy of whoever is closest to revenue at any given moment. When that person is good, business is good. When they leave, or when the market shifts, the whole thing stalls.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                This isn't a talent problem. It's a systems problem.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
                The best operators in hospitality — the ones who consistently outperform their competitive set regardless of who is in the building — have one thing in common: they've built repeatable commercial processes that work independently of individual heroics. That's what the Revenue Factory framework is designed to help you build.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CONCEPTS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#E8E4DB', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            Core Concepts
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid #D4CFC6' }}>
            <div style={{ padding: '3rem 3rem 3rem 0', borderRight: '1px solid #D4CFC6' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>Concept 01</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 400, color: '#1C1A17', marginBottom: '1rem', lineHeight: 1.2 }}>Systems Over Heroics</h3>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#1C1A17' }}>
                Instead of relying on individual superstars or inspired guesswork, the Revenue Factory shifts focus to throughput, efficiency ratios, and systematic data-driven optimization. A well-designed system produces consistent output. A star performer produces inconsistent peaks.
              </p>
            </div>
            <div style={{ padding: '3rem 0 3rem 3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>Concept 02</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 400, color: '#1C1A17', marginBottom: '1rem', lineHeight: 1.2 }}>Full Lifecycle View</h3>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#1C1A17' }}>
                Most commercial strategies stop at the sale. The Revenue Factory maps the entire customer lifecycle — from the moment a lead is first identified, through acquisition, onboarding, retention, and account expansion. Revenue leaks at every stage. You can only fix what you can see.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIX PILLARS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Framework
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Six pillars.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>functioning system.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              A functioning revenue operation is built on six interdependent elements. Weakness in any one of them limits the performance of all the others. The sequence matters — fix the foundation before you build the roof.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid #2e2b26' }}>
            {[
              { num: '01', title: 'Customer Understanding', desc: 'Who exactly are you targeting, and what specific problem are you solving for them? The precise profile of the buyer who closes fastest, stays longest, and refers most. This pillar is the foundation — everything downstream is aimed at someone.' },
              { num: '02', title: 'Sales Process', desc: 'A predictable, repeatable system for winning deals. Every stage defined. Every handoff documented. No steps left to memory, personality, or mood. Process doesn\'t kill relationships — it makes them more consistent.' },
              { num: '03', title: 'Forecasting & Account Plans', desc: 'Math-based revenue planning that replaces gut-feel targets with structured pipeline logic and account-level growth models. A forecast you can actually trust changes how you staff, invest, and make decisions.' },
              { num: '04', title: 'Unified Revenue Plan', desc: 'Shared goals and numbers across every revenue-generating function. Sales, marketing, and customer success pulling toward the same outcome, measured against the same targets.' },
              { num: '05', title: 'Connected Platform', desc: 'The technology layer — CRM, automation, analytics — that ties the entire process together and makes performance visible in real time. The minimum viable stack that keeps data clean, follow-up automated, and reporting honest.' },
              { num: '06', title: 'Accountability', desc: 'An operational rhythm — weekly cadences, pipeline reviews, scorecards — that keeps the system running and surfaces problems before they compound into losses.' }
            ].map((pillar, i) => (
              <div key={i} style={{ padding: i % 3 === 2 ? '2.5rem 0 2.5rem 2.5rem' : i % 3 === 1 ? '2.5rem 2.5rem' : '2.5rem 2.5rem 2.5rem 0', borderRight: i % 3 !== 2 ? '1px solid #2e2b26' : 'none', borderBottom: i < 3 ? '1px solid #2e2b26' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>{pillar.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.875rem', lineHeight: 1.2 }}>{pillar.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6' }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW APERTURE APPLIES THIS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                In Practice
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
                How Aperture<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>applies this.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Aperture uses the Revenue Factory as a diagnostic tool before deploying it as a build framework. The first step is identifying which of the six pillars is most broken — because fixing the wrong thing first is the single most common consulting mistake.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '2rem' }}>
                In our engagement with Voyage Real Estate (Compass), the most acute gap was in Customer Understanding and Sales Process. Their recruitment pipeline was broad but poorly qualified, and there was no repeatable process for converting agent conversations into commitments. Rebuilding those two pillars drove a 2–3× increase in qualified pipeline and a ~25% improvement in conversion efficiency before we touched anything else.
              </p>
              <div style={{ background: '#E8E4DB', border: '1px solid #D4CFC6', padding: '2rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Featured Engagement</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 300, color: '#1C1A17', marginBottom: '0.5rem' }}>Voyage Real Estate (Compass)</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #D4CFC6' }}>Los Angeles, CA · Nov 2023 – Aug 2024</div>
                <div style={{ display: 'flex', gap: '2rem' }}>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#B8924A', lineHeight: 1 }}>2–3×</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginTop: '0.25rem' }}>Qualified pipeline increase</div>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#B8924A', lineHeight: 1 }}>~25%</div>
                    <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginTop: '0.25rem' }}>Conversion efficiency improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR + CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Who This Is For
              </div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #2e2b26', margin: 0, padding: 0 }}>
                {[
                  'Boutique hotel owners whose commercial results are inconsistent or person-dependent',
                  'Luxury brand founders who have strong product-market fit but no commercial system to scale it',
                  'Hospitality investors assessing whether a management team has the commercial infrastructure to perform',
                  'Operators preparing for growth, expansion, or a new market entry'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem', display: 'block' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Ready to apply<br/>this to your<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>business?</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', marginBottom: '2rem' }}>
                The first step is a diagnostic, not a strategy session. You need to know which pillar is weakest before you can decide what to build first.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  Book a diagnostic conversation
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  ← Back to all frameworks
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
