import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
            <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-medium tracking-wider uppercase text-ink">Aperture Hospitality</span>
        </Link>

        {/* Navigation */}
        <ul className="hidden lg:flex gap-8 items-center">
          <li>
            <Link href="/how-we-work" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              How We Work
            </Link>
          </li>
          <li>
            <Link href="/capabilities" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Capabilities
            </Link>
          </li>
          <li>
            <Link href="/ai-solutions" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              AI Solutions
            </Link>
          </li>
          <li>
            <Link href="/data-intelligence" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Data & Intelligence
            </Link>
          </li>
          <li>
            <Link href="/insights" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Insights
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
