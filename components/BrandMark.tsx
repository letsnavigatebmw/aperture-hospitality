import Link from 'next/link'

/** Open-arc mark plus spaced APERTURE wordmark. Arc in --accent, ring in --ink. */
export default function BrandMark({ size = 'md', href = '/' }: { size?: 'md' | 'lg'; href?: string | null }) {
  const inner = (
    <>
      <svg className="brand__mark" viewBox="0 0 40 40" aria-hidden="true">
        <circle cx="20" cy="20" r="15" fill="none" stroke="var(--ink)" strokeOpacity=".35" strokeWidth="1.25" />
        <path d="M20 5 A15 15 0 0 1 35 20" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
      <span className="brand__text">
        <span className="brand__word">APERTURE</span>
        <span className="brand__sub">HOSPITALITY</span>
      </span>
    </>
  )
  const cls = `brand${size === 'lg' ? ' brand--lg' : ''}`
  if (href === null) return <span className={cls} aria-label="Aperture Hospitality">{inner}</span>
  return (
    <Link href={href} className={cls} aria-label="Aperture Hospitality, home">
      {inner}
    </Link>
  )
}
