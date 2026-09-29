import Container from '../ui/Container'
import { site } from '../../data/content'

const columns = [
  {
    title: 'Product',
    links: ['Features', 'Integrations', 'Changelog', 'Roadmap', 'Pricing'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Customers', 'Press kit'],
  },
  {
    title: 'Resources',
    links: ['Docs', 'API reference', 'Guides', 'Status', 'Support'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'DPA', 'Cookies'],
  },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink-700 bg-ink-950">
      <Container className="py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2.6fr]">
          <div>
            <p className="text-lg font-semibold tracking-tight text-ink-100">{site.name}</p>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-ink-400">{site.description}</p>
            <div className="mt-6 flex gap-3">
              {['X', 'GitHub', 'LinkedIn'].map((label) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="grid h-9 w-9 place-items-center rounded-lg border border-ink-700 text-xs text-ink-400 transition-colors hover:border-ink-500 hover:text-ink-100"
                >
                  {label.slice(0, 2)}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((column) => (
              <div key={column.title}>
                <p className="text-sm font-medium text-ink-100">{column.title}</p>
                <ul className="mt-4 space-y-3">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-sm text-ink-400 transition-colors hover:text-ink-100">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-ink-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-ink-500">
            &copy; {year} {site.name}, Inc. All rights reserved.
          </p>
          <p className="text-sm text-ink-500">Built with care, shipped every week.</p>
        </div>
      </Container>
    </footer>
  )
}
