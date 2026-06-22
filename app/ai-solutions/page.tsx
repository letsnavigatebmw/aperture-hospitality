'use client'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import NewsletterSection from '@/components/NewsletterSection'
import Link from 'next/link'
import { useState } from 'react'

export default function AISolutionsPage() {
  const [openFaqId, setOpenFaqId] = useState(0)

  const faqItems = [
    { q: 'Is this the same as a chatbot?', a: 'No. Standard chatbots are single-channel, script-driven tools with no learning capacity. Your AI Employee handles voice calls, text conversations, and reviews simultaneously — and is trained specifically on your business, your tone, and your services. Think of it as an AI teammate, not a FAQ widget.' },
    { q: 'Will it sound like a robot to my guests?', a: 'Not if we set it up correctly. Aperture configures every AI Employee specifically for the hospitality and luxury context — the right tone, the right language, the right responses for your brand. From tone of voice to specific responses, every tool can be trained and tailored to match your brand style.' },
    { q: 'What channels does it work on?', a: 'SMS, email, phone, Facebook, Instagram, Google Reviews, and web chat. Wherever your customers are reaching out, your AI Employee can engage. You don\'t need to change how your guests contact you — the AI meets them where they already are.' },
    { q: 'Does this replace my front desk team?', a: 'No, and it\'s not designed to. It handles the repetitive, time-sensitive, low-complexity conversations — missed calls, appointment confirmations, review responses — so your team can focus on delivering the experience your guests are there for. It empowers your team, it doesn\'t replace them.' },
    { q: 'How long does setup take?', a: 'Most properties are live within 48 hours of signing up. Aperture handles the configuration, integration, and training — you don\'t need a technical team or a developer. We manage the setup so you can focus on your business.' },
    { q: 'Can I cancel if it\'s not right for me?', a: 'Yes. Monthly plans can be cancelled before your next billing period with no penalty. Annual plans are billed upfront, but if you have concerns in the first 30 days, get in touch with Aperture directly and we\'ll make it right.' },
    { q: 'What if I need more than just this?', a: 'AI Solutions are designed for near-term, operational problems. If your needs are more strategic — commercial strategy, marketing positioning, forecasting, go-to-market planning — Aperture\'s consulting engagements are built for exactly that. Talk to us and we\'ll point you to the right solution.' }
  ]

  return (
    <>
      <style>{`
        /* AI Solutions - Dark background text to white */
        .ai-solutions-dark-text { color: #F0EDE6 !important; }
      `}</style>
      <Nav />

      {/* HERO */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 8rem) 0 clamp(4rem, 8vw, 7rem)', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A', flexShrink: 0 }}></div>
                AI Solutions for Small Business Owners and Boutique Luxury Brands
              </div>
              <h1 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(3rem, 5.5vw, 5rem)', fontWeight: 300, lineHeight: 1.06, color: '#F0EDE6', marginBottom: '1.75rem' }}>
                Win Back Revenue<br/>Lost To <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Missed<br/>Conversations.</em>
              </h1>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '2.5rem', maxWidth: '44ch' }}>
                Boutique hotels, luxury spirits brands, and independent operators lose bookings and leads every day to missed calls, slow follow-ups, and unmanaged inquiries. Aperture's AI Employee works around the clock so your team doesn't have to.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', maxWidth: '280px' }}>
                <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                  Buy Now - $297/Month
                </a>
                <a href="tel:786-706-8231" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: 'transparent', color: '#F0EDE6', border: '1px solid #4a4845', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', cursor: 'pointer', textDecoration: 'none' }}>
                  Try Now: 786-706-8231
                </a>
              </div>
            </div>

            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '3rem' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>The cost of doing nothing</div>
              
              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <em style={{ color: '#B8924A', fontStyle: 'normal' }}>62%</em>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                  of inbound calls to small businesses go unanswered. Each one is a potential booking, reservation, or sale walking out the door.
                </div>
              </div>

              <div style={{ marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <em style={{ color: '#B8924A', fontStyle: 'normal' }}>5×</em>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                  more likely to convert a lead if you follow up within 5 minutes. Most hospitality businesses take hours — or never respond at all.
                </div>
              </div>

              <div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '3rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.5rem' }}>
                  <em style={{ color: '#B8924A', fontStyle: 'normal' }}>$297</em>
                </div>
                <div style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6 }}>
                  per month. Less than the cost of one missed reservation, and far less than a part-time hire. No long-term contract required.
                </div>
              </div>
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
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
                The Problem
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '1.5rem' }}>
                Your Business Runs<br/>On <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Conversations.</em><br/>You're Missing Them.
              </h2>
            </div>
            <div>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1.25rem' }}>
                Running a boutique hotel, luxury spirits brand, or independent hospitality business means wearing every hat. The front desk, the inbox, the phone — they all need attention at the same time your guests do.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760', marginBottom: '1.25rem' }}>
                Every unanswered call, every slow reply, every ignored review is a signal to your next potential customer that you're not paying attention. An AI Employee fixes that — without adding headcount.
              </p>
              <ul style={{ listStyle: 'none', marginTop: '2rem', borderTop: '1px solid #D4CFC6', padding: 0 }}>
                {['Calls go to voicemail during peak service hours', 'Website inquiries sit unanswered for hours or days', 'Google and social reviews accumulate without responses', 'No-shows increase when confirmation follow-ups don\'t happen', 'Staff time is consumed by repetitive, low-value conversations'].map((item, i) => (
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

      {/* THREE AI TOOLS */}
      <section id="tools" style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
                The AI Employee
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6' }}>
                Three Tools.<br/>One <em style={{ fontStyle: 'italic', color: '#B8924A' }}>AI Teammate.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6' }}>
              Your AI Employee specializes in three specific roles. Use one or all three to capture more revenue, reduce no-shows, and protect your reputation — while your team stays focused on delivering the experience your guests came for.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0', borderTop: '1px solid #2e2b26' }}>
            {[
              { number: '01', name: 'Voice AI', desc: 'Answers your phone 24/7, qualifies callers, captures information, and books appointments — in your brand\'s voice. Never miss a call again.', features: ['Answers inbound calls around the clock', 'Qualifies leads and captures contact details', 'Books appointments directly into your calendar', 'Sends SMS confirmation and reminders', 'Trained on your specific services and tone'] },
              { number: '02', name: 'Conversation AI', desc: 'Handles multiple text conversations simultaneously — across your website, social channels, and mobile — so no inquiry goes cold while your team is busy.', features: ['Web chat, SMS, Facebook, Instagram, Google', 'Books appointments with instant confirmations', 'Sends automated follow-ups to reduce no-shows', 'Escalates complex queries to your team', 'Fully customizable responses and tone'] },
              { number: '03', name: 'Reviews AI', desc: 'Automatically requests reviews from satisfied guests and responds to existing reviews across Google and Facebook — protecting and building your reputation without manual effort.', features: ['Automated review requests post-stay or post-visit', 'Responds to Google and Facebook reviews', 'Maintains consistent brand voice in responses', 'Surfaces negative feedback before it goes public', 'Reputation dashboard for at-a-glance monitoring'] }
            ].map((tool, i) => (
              <div key={i} style={{ padding: '3rem 2.5rem 3rem 0', borderRight: i < 2 ? '1px solid #2e2b26' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.5rem' }}>{tool.number}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.625rem', fontWeight: 400, color: '#F0EDE6', lineHeight: 1.2, marginBottom: '1rem' }}>{tool.name}</h3>
                <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#F0EDE6', marginBottom: '1.75rem' }}>{tool.desc}</p>
                <ul style={{ listStyle: 'none', borderTop: '1px solid #2e2b26', padding: 0, margin: 0 }}>
                  {tool.features.map((feat, j) => (
                    <li key={j} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.75rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.5 }}>
                      <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                      {feat}
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
            <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
            How It Works
          </div>
          <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, marginBottom: '3.5rem', maxWidth: '20ch' }}>
            Up And Running<br/>In <em style={{ fontStyle: 'italic', color: '#B8924A' }}>Days, Not Months.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', borderTop: '1px solid #D4CFC6' }}>
            {[
              { number: '01', title: 'Choose your plan', desc: 'Select monthly or annual. No sales call required. You\'re on the platform the same day.' },
              { number: '02', title: 'Aperture configures it', desc: 'We handle the setup, brand voice training, and integrations so the AI fits your business — not a generic template.' },
              { number: '03', title: 'Go live fast', desc: 'Most properties are live within 48 hours. You start capturing missed conversations immediately.' },
              { number: '04', title: 'Scale as you grow', desc: 'Add tools as your needs evolve, or graduate to a full Aperture strategic engagement when the time comes.' }
            ].map((step, i) => (
              <div key={i} style={{ padding: '2.5rem 2rem 2.5rem 0', borderRight: i < 3 ? '1px solid #D4CFC6' : 'none' }}>
                <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1.25rem' }}>{step.number}</div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, marginBottom: '0.875rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760', margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section style={{ background: '#E8E4DB', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          {/* Header */}
          <div style={{ marginBottom: '4rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '2rem' }}>
              <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
              Who It's For
            </div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, maxWidth: '28ch' }}>
              Built for the businesses that make hospitality <em style={{ fontStyle: 'italic', color: '#B8924A' }}>worth experiencing.</em>
            </h2>
          </div>

          {/* Testimonial */}
          <div style={{ paddingTop: '3rem', borderTop: '1px solid #D4CFC6' }}>
            <p style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.5625rem)', fontWeight: 300, fontStyle: 'italic', lineHeight: 1.75, color: '#1C1A17', marginBottom: '2.5rem', margin: '0 0 2.5rem 0' }}>
              "I wanted to let you know how impactful Navigate has been for my family. We had been looking in Boise for four years in our school district and had not found anything until Navigate. I'd been sending a mailer every month for over a year and nothing happened. I sent one mailer and email from Navigate to the same area and got 6 responses within a week. One of those emails was a seller who had been looking to move and his agent called me to see it before they listed it. My husband and I are now living in our dream property. Thank you so much for creating this. We cannot thank you enough!"
            </p>
            <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#6B6760' }}>
              — Rachel Haussman, Real Estate Agent · Compass
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" style={{ padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'end', marginBottom: '4rem' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#6B6760', marginBottom: '2rem' }}>
                <div style={{ width: '2px', height: '1.25rem', background: '#B8924A' }}></div>
                Pricing
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15 }}>
                Transparent Pricing.<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>No Surprises.</em>
              </h2>
            </div>
            <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#6B6760' }}>
              Less than the cost of one missed reservation per month. No hidden fees, no long-term contracts. Cancel anytime before your next billing period.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0' }}>
            {/* Monthly */}
            <div style={{ padding: '3.5rem', border: '1px solid #D4CFC6', borderRight: 'none' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Monthly</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.875rem', fontWeight: 300, color: '#1C1A17', marginBottom: '0.5rem', lineHeight: 1.1 }}>AI Employee</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', marginBottom: '2rem', lineHeight: 1.6 }}>All three tools. Full access. Month to month.</p>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', fontWeight: 300, color: '#1C1A17', lineHeight: 1, marginBottom: '0.25rem' }}>$297</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginBottom: '2.5rem' }}>per month · cancel anytime</div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #D4CFC6', margin: 0, padding: 0, marginBottom: '2.5rem' }}>
                {['Voice AI — 24/7 inbound call handling', 'Conversation AI — web, SMS, and social', 'Reviews AI — request & respond', 'Aperture brand voice setup included', 'Hospitality-specific configuration', 'Standard onboarding support'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 0', borderBottom: '1px solid #D4CFC6', fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.5 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Buy Now - $297/Month
              </a>
              <p style={{ fontSize: '0.75rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.6, marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #D4CFC6' }}>Setup fee may apply depending on integration complexity. Aperture handles all configuration.</p>
            </div>

            {/* Annual */}
            <div style={{ padding: '3.5rem', background: '#1C1A17', border: '1px solid #1C1A17', borderRight: '1px solid #D4CFC6' }}>
              <div style={{ fontSize: '0.625rem', fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '1rem' }}>Annual · Best Value</div>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.875rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '0.5rem', lineHeight: 1.1 }}>AI Employee</h3>
              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#4a4845', marginBottom: '2rem', lineHeight: 1.6 }}>Two months free when you commit to a year.</p>
              <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '4rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1, marginBottom: '0.25rem' }}>$2,997</div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginBottom: '2.5rem' }}>per year · equivalent to $249.75/mo</div>
              <ul style={{ listStyle: 'none', borderTop: '1px solid #2e2b26', margin: 0, padding: 0, marginBottom: '2.5rem' }}>
                {['Everything in the monthly plan', 'Priority onboarding & setup', 'Quarterly performance review with Aperture', 'First access to new AI tools as they launch', 'Dedicated Aperture point of contact', 'Two months free vs. monthly billing'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', padding: '0.875rem 0', borderBottom: '1px solid #2e2b26', fontSize: '0.875rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.5 }}>
                    <span style={{ width: '4px', height: '4px', background: '#B8924A', borderRadius: '50%', flexShrink: 0, marginTop: '0.55rem' }}></span>
                    {item}
                  </li>
                ))}
              </ul>
              <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Buy Now $2,997.00/yr
              </a>
              <p style={{ fontSize: '0.75rem', fontWeight: 300, color: '#6B6760', lineHeight: 1.6, marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #2e2b26' }}>Annual plans are billed upfront. Aperture handles all configuration at no additional charge.</p>
            </div>
          </div>
        </div>
      </section>

      {/* AI MARKETING WORKSPACE KIT */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#F0EDE6', marginBottom: '2rem' }}>
                <span style={{ width: '2px', height: '1.25rem', background: '#B8924A', display: 'block' }}></span>
                Ready to Install the Fix?
              </div>
              <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Stop Rebuilding From Scratch. Start<br/>Running A <em style={{ fontStyle: 'italic', color: '#B8924A' }}>System.</em>
              </h2>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                Every week you operate without a marketing foundation, the leak gets bigger. Standards stay in your head. New content starts from zero. AI tools produce output that sounds like everyone else's property. Team members guess. Deals slip through because the follow-up copy wasn't ready.
              </p>
              <p style={{ fontSize: '1.0625rem', fontWeight: 300, lineHeight: 1.8, color: '#F0EDE6', marginBottom: '1.5rem' }}>
                <strong style={{ fontWeight: 400 }}>The AI Marketing Workspace Kit fixes the foundation — one time.</strong>
              </p>
              <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.7, color: '#B8924A' }}>
                One AI. One workspace. One operating system for every piece of marketing you ship.
              </p>
            </div>

            <div style={{ background: '#2e2b26', border: '1px solid #3a3733', padding: '3rem', borderRadius: '16px' }}>
              <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.875rem', fontWeight: 300, color: '#F0EDE6', marginBottom: '1.5rem', lineHeight: 1.2 }}>AI Marketing Workspace Kit</h3>
              
              <a href="/workplacekit" style={{ display: 'block', textAlign: 'center', padding: '2rem 1.5rem', background: '#B8924A', color: '#FFFFFF', border: 'none', borderRadius: '0px', textDecoration: 'none', transition: 'all 0.3s', marginBottom: '1rem', cursor: 'pointer' }} onMouseEnter={(e) => { e.currentTarget.style.background = '#9a7a3e'; }} onMouseLeave={(e) => { e.currentTarget.style.background = '#B8924A'; }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.5rem' }}>Interested in the AI Marketing Workspace Kit</div>
                <div style={{ fontSize: '0.875rem', fontWeight: 400, letterSpacing: '0.05em', textTransform: 'uppercase' }}>FOR $1,497</div>
              </a>

              <p style={{ fontSize: '0.8125rem', fontWeight: 300, color: '#6B6760', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #3a3733' }}>
                One-time setup fee. No subscription. No monthly retainer.
              </p>

              <p style={{ fontSize: '0.875rem', fontWeight: 300, color: '#F0EDE6', lineHeight: 1.6, marginTop: '1.5rem' }}>
                Want to start with the foundation only? Get the <strong style={{ fontWeight: 400 }}>Reference Library Builder Set — $297</strong>
              </p>
              <a href="/workplacekit" style={{ display: 'inline-block', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#B8924A', borderBottom: '1px solid #B8924A', paddingBottom: '4px', textDecoration: 'none', cursor: 'pointer', marginTop: '0.5rem', transition: 'color 0.3s' }} onMouseEnter={(e) => { e.currentTarget.style.color = '#F0EDE6'; e.currentTarget.style.borderBottomColor = '#F0EDE6'; }} onMouseLeave={(e) => { e.currentTarget.style.color = '#B8924A'; e.currentTarget.style.borderBottomColor = '#B8924A'; }}>
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: '#1C1A17', padding: 'clamp(5rem, 10vw, 9rem) 0', borderBottom: '1px solid #2e2b26' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '6rem', alignItems: 'start' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(2.25rem, 3.5vw, 3.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#F0EDE6', position: 'sticky', top: '5rem' }}>
              Questions<br/>worth <em style={{ fontStyle: 'italic', color: '#B8924A' }}>asking.</em>
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
                    <span style={{ fontSize: '1.25rem', lineHeight: 1, color: '#B8924A', transition: 'transform 0.2s', transform: openFaqId === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
                  </div>
                  {openFaqId === i && (
                    <p style={{ fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', marginTop: '1.25rem', margin: '1.25rem 0 0 0' }}>
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
              Ready to stop<br/><em style={{ fontStyle: 'italic', color: '#B8924A' }}>missing conversations?</em>
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem', flexShrink: 0 }}>
              <a href="https://offer.revenuefactory.com/buy-ai-employee-a" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#B8924A', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Buy Now - $297/Month
              </a>
              <a href="tel:786-706-8231" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: '0.875rem 2.25rem', background: '#1C1A17', color: '#F0EDE6', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', border: 'none', cursor: 'pointer', textDecoration: 'none' }}>
                Try Now: 786-706-8231
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <NewsletterSection inputId="newsletter-email-ai" />

      <Footer />
    </>
  )
}
