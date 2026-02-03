import Hero from '../components/Hero'
import BentoFeatures from '../components/BentoFeatures'
import Features from '../components/Features'
import HowItWorks from '../components/HowItWorks'
import Testimonials from '../components/Testimonials'
import FAQHome from '../components/FAQHome'
import CTAStrip from '../components/CTAStrip'

import Seo from '../components/Seo'

export default function Home() {
  return (
    <>
      <Seo 
        title="Nitip Dong - Layanan Titip Barang Mahasiswa"
        description="Layanan penitipan barang mahasiswa terpercaya. Keamanan 24/7, asuransi penuh, dan layanan antar-jemput gratis."
      />
      <Hero />
      <BentoFeatures />
      <Features />
      <HowItWorks />
      <Testimonials />
      <FAQHome />
      <CTAStrip />
    </>
  )
}
