'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function HospitalityGTMPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Go-to-Market Framework</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0, marginBottom: '1.75rem' }}>
                Your buyer is not who you think.<br/>Your channel is not<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>where you think it is.</em>
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
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }}>
                Most hospitality brands apply generic B2B or B2C go-to-market playbooks to a market that operates by completely different rules. This framework explains why that fails, and what to do instead.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26' }}>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Category</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6' }}>Go-to-Market</div>
                </div>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Status</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#B8924A' }}>Coming Soon — Outline Available</div>
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
                Most hospitality GTM is borrowed<br/>from the wrong<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>playbook.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Go-to-market strategy in hospitality is almost universally misunderstood. Most boutique hotels, luxury travel brands, and independent operators default to one of two broken approaches.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                The first is the B2C consumer play: spend on Instagram, run paid search, hope the OTA algorithm is kind to you, and wait for bookings to come in. It's expensive, competitive, and produces a customer who is loyal to the platform, not the brand.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                The second is the relationship-dependent enterprise approach: rely on a handful of key accounts, a few travel advisors, or one well-connected sales person to carry the number. It works until it doesn't, and when it stops working, there's nothing underneath it.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
                Neither approach is wrong in isolation. Both are wrong as a complete strategy. The problem is that most hospitality brands have never actually defined their go-to-market motion — they've just been doing what everyone else does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR QUESTIONS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#E8E4DB', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            The Framework
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '3rem' }}>
            A go-to-market strategy answers four questions. Most brands have answered <em style={{ fontStyle: 'italic', color: '#B8924A' }}>one.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 0, borderTop: '1px solid #D4CFC6' }}>
            {[
              { num: 'Question 01', title: 'Who is your actual buyer?', desc: 'Not your aspirational guest — your actual buyer. The person who books fastest, stays longest, spends most, and refers most reliably. Most brands describe a demographic. The framework demands a psychographic.' },
              { num: 'Question 02', title: 'Where do they make their decisions?', desc: 'And what do they need to see before they commit? This determines your channel strategy, your content approach, and how much of your marketing budget is wasted reaching people at the wrong moment.' },
              { num: 'Question 03', title: 'What is your message?', desc: 'And how does it earn attention in a market full of identical claims? Most hospitality brands lead with adjectives — intimate, curated, bespoke — that every competitor uses identically. The framework builds the message architecture that actually differentiates.' },
              { num: 'Question 04', title: 'How do you reach them at scale?', desc: 'Without destroying your unit economics. The acquisition motion — the specific tactics, sequences, and touchpoints that move a stranger from awareness to booking — differs by buyer type and must be designed for each.' }
            ].map((q, i) => (
              <div key={i} style={{ padding: '2.5rem 2.5rem 2.5rem ' + (i % 2 === 1 ? '0' : '2.5rem'), borderRight: i % 2 === 0 ? '1px solid #D4CFC6' : 'none', borderBottom: i < 2 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.75rem', fontWeight: 300, color: '#B8924A', lineHeight: 1, marginBottom: '0.75rem' }}>{q.num}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.125rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.75rem', lineHeight: 1.2 }}>{q.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.6, color: '#1C1A17' }}>{q.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FIVE GTM DECISIONS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Five Decisions
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Every hospitality GTM strategy<br/>lives or dies on<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>five decisions.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              These decisions must be made in sequence. Skipping to channel tactics before buyer definition is the single most common — and most expensive — GTM mistake in hospitality.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #2e2b26' }}>
            {[
              { num: '01', title: 'Buyer Definition', desc: 'The difference between "luxury travelers aged 35–55" and "dual-income professional couples who have traveled internationally at least three times in the last two years, value privacy over amenity variety, and book primarily through travel advisors or direct referral." The second profile tells you where to spend money. The first tells you nothing.' },
              { num: '02', title: 'Channel Selection', desc: 'In hospitality, channel is destiny. OTA-heavy distribution means margin compression and brand commoditization. Travel advisor relationships mean slower volume but higher lifetime value and lower churn. Direct is the goal but the hardest to build. This decision covers how to choose the right channel mix for your property type, price point, and growth stage.' },
              { num: '03', title: 'Message Architecture', desc: 'What you actually say, and in what order. The claim that earns initial attention. The proof that builds credibility. The specific differentiator that closes the consideration gap. Most hospitality brands lead with adjectives that every competitor uses identically.' },
              { num: '04', title: 'Acquisition Motion', desc: 'How you actually go and get customers — the specific tactics, sequences, and touchpoints that move a stranger from awareness to booking. Different for B2C leisure, B2B corporate, group, and trade channel. Each requires its own defined motion.' },
              { num: '05', title: 'Retention & Expansion', desc: 'The guest you already have is worth three times the guest you\'re still trying to acquire. Most hospitality GTM thinking stops at the booking. This decision covers how to build repeat visit rates, referral programs, and upsell sequences that compound over time.' }
            ].map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '2rem', padding: '2.5rem 0', borderBottom: i < 4 ? '1px solid #2e2b26' : 'none', alignItems: 'flex-start' }}>
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

      {/* WHO + CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Who This Is For
              </div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', margin: 0, padding: 0 }}>
                {[
                  'Independent hotel owners launching a new property or repositioning an existing one',
                  'Luxury travel brands trying to reduce OTA dependence and build direct distribution',
                  'Wine and spirits brands entering the hospitality channel for the first time',
                  'Operators preparing for expansion into a new market or customer segment'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.9375rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '1.5rem' }}>
                Ready to define<br/>your actual<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>go-to-market?</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', marginBottom: '2rem' }}>
                Start with buyer definition. Everything else follows from knowing precisely who you're building this for.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Start a GTM conversation
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
