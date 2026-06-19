import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-16 sm:h-20 md:h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 md:gap-5 flex-shrink-0">
          {/* Aperture Arc Mark */}
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0 sm:w-10 sm:h-10 md:w-16 md:h-16">
            <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
            <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          
          {/* Vertical Divider */}
          <div className="w-px h-8 sm:h-10 md:h-16 bg-rule flex-shrink-0"></div>
          
          {/* Wordmark */}
          <div className="leading-tight">
            <div className="text-xs sm:text-sm md:text-base font-medium tracking-widest uppercase text-ink">Aperture</div>
            <div className="text-xs font-light tracking-widest uppercase text-muted">Hospitality</div>
          </div>
        </Link>
        <ul className="hidden lg:flex gap-6 xl:gap-8">
          <li>
            <Link href="/insights" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Insights
            </Link>
          </li>
          <li>
            <Link href="/philosophy" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Philosophy
            </Link>
          </li>
          <li>
            <Link href="/how-we-work" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              How We Work
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
