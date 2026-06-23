'use client'

import Link from 'next/link'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

interface InsightCard {
  title: string
  type: 'Article' | 'Guide' | 'E-Book' | 'Playbook'
  link: string
}

const ContentGrid = ({ items }: { items: InsightCard[] }) => (
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
    {items.map((item, index) => (
      <a
        key={index}
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="block border border-rule rounded-lg p-6 bg-parchment-dark hover:border-brass hover:bg-parchment transition-all"
      >
        <p className="text-brass font-bold uppercase tracking-widest text-xs mb-4">
          {item.type}
        </p>
        <h3 className="text-lg font-display text-ink mb-6 leading-tight">
          {item.title}
        </h3>
        <p className="text-brass font-bold uppercase tracking-widest text-xs">
          Read →
        </p>
      </a>
    ))}
  </div>
)

export default function InsightsPage() {
  const salesStrategy = [
    {
      title: 'How to Unlock New Growth Verticals in Mature Companies',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link',
    },
    {
      title: 'Why Most GTM Strategies Fail Post-Series C',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link',
    },
    {
      title: 'State of Real Estate Prospecting',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link',
    },
  ]

  const commercialStrategy = [
    {
      title: 'The Authorization Illusion',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1W2U8ZM8r7UYThKlk7oyIx-T8yOHyGCpE/view?usp=drive_link',
    },
    {
      title: 'Distribution-First Strategy',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1UW0HlnfRpW3Lim32Cl1F4AhQv3QjHHcj/view?usp=drive_link',
    },
    {
      title: "Travel's Overlooked and Undervalued Channel Delivers Outsized Value",
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1QsWEmWkKb2nhaPIdILVrxPwP-bQ_JBoQ/view?usp=drive_link',
    },
  ]

  const lessonsInLuxury = [
    {
      title: 'Feeling is the New Luxury',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1eyd0vxq3D8xr8phIw2-w71P0EX7m5eVQ/view?usp=drive_link',
    },
    {
      title: "Don't Chase Them, Make Them Earn It!",
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1Dmr3uYRw38DMwO8oWA7j3FhN1AUU_AWn/view?usp=drive_link',
    },
    {
      title: 'Brand-to-Demand: How Luxury Brand Thinking Makes Performance Marketing Better',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/1pLur9KDw4xYY239aYOrxdXjsAd6iYjma/view?usp=drive_link',
    },
  ]

  const marketingStrategy = [
    {
      title: 'The Data is Already in the Stadium',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1JoV2ce3DcIuaaFGC6P4aWm76hiC-IiJj/view?usp=drive_link',
    },
    {
      title: 'The Prospecting Problem Nobody Wants to Admit',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1ctFTDmgkxhZETlKts_G7ZpU3KjAAkxvn/view?usp=drive_link',
    },
    {
      title: 'The Gap Between Marketing and Revenue—And How to Fix It',
      type: 'Article' as const,
      link: 'https://drive.google.com/file/d/1rZHQaXVEpHxITLhQoI2gcFLmu6g_vZ2W/view?usp=drive_link',
    },
    {
      title: 'The Death of the Funnel: Why Modern B2C Marketing Needs a New Model',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/17OE9Ocp4-1WkogBV9cgbODbDJh3cg75E/view?usp=drive_link',
    },
    {
      title: 'What Spirits & Hospitality Taught Me About Emotional Brand Building at Scale',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/1YfnbifrFnvxLNGymwz_0AYF-VUF65cME/view?usp=drive_link',
    },
    {
      title: 'Multi-Channel Campaign Architecture — Lessons from Diageo to Startups',
      type: 'Guide' as const,
      link: 'https://drive.google.com/file/d/19Gnygvl0Dc6rOQlN3W6VZko2NuwnLLa4/view?usp=drive_link',
    },
  ]

  const lessonsInLeadership = [
    {
      title: 'The Noise is Real',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1JCuKrMAria-dvPeLp_Urc47NuAj8MK8Q/view?usp=drive_link',
    },
    {
      title: 'Cross-Functional Leadership: Why the Best Operators Are Translators',
      type: 'E-Book' as const,
      link: 'https://drive.google.com/file/d/1PC-FKhF8O684POd64LPEMKVkMUjP-H1B/view?usp=drive_link',
    },
  ]

  return (
    <>
      <Nav />
      
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          {/* Header */}
          <div className="mb-12">
            <div className="section-label">Insights & Expertise</div>
            <h1 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
              Thought <em className="italic">Leadership</em>
            </h1>
            <p className="text-lg leading-relaxed text-muted max-w-2xl">
              We write on building businesses at scale, commercial strategy, and leadership. Here's what we've learned.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-rule mb-12" />

          {/* Sales Strategy */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
              Sales Strategy
            </h2>
            <ContentGrid items={salesStrategy} />
          </div>

          {/* Commercial Strategy */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
              Commercial Strategy
            </h2>
            <ContentGrid items={commercialStrategy} />
          </div>

          {/* Lessons in Luxury */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
              Lessons in <em className="italic">Luxury</em>
            </h2>
            <ContentGrid items={lessonsInLuxury} />
          </div>

          {/* Marketing Strategy */}
          <div className="mb-20">
            <h2 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
              Marketing Strategy
            </h2>
            <ContentGrid items={marketingStrategy} />
          </div>

          {/* Lessons in Leadership */}
          <div className="mb-16">
            <h2 className="font-display text-2xl md:text-3xl font-normal text-ink mb-8">
              Lessons in <em className="italic">Leadership</em>
            </h2>
            <ContentGrid items={lessonsInLeadership} />
          </div>
        </div>
      </section>

      {/* PODCASTS & MEDIA */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          {/* Header */}
          <div className="mb-12">
            <div className="section-label">Featured Content</div>
            <h2 className="font-display text-4xl md:text-5xl font-light mb-6 text-ink">
              Featured <em className="italic">Podcasts & Media</em>
            </h2>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-rule mb-12" />

          {/* Main Content Card */}
          <a
            href="https://www.youtube.com/@BrandonMWeaver/videos"
            target="_blank"
            rel="noopener noreferrer"
            className="block mb-12 border-2 border-brass rounded-lg p-8 bg-parchment-dark hover:bg-parchment hover:border-brass-dim transition-all"
          >
            <p className="text-brass font-bold uppercase tracking-widest text-xs mb-4">
              Featured
            </p>
            <h3 className="font-display text-3xl md:text-4xl font-normal text-ink mb-4">
              Insights on Strategy, Operations, and Building for Scale
            </h3>
            <p className="text-muted text-sm">
              YouTube
            </p>
          </a>

          {/* Featured Shorts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "It's Not Happening to You, It's Happening for You", url: 'https://youtube.com/shorts/MvYFAvVDfZ8' },
              { title: 'Moving Prospects from Indifference to Engagement', url: 'https://youtube.com/shorts/AckWa5ML22w' },
              { title: "The World Doesn't Reward Talent", url: 'https://youtube.com/shorts/S7OGIjX4rLc' },
              { title: 'Opportunity Moves at The Speed of Connectivity', url: 'https://youtube.com/shorts/DvXgIrExZkA' },
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block border border-rule rounded-lg p-6 bg-parchment-dark hover:border-brass hover:bg-parchment transition-all"
              >
                <p className="text-brass font-bold uppercase tracking-widest text-xs mb-3">
                  YouTube
                </p>
                <h4 className="font-display text-base font-normal text-ink mb-4 leading-tight">
                  {item.title}
                </h4>
                <p className="text-brass text-xs font-medium uppercase tracking-wider">
                  Watch →
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* HELP CARD SECTION */}
      <section style={{ background: '#E8E4DB', borderBottom: '1px solid #D4CFC6' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', padding: '0 clamp(1.5rem, 5vw, 4rem)' }}>
          <div style={{ paddingTop: 'clamp(3rem, 5vw, 4rem)', paddingBottom: 'clamp(3rem, 5vw, 4rem)' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.75rem, 3vw, 2.25rem)', fontWeight: 300, lineHeight: 1.15, color: '#1C1A17', marginBottom: '2rem', paddingBottom: '2rem', borderBottom: '1px solid #D4CFC6' }}>
              When you're ready, here's <em style={{ fontStyle: 'italic', color: '#B8924A' }}>how we can help.</em>
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
              {/* Option 1 */}
              <div style={{ paddingRight: '2.5rem', borderRight: '1px solid #D4CFC6' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.625rem' }}>
                  Free · 1 Hour
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, marginBottom: '0.875rem' }}>
                  Strategy Consultation
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760', marginBottom: '1.5rem' }}>
                  Get Brandon's direct read on your business strategy, commercial positioning, or growth challenges. Leave with a clear next step and actionable insights.
                </p>
                <Link href="/contact?type=clarity-session" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A17', borderBottom: '1px solid #D4CFC6', paddingBottom: '2px', textDecoration: 'none' }}>
                  Book a session →
                </Link>
              </div>

              {/* Option 2 */}
              <div style={{ paddingLeft: '2.5rem' }}>
                <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#B8924A', marginBottom: '0.625rem' }}>
                  Engagement
                </div>
                <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: '1.375rem', fontWeight: 400, color: '#1C1A17', lineHeight: 1.2, marginBottom: '0.875rem' }}>
                  Full Strategic Partnership
                </div>
                <p style={{ fontSize: '0.875rem', fontWeight: 300, lineHeight: 1.7, color: '#6B6760', marginBottom: '1.5rem' }}>
                  A comprehensive Aperture engagement to build strategy, structure, and execution roadmap for sustainable growth. Hands-on from discovery through implementation.
                </p>
                <Link href="/contact?type=engagement" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.6875rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#1C1A17', borderBottom: '1px solid #D4CFC6', paddingBottom: '2px', textDecoration: 'none' }}>
                  Start a conversation →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEWSLETTER SECTION */}
      <section style={{ background: '#1C1A17', padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)' }}>
        <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
          {/* Left: copy */}
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(1.25rem, 2vw, 1.625rem)', fontWeight: 300, lineHeight: 1.2, color: '#F0EDE6', marginBottom: '0.875rem', margin: 0 }}>
              Insights on hospitality, luxury, and <em style={{ fontStyle: 'italic', color: '#B8924A' }}>growth.</em>
            </h3>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '0.9375rem', fontWeight: 300, lineHeight: 1.75, color: '#6B6760', margin: 0 }}>
              Practical thinking on marketing, commercial strategy, and what's actually working for boutique hospitality and luxury brands. No filler. Straight to the point.
            </p>
          </div>

          {/* Right: form */}
          <div>
            <div style={{ fontSize: '0.5625rem', fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#4a4845', marginBottom: '0.75rem' }}>
              Subscribe to Aperture Insights
            </div>
            <div style={{ display: 'flex', gap: '0', marginBottom: '0.75rem' }}>
              <input
                type="email"
                id="newsletter-email-insights"
                placeholder="your@email.com"
                style={{
                  flex: 1,
                  padding: '0.875rem 1rem',
                  background: '#2e2b26',
                  border: '1px solid #3a3733',
                  borderRight: 'none',
                  color: '#F0EDE6',
                  fontSize: '0.9375rem',
                  fontWeight: 300,
                  outline: 'none',
                  borderRadius: 0,
                  WebkitAppearance: 'none',
                  fontFamily: "'Inter', sans-serif"
                }}
              />
              <button
                type="button"
                onClick={() => {
                  const email = (document.getElementById('newsletter-email-insights') as HTMLInputElement)?.value;
                  if (!email || !email.includes('@')) {
                    alert('Please enter a valid email address.');
                    return;
                  }
                  alert('Thanks for subscribing. You\'ll hear from us soon.');
                }}
                style={{
                  padding: '0.875rem 1.5rem',
                  background: '#B8924A',
                  color: '#F0EDE6',
                  fontSize: '0.6875rem',
                  fontWeight: 500,
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  border: 'none',
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  borderRadius: 0,
                  fontFamily: "'Inter', sans-serif"
                }}
              >
                Subscribe
              </button>
            </div>
            <p style={{ fontSize: '0.6875rem', fontWeight: 300, color: '#4a4845', lineHeight: 1.5, margin: 0 }}>
              No spam. Unsubscribe anytime. Brandon writes every issue personally.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
