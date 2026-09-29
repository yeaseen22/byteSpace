import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { navLinks, site } from '../../data/content'
import Icon from '../ui/Icon'

export function Logo({ tone = 'light' }) {
  const mark = tone === 'light' ? 'text-white' : 'text-ink'
  const word = tone === 'light' ? 'text-surface-4' : 'text-ink'

  return (
    <Link to="/" className="flex shrink-0 items-center gap-2" aria-label={`${site.name} home`}>
      <svg viewBox="0 0 29 32" className={`h-8 w-[29px] ${mark}`} fill="none" aria-hidden="true">
        <path
          d="M9.5 4 3 16l6.5 12M19.5 4 26 16l-6.5 12M16.5 2.5 12 29.5"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className={`font-brand text-2xl font-bold leading-none ${word}`}>{site.name}</span>
    </Link>
  )
}

const linkBase = 'text-base transition-opacity hover:opacity-70'
const light = 'text-surface-4'
const dark = 'text-ink'

export default function Navbar({ tone = 'light' }) {
  const [open, setOpen] = useState(false)
  const isLight = tone === 'light'
  const color = isLight ? light : dark

  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <header className="absolute inset-x-0 top-0 z-40 h-[120px]">
      <div className="container-page flex h-full items-center justify-between">
        <Logo tone={tone} />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((link, i) => (
            <Link key={link.label} to={link.href} className={`${linkBase} ${color} ${i === 0 ? 'font-medium' : ''}`}>
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <Link to="/login" className={`${linkBase} ${color}`}>
            Sign In
          </Link>
          <Link to="/register" className={`inline-flex items-center gap-1 ${linkBase} ${color}`}>
            Join Us
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className={`grid h-11 w-11 place-items-center rounded-full md:hidden ${
            isLight ? 'text-white hover:bg-white/10' : 'text-ink hover:bg-surface-4'
          }`}
        >
          <Icon name={open ? 'close' : 'menu'} className="h-6 w-6" />
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className={`rounded-3xl p-6 shadow-xl md:hidden ${
            isLight ? 'bg-blue-600' : 'bg-surface'
          }`}
        >
          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link key={link.label} to={link.href} onClick={() => setOpen(false)} className={`text-base ${color}`}>
                {link.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-4 border-t border-current/15 pt-4">
              <Link to="/login" onClick={() => setOpen(false)} className={`text-base ${color}`}>
                Sign In
              </Link>
              <Link to="/register" onClick={() => setOpen(false)} className={`text-base ${color}`}>
                Join Us
              </Link>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
