import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 h-12 w-auto">
          <img 
            src="/aperture-logo.png" 
            alt="Aperture Hospitality"
            className="h-full w-auto object-contain"
          />
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
