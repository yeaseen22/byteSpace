import { images } from '../../assets/landing/images'
import { creatorSection } from '../../data/landingContent'
import AvatarStack from './AvatarStack'
import Icon from './Icon'
import { SpringAccent } from './ShapeSprite'

export default function CreatorFeature() {
  const { heading, description, checks, revenueBadges, studentsCard } = creatorSection

  return (
    <section className="feature-block-section" id="creators">
      <div className="site-container">
        <div className="feature-row reverse">
          <div className="feature-col-graphic">
            <div className="showcase-box">
              <div className="showcase-soft-glow" />
              <img
                src={images.creator}
                alt="Creator publishing a course on ByteSpace"
                className="showcase-creator-img"
              />

              {revenueBadges.map((badge, index) => (
                <div
                  key={badge.label}
                  className={`revenue-badge ${index === 0 ? 'rev-badge-1' : 'rev-badge-2'} float-badge-${index + 1}`}
                >
                  <span className="rev-label">{badge.label}</span>
                  <span className="rev-date">{badge.date}</span>
                  <span className="rev-amount">{badge.amount}</span>
                  {badge.hasBar ? <div className="rev-bar" /> : <span className="rev-pill">{badge.pill}</span>}
                </div>
              ))}

              <div className="ui-card showcase-badge-card3 float-badge-3">
                <span className="card-title">{studentsCard.title}</span>
                <AvatarStack badge={studentsCard.badge} className="showcase-avatar-stack" />
              </div>

              <SpringAccent
                width={80}
                height={90}
                className="showcase-spring-accent-left float-anim-2"
              />
            </div>
          </div>

          <div className="feature-col-text">
            <h2 className="feature-heading">{heading}</h2>
            <p className="feature-desc">{description}</p>
            <ul className="check-list">
              {checks.map((check) => (
                <li key={check}>
                  <Icon name="fa-circle-check" /> {check}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
