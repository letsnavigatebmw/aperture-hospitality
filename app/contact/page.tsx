import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import IntakeForm from '@/components/IntakeForm'

export const metadata: Metadata = {
  title: 'Contact | Aperture Hospitality',
  description: "Get in touch with Aperture Hospitality. Tell us about your business and we'll follow up within one business day.",
  openGraph: {
    title: 'Contact | Aperture Hospitality',
    description: 'Get in touch with Aperture Hospitality.',
  },
}

export default function Contact() {
  return (
    <>
      <Nav />
      
      <IntakeForm />

      <Footer />
    </>
  )
}
