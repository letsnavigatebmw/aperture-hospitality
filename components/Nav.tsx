import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-20 sm:h-24 md:h-32 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0">
          {/* Aperture Arc Mark */}
          <svg width="40" height="40" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 sm:w-12 sm:h-12 md:w-20 md:h-20">
            <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
            <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          
          {/* Vertical Divider */}
          <div className="w-px h-10 sm:h-12 md:h-20 bg-rule flex-shrink-0"></div>
          
          {/* Wordmark */}
          <div className="leading-tight">
            <div className="text-sm sm:text-base md:text-xl font-medium tracking-widest uppercase text-ink">Aperture</div>
            <div className="text-xs sm:text-sm md:text-base font-light tracking-widest uppercase text-muted">Hospitality</div>
          </div>
        </Link>
        <ul className="hidden lg:flex gap-6 xl:gap-8">
          <li>
            <Link href="/insights" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Insights
            </Link>
          </li>
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
            <Link href="/solutions" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              AI Solutions
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
