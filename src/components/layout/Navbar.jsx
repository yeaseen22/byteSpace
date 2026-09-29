import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks, site } from '../../data/content'
import Button from '../ui/Button'
import Container from '../ui/Container'

function Logo({ className = '' }) {
  return (
    <Link to="/" className={`flex items-center gap-2 ${className}`} aria-label={`${site.name} home`}>
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-to-br from-brand-400 to-brand-600 shadow-lg shadow-brand-500/30">
        <svg viewBox="0 0 24 24" className="h-4.5 w-4.5" fill="none" aria-hidden="true">
          <path
            d="M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="text-lg font-semibold tracking-tight text-ink-100">{site.name}</span>
    </Link>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? 'border-b border-ink-700/80 bg-ink-900/85 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <Container className="flex h-16 items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm text-ink-300 transition-colors hover:text-ink-100"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button to="/login" variant="ghost" size="sm">
            Log in
          </Button>
          <Button to="/signup" size="sm">
            Get started
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="grid h-9 w-9 place-items-center rounded-lg text-ink-200 hover:bg-ink-800 md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </Container>

      {open ? (
        <div id="mobile-menu" className="border-t border-ink-700 bg-ink-900/95 backdrop-blur-xl md:hidden">
          <Container className="flex flex-col gap-1 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm text-ink-300 hover:bg-ink-800 hover:text-ink-100"
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <Button to="/login" variant="outline" onClick={() => setOpen(false)}>
                Log in
              </Button>
              <Button to="/signup" onClick={() => setOpen(false)}>
                Get started
              </Button>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}

export { Logo }
