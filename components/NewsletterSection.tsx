'use client'

interface NewsletterSectionProps {
  inputId?: string
}

export default function NewsletterSection({ inputId = 'newsletter-email' }: NewsletterSectionProps) {
  return (
    <section style={{ background: '#1C1A17', padding: 'clamp(2.5rem, 5vw, 3.5rem) clamp(1.5rem, 5vw, 4rem)' }}>
      <div style={{ maxWidth: '1140px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'center' }}>
        {/* Left: copy */}
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", fontSize: 'clamp(0.875rem, 1.5vw, 1.1rem)', fontWeight: 300, lineHeight: 1.2, color: '#F0EDE6', marginBottom: '0.875rem', margin: 0, whiteSpace: 'nowrap' }}>
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
              id={inputId}
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
                const email = (document.getElementById(inputId) as HTMLInputElement)?.value;
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
  )
}
