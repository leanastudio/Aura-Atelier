import Hero from '../components/Hero'
import ServicesPreview from '../components/ServicesPreview'
import Gallery from '../components/Gallery'
import About from '../components/About'
import WhyUs from '../components/WhyUs'
import VibeSection from '../components/VibeSection'
import Testimonials from '../components/Testimonials'
import BookingCTA from '../components/BookingCTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <ServicesPreview />
      <Gallery />
      <About />
      <WhyUs />
      <VibeSection />
      <Testimonials />
      <BookingCTA />
    </main>
  )
}
