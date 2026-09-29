import { Link } from 'react-router-dom'

import { ctaOrnaments } from '../../assets/landing/images'
import { creatorBanner } from '../../data/landingContent'
import MagneticButton from './MagneticButton'
import OrnamentFrame from './OrnamentFrame'

export default function CreatorBanner() {
  return (
    <section className="creator-cta-banner">
      <div className="grid-overlay" />

      <OrnamentFrame ornaments={ctaOrnaments} className="cta-ornaments" />

      <div className="site-container">
        <div className="banner-content">
          <h2 className="banner-title">{creatorBanner.title}</h2>
          <p className="banner-desc">{creatorBanner.description}</p>
          <MagneticButton as={Link} to="/register" className="btn-creator-cta">
            {creatorBanner.cta}
          </MagneticButton>
        </div>
      </div>
    </section>
  )
}
