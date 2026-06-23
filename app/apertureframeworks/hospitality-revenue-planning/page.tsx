'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function HospitalityRevenueplanningPage() {
  // Vercel rebuild trigger
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Forecasting & Planning Framework</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0, marginBottom: '1.75rem' }}>
                If your forecast is last year<br/>plus a percentage,<br/>you don't have a forecast.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>You have a guess.</em>
              </h1>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Build your revenue model
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  ← All frameworks
                </Link>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }}>
                Most hospitality operators are flying blind on revenue planning. This framework builds the bottom-up model that turns forecasting from a board deck exercise into an actual decision-making tool.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '2px solid #3a3733' }}>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Category</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6' }}>Forecasting & Planning</div>
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

      {/* THREE PROBLEMS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            Why Hospitality Forecasting Fails
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '3rem' }}>
            Revenue forecasting in hospitality is broken in a specific and <em style={{ fontStyle: 'italic', color: '#B8924A' }}>consistent way.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '2px solid #B8924A' }}>
            {[
              { num: 'Problem 01', title: 'Backward-Looking by Design', desc: 'Taking last year\'s numbers and adding a market assumption tells you what happened and asks you to assume the future will be a variation. In a structurally changing market, that assumption is increasingly unreliable.' },
              { num: 'Problem 02', title: 'Doesn\'t Connect Inputs to Outputs', desc: 'A top-down percentage assumption tells you what you want the revenue to be. It doesn\'t tell you how many leads you need, what your conversion rate has to be, or what occupancy mix generates the target. Without those inputs, you can only hope for the number.' },
              { num: 'Problem 03', title: 'Creates False Precision', desc: 'A spreadsheet that outputs a revenue number to two decimal places feels like a plan regardless of how uncertain the inputs are. Most hospitality forecasts confuse the output of the model with the quality of the thinking that went into it.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '2.5rem 2.5rem 2.5rem ' + (i === 2 ? '0' : '2.5rem'), borderRight: i !== 2 ? '2px solid #B8924A' : 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2rem', fontWeight: 300, color: '#B8924A', lineHeight: 1, marginBottom: '0.75rem' }}>{item.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.75rem', lineHeight: 1.2 }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#1C1A17' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUR REVENUE STREAMS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#1C1A17', borderBottom: '2px solid #3a3733' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Framework
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Bottom-up. By segment.<br/>Reconciled against<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>the market.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              A properly structured hospitality revenue plan is built from the bottom up across four revenue streams, then reconciled against top-down market benchmarks. The gap between those two numbers is where the most useful planning conversations happen.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '2px solid #3a3733' }}>
            {[
              { num: '01', title: 'Demand Segmentation', desc: 'What percentage of your occupancy comes from which segments — leisure transient, corporate, group, trade/travel advisor, OTA, direct — and what are the characteristics of each in terms of average rate, length of stay, booking lead time, and cancellation behavior. Most operators know their total occupancy. Far fewer know their segment mix with any precision.' },
              { num: '02', title: 'Rate Architecture', desc: 'Your rate strategy — the relationship between rate tiers, booking windows, occupancy levels, and day-of-week patterns — is the single biggest lever on RevPAR. This section builds the rate architecture that your revenue management system should be executing against, not just the rate you set and forget.' },
              { num: '03', title: 'Pipeline Modeling', desc: 'For operators with a direct or B2B sales component, the pipeline model translates sales activity into projected revenue. How many proposals in the pipeline, at what conversion rate, at what average value, closing in which periods. This is where the Revenue Factory framework and the revenue planning framework intersect.' },
              { num: '04', title: 'Ancillary Revenue', desc: 'For properties with food and beverage, spa, members services, or other ancillary revenue streams, this section builds the model for each stream independently — with its own demand assumptions, average spend per cover or transaction, and capture rate against room occupancy.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', padding: '2.5rem 0', borderBottom: i < 3 ? '2px solid #3a3733' : 'none', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '2.5rem', fontWeight: 300, color: '#2e2b26', lineHeight: 1 }}>{item.num}</div>
                <div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.75rem', lineHeight: 1.2 }}>{item.title}</h3>
                  <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#E8E4DB', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            What This Framework Produces
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '3rem' }}>
            Six metrics that actually <em style={{ fontStyle: 'italic', color: '#B8924A' }}>drive decisions.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '2px solid #B8924A' }}>
            {[
              { num: 'Metric 01', title: 'RevPAR by segment and period' },
              { num: 'Metric 02', title: 'ADR by segment, channel, and booking window' },
              { num: 'Metric 03', title: 'Occupancy targets by segment and period' },
              { num: 'Metric 04', title: 'TRevPAR including ancillary revenue' },
              { num: 'Metric 05', title: 'Cost per acquired customer by channel' },
              { num: 'Metric 06', title: 'Booking pace versus plan at defined intervals' }
            ].map((metric, i) => (
              <div key={i} style={{ padding: '2rem 2rem 2rem ' + (i % 3 === 2 ? '0' : '2rem'), borderRight: i % 3 !== 2 ? '2px solid #B8924A' : 'none', borderBottom: i < 3 ? '2px solid #B8924A' : 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 300, color: '#B8924A', lineHeight: 1, marginBottom: '0.75rem' }}>{metric.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2 }}>{metric.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO + CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '2px solid #B8924A' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Who This Is For
              </div>
              <ul style={{ listStyle: 'none', borderTop: '2px solid #B8924A', margin: 0, padding: 0 }}>
                {[
                  'Independent hotel operators who want to move from intuition-based to data-driven revenue management',
                  'Ownership groups whose management company provides top-line forecasts without the underlying logic',
                  'Investors conducting due diligence on an existing hospitality asset\'s revenue potential',
                  'Operators preparing a business plan for a new property, acquisition, or refinancing'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '2px solid #B8924A', fontSize: '0.9375rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '1.5rem' }}>
                Ready to build a forecast<br/>you can actually<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>manage against?</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', marginBottom: '2rem' }}>
                Build from inputs, not from desired outputs. The model tells you what the revenue can be. The plan tells you what you have to do to get there.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Build your revenue model with Aperture
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#1C1A17', border: '1px solid #1C1A17', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
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
