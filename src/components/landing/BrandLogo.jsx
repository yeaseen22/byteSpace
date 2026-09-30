import { Link } from 'react-router-dom'

/** The ByteSpace wordmark. `tone="dark"` is the light-on-white footer variant. */
export default function BrandLogo({ tone = 'light' }) {
  return (
    <Link to="/" className={`brand-logo${tone === 'dark' ? ' dark-logo' : ''}`} aria-label="ByteSpace home">
      <span className="logo-icon" aria-hidden="true">
        <span className="logo-dot" />
        <span className="logo-bar" />
      </span>
      <span className="logo-text">ByteSpace</span>
    </Link>
  )
}
