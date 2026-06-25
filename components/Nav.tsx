'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Approach', href: '/how-we-work' },
    { label: 'Capabilities', href: '/capabilities' },
    { label: 'AI Solutions', href: '/ai-solutions' },
    { label: 'Intelligence', href: '/data-intelligence' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
  ]

  return (
    <nav className="sticky top-0 z-50 bg-parchment border-b border-rule">
      <div className="container-max h-16 flex items-center justify-between">
        {/* Logo + Wordmark */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0" onClick={() => setIsOpen(false)}>
          <svg width="28" height="28" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="flex-shrink-0">
            <circle cx="18" cy="18" r="15" stroke="#1C1A17" strokeWidth="1.2"/>
            <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <span className="text-xs font-medium tracking-wider uppercase text-ink">Aperture Hospitality</span>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex gap-6 items-center">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link href={item.href} className="text-xs font-normal tracking-wider uppercase text-muted hover:text-ink transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          <span className={`w-5 h-0.5 bg-ink transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-ink transition-all ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-5 h-0.5 bg-ink transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-parchment border-t border-rule">
          <ul className="flex flex-col gap-0">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-4 py-3 text-xs font-normal tracking-wider uppercase text-muted hover:text-ink hover:bg-parchment-dark transition-colors border-b border-rule"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
