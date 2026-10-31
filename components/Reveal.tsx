'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

/** Same fade/raise-on-scroll behavior as brandonmweaver.com. */
export default function Reveal() {
  const pathname = usePathname()
  useEffect(() => {
    document.documentElement.classList.remove('no-js')
    const els = document.querySelectorAll('.reveal:not(.is-in)')
    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('is-in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('is-in')
            io.unobserve(e.target)
          }
        }
      },
      { rootMargin: '0px 0px -8% 0px' }
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [pathname])
  return null
}
