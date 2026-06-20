'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export default function CapabilitiesPage() {
  return (
    <>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Left content */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A', display: 'block' }}></span>
                Digital Marketing
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                Marketing that<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>earns attention.</em><br/>Not just impressions.
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                Boutique hospitality and luxury brands don't win by outspending the competition. They win by being more precise — knowing exactly who their customer is, where to reach them, and what to say. Aperture builds the digital marketing capability to make that happen.
              </p>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#9a7a3e')} onMouseLeave={(e) => (e.currentTarget.style.background = '#B8924A')}>
                  Start a conversation
                </Link>
                <a href="#capabilities" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}>
                  See what's included
                </a>
              </div>
            </div>

            {/* Right card */}
            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
                Why this matters for your business
              </div>
              {[
                { num: '76%', desc: "of luxury consumers research digitally before engaging with a brand. If you're not showing up in the right places, you're invisible at the most important moment." },
                { num: '3×', desc: 'higher ROI when email marketing is personalized and automated versus generic broadcast campaigns. Most small operators are leaving this on the table.' },
                { num: '$0', desc: "wasted on brand-awareness campaigns that don't convert. Aperture builds digital marketing capability aimed at measurable revenue outcomes, not vanity metrics." }
              ].map((stat, i) => (
                <div key={i} style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                    <em style={{ color: '#B8924A', fontStyle: 'normal' }}>{stat.num}</em>
                  </div>
                  <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                    {stat.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Problem
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem', color: '#1C1A17' }}>
                Most small operators<br/>are marketing<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>without a system.</em>
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Running a boutique hotel, a luxury spirits brand, or an independent hospitality business means your marketing often gets whatever time is left over after everything else is handled. Which means it's inconsistent, reactive, and disconnected from actual revenue outcomes.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17', marginBottom: '1.25rem' }}>
                Digital marketing done right is not about more content or more ads. It's about a coherent system — one that reaches the right person, with the right message, at the right moment — and measures what actually happens next.
              </p>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', margin: 0, padding: 0 }}>
                {[
                  'No consistent presence in search when potential guests are looking',
                  'Ad spend with no clear attribution to bookings or revenue',
                  'Social media that is active but not driving business',
                  'Email lists that sit unused or broadcast generic newsletters',
                  'No view of which marketing activities are actually working'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.9375rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.6rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CORE CAPABILITIES */}
      <section id="capabilities" style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Core Capabilities
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Five disciplines.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>integrated system.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Aperture builds digital marketing capability across five core disciplines — deployable as a complete system or as targeted interventions in the areas your business needs most.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: '1px solid #2e2b26' }}>
            {[
              {
                num: '01',
                title: 'Search Engine Optimization',
                desc: "When a potential guest, buyer, or investor searches for what you offer, you need to be there. SEO for hospitality and luxury brands isn't generic — it's built around the specific terms your customer uses at the moment they're ready to engage.",
                tags: ['Technical SEO', 'Local Search', 'Content Strategy', 'Site Architecture']
              },
              {
                num: '02',
                title: 'Paid Advertising (SEM & Social)',
                desc: 'Strategic deployment of paid budgets across Google, Meta, and LinkedIn — targeted at the specific guest profile, buyer persona, or trade partner your business is trying to reach. Every dollar measured against actual outcomes, not impression volume.',
                tags: ['Google Ads', 'Meta', 'LinkedIn', 'Retargeting']
              },
              {
                num: '03',
                title: 'Content & Social Strategy',
                desc: "Content that builds brand authority and drives real engagement — not a content calendar full of filler posts. We develop a strategy built around your brand's voice, your audience's actual interests, and the platforms where your customer spends time.",
                tags: ['Brand Voice', 'Instagram', 'LinkedIn', 'Content Planning']
              },
              {
                num: '04',
                title: 'Email Marketing & Automation',
                desc: "Your email list is the most valuable marketing asset you own — and most small operators aren't using it properly. Aperture builds automated, personalized drip campaigns that nurture prospects, reduce no-shows, and drive repeat bookings without manual effort.",
                tags: ['Drip Campaigns', 'Segmentation', 'Automation', 'Re-engagement']
              },
              {
                num: '05',
                title: 'Marketing Analytics & Reporting',
                desc: "You can't optimize what you can't see. Aperture sets up the measurement infrastructure — tracking, attribution, and reporting — so you know exactly which marketing activities are driving revenue and which ones to stop spending money on.",
                tags: ['Campaign Attribution', 'Conversion Tracking', 'ROI Reporting', 'Dashboard Setup']
              }
            ].map((cap, i) => (
              <div key={i} style={{ padding: '3rem 2.5rem 3rem 0', borderRight: i % 3 !== 2 ? '1px solid #2e2b26' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
                  {cap.num}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.5rem', fontWeight: 400, color: '#F0EDE6', marginBottom: '0.875rem', lineHeight: 1.2 }}>
                  {cap.title}
                </h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                  {cap.desc}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {cap.tags.map((tag, j) => (
                    <span key={j} style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', padding: '0.3rem 0.625rem', border: '1px solid #2e2b26', color: '#4a4845' }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            
            {/* Placeholder card */}
            <div style={{ padding: '3rem 2.5rem', border: '1px dashed #2e2b26', background: 'transparent', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '280px' }}>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 300, color: '#3a3733', marginBottom: '0.75rem', lineHeight: 1.3 }}>
                Need something more specific?
              </div>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#3a3733', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                Every engagement is scoped to your business. If you have a specific marketing problem not covered above, get in touch and we'll tell you how we'd approach it.
              </p>
              <Link href="/contact" style={{ fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#B8924A', borderBottom: '1px solid #2e2b26', paddingBottom: '2px', display: 'inline-flex', width: 'fit-content', textDecoration: 'none' }}>
                Talk to us →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'start', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                The Technology
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
                The right tools,<br/>properly <em style={{ fontStyle: 'italic', color: '#B8924A' }}>configured.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
              Aperture does not just recommend a martech stack — we configure it, integrate it, and make sure it is actually working together as a system. The platforms below are the foundation of every effective digital marketing operation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid #D4CFC6' }}>
            {[
              { label: 'CRM', name: 'Customer Relationship Management', examples: 'HubSpot, Salesforce, or the platform that fits your business size and workflow — configured for hospitality-specific lead and guest lifecycle management.' },
              { label: 'Analytics', name: 'Data & Measurement', examples: 'Google Analytics 4, Google Tag Manager, Looker Studio — set up to track what actually matters: conversions, bookings, and revenue attribution, not pageviews.' },
              { label: 'Search & Advertising', name: 'SEO & Paid Media', examples: 'SEMrush, Moz, Google Ads Manager — used to manage organic search performance and paid campaign efficiency across search and social platforms.' },
              { label: 'Email & Automation', name: 'Marketing Automation', examples: 'Klaviyo, Mailchimp, or HubSpot Marketing — configured for automated, personalized guest communication at every stage of the customer lifecycle.' }
            ].map((item, i) => (
              <div key={i} style={{ padding: '2.5rem 2rem 2.5rem 0', borderRight: i < 3 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>
                  {item.label}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.25rem', fontWeight: 400, color: '#1C1A17', marginBottom: '0.75rem', lineHeight: 1.2 }}>
                  {item.name}
                </div>
                <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.6 }}>
                  {item.examples}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW WE ENGAGE */}
      <section style={{ background: '#E8E4DB', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
            <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
            How We Work
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '3.5rem', maxWidth: '22ch', color: '#1C1A17' }}>
            Built around your business,<br/>not a <em style={{ fontStyle: 'italic', color: '#B8924A' }}>standard package.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid #D4CFC6' }}>
            {[
              { num: '01', title: 'Audit & diagnosis', desc: 'We start by understanding what you have, what is working, and what is not - before recommending anything. No assumptions.' },
              { num: '02', title: 'Strategy & prioritization', desc: 'We identify the highest-leverage opportunities for your specific business and budget - and build a phased plan to address them in order of impact.' },
              { num: '03', title: 'Build & deploy', desc: "We configure the platforms, build the campaigns, and set up the measurement infrastructure - so you are not handed a strategy deck with no execution path." },
              { num: '04', title: 'Measure & optimize', desc: "Every engagement includes a reporting cadence so you can see what is working, what to double down on, and what to cut - without guessing." }
            ].map((step, i) => (
              <div key={i} style={{ padding: '2.5rem 2rem 2.5rem 0', borderRight: i < 3 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>
                  {step.num}
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, marginBottom: '0.875rem' }}>
                  {step.title}
                </h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#1C1A17' }}>
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></span>
                Who It's For
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17' }}>
                Built for the brands<br/>that run on <em style={{ fontStyle: 'italic', color: '#B8924A' }}>reputation.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#1C1A17' }}>
              Aperture's digital marketing work is tailored to the specific needs, constraints, and customer profiles of boutique hospitality and luxury brands — not generic small business marketing advice.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: '1px solid #D4CFC6' }}>
            {[
              {
                type: 'Boutique Hotels',
                name: 'Independent & Lifestyle Properties',
                challenges: [
                  'Compete with OTA-dominated search results',
                  'Build direct booking capability and reduce commission spend',
                  'Reach the right guest profile with limited ad budget',
                  'Convert website visitors into direct reservations',
                  'Build a guest email list and use it effectively'
                ]
              },
              {
                type: 'Luxury Consumer Brands',
                name: 'Spirits, Goods & Experiences',
                challenges: [
                  'Build brand authority in a category crowded with well-funded competitors',
                  'Reach high-net-worth consumers through the right channels',
                  'Drive retail and DTC conversion without discounting',
                  'Build a community of brand advocates, not just buyers',
                  'Measure marketing impact on actual sales, not reach'
                ]
              },
              {
                type: 'Hospitality Operators',
                name: 'Restaurants, Clubs & Local Luxury',
                challenges: [
                  'Fill covers consistently, not just on peak nights',
                  'Build a local following that drives repeat visits',
                  'Manage and grow your Google and social reputation',
                  'Market private dining and events without a dedicated team',
                  'Convert social followers into reservations and revenue'
                ]
              }
            ].map((audience, i) => (
              <div key={i} style={{ padding: '2.5rem 2.5rem 2.5rem 0', borderRight: i < 2 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>
                  {audience.type}
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#1C1A17', marginBottom: '1rem', lineHeight: 1.2 }}>
                  {audience.name}
                </div>
                <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', padding: 0, margin: 0 }}>
                  {audience.challenges.map((challenge, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.875rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1.5 }}>
                      <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                      {challenge}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ padding: 'clamp(5rem, 10vw, 8rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '3rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '22ch', margin: 0, color: '#1C1A17' }}>
              Ready to build a<br/>marketing operation that<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>actually converts?</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flexShrink: 0 }}>
              <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', border: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#2e2b26')} onMouseLeave={(e) => (e.currentTarget.style.background = '#1C1A17')}>
                Start a conversation
              </Link>
              <Link href="/how-we-work" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#1C1A17', border: '1px solid #1C1A17', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', textDecoration: 'none', cursor: 'pointer', transition: 'background 0.2s' }} onMouseEnter={(e) => (e.currentTarget.style.background = '#1C1A17', e.currentTarget.style.color = '#F0EDE6')} onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent', e.currentTarget.style.color = '#1C1A17')}>
                See our work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
