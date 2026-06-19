import Link from 'next/link'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-16 flex items-center justify-between">
        <Link href="/" className="text-xs font-medium tracking-widest uppercase text-ink">
          Aperture Hospitality
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
