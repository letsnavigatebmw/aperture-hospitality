import type { NextConfig } from 'next'

// Pages retired in the one-pager redesign. Permanent (308) so search engines move their equity.
const retired: [string, string][] = [
  ['/how-we-work', '/method'],
  ['/capabilities', '/#services'],
  ['/executive-advisory', '/#services'],
  ['/ai-solutions', '/'],
  ['/data-intelligence', '/'],
  ['/solutions', '/'],
  ['/philosophy', '/'],
  ['/philosophy/:path*', '/'],
  ['/apertureframeworks', '/insights'],
  ['/apertureframeworks/:path*', '/insights'],
  ['/aperture-scorecard', '/contact'],
  ['/workplacekit', '/'],
  ['/trafficsystem', '/'],
  ['/resources/:path*', '/insights'],
  ['/download/:path*', '/insights'],
  ['/downloads/:path*', '/insights'],
]

const nextConfig: NextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
  output: 'standalone',
  outputFileTracingRoot: __dirname,
  // Gated library decks are read from disk by /api/library/deck/[id].
  outputFileTracingIncludes: { '/api/library/deck/[id]': ['./content/library/**/*'] },
  async rewrites() {
    // Standalone client tools live in /public/tools as self-contained HTML.
    return [
      { source: '/tools/revpar', destination: '/tools/revpar.html' },
      { source: '/tools/spirits-profitability', destination: '/tools/spirits-profitability.html' },
    ]
  },
  async redirects() {
    return retired.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

export default nextConfig
