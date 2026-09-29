import { Link } from 'react-router-dom'

import { Logo } from './Navbar'

export default function AuthLayout({ title, subtitle, children, footer }) {
  return (
    <div className="flex min-h-screen">
      <div className="flex w-full flex-col px-6 py-10 sm:px-12 lg:w-1/2">
        <div className="mx-auto flex w-full max-w-sm flex-1 flex-col justify-center">
          <Logo className="mb-10" />

          <h1 className="text-2xl font-semibold tracking-tight text-ink-100 sm:text-3xl">{title}</h1>
          <p className="mt-2 text-sm text-ink-400">{subtitle}</p>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-center text-sm text-ink-400">{footer}</p>
        </div>
      </div>

      <div className="relative hidden w-1/2 overflow-hidden border-l border-ink-700 bg-ink-950 lg:block">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,116,246,0.18),transparent_60%)]"
        />
        <div className="relative flex h-full flex-col justify-end p-12">
          <blockquote className="max-w-sm">
            <p className="text-lg leading-relaxed text-ink-200">
              &ldquo;We moved 40 engineers onto byteSpace in a single afternoon and shipped more in the
              next sprint than in the previous quarter.&rdquo;
            </p>
            <footer className="mt-5 text-sm text-ink-400">Amara Osei, VP Engineering at Northwind</footer>
          </blockquote>
        </div>
      </div>
    </div>
  )
}

export function AuthFooterLink({ prompt, linkLabel, to }) {
  return (
    <>
      {prompt}{' '}
      <Link to={to} className="font-medium text-brand-300 transition-colors hover:text-brand-200">
        {linkLabel}
      </Link>
    </>
  )
}
