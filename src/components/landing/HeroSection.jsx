import { useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { heroOrnaments, images } from '../../assets/landing/images'
import { hero, navLinks } from '../../data/landingContent'
import AvatarStack from './AvatarStack'
import BrandLogo from './BrandLogo'
import Icon from './Icon'
import MagneticButton from './MagneticButton'
import OrnamentFrame from './OrnamentFrame'
import ProgressBar from './ProgressBar'

function CourseSearch() {
  const [query, setQuery] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const wrapperRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return undefined

    const handlePointerDown = (event) => {
      if (!wrapperRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('pointerdown', handlePointerDown)
    return () => document.removeEventListener('pointerdown', handlePointerDown)
  }, [isOpen])

  const matches = useMemo(() => {
    const term = query.toLowerCase().trim()
    if (!term) return hero.suggestions
    return hero.suggestions.filter((item) => item.label.toLowerCase().includes(term))
  }, [query])

  return (
    <div className="search-wrapper" ref={wrapperRef}>
      <form
        className="search-bar"
        role="search"
        onSubmit={(event) => event.preventDefault()}
      >
        <Icon name="fa-magnifying-glass" className="search-icon" />
        <input
          id="course-search-input"
          type="text"
          placeholder={hero.searchPlaceholder}
          autoComplete="off"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          onFocus={() => setIsOpen(true)}
          role="combobox"
          aria-expanded={isOpen}
          aria-controls="search-dropdown"
          aria-autocomplete="list"
        />
        <MagneticButton type="submit" className="btn-search">
          Search
        </MagneticButton>
      </form>

      <div
        className={`search-results-dropdown${isOpen ? ' active' : ''}`}
        id="search-dropdown"
        role="listbox"
        aria-label="Popular course suggestions"
      >
        <div className="dropdown-header">Popular Suggestions</div>
        {matches.length === 0 ? (
          <div className="suggestion-item suggestion-empty">No matches</div>
        ) : (
          matches.map((item) => (
            <button
              type="button"
              key={item.label}
              className="suggestion-item"
              role="option"
              aria-selected={query === item.label}
              onClick={() => {
                setQuery(item.label)
                setIsOpen(false)
              }}
            >
              <Icon name={item.icon} /> {item.label}
            </button>
          ))
        )}
      </div>
    </div>
  )
}

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="hero-section" id="home">
      <div className="grid-overlay" />

      <OrnamentFrame ornaments={heroOrnaments} className="hero-ornaments" />

      <div className="site-container">
        <nav className="navbar" id="main-nav">
          <BrandLogo />

          <ul className={`nav-links${isMenuOpen ? ' mobile-open' : ''}`} id="nav-links">
            {navLinks.map((link, index) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`nav-link${index === 0 ? ' active' : ''}`}
                  aria-current={index === 0 ? 'page' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="nav-actions">
            <Link to="/login" className="btn-text">
              Sign In
            </Link>
            <MagneticButton as={Link} to="/register" className="btn-join">
              Join Us
            </MagneticButton>
            <button type="button" className="cart-btn" aria-label="Shopping cart, 2 items">
              <Icon name="fa-bag-shopping" />
              <span className="cart-count">2</span>
            </button>
          </div>

          <button
            type="button"
            className="mobile-toggle"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="nav-links"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            <Icon name={isMenuOpen ? 'fa-xmark' : 'fa-bars'} />
          </button>
        </nav>

        <header className="hero-header">
          <h1 className="hero-title">{hero.title}</h1>
          <p className="hero-subtitle">{hero.subtitle}</p>
          <CourseSearch />
        </header>

        <div className="hero-stage">
          <div className="arch-backdrop" />

          <div className="student-wrapper">
            <img src={images.heroStudent} alt="Smiling student holding a laptop" className="student-img" />
          </div>

          <div className="ui-card card-courses-info float-badge-1">
            <div className="card-icon-box">
              <Icon name={hero.coursesCard.icon} />
            </div>
            <div>
              <h4 className="card-title">{hero.coursesCard.title}</h4>
              <p className="card-meta">{hero.coursesCard.meta}</p>
            </div>
          </div>

          <div className="ui-card card-progress-info float-badge-2">
            <span className="card-label">{hero.progressCard.label}</span>
            <ProgressBar initial={hero.progressCard.initial} valueRow />
          </div>

          <div className="ui-card card-happy-students float-badge-3">
            <div className="card-top-row">
              <span className="card-title">{hero.studentsCard.title}</span>
              <div className="rating-box">
                <span>{hero.studentsCard.score}</span>
                <span className="rating-count">{hero.studentsCard.count}</span>
                <Icon name="fa-star" className="star-icon" />
              </div>
            </div>
            <AvatarStack badge={hero.studentsCard.badge} />
          </div>
        </div>
      </div>
    </section>
  )
}
