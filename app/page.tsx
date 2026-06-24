'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Nav />

      {/* ══════ HERO ══════ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem,10vw,8rem) 0 0', borderBottom: '1px solid #2e2b26', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'end', paddingBottom: 'clamp(4rem,8vw,7rem)' }}>
            {/* LEFT */}
            <div style={{ paddingBottom: 'clamp(4rem,8vw,7rem)' }}>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', marginBottom:'2rem' }}>
                <div style={{ width:'2px', height:'1.25rem', background:'#B8924A', flexShrink:0 }}></div>
                <span style={{ fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#F0EDE6' }}>Strategy · Intelligence · Automation</span>
              </div>
              <h1 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(3rem,5.5vw,5rem)', fontWeight:300, lineHeight:1.06, color:'#F0EDE6', marginBottom:'1.75rem' }}>
                The Modern<br/>
                <em style={{ fontStyle:'italic', color:'#B8924A' }}>Growth Stack</em><br/>
                for Ambitious<br/>Businesses.
              </h1>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#F0EDE6', marginBottom:'0.875rem', maxWidth:'44ch' }}>
                Most businesses don't have a marketing problem. They have an intelligence problem.
              </p>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#F0EDE6', marginBottom:'2.5rem', maxWidth:'44ch' }}>
                We combine data strategy, AI agents, automation, and commercial expertise to help businesses create more predictable revenue, more efficient operations, and better customer experiences.
              </p>
              <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
                <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', padding:'0.875rem 2.25rem', background:'#B8924A', color:'#F0EDE6', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', textDecoration:'none', border:'none', cursor:'pointer', transition:'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
                  Start a conversation
                </Link>
                <Link href="/how-we-work" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', padding:'0.875rem 2.25rem', background:'transparent', color:'#F0EDE6', border:'1px solid #4a4845', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', textDecoration:'none', transition:'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                  See how we work
                </Link>
              </div>
            </div>

            {/* RIGHT: Three pillars */}
            <div style={{ paddingBottom: 'clamp(4rem,8vw,7rem)', borderLeft:'1px solid #2e2b26', paddingLeft:'3rem' }}>
              <div style={{ fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#B8924A', marginBottom:'1.75rem' }}>
                Build a business that grows with intelligence, not just headcount.
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0' }}>
                <div style={{ padding:'1.5rem 0', borderBottom:'1px solid #2e2b26' }}>
                  <div style={{ fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'#B8924A', marginBottom:'0.5rem' }}>Data & Intelligence</div>
                  <p style={{ fontSize:'0.9375rem', fontWeight:300, lineHeight:1.7, color:'#F0EDE6', margin:0 }}>Transform fragmented customer, operational, and market data into actionable business intelligence that powers better decisions and more profitable growth.</p>
                </div>
                <div style={{ padding:'1.5rem 0', borderBottom:'1px solid #2e2b26' }}>
                  <div style={{ fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'#B8924A', marginBottom:'0.5rem' }}>AI Agents & Automation</div>
                  <p style={{ fontSize:'0.9375rem', fontWeight:300, lineHeight:1.7, color:'#F0EDE6', margin:0 }}>Deploy AI-powered agents that engage prospects, respond to customers, automate workflows, and eliminate repetitive tasks. Capability without headcount.</p>
                </div>
                <div style={{ padding:'1.5rem 0' }}>
                  <div style={{ fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', color:'#B8924A', marginBottom:'0.5rem' }}>Revenue & Growth Systems</div>
                  <p style={{ fontSize:'0.9375rem', fontWeight:300, lineHeight:1.7, color:'#F0EDE6', margin:0 }}>Scalable acquisition, retention, and expansion strategies that create predictable pipelines and measurable revenue outcomes. From lead generation to lifecycle optimization.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ INTELLIGENCE PROBLEM ══════ */}
      <section style={{ padding:'clamp(5rem,10vw,9rem) 0', borderBottom:'1px solid #D4CFC6' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6rem', alignItems:'start' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#6B6760', marginBottom:'2rem' }}>
                <span style={{ width:'2px', height:'1.25rem', background:'#B8924A', flexShrink:0 }}></span>
                Why Most Businesses Plateau
              </div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(2.25rem,3.5vw,3.25rem)', fontWeight:300, lineHeight:1.15, color:'#1C1A17' }}>
                It's not a<br/>marketing problem.<br/><em style={{ fontStyle:'italic', color:'#B8924A' }}>It's an intelligence problem.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#1C1A17', marginBottom:'1.25rem' }}>
                Most growing businesses are sitting on valuable data they can't act on, running manual processes that don't scale, and buying one-off tactics that produce inconsistent results. The symptom looks like a revenue problem. The cause is almost always a systems problem.
              </p>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#1C1A17', marginBottom:'2rem' }}>
                Aperture builds the underlying infrastructure — data strategy, AI agents, automation, and commercial systems — that turns a good business into one that compounds.
              </p>
              <ul style={{ listStyle:'none', borderTop:'1px solid #D4CFC6', margin:0, padding:0 }}>
                {[
                  'Customer information spread across disconnected systems with no actionable view',
                  'Inconsistent lead flow and unpredictable revenue that can\'t be forecast or planned around',
                  'Missed inquiries, slow response times, and administrative bottlenecks eating into capacity',
                  'Growth that requires proportional headcount increases to sustain — not systems that scale'
                ].map((item, i) => (
                  <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:'1rem', padding:'0.875rem 0', borderBottom:'1px solid #D4CFC6', fontSize:'0.9375rem', fontWeight:300, color:'#1C1A17', lineHeight:1.6 }}>
                    <span style={{ width:'4px', height:'4px', background:'#B8924A', borderRadius:'50%', flexShrink:0, marginTop:'0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ══════ FOUR SERVICES ══════ */}
      <section style={{ background:'#1C1A17', padding:'clamp(5rem,10vw,9rem) 0', borderBottom:'1px solid #2e2b26' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'end', marginBottom:'4rem' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#F0EDE6', marginBottom:'2rem' }}>
                <span style={{ width:'2px', height:'1.25rem', background:'#B8924A', flexShrink:0 }}></span>
                What We Build
              </div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(2.25rem,3.5vw,3.25rem)', fontWeight:300, lineHeight:1.15, color:'#F0EDE6' }}>
                Four capabilities.<br/>One <em style={{ fontStyle:'italic', color:'#B8924A' }}>integrated system.</em>
              </h2>
            </div>
            <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#F0EDE6' }}>
              Aperture doesn't deliver isolated tactics. We build the interconnected systems — data, AI, automation, and commercial strategy — that produce consistent, measurable outcomes at scale.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(4, 1fr)', gap:'0', borderTop:'1px solid #2e2b26' }}>
            {[
              { num:'01', title:'Data & Intelligence', desc:'Transform fragmented customer, operational, and market data into actionable business intelligence. We build the foundation that powers better decisions, stronger targeting, and more profitable growth.', link:'/data-intelligence' },
              { num:'02', title:'AI Agents & Automation', desc:'Deploy AI-powered agents that work alongside your team to engage prospects, respond to customers, automate workflows, and eliminate repetitive tasks. Adding capability without adding headcount.', link:'/ai-solutions' },
              { num:'03', title:'Revenue & Growth Systems', desc:'Design scalable acquisition, retention, and expansion strategies that create predictable pipelines and measurable revenue outcomes. From lead generation to customer lifecycle optimization.', link:'/capabilities' },
              { num:'04', title:'Commercial Strategy', desc:'Align pricing, positioning, channels, partnerships, and customer experience around a unified growth strategy that improves both revenue and profitability. Strategy that connects to execution.', link:'/how-we-work' }
            ].map((service, i) => (
              <div key={i} style={{ padding:'2.5rem 2.5rem 2.5rem 0', borderRight: i < 3 ? '1px solid #2e2b26' : 'none' }}>
                <div style={{ fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#B8924A', marginBottom:'1.25rem' }}>{service.num}</div>
                <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'1.5rem', fontWeight:400, color:'#F0EDE6', lineHeight:1.2, marginBottom:'0.875rem' }}>{service.title}</h3>
                <p style={{ fontSize:'0.875rem', fontWeight:300, lineHeight:1.7, color:'#F0EDE6', marginBottom:'1.5rem' }}>{service.desc}</p>
                <Link href={service.link} style={{ fontSize:'0.625rem', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', color:'#B8924A', borderBottom:'1px solid #2e2b26', paddingBottom:'2px', display:'inline-flex', textDecoration:'none' }}>
                  Learn more →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ WHO WE HELP ══════ */}
      <section style={{ padding:'clamp(5rem,10vw,9rem) 0', borderBottom:'1px solid #D4CFC6' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'6rem', alignItems:'end', marginBottom:'4rem' }}>
            <div>
              <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#6B6760', marginBottom:'2rem' }}>
                <span style={{ width:'2px', height:'1.25rem', background:'#B8924A', flexShrink:0 }}></span>
                Who We Help
              </div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(2.25rem,3.5vw,3.25rem)', fontWeight:300, lineHeight:1.15, color:'#1C1A17' }}>
                Segmented by<br/>challenge, not<br/><em style={{ fontStyle:'italic', color:'#B8924A' }}>industry.</em>
              </h2>
            </div>
            <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#1C1A17' }}>
              The businesses we work best with don't share an industry. They share a problem — they're growing, they're capable, and they've hit a ceiling that more effort alone won't break through. They need systems.
            </p>
          </div>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:'1.5rem' }}>
            {[
              {
                title: 'Struggling to Generate Consistent Demand',
                items: ['Inconsistent lead flow with no reliable pipeline', 'Low brand visibility in your target market', 'Poor conversion rates from traffic to customers', 'High acquisition costs eating into margins']
              },
              {
                title: 'Drowning in Manual Work',
                items: ['Missed inquiries from slow or inconsistent follow-up', 'Slow response times losing customers to faster competitors', 'Administrative bottlenecks constraining capacity', 'Skilled staff spending time on work that should be automated']
              },
              {
                title: 'Sitting on Valuable Data You Can\'t Use',
                items: ['Customer information spread across disconnected systems', 'No actionable insights from the data you do have', 'No forecasting capability — running on instinct and prior year', 'Limited visibility into which activities actually drive performance']
              },
              {
                title: 'Ready to Scale and Need the Infrastructure to Do It',
                items: ['Expanding locations or markets that require scalable systems', 'Growing teams that need process and infrastructure, not just headcount', 'New products or services that need a commercial launch strategy', 'New markets requiring targeted intelligence and positioning']
              }
            ].map((challenge, i) => (
              <div key={i} style={{ background: i === 3 ? '#1C1A17' : '#E8E4DB', border: i === 3 ? '1px solid #2e2b26' : '1px solid #D4CFC6', padding:'2.5rem' }}>
                <h3 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'1.5rem', fontWeight:400, color: i === 3 ? '#F0EDE6' : '#1C1A17', lineHeight:1.2, marginBottom:'1.25rem' }}>
                  {challenge.title}
                </h3>
                <ul style={{ listStyle:'none', borderTop: i === 3 ? '1px solid #2e2b26' : '1px solid #D4CFC6', margin:0, padding:0 }}>
                  {challenge.items.map((item, j) => (
                    <li key={j} style={{ display:'flex', alignItems:'flex-start', gap:'0.75rem', padding:'0.75rem 0', borderBottom: i === 3 ? '1px solid #2e2b26' : '1px solid #D4CFC6', fontSize:'0.875rem', fontWeight:300, color: i === 3 ? '#F0EDE6' : '#1C1A17', lineHeight:1.5 }}>
                      <span style={{ width:'4px', height:'4px', background:'#B8924A', borderRadius:'50%', flexShrink:0, marginTop:'0.55rem' }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ TESTIMONIALS ══════ */}
      <section style={{ background:'#E8E4DB', padding:'clamp(5rem,10vw,9rem) 0', borderBottom:'1px solid #D4CFC6' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#6B6760', marginBottom:'4rem' }}>
            <span style={{ width:'2px', height:'1.25rem', background:'#B8924A', flexShrink:0 }}></span>
            What Clients Say
          </div>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'3rem' }}>
            {[
              {
                quote: '"Brandon has a unique ability to connect strategy with execution. He consistently identified opportunities others missed, built alignment across teams, and helped us accelerate expansion while maintaining a strong focus on agent success. His combination of commercial acumen, relationship-building, and operational discipline makes him an invaluable partner."',
                author: 'Ari Afshar, Founder',
                company: 'Voyage Real Estate'
              },
              {
                quote: '"Working with Brandon felt like having a true strategic partner rather than an outside advisor. He quickly understood our business, challenged our assumptions in the right ways, and helped translate complex growth objectives into practical, measurable actions. His ability to bridge data, marketing, and business development is exceptional."',
                author: 'Michael Silver, CEO',
                company: 'Foto Comercio'
              }
            ].map((testimonial, i) => (
              <div key={i} style={{ border:'1px solid #D4CFC6', padding:'2.5rem', background:'#F0EDE6' }}>
                <p style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'1.25rem', fontWeight:300, lineHeight:1.6, color:'#1C1A17', marginBottom:'1.5rem', fontStyle:'italic' }}>
                  {testimonial.quote}
                </p>
                <div style={{ borderTop:'1px solid #D4CFC6', paddingTop:'1rem' }}>
                  <div style={{ fontSize:'0.875rem', fontWeight:400, color:'#1C1A17' }}>{testimonial.author}</div>
                  <div style={{ fontSize:'0.75rem', fontWeight:300, color:'#6B6760' }}>{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ ENGAGEMENTS ══════ */}
      <section style={{ padding:'clamp(5rem,10vw,9rem) 0', borderBottom:'1px solid #D4CFC6' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'0.75rem', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.18em', textTransform:'uppercase', color:'#6B6760', marginBottom:'2rem' }}>
            <span style={{ width:'2px', height:'1.25rem', background:'#B8924A', flexShrink:0 }}></span>
            Selected Engagements
          </div>
          <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(2rem,3vw,2.75rem)', fontWeight:300, lineHeight:1.15, color:'#1C1A17', marginBottom:'3.5rem', fontStyle:'italic' }}>
            Who we've <em style={{ color:'#B8924A' }}>worked with.</em>
          </h2>

          <div style={{ display:'grid', gridTemplateColumns:'repeat(3, 1fr)', gap:'0', borderTop:'1px solid #D4CFC6' }}>
            {[
              { label:'Real Estate', company:'Voyage Real Estate', desc:'Commercial strategy & AI-powered lead generation' },
              { label:'Venture', company:'Wilbur Labs', desc:'GTM strategy & enterprise sales process design' },
              { label:'Hospitality', company:'Waratah / Morrison Hotel', desc:'Due diligence, launch strategy & partner negotiations' },
              { label:'AI Infrastructure', company:'Edge Swarm', desc:'GTM strategy, partner strategy & fundraising' },
              { label:'Spirits', company:'Beverly Spirits', desc:'Commercial acceleration & market expansion' },
              { label:'Experiential', company:'Foto Comercio', desc:'GTM strategy & channel partner development' }
            ].map((engagement, i) => (
              <div key={i} style={{ padding:'1.5rem 1.5rem 1.5rem 0', borderRight: i % 3 !== 2 ? '1px solid #D4CFC6' : 'none', borderBottom: i < 3 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontSize:'0.5625rem', fontWeight:500, letterSpacing:'0.14em', textTransform:'uppercase', color:'#B8924A', marginBottom:'0.375rem' }}>
                  {engagement.label}
                </div>
                <div style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'1.125rem', fontWeight:400, color:'#1C1A17', marginBottom:'0.375rem' }}>
                  {engagement.company}
                </div>
                <div style={{ fontSize:'0.8125rem', fontWeight:300, color:'#6B6760' }}>
                  {engagement.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════ FINAL CTA ══════ */}
      <section style={{ background:'#1C1A17', padding:'clamp(5rem,10vw,8rem) 0', borderBottom:'1px solid #2e2b26' }}>
        <div style={{ maxWidth:'1140px', margin:'0 auto', padding:'0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'5rem', alignItems:'center' }}>
            <div>
              <h2 style={{ fontFamily:"'Cormorant Garamond',Georgia,serif", fontSize:'clamp(2.25rem,3.5vw,3.25rem)', fontWeight:300, lineHeight:1.15, color:'#F0EDE6', marginBottom:'1.25rem' }}>
                Let's talk about<br/>your <em style={{ fontStyle:'italic', color:'#B8924A' }}>business.</em>
              </h2>
              <p style={{ fontSize:'1.0625rem', fontWeight:300, lineHeight:1.8, color:'#F0EDE6' }}>
                Tell us where you are and what you're working on. Brandon reviews every submission personally and follows up within one business day.
              </p>
            </div>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.875rem' }}>
              <Link href="/contact" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', padding:'0.875rem 2.25rem', background:'#B8924A', color:'#F0EDE6', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', textDecoration:'none', border:'none', cursor:'pointer', transition:'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
                Start a conversation
              </Link>
              <Link href="/how-we-work" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', padding:'0.875rem 2.25rem', background:'transparent', color:'#F0EDE6', border:'1px solid #4a4845', fontSize:'0.6875rem', fontWeight:500, letterSpacing:'0.16em', textTransform:'uppercase', textDecoration:'none', transition:'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                See how we work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <IntakeForm />
      <Footer />
    </>
  )
}
