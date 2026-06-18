import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-cormorant',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Aperture Hospitality',
  description: 'Boutique hospitality consulting for owners, investors, and operators who need results, not a deck.',
  metadataBase: new URL('https://aperturehospitality.com'),
  openGraph: {
    title: 'Aperture Hospitality',
    description: 'Boutique hospitality consulting for owners, investors, and operators who need results, not a deck.',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' font-size='75' fill='%23B8924A'>A</text></svg>" />
      </head>
      <body className="bg-parchment text-ink font-body antialiased">
        {children}
      </body>
    </html>
  )
}
