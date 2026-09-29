import { clientLogos } from '../../data/landingContent'
import Icon from './Icon'

export default function LogosBanner() {
  return (
    <section className="logos-section" aria-label="Companies using ByteSpace">
      <div className="site-container">
        <div className="logo-grid">
          {clientLogos.map((logo) => (
            <div className="logo-item" key={logo.icon}>
              <Icon name={logo.icon} /> Logoipsum
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
