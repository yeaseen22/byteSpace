import { useRef } from 'react'

import CoursesSection from '../components/landing/CoursesSection'
import CreatorBanner from '../components/landing/CreatorBanner'
import CreatorFeature from '../components/landing/CreatorFeature'
import GrowthFeature from '../components/landing/GrowthFeature'
import HeroSection from '../components/landing/HeroSection'
import LogosBanner from '../components/landing/LogosBanner'
import PathsSection from '../components/landing/PathsSection'
import SiteFooter from '../components/landing/SiteFooter'
import TestimonialsSection from '../components/landing/TestimonialsSection'
import useLandingAnimations from '../hooks/useLandingAnimations'

export default function LandingPage() {
  const rootRef = useRef(null)
  useLandingAnimations(rootRef)

  return (
    <div className="landing-page" ref={rootRef}>
      <HeroSection />
      <LogosBanner />
      <CoursesSection />
      <PathsSection />
      <GrowthFeature />
      <CreatorFeature />
      <CreatorBanner />
      <TestimonialsSection />
      <SiteFooter />
    </div>
  )
}
