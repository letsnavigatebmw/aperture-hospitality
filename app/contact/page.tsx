import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Contact | Aperture Hospitality',
  description: 'Get in touch with Aperture Hospitality. Schedule a conversation with Brandon.',
  openGraph: {
    title: 'Contact | Aperture Hospitality',
    description: 'Get in touch with Aperture Hospitality.',
  },
}

export default function Contact() {
  return (
    <>
      <Nav />
      
      <section className="border-b border-rule">
        <div className="container-max py-16 md:py-24">
          <div className="section-label">Contact</div>
          
          <div className="max-w-4xl">
            <p className="text-lg md:text-xl leading-relaxed text-muted mb-12">
              Have a project in mind? Looking to explore a partnership? Let's talk.
            </p>

            <div className="mb-12">
              <h2 className="font-display text-2xl font-normal text-ink mb-6">Email</h2>
              <a href="mailto:inquiries@aperturehospitality.com" className="text-lg text-brass hover:text-brass-dim transition-colors">
                inquiries@aperturehospitality.com
              </a>
            </div>

            <div className="mb-12">
              <h2 className="font-display text-2xl font-normal text-ink mb-8">Schedule a conversation</h2>
              <div className="bg-parchment-dark rounded-lg overflow-hidden" style={{ minHeight: '600px' }}>
                <iframe
                  src="https://calendar.app.google/LAjqk4HVG4Dm8eQk7"
                  style={{
                    border: 'none',
                    width: '100%',
                    height: '100%',
                    minHeight: '600px'
                  }}
                  allowFullScreen={true}
                  title="Google Calendar"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  )
}
