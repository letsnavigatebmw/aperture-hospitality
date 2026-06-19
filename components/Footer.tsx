import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-[#2e2b26]">
      <div className="container-max py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 flex-wrap">
        <div className="h-10 w-auto">
          <svg viewBox="0 0 280 120" className="h-full w-auto" xmlns="http://www.w3.org/2000/svg">
            {/* Circle/Aperture symbol */}
            <circle cx="45" cy="60" r="28" fill="none" stroke="#F0EDE6" strokeWidth="2.5"/>
            <path d="M 45 32 A 28 28 0 0 1 73 60" fill="none" stroke="#B8924A" strokeWidth="3"/>
            
            {/* Text */}
            <text x="95" y="75" fontFamily="Georgia, serif" fontSize="32" fontWeight="300" letterSpacing="4" fill="#F0EDE6">APERTURE</text>
            <text x="95" y="95" fontFamily="Georgia, serif" fontSize="12" fontWeight="300" letterSpacing="2.5" fill="#6B6760">HOSPITALITY</text>
          </svg>
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
