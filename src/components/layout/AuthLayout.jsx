import { Link } from 'react-router-dom'

import BrandLogo from '../landing/BrandLogo'
import Container from '../ui/Container'

/**
 * The blue split layout shared by the Login and Register frames in the design:
 * form card on the left, marketing line, and a course-card collage on the right.
 */
export default function AuthLayout({ title, subtitle, children, footer, marketing }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-blue-600">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />

      <div className="relative h-[120px]">
        <Container className="flex h-full items-center">
          <BrandLogo />
        </Container>
      </div>

      <div className="relative container-page grid items-start gap-12 pb-20 lg:grid-cols-[475px_579px_1fr] lg:gap-10">
        <div className="hidden lg:block">
          <h2 className="font-display text-h4 font-semibold leading-[24px] text-surface-4">{marketing.heading}</h2>
          <p className="mt-3 max-w-[475px] text-lg leading-[29px] text-surface-4">{marketing.body}</p>
        </div>

        <div className="card w-full max-w-[579px] p-8 lg:px-[63px] lg:py-14">
          <p className="text-lg leading-[29px] text-blue-600">{subtitle}</p>
          <h1 className="mt-1 font-display text-h2 font-semibold text-ink">{title}</h1>

          <div className="mt-8">{children}</div>

          <p className="mt-8 text-base leading-6 text-body">{footer}</p>
        </div>
      </div>
    </div>
  )
}

export function AuthLink({ prompt, linkLabel, to }) {
  return (
    <>
      {prompt}{' '}
      <Link to={to} className="text-base leading-6 text-blue-600 transition-opacity hover:opacity-70">
        {linkLabel}
      </Link>
    </>
  )
}
