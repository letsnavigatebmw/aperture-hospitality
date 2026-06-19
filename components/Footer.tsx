import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-[#2e2b26]">
      <div className="container-max py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-3">
          {/* Aperture Arc Mark - Light */}
          <svg width="32" height="32" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="18" cy="18" r="15" stroke="#F0EDE6" strokeWidth="1.2"/>
            <path d="M18 3 A15 15 0 0 1 33 18" stroke="#B8924A" strokeWidth="2.5" strokeLinecap="round"/>
          </svg>
          <div className="text-xs font-medium tracking-widest uppercase text-parchment">
            <div>Aperture</div>
            <div className="text-xs font-light text-muted">Hospitality</div>
          </div>
        </div>
        <ul className="flex gap-8 flex-wrap">
          <li>
            <a href="mailto:inquiries@aperturehospitality.com" className="text-xs tracking-wider uppercase text-muted hover:text-parchment transition-colors">
              inquiries@aperturehospitality.com
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/aperture-hospitality" target="_blank" rel="noopener noreferrer" className="text-xs tracking-wider uppercase text-muted hover:text-parchment transition-colors">
              LinkedIn
            </a>
          </li>
        </ul>
        <span className="text-xs text-[#4a4845] tracking-tight w-full md:w-auto">
          © {year} Aperture Hospitality. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
