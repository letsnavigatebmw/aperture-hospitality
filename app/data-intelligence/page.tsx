'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'
import { useState } from 'react'

export default function DataIntelligencePage() {
  const [openFaqId, setOpenFaqId] = useState(0)

  const faqItems = [
    {
      q: 'Is this just for real estate agents?',
      a: 'No. Navigate is built for anyone who needs to identify, reach, and convert property owners — including hotel operators looking at acquisition targets, luxury brand operators prospecting for new retail or hospitality locations, and investors tracking portfolio opportunities. Aperture configures it for your specific context.'
    },
    {
      q: 'How accurate is the owner contact data?',
      a: "Navigate's proprietary data process is built specifically around contact accuracy — it's the platform's core differentiator. Data is continuously refreshed, and Navigate Profile+ provides deeper owner intelligence for higher-priority targets. In practice, it's significantly more reliable than standard list-pull tools."
    },
    {
      q: "What does Aperture's configuration actually include?",
      a: "We set up your territory, configure your property and owner filters for your specific market, write and structure your initial outreach campaigns, and train your team on the platform. You don't buy software and figure it out — you get a working system set up for your context from day one."
    },
    {
      q: 'Can I use Navigate alongside a full Aperture engagement?',
      a: "Yes — and it's often most powerful that way. Navigate provides the prospecting and outreach infrastructure; a full Aperture strategic engagement provides the commercial strategy, positioning, and GTM structure that makes that outreach land. The two are designed to work together."
    },
    {
      q: 'Can I export contacts to my own CRM?',
      a: 'Yes. Navigate allows contact export to external tools if you prefer to work within your existing CRM. Enterprise plans include API access for deeper integration. For most users, the in-platform campaign tools are sufficient — but the option is there.'
    },
    {
      q: 'What markets does Navigate cover?',
      a: 'Navigate covers US markets. Coverage depth varies by market — speak to Aperture about your specific geography and we\'ll give you an accurate picture of data availability before you commit to a plan.'
    }
  ]

  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Left content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A', display: 'block' }}></span>
                Data & Intelligence
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                Turn your data<br/>into <em style={{ fontStyle: 'italic', color: '#B8924A' }}>deal flow.</em>
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                Aperture deploys Navigate — a property intelligence platform built for real estate professionals — to give hospitality operators, investors, and luxury brands a smarter, more precise way to prospect, connect, and convert.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <a href="#pricing" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
                  Get started
                </a>
                <a href="https://app.guidde.com/share/playbooks/orS5f73hqc9QkNyE9kTy1M?origin=eLXF4oshrtU3laZW7wh2RQaDByy1&mode=videoAndDoc" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                  See how it works
                </a>
              </div>
            </div>

            {/* Right card - Features Image */}
            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', borderRadius: '8px', overflow: 'hidden' }}>
              <img
                src="/navigate-hero.jpg"
                alt="Navigate - Property Intelligence Platform"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS NAVIGATE */}
      <section id="what-is-navigate" style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Platform
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Property intelligence<br/>built for how<br/>operators <em style={{ fontStyle: 'italic', color: '#B8924A' }}>actually work.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1.25rem' }}>
                Navigate brings together owner intelligence, property data, and marketing automation into a single platform. It removes the manual work from prospecting — so your team spends less time behind a screen and more time talking to real prospects.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1.25rem' }}>
                Aperture configures and deploys Navigate specifically for hospitality, real estate, and luxury brand contexts — setting up the right search criteria, the right outreach tone, and the right campaign structure for your market. You don't buy a tool and figure it out. You get a configured, working system.
              </p>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', margin: 0, padding: 0 }}>
                {[
                  'Define your territory and filter for the right properties',
                  'Access verified owner contact information instantly',
                  'Organize prospects into campaigns with one click',
                  'Launch personalized outreach at scale — email, letter, postcard',
                  'Monitor your market continuously for fresh data',
                  'Export contacts to your own tools if needed'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.9375rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT DEMOS */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            Product Demos
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
            See the Platform in <em style={{ fontStyle: 'italic', color: '#F0EDE6' }}>Action.</em>
          </h2>
          <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '3rem', maxWidth: '56ch' }}>
            Watch walkthroughs of both Navigate and Nexus, our two core product offerings.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Navigate Demo Card */}
            <div style={{ background: '#252220', border: '1px solid #2e2b26', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <a href="https://app.guidde.com/share/playbooks/orS5f73hqc9QkNyE9kTy1M?origin=eLXF4oshrtU3laZW7wh2RQaDByy1&mode=videoAndDoc" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000', backgroundImage: 'url(/navigate-demo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block', textDecoration: 'none' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.3)', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)')}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', zIndex: 10 }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                    <span style={{ fontSize: '24px', color: '#1C1A17', marginLeft: '4px' }}>▶</span>
                  </div>
                  <span style={{ position: 'absolute', color: '#F0EDE6', fontSize: '0.875rem', fontWeight: 500, bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                    Watch Navigate Demo
                  </span>
                </div>
              </a>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9370DB', marginBottom: '1rem' }}>
                  Product Suite 01
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.625rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '1rem' }}>
                  Navigate
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                  An end-to-end walkthrough of the prospecting intelligence platform, from geo-targeted list building through campaign execution and conversion tracking.
                </p>
                <a href="https://app.guidde.com/share/playbooks/orS5f73hqc9QkNyE9kTy1M?origin=eLXF4oshrtU3laZW7wh2RQaDByy1&mode=videoAndDoc" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#9370DB', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9370DB')}>
                  Watch Demo →
                </a>
              </div>
            </div>

            {/* Nexus Demo Card */}
            <div style={{ background: '#252220', border: '1px solid #2e2b26', borderRadius: '8px', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <a href="https://app.guidde.com/share/playbooks/hRYrhiL82diYNCAd1iNfQL?origin=eLXF4oshrtU3laZW7wh2RQaDByy1&mode=videoAndDoc" target="_blank" rel="noopener noreferrer" style={{ position: 'relative', width: '100%', paddingBottom: '56.25%', background: '#000', backgroundImage: 'url(/nexus-demo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', display: 'block', textDecoration: 'none' }}>
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'rgba(0, 0, 0, 0.3)', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.5)')} onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(0, 0, 0, 0.3)')}>
                  <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#F0EDE6', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s', zIndex: 10 }} onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')} onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}>
                    <span style={{ fontSize: '24px', color: '#1C1A17', marginLeft: '4px' }}>▶</span>
                  </div>
                  <span style={{ position: 'absolute', color: '#F0EDE6', fontSize: '0.875rem', fontWeight: 500, bottom: '1rem', left: '50%', transform: 'translateX(-50%)', zIndex: 10 }}>
                    Watch Nexus Demo
                  </span>
                </div>
              </a>
              <div style={{ padding: '2rem' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#9370DB', marginBottom: '1rem' }}>
                  Product Suite 02
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.625rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '1rem' }}>
                  Nexus
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                  A demonstration of the Nexus enterprise infrastructure layer, showing how proptech platforms and brokerages embed Navigate's intelligence capabilities via API and MCP.
                </p>
                <a href="https://app.guidde.com/share/playbooks/hRYrhiL82diYNCAd1iNfQL?origin=eLXF4oshrtU3laZW7wh2RQaDByy1&mode=videoAndDoc" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.875rem', fontWeight: 500, color: '#9370DB', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', transition: 'color 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.color = '#B8924A')} onMouseLeave={(e) => (e.currentTarget.style.color = '#9370DB')}>
                  Watch Demo →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THREE PILLARS */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Data & Intelligence
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Three types of data.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>unified view.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Navigate combines three distinct intelligence layers into a single workflow — so you're never switching between platforms, chasing outdated information, or guessing at who to contact next.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: '1px solid #2e2b26' }}>
            {[
              {
                num: '01',
                name: 'Owner Intelligence',
                desc: 'Know exactly who owns what — with verified contact information, ownership history, and profile data you can trust.',
                features: ['Verified owner name, email, and phone', 'Ownership history and acquisition dates', 'Navigate Profile+ for deeper owner insights', 'Continuous data refresh for accuracy']
              },
              {
                num: '02',
                name: 'Property Intelligence',
                desc: 'Map-based search across your target market — filter by property type, status, location, and deal criteria that match your strategy.',
                features: ['Draw-to-search territory definition', 'Off-market property identification', 'Recently sold and expired listing alerts', 'Portfolio-level and asset-level views']
              },
              {
                num: '03',
                name: 'Marketing Intelligence',
                desc: 'Reach the right prospects at the right moment — with automated, personalized outreach that goes out the door in seconds, not days.',
                features: ['Email, letter, and postcard campaigns', 'One-click personalized mass outreach', 'Timing optimization for highest conversion', 'Campaign tracking and pipeline reporting']
              }
            ].map((pillar, i) => (
              <div key={i} style={{ padding: '3rem 2.5rem 3rem 0', borderRight: i < 2 ? '1px solid #2e2b26' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>
                  {pillar.num}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.625rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '1rem' }}>
                  {pillar.name}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                  {pillar.desc}
                </p>
                <ul style={{ listStyle: 'none', borderTop: '1px solid #2e2b26', padding: 0, margin: 0 }}>
                  {pillar.features.map((feature, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                      <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            Approach
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '3.5rem' }}>
            From search to <em style={{ fontStyle: 'italic', color: '#B8924A' }}>outreach in minutes.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid #D4CFC6' }}>
            {[
              { num: '01', title: 'Choose your market', desc: 'Draw your territory, set your filters, and define your ideal property and owner criteria. No technical setup required.' },
              { num: '02', title: 'Access verified data', desc: 'Instantly surface owner contact information, property details, and market activity — accurate and ready to act on.' },
              { num: '03', title: 'Launch your campaign', desc: 'Customize your message and send personalized outreach at scale — email, letter, or postcard — directly from the platform.' },
              { num: '04', title: 'Convert opportunities', desc: 'Track response, manage your pipeline, and move faster than the competition on every opportunity you uncover.' }
            ].map((step, i) => (
              <div key={i} style={{ padding: '2.5rem 2rem 2.5rem 0', borderRight: i < 3 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, marginBottom: '0.875rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
              Good<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>questions.</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {faqItems.map((item, i) => (
                <div
                  key={i}
                  style={{ borderBottom: '1px solid #2e2b26', padding: '1.75rem 0', cursor: 'pointer' }}
                  onClick={() => setOpenFaqId(openFaqId === i ? -1 : i)}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem' }}>
                    <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.3, margin: 0 }}>
                      {item.q}
                    </h3>
                    <span style={{ color: '#B8924A', fontSize: '1.25rem', lineHeight: 1, transition: 'transform 0.2s', transform: openFaqId === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                      +
                    </span>
                  </div>
                  {openFaqId === i && (
                    <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#F0EDE6', marginTop: '1.25rem', margin: '1.25rem 0 0 0' }}>
                      {item.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '22ch', margin: 0 }}>
              Ready to prospect<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>smarter?</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flexShrink: 0 }}>
              <Link href="/contact?product=navigate" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Get started with Navigate
              </Link>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#1C1A17', border: '1px solid #1C1A17', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Talk to Brandon first
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-intelligence" />

      <Footer />
    </>
  )
}
