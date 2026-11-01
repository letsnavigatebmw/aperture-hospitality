// Brand carousel, ported from brandonmweaver.com ("Brands I've Worked With").
type Brand = { src: string; alt: string; h: number } | { text: string }

const brands: Brand[] = [
  { src: '/logos/brands/johnniewalker.png', alt: "Johnnie Walker", h: 28 },
  { src: '/logos/brands/domperignon.png', alt: "Dom Pérignon", h: 48 },
  { src: '/logos/brands/audemarspiguet.png', alt: "Audemars Piguet", h: 36 },
  { src: '/logos/brands/stillhouse.png', alt: "Stillhouse", h: 48 },
  { src: '/logos/brands/fourseasons.png', alt: "Four Seasons", h: 53 },
  { src: '/logos/brands/amex.png', alt: "American Express", h: 56 },
  { src: '/logos/brands/aman.png', alt: "Aman", h: 30 },
  { src: '/logos/brands/captainmorgan.png', alt: "Captain Morgan", h: 39 },
  { src: '/logos/brands/beverly.png', alt: "The Beverly High Rye", h: 54 },
  { src: '/logos/brands/southernglazers.png', alt: "Southern Glazer’s Wine & Spirits", h: 66 },
  { src: '/logos/brands/nfl.png', alt: "NFL", h: 60 },
  { src: '/logos/brands/mlb.png', alt: "MLB", h: 46 },
  { src: '/logos/brands/f1.png', alt: "Formula 1", h: 36 },
  { src: '/logos/brands/belmond.png', alt: "Belmond", h: 50 },
  { src: '/logos/brands/krug.png', alt: "Krug", h: 66 },
  { src: '/logos/brands/donjulio.png', alt: "Don Julio", h: 43 },
  { src: '/logos/brands/caolila.png', alt: "Caol Ila", h: 40 },
  { src: '/logos/brands/chase.png', alt: "Chase", h: 30 },
  { src: '/logos/brands/boatsetter.png', alt: "Boatsetter", h: 32 },
  { src: '/logos/brands/perroverde.png', alt: "Perro Verde", h: 62 },
  { src: '/logos/brands/dorchester.png', alt: "Dorchester Collection", h: 22 },
  { src: '/logos/brands/samsung.png', alt: "Samsung", h: 24 },
  { src: '/logos/brands/ciroc.png', alt: "Cîroc", h: 37 },
  { src: '/logos/brands/marriott.png', alt: "Marriott", h: 36 },
  { src: '/logos/brands/pantene.png', alt: "Pantene", h: 58 },
  { src: '/logos/brands/netjets.png', alt: "NetJets", h: 35 },
  { src: '/logos/brands/faena.png', alt: "Faena", h: 30 },
  { src: '/logos/brands/hwood.png', alt: "The h.wood Group", h: 36 },
  { src: '/logos/brands/tanqueray.png', alt: "Tanqueray", h: 54 },
  { src: '/logos/brands/lagavulin.png', alt: "Lagavulin", h: 20 },
  { src: '/logos/brands/singleton.png', alt: "The Singleton", h: 40 },
  { src: '/logos/brands/usarmy.png', alt: "U.S. Army", h: 30 },
  { src: '/logos/brands/espn.png', alt: "ESPN", h: 26 },
  { src: '/logos/brands/hyatt.png', alt: "Hyatt", h: 34 },
  { src: '/logos/brands/pg.png', alt: "P&G", h: 56 },
  { src: '/logos/brands/bulleit.png', alt: "Bulleit", h: 54 },
  { src: '/logos/brands/stjamess.png', alt: "St. James’s Hotel & Club", h: 60 },
  { src: '/logos/brands/mondelez.png', alt: "Mondelēz", h: 36 },
  { src: '/logos/brands/verizon.png', alt: "Verizon", h: 32 },
  { src: '/logos/brands/complex.png', alt: "Complex", h: 22 },
  { src: '/logos/brands/hilton.png', alt: "Hilton", h: 40 },
  { src: '/logos/brands/jwbluelabel.png', alt: "Johnnie Walker Blue Label", h: 50 },
  { src: '/logos/brands/sisley.png', alt: "Sisley Paris", h: 62 },
  { src: '/logos/brands/vistajet.png', alt: "VistaJet", h: 34 },
  { src: '/logos/brands/auberge.png', alt: "Auberge Collection", h: 26 },
  { src: '/logos/brands/bacardi.png', alt: "Bacardi", h: 38 },
  { src: '/logos/brands/pelicanhill.png', alt: "Pelican Hill", h: 58 },
  { src: '/logos/brands/compass.png', alt: "Compass", h: 26 },
  { src: '/logos/brands/engelvolkers.png', alt: "Engel & Völkers", h: 21 },
  { src: '/logos/brands/dowlingstreet.png', alt: "Dowling Street", h: 28 },
  { src: '/logos/brands/skinceuticals.png', alt: "SkinCeuticals", h: 28 },
  { src: '/logos/brands/visa.png', alt: "Visa", h: 27 },
  { text: "Abercrombie & Kent" },
]

function Track({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="marquee__track" aria-hidden={hidden || undefined}>
      {brands.map((b, i) => (
        <li key={i}>
          {'src' in b ? (
            <img src={b.src} alt={hidden ? '' : b.alt} style={{ height: b.h, width: 'auto' }} loading="lazy" decoding="async" />
          ) : (
            <span className="marquee__name">{b.text}</span>
          )}
        </li>
      ))}
    </ul>
  )
}

export default function BrandMarquee() {
  return (
    <div className="marquee-wrap reveal">
      <div className="marquee" aria-label="Brands I have worked with">
        <Track />
        <Track hidden />
      </div>
    </div>
  )
}
