import { Link } from 'react-router-dom'

import { creatorBanner } from '../../data/landingContent'
import MagneticButton from './MagneticButton'
import ShapeSprite from './ShapeSprite'

export default function CreatorBanner() {
  return (
    <section className="creator-cta-banner">
      <div className="grid-overlay" />

      {/* The first accent keeps the reference's `shape-spring-lime` class: that
          class carries its top/left position, and the reference renders a torus
          inside it. */}
      <div className="floating-accent shape-spring-lime float-anim-1" aria-hidden="true">
        <ShapeSprite shape="torus" />
      </div>
      <div
        className="floating-accent shape-cylinder-lime float-anim-2"
        style={{ right: '5%', top: '15%' }}
        aria-hidden="true"
      >
        <ShapeSprite shape="cylinder" />
      </div>
      <div
        className="floating-accent shape-pyramid-white float-anim-3"
        style={{ left: '6%', bottom: '15%' }}
        aria-hidden="true"
      >
        <ShapeSprite shape="pyramid" />
      </div>

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
