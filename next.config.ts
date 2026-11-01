import type { NextConfig } from 'next'

// Pages retired in the one-pager redesign. Permanent (308) so search engines move their equity.
const retired: [string, string][] = [
  ['/how-we-work', '/#engagements'],
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
  async redirects() {
    return retired.map(([source, destination]) => ({ source, destination, permanent: true }))
  },
}

export default nextConfig
