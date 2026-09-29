import CallToAction from '../components/sections/CallToAction'
import Faq from '../components/sections/Faq'
import Features from '../components/sections/Features'
import Hero from '../components/sections/Hero'
import Pricing from '../components/sections/Pricing'
import Product from '../components/sections/Product'
import Stats from '../components/sections/Stats'
import Testimonials from '../components/sections/Testimonials'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Stats />
      <Features />
      <Product />
      <Testimonials />
      <Pricing />
      <Faq />
      <CallToAction />
    </>
  )
}
