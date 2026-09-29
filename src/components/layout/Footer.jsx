import { useState } from 'react'

import { footer } from '../../data/content'
import { Logo } from './Navbar'
import Container from '../ui/Container'

export default function Footer() {
  const [email, setEmail] = useState('')

  return (
    <footer className="bg-surface pt-16">
      <Container>
        <div className="flex flex-col gap-12 pb-12 lg:flex-row lg:gap-[92px]">
          <div className="max-w-[528px]">
            <Logo tone="dark" />
            <p className="mt-6 text-sm leading-[22px] text-ink">{footer.newsletter}</p>

            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-6 flex flex-wrap items-center gap-3"
              aria-label="Newsletter signup"
            >
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footer.placeholder}
                aria-label={footer.placeholder}
                className="h-[52px] min-w-0 flex-1 rounded-full border border-ink/10 px-6 text-base text-ink outline-none transition-colors placeholder:text-ink/60 focus:border-blue-600"
              />
              <button type="submit" className="btn-lime h-[46px] shrink-0">
                {footer.button}
              </button>
            </form>

            <p className="mt-4 max-w-[504px] text-xs leading-[19px] text-ink">{footer.consent}</p>
          </div>

          <div className="grid flex-1 grid-cols-2 gap-8 sm:grid-cols-3">
            {footer.columns.map((column) => (
              <div key={column.heading}>
                <p className="text-base leading-6 text-ink">{column.heading}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm leading-[22px] text-ink transition-opacity hover:opacity-60">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-base leading-6 text-transparent" aria-hidden="true">
                &nbsp;
              </p>
              <ul className="mt-4 space-y-3">
                {['Development', 'Marketing', 'Photography', 'Finance', 'Sport'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm leading-[22px] text-ink transition-opacity hover:opacity-60">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-surface-4 py-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-[19px] text-ink">{footer.copyright}</p>
          <ul className="flex flex-wrap gap-6">
            {footer.legal.map((link) => (
              <li key={link}>
                <a href="#" className="text-xs leading-[19px] text-ink transition-opacity hover:opacity-60">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  )
}
