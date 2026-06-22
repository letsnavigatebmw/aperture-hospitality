'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function OperatingPartnerSelectionPage() {
  // Vercel rebuild trigger
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Operations Framework</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0, marginBottom: '1.75rem' }}>
                The most important decision<br/>about your property<br/>isn't the design.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>It's who runs it.</em>
              </h1>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Get independent counsel
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  ← All frameworks
                </Link>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }}>
                Choosing the wrong operating partner is the single most common and most expensive mistake hotel owners and real estate investors make. This framework is the due diligence process most ownership groups never run.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26' }}>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Category</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6' }}>Operations</div>
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

      {/* PROBLEM */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Problem
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
                The proposal tells you who they want to be.<br/>Due diligence tells you<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>who they are.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Most hotel owners select an operating partner the way they select a contractor — they get three proposals, compare the fees, check references, and pick the one that feels most credible in the room.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                This process fails for a predictable reason: operating management companies are extremely good at selling engagements and extremely variable at actually running hotels. The proposal tells you who they want you to think they are.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
                The stakes are not small. A misaligned operating partner doesn't just underperform — they shape your asset, your team, your guest reputation, and your exit value for the entire length of the agreement. And management contracts are notoriously difficult to exit. Aperture has been on both sides of this process — as the operator being evaluated and as the advisor running the evaluation on behalf of ownership.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SIX EVALUATION DIMENSIONS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                What To Evaluate
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Most ownership groups evaluate<br/>on four dimensions.<br/>You need <em style={{ fontStyle: 'italic', color: '#B8924A' }}>nine.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              The standard evaluation — brand reputation, financial projections, fee structure, personal chemistry — is necessary but insufficient. These are the five additional dimensions that separate a sound operator selection from an expensive mistake.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid #2e2b26' }}>
            {[
              { num: '01', title: 'Operating Track Record', desc: 'Not their global portfolio — their track record on properties genuinely comparable to yours. A company that excels at 400-key urban hotels is not the right partner for a 28-key boutique coastal property, regardless of how impressive their portfolio deck looks.' },
              { num: '02', title: 'Team Stability & Depth', desc: 'The people in the room during the pitch are almost never the people who will actually run your hotel. Understanding the real depth of their operational bench — and whether the key people assigned to your property are stable and actually available — is a different question from evaluating the brand.' },
              { num: '03', title: 'Commercial Capability', desc: 'Can they actually drive revenue, or are they good operators who rely on the market to do the commercial work? What is their proprietary distribution capability? What is their direct booking percentage across comparable properties? What does their revenue management infrastructure actually look like?' },
              { num: '04', title: 'Technology & Reporting', desc: 'What systems will you actually have visibility into as the owner? In what format? This is where the accountability gap between promises and reality is widest. Ask to see a real owner report from a live property, not a sample.' },
              { num: '05', title: 'Alignment & Incentive Structure', desc: 'Where their incentives align with yours and where they diverge. Base management fees are paid regardless of performance. The structure of incentive thresholds — and how realistically achievable they are — tells you a great deal about how confident the operator actually is in their own projections.' },
              { num: '06', title: 'Reference Quality', desc: 'Not the references they give you. The references you find independently — the owners who worked with them two years ago and are no longer with them. What ended those relationships, and why, is the most valuable data point in the entire process.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '2.5rem 2.5rem 2.5rem ' + (i % 3 === 2 ? '0' : '2.5rem'), borderRight: i % 3 !== 2 ? '1px solid #2e2b26' : 'none', borderBottom: i < 3 ? '1px solid #2e2b26' : 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#B8924A', lineHeight: 1, marginBottom: '0.75rem' }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.75rem', lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#F0EDE6' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SIX STEP PROCESS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#E8E4DB', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            The Due Diligence Process
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '3rem' }}>
            Six steps. In this order. <em style={{ fontStyle: 'italic', color: '#B8924A' }}>No shortcuts.</em>
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #D4CFC6' }}>
            {[
              { num: '01', title: 'Longlist development and initial screening', desc: 'Filter against comparable property criteria before anyone sees your RFP.' },
              { num: '02', title: 'RFP distribution and management proposal review', desc: 'Evaluate proposals against the nine dimensions, not just the fee structure and the projections.' },
              { num: '03', title: 'Finalist site visits to comparable operating properties', desc: 'Not their flagship showpiece. A comparable property in normal operating conditions.' },
              { num: '04', title: 'Structured reference calls — provided and independent', desc: 'The provided references are the minimum. The independent ones are the data that matters.' },
              { num: '05', title: 'Contract term negotiation', desc: 'Performance thresholds, exclusivity carve-outs, termination provisions. The contract reveals the relationship.' },
              { num: '06', title: 'Final selection and transition planning', desc: 'How you transition matters as much as who you select. The first 90 days set the tone for the entire relationship.' }
            ].map((step, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '48px 1fr', gap: '1.5rem', padding: '1.75rem 0', borderBottom: i < 5 ? '1px solid #D4CFC6' : 'none', alignItems: 'flex-start' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', paddingTop: '0.2rem' }}>{step.num}</div>
                <div>
                  <strong style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem', fontWeight: 400, color: '#1C1A17' }}>{step.title}</strong>
                  <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', marginTop: '0.375rem', lineHeight: 1.6 }}>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IN PRACTICE + CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                In Practice
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 2.5vw, 2.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Aperture deployed this<br/>at the <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Morrison Hotel.</em>
              </h2>
              <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '2rem', marginTop: '1.5rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.75rem' }}>Featured Engagement</div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '0.25rem' }}>Waratah, Inc. — Morrison Hotel</div>
                <div style={{ fontSize: '0.75rem', fontWeight: 400, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '1rem' }}>Venice Beach, CA · Jul 2023 – Present</div>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6' }}>
                  A 48-room boutique beachfront property requiring an operator capable of managing a members-only restaurant, rooftop bar, and curated guest experience simultaneously. The evaluation process identified that several apparently qualified operators lacked the commercial infrastructure for the specific revenue complexity the Morrison concept required.
                </p>
              </div>
            </div>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Who This Is For
              </div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #4a4845', margin: 0, padding: 0, marginBottom: '2.5rem' }}>
                {[
                  'Hotel owners and real estate investors selecting a management company for the first time',
                  'Ownership groups considering a management change on an underperforming asset',
                  'Family offices and private equity groups building or acquiring hospitality assets',
                  'Developers entering hospitality who need independent counsel on operator selection'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #4a4845', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Get independent counsel
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
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
