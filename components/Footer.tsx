import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-[#2e2b26]">
      <div className="container-max py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
        <div className="flex items-center gap-4">
          {/* Aperture Circle Logo - Light */}
          <div className="w-8 h-8 rounded-full border-2 border-parchment flex-shrink-0"></div>
          <div className="text-sm font-medium tracking-widest uppercase text-parchment">
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
