'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function DigitalMarketingPlaybookPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Digital Marketing Framework</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0, marginBottom: '1.75rem' }}>
                More content is not<br/>the answer.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>A coherent system is.</em>
              </h1>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Build your marketing system
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  ← All frameworks
                </Link>
              </div>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.25rem' }}>
                Boutique hospitality and luxury brands don't win the digital marketing game by outspending the competition. They win by being more precise. This playbook is the system behind that precision.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26' }}>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Category</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6' }}>Digital Marketing</div>
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
                Most small operators are marketing<br/>without<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>a system.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Most small hospitality operators approach digital marketing the same way: post consistently on Instagram, run some Google Ads when the calendar looks thin, send an occasional email to the list, and hope the algorithm is kind. They know it's not working as well as it should. They don't know why, or what to do differently.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                The problem isn't effort. It's architecture. Without a coherent system connecting channel to message to audience to measurement, digital marketing becomes an expense that's impossible to optimize because you can't isolate what's producing what.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
                The brands that do digital marketing well — the independent properties that maintain high occupancy at premium rates without heavy OTA dependence, the luxury consumer brands that build cult followings without venture-scale ad budgets — have built an integrated system, not a collection of activities. This playbook is that system.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FIVE LAYERS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Five-Layer System
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Each layer depends<br/>on the one<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>before it.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Skipping to executional layers — ads, content, tools — before the strategic layers are resolved is the single most common and most expensive digital marketing mistake in hospitality. Most operators start at layer three.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #2e2b26' }}>
            {[
              { num: '01', title: 'Foundation: Audience Clarity', desc: 'Every other layer in this system depends on a clear, specific answer to who your actual buyer is. Not "affluent travelers." The specific psychographic description, consumption behavior, and channel habits of the person who books fastest, stays longest, spends most, and refers most reliably. If this layer is wrong or vague, every subsequent investment is partially wasted.' },
              { num: '02', title: 'Organic Presence: SEO & Content', desc: 'For boutique hospitality brands, organic search is one of the highest-ROI long-term investments available — and the most neglected. The content strategy that drives this isn\'t volume — it\'s specificity. One well-researched piece that genuinely answers a question your buyer is asking outperforms twenty generic social posts every time.' },
              { num: '03', title: 'Paid Amplification: SEM & Social Ads', desc: 'Paid advertising works when it amplifies what\'s already working organically, retargets people who\'ve already expressed interest, and targets lookalike audiences built from your actual best customers. It fails when treated as a primary demand generation tool for a brand that hasn\'t earned attention yet. The budget allocation question is answered by your conversion data, not best practices.' },
              { num: '04', title: 'Owned Channel: Email & Automation', desc: 'Your email list is the only marketing asset you actually own. Every other channel can change its algorithm, increase its fees, or disappear. The automation sequences that matter most: post-inquiry follow-up, pre-arrival communication, post-stay retention, and win-back reactivation. Most operators use none of these.' },
              { num: '05', title: 'Measurement: Attribution & Optimization', desc: 'The final layer closes the loop between marketing activity and revenue outcome. Which channels produced which bookings, at what cost, from which customer segments. Without this layer, you cannot optimize anything — you can only guess what\'s working and spend accordingly.' }
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

      {/* DIAGNOSTIC */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#E8E4DB', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Before You Build Anything
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
                Start with a diagnostic.<br/>Not a<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>channel decision.</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', marginTop: '1.5rem' }}>
                The most common finding: operators who feel they need to do more on social media actually have a weak organic search presence and an underused email list — two cheaper, higher-ROI investments they're ignoring while spending on channels they can see but can't properly measure.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>Five diagnostic questions</div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', margin: 0, padding: 0, marginBottom: '1.5rem' }}>
                {[
                  'What is your current direct booking percentage, and how has it trended over the last 24 months?',
                  'What percentage of your website traffic comes from organic, paid, direct, and referral respectively?',
                  'What is your email list size, and what are your average open and click rates?',
                  'Which booking channel has your lowest cost per acquisition?',
                  'What is your average guest lifetime value, broken down by acquisition channel?'
                ].map((q, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.9375rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {q}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760' }}>
                The answers determine where to invest first. If you don't know the answers to these five questions, that's also diagnostic information.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHO + CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', background: '#1C1A17', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Who This Is For
              </div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #4a4845', margin: 0, padding: 0 }}>
                {[
                  'Independent hotel and resort operators trying to reduce OTA dependence',
                  'Boutique restaurant and hospitality groups building a digital marketing capability for the first time',
                  'Luxury consumer brands trying to build direct-to-consumer acquisition capability',
                  'Operators with an active social presence that isn\'t translating into bookings or revenue'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #4a4845', fontSize: '0.9375rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Ready to build a marketing<br/>operation that actually<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>converts?</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', marginBottom: '2rem' }}>
                Start with the diagnostic. Five questions. Thirty minutes. You'll know exactly where to invest before we've agreed to anything.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Build your digital marketing system
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
