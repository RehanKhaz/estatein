import Features from './components/Features'
import CTABanner from './components/CTABanner'
import FAQ from './sections/Home/FAQ'
import Testimonials from './sections/Home/Testimonials'
import Properties from './sections/Home/Properties'
import Hero from './sections/Home/Hero'
import { features } from './db'


const Home = () => {
  return (
    <>
      <Hero />
      <Features data={features} />
      <Properties />
      <Testimonials />
      <FAQ />
      <CTABanner />
    </>
  )
}

export default Home
