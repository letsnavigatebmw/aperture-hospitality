import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Insights from '@/components/Insights'
import HowWeThink from '@/components/HowWeThink'
import WhereWeFocused from '@/components/WhereWeFocused'
import AboutFounder from '@/components/AboutFounder'
import PodcastsMedia from '@/components/PodcastsMedia'
import Testimonials from '@/components/Testimonials'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Nav />
      
      {/* HERO */}
      <div className="border-b border-rule">
        <div className="relative">
          {/* Hero Grid Layout */}
          <div className="grid md:grid-cols-2 min-h-screen md:min-h-auto">
            {/* LEFT: Image with Logo */}
            <div className="relative order-2 md:order-1 h-64 md:h-auto flex items-center justify-center">
              <div className="relative w-full h-full">
                <img
                  src="/brandon-headshot.jpg"
                  alt="Brandon Weaver"
                  className="w-full h-full object-cover"
                />
                {/* Fade overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-parchment via-transparent to-transparent" />
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="order-1 md:order-2 flex flex-col justify-center py-16 md:py-24 px-0 container-max md:pl-0">
              <div className="space-y-8">
                {/* Logo above headline */}
                <div className="mb-8">
                  <img 
                    src="/aperture-logo.png" 
                    alt="Aperture Hospitality"
                    className="h-auto w-80 md:w-96 object-contain"
                  />
                </div>

                {/* Headline */}
                <div className="space-y-6">
                  <h1 className="font-display text-5xl md:text-6xl font-light leading-tight tracking-tighter">
                    Results,<br />not a <em className="italic text-brass">deck.</em>
                  </h1>

                  {/* Subheadline */}
                  <p className="text-lg md:text-xl text-muted leading-relaxed max-w-xl">
                    Founder & CEO of Aperture Hospitality, advising brands across real estate, luxury travel, and hospitality on the marketing, sales, and operations decisions that unlock value.
                  </p>

                  {/* Supporting line */}
                  <p className="text-base md:text-lg text-muted leading-relaxed max-w-xl">
                    20+ years driving growth and transformation across consumer brands, hospitality, and technology platforms. Previously led commercial strategy at Diageo, Sonder, and Lacure.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col gap-4 pt-4 w-full md:w-auto">
                  <Link
                    href="/contact"
                    className="px-8 py-3 bg-ink text-parchment font-medium text-xs tracking-wider uppercase hover:bg-opacity-90 transition-all text-center inline-block"
                  >
                    Let's Talk
                  </Link>
                  <Link
                    href="/about"
                    className="px-8 py-3 border-2 border-ink text-ink font-medium text-xs tracking-wider uppercase hover:bg-ink hover:text-parchment transition-all text-center inline-block"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CREDIBILITY BAR */}
      <div className="border-b border-rule">
        <div className="container-max py-12">
          <div className="flex flex-col md:flex-row md:items-center gap-8">
            <p className="text-xs font-normal tracking-wide uppercase text-muted md:flex-shrink-0 max-w-xs">
              Brandon Weaver has led commercial and operating teams at
            </p>
            <div className="hidden md:block w-px h-10 bg-rule flex-shrink-0" />
            <div className="flex flex-col md:flex-row gap-8 flex-wrap">
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Diageo</h3>
                <p className="text-xs tracking-tight text-muted">
                  Luxury Portfolio & Commercial Strategy
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Lacure</h3>
                <p className="text-xs tracking-tight text-muted">
                  Chief Commercial Officer · 65-person org
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Sonder</h3>
                <p className="text-xs tracking-tight text-muted">
                  Regional General Manager
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">Bonotel Exclusive Travel</h3>
                <p className="text-xs tracking-tight text-muted">
                  Strategic Leadership
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-medium text-ink mb-1">General Electric</h3>
                <p className="text-xs tracking-tight text-muted">
                  Commercial Operations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SERVICES */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">What We Do</div>
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:border-r border-rule p-0 md:pr-8 md:py-6 mb-8 md:mb-0">
              <div className="text-xs font-medium tracking-widest uppercase text-brass mb-4">01</div>
              <h3 className="font-display text-2xl font-normal leading-tight mb-4 text-ink">
                Marketing &amp; Brand Strategy
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Positioning and go-to-market work for hospitality, real estate, and luxury brands looking to reposition or scale.
              </p>
            </div>
            <div className="md:border-r border-rule p-0 md:px-8 md:py-6 mb-8 md:mb-0">
              <div className="text-xs font-medium tracking-widest uppercase text-brass mb-4">02</div>
              <h3 className="font-display text-2xl font-normal leading-tight mb-4 text-ink">
                Sales &amp; Commercial Strategy
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Building the commercial engine — partnerships, channel strategy, and revenue structure — that turns positioning into pipeline.
              </p>
            </div>
            <div className="p-0 md:pl-8 md:py-6">
              <div className="text-xs font-medium tracking-widest uppercase text-brass mb-4">03</div>
              <h3 className="font-display text-2xl font-normal leading-tight mb-4 text-ink">
                Operations &amp; Value Creation
              </h3>
              <p className="text-sm leading-relaxed text-muted">
                Identifying the operating gaps that limit performance, and the structural moves that close them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <Testimonials />

      {/* WORK / ENGAGEMENTS */}
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">Selected Engagements</div>
          <div className="space-y-0">
            {[
              { client: 'Voyage Real Estate (Compass)', scope: 'Growth Strategy & GTM', date: 'Nov 2023 – Aug 2024' },
              { client: 'Wilbur Labs', scope: 'Strategic Advisory, Luxury Villas GTM', date: 'Oct 2025 – Apr 2026' },
              { client: 'Waratah, Inc. — Morrison Hotel', scope: 'Due Diligence & Launch Strategy', date: 'Jul 2023 – TBD' },
              { client: 'The Runda Lab & WES Brands', scope: 'Strategic Advisory', date: 'TBD' },
              { client: 'Beverly Spirits', scope: 'Go-to-Market Strategy', date: 'May 2023 – Jun 2025' },
              { client: 'Foto Comercio', scope: 'Go-to-Market Strategy', date: 'May 2026 – Present' },
              { client: 'Iterum Labs', scope: 'Go-to-Market Strategy', date: 'May 2026 – Present' },
            ].map((eng, i) => (
              <div key={i} className="grid md:grid-cols-3 gap-4 py-4 border-t border-rule md:items-baseline">
                <h3 className="font-display text-lg md:text-xl font-normal text-ink hover:text-brass transition-colors">
                  {eng.client}
                </h3>
                <p className="text-xs md:text-sm text-muted tracking-tight">
                  {eng.scope}
                </p>
                <p className="text-xs md:text-sm text-muted tracking-tight md:text-right">
                  {eng.date}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSIGHTS */}
      <Insights />

      {/* HOW WE THINK */}
      <HowWeThink />

      {/* ABOUT THE FOUNDER */}
      <AboutFounder />

      {/* WHERE WE'RE FOCUSED */}
      <WhereWeFocused />

      {/* PODCASTS & MEDIA */}
      <PodcastsMedia />

      {/* CONTACT CTA */}
      <div className="bg-ink">
        <div className="container-max py-16 md:py-24 flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          <h2 className="font-display text-3xl md:text-5xl font-light leading-tight text-parchment max-w-2xl">
            Have an asset that isn't performing the way it <em className="italic">should?</em>
          </h2>
          <Link href="/contact" className="btn-primary !bg-parchment !text-ink flex-shrink-0">
            Let's talk
          </Link>
        </div>
      </div>

      <Footer />
    </>
  )
}
