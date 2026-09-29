import CallToAction from '../components/sections/CallToAction'
import Categories from '../components/sections/Categories'
import CategoryFilters from '../components/sections/CategoryFilters'
import CategoryTiles from '../components/sections/CategoryTiles'
import CourseGrid from '../components/sections/CourseGrid'
import Hero from '../components/sections/Hero'
import Partners from '../components/sections/Partners'
import Testimonials from '../components/sections/Testimonials'
import WhyByteSpace from '../components/sections/WhyByteSpace'
import SectionIntro from '../components/ui/SectionIntro'
import { learningPaths, passion } from '../data/content'

export default function LandingPage() {
  return (
    <>
      <Hero />
      <Partners />
      <SectionIntro heading={passion.heading} body={passion.body} className="pt-20 lg:pt-24" />
      <Categories />
      <CategoryFilters />
      <CourseGrid />
      <SectionIntro heading={learningPaths.heading} body={learningPaths.body} size="h3" className="pt-8" />
      <CategoryTiles />
      <WhyByteSpace />
      <CallToAction />
      <Testimonials />
    </>
  )
}
