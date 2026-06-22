'use client'

import Nav from '@/components/Nav'
import Link from 'next/link'

export default function LuxuryBrandPositioningPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 clamp(4rem,8vw,7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            <span style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6' }}>Marketing Strategy Framework</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'flex-end' }}>
            <div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', margin: 0, marginBottom: '1.75rem' }}>
                Luxury isn't a price point.<br/>It's a promise you have<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>to earn repeatedly.</em>
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
                Most brands trying to position in the luxury tier describe what they are instead of what they make the customer feel. This framework builds the positioning architecture that actually holds under pressure.
              </p>
              <div style={{ display: 'flex', gap: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #2e2b26' }}>
                <div>
                  <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.25rem' }}>Category</div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6' }}>Marketing Strategy</div>
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
                Every luxury brand sounds<br/>exactly the<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>same.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Positioning a luxury hospitality or consumer brand is categorically different from positioning a product or a service. The standard marketing advice — find your USP, articulate your value proposition, target your demographic — fails in luxury contexts because luxury buyers don't make decisions on value propositions.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                They make decisions on identity, trust, and the belief that choosing this brand says something true about who they are.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
                The practical consequence: most boutique hotels and luxury consumer brands are positioned identically. Same language. Same visual register. Same vague promise. When everything looks and sounds the same, price becomes the only differentiator. And competing on price in luxury is a death spiral.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT POSITIONING DOES */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', background: '#E8E4DB', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            What Positioning Actually Does
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
              Good positioning does<br/>three things<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>simultaneously.</em>
            </h2>
            <div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', margin: 0, padding: 0, marginBottom: '1.5rem' }}>
                {[
                  'It differentiates you from every alternative your buyer is considering',
                  'It attracts the right customer and repels the wrong one',
                  'It remains true under pressure — when a competitor copies your marketing, when a review goes badly, when a staff member leaves'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.9375rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem', display: 'block' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', margin: 0 }}>
                Most hospitality positioning fails at all three. This framework is designed to build positioning that passes all three tests before it goes anywhere near a website or a campaign.
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
                The Framework
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Five layers.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>defensible position.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Positioning is built in layers, each one dependent on the one before it. Skipping to the executional layers — voice, visuals, taglines — before the strategic layers are resolved is why most luxury brands end up repositioning every two to three years.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', borderTop: '1px solid #2e2b26' }}>
            {[
              { num: '01', title: 'Category Definition', desc: 'What category are you actually in? Not "boutique hotel" or "luxury spirits brand" — those are product descriptions. The category is the mental frame your buyer uses to evaluate you. Defining it narrowly and specifically changes who your competitors are, what your buyer compares you against, and how you win.' },
              { num: '02', title: 'Buyer Truth', desc: 'The specific, true, unsaid thing your ideal buyer believes about themselves, their taste, or what they deserve — that your brand can authentically affirm. Luxury positioning is always, at its core, a mirror. You\'re not selling a room or a bottle. You\'re affirming a self-image.' },
              { num: '03', title: 'The Defensible Claim', desc: 'The single most specific, credible thing you can say that no competitor can honestly say also. Not "the most luxurious" or "the most exclusive." The defensible claim is usually specific, often operational, and occasionally uncomfortable because it requires you to actually be different, not just describe yourself differently.' },
              { num: '04', title: 'Proof Architecture', desc: 'The hierarchy of evidence that makes your claim believable. For hospitality brands this typically runs: physical evidence → staff behavior → guest testimonial → editorial coverage → brand story. Most brands build these elements but never sequence them in a way that creates cumulative trust.' },
              { num: '05', title: 'Voice & Register', desc: 'How a positioned brand speaks, not just what it says. Luxury brands that speak like everyone else undercut their own positioning regardless of how good the underlying claim is. This layer defines the specific verbal and visual register that makes every piece of communication feel consistent with the brand\'s claimed position.' }
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
                  'Boutique hotel operators who feel their property is better than how it\'s perceived in the market',
                  'Luxury spirits and consumer brands competing against well-funded incumbents',
                  'Hospitality brands preparing for a rebrand or repositioning exercise',
                  'Founders who know what makes them different but can\'t articulate it in a way that lands'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.9375rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem', display: 'block' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2rem, 3vw, 2.75rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '1.5rem' }}>
                Ready to build a position<br/>that actually<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>holds?</em>
              </h2>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', marginBottom: '2rem' }}>
                Start with category definition. Without it, every other positioning investment is aimed at a moving target.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
                  Build your positioning with Aperture
                </Link>
                <Link href="/apertureframeworks" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#1C1A17', border: '1px solid #1C1A17', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', borderRadius: '2px' }}>
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
