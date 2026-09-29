import { footer } from '../../data/landingContent'
import BrandLogo from './BrandLogo'
import MagneticButton from './MagneticButton'

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-container">
        <div className="footer-top-row">
          <div className="newsletter-col">
            <BrandLogo tone="dark" />
            <p className="newsletter-text">{footer.newsletter.text}</p>

            <form className="newsletter-form" onSubmit={(event) => event.preventDefault()}>
              <input
                type="email"
                placeholder={footer.newsletter.placeholder}
                aria-label="Email address"
                required
              />
              {/* the reference labelled this "Search"; corrected to match the
                  newsletter context, button styling is unchanged */}
              <MagneticButton type="submit" className="btn-search">
                Subscribe
              </MagneticButton>
            </form>

            <p className="newsletter-disclaimer">{footer.newsletter.disclaimer}</p>
          </div>

          <div className="footer-links-wrapper">
            {footer.columns.map((column) => (
              <div className="footer-col" key={column.join('-')}>
                {column.map((link) => (
                  <a href="#" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>

        <div className="footer-bottom-bar">
          <div className="copyright">{footer.copyright}</div>
          <div className="legal-links">
            {footer.legal.map((link) => (
              <a href="#" key={link}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
