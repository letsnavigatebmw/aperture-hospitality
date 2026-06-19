import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-28 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-5 flex-shrink-0">
          {/* Aperture Arc Mark */}
          <svg width="64" height="64" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
            <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          
          {/* Vertical Divider */}
          <div className="w-px h-16 bg-rule flex-shrink-0"></div>
          
          {/* Wordmark */}
          <div className="leading-tight">
            <div className="text-base font-medium tracking-widest uppercase text-ink">Aperture</div>
            <div className="text-sm font-light tracking-widest uppercase text-muted">Hospitality</div>
          </div>
        </Link>
        <ul className="hidden md:flex gap-8">
          <li>
            <Link href="/#insights" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Insights
            </Link>
          </li>
          <li>
            <Link href="/#how-we-think" className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
              Philosophy
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
