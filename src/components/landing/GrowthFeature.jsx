import { images, showcaseOrnaments } from '../../assets/landing/images'
import { growthSection } from '../../data/landingContent'
import ProgressBar from './ProgressBar'

/** Renders a stat in its final form; useLandingAnimations counts it up on scroll. */
function formatStat({ target, divisor, suffix }) {
  return `${Math.round(target / divisor)}${suffix}`
}

export default function GrowthFeature() {
  const { heading, description, stats, showcase } = growthSection

  return (
    <section className="feature-block-section">
      <div className="site-container">
        <div className="feature-row">
          <div className="feature-col-text">
            <h2 className="feature-heading">{heading}</h2>
            <p className="feature-desc">{description}</p>

            <div className="stats-counter-row">
              {stats.map((stat) => (
                <div className="stat-item" key={stat.label}>
                  <span
                    className="stat-num"
                    data-target={stat.target}
                    data-divisor={stat.divisor}
                    data-suffix={stat.suffix}
                  >
                    {formatStat(stat)}
                  </span>
                  <span className="stat-lbl">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="feature-col-graphic">
            <div className="showcase-box">
              <div className="showcase-arch-bg" />
              <img
                src={images.heroStudent}
                alt="Student working through a ByteSpace course"
                className="showcase-student-img"
              />

              <div className="ui-card showcase-badge-card1 float-badge-1">
                <img src={images.course1} alt="" className="badge-mini-thumb" />

                <div>
                  <h5 className="badge-mini-title">{showcase.badge.title}</h5>
                  <span className="badge-mini-author">{showcase.badge.author}</span>
                  <span className="badge-mini-price">{showcase.badge.price}</span>
                </div>
              </div>

              <div className="ui-card showcase-badge-card2 float-badge-2">
                <span className="card-label">Learning Progress</span>
                <ProgressBar initial={55} trackMargin={6} />
              </div>

              <img
                className="showcase-ornament showcase-ornament-1 float-anim-1"
                src={showcaseOrnaments.growth}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
