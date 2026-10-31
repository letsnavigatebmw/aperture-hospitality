import type { Metadata, Viewport } from 'next'
import './globals.css'
import './tokens.css'
import './components.css'
import Reveal from '@/components/Reveal'
import { site } from '@/lib/site'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#f5f1ea',
}

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: '%s | Aperture Hospitality' },
  description: site.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: 'website',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'Aperture Hospitality' }],
  },
  twitter: { card: 'summary_large_image', title: site.title, description: site.description, images: ['/og.png'] },
  icons: { icon: '/favicon.svg' },
  robots: { index: true, follow: true },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: site.name,
  url: site.url,
  email: site.email,
  description: site.description,
  areaServed: 'US',
  address: { '@type': 'PostalAddress', addressLocality: 'Los Angeles', addressRegion: 'CA', addressCountry: 'US' },
  founder: {
    '@type': 'Person',
    name: 'Brandon M. Weaver',
    jobTitle: 'Founder & Principal',
    url: site.personal,
    sameAs: [site.personal, 'https://www.linkedin.com/in/brandonmweaver'],
  },
  sameAs: [site.linkedin, site.substack],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="no-js">
      <head>
        <link rel="preload" href="/fonts/newsreader-latin-standard-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/inter-latin-wght-normal.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        {children}
        <Reveal />
      </body>
    </html>
  )
}
