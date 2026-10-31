'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import BrandMark from './BrandMark'

const items = [
  { label: 'Services', href: '/#services' },
  { label: 'Results', href: '/#results' },
  { label: 'Engagements', href: '/#engagements' },
  { label: 'Insights', href: '/insights' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="nav">
      <div className="container nav__inner">
        <BrandMark />
        <nav aria-label="Primary">
          <button
            className="nav__toggle"
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr">Menu</span>
            <span className="nav__bars" aria-hidden="true" />
          </button>
          <ul id="nav-menu" className={`nav__menu${open ? ' is-open' : ''}`} onClick={(e) => (e.target as HTMLElement).closest('a') && setOpen(false)}>
            {items.map((item) => (
              <li key={item.href}>
                <Link href={item.href} aria-current={pathname === item.href ? 'page' : undefined}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/contact" className="btn nav__cta" aria-current={pathname === '/contact' ? 'page' : undefined}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
