import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-[#2e2b26]">
      <div className="container-max py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
        <div className="h-10 w-auto brightness-0 invert">
          <img 
            src="/aperture-logo.png" 
            alt="Aperture Hospitality"
            className="h-full w-auto object-contain"
          />
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
