import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-20 flex items-center justify-between">
        <Link href="/" className="flex-shrink-0 h-12 w-auto">
          <svg viewBox="0 0 280 120" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Circle/Aperture symbol */}
            <circle cx="45" cy="60" r="28" fill="none" stroke="#1C1A17" strokeWidth="2.5"/>
            <path d="M 45 32 A 28 28 0 0 1 73 60" fill="none" stroke="#B8924A" strokeWidth="3"/>
            
            {/* Text */}
            <text x="95" y="75" fontFamily="Georgia, serif" fontSize="32" fontWeight="300" letterSpacing="4" fill="#1C1A17">APERTURE</text>
            <text x="95" y="95" fontFamily="Georgia, serif" fontSize="12" fontWeight="300" letterSpacing="2.5" fill="#6B6760">HOSPITALITY</text>
          </svg>
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
