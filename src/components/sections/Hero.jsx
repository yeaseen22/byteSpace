import { useState } from 'react'

import { hero } from '../../data/content'
import heroImage from '../../assets/figma/hero-illustration.jpg'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

const avatars = ['SM', 'JL', 'AB', 'RK', 'DM', 'PS', 'TN', '2K+']

function AvatarStack() {
  return (
    <div className="flex -space-x-[18px]">
      {avatars.map((a, i) => (
        <span
          key={a}
          className={`grid h-[43px] w-[43px] place-items-center rounded-full text-xs font-bold ring-2 ring-white ${
            i === 7 ? 'bg-blue-600 text-white' : 'text-white'
          }`}
          style={{
            backgroundColor: i === 7 ? undefined : ['#003BE2', '#D4FB20', '#7F30F7', '#424348', '#C1E338', '#E5E6E8', '#4B4C53'][i % 7],
            color: i === 1 || i === 4 ? '#242528' : '#FFFFFF',
          }}
        >
          {a}
        </span>
      ))}
    </div>
  )
}

function FloatingCard({ className, children }) {
  return (
    <div className={`absolute rounded-2xl bg-white p-5 shadow-xl shadow-blue-900/20 ${className}`}>
      {children}
    </div>
  )
}

function ProgressCard() {
  return (
    <FloatingCard className="left-0 top-24 w-[232px] lg:left-4">
      <p className="text-sm font-medium leading-[17px] text-ink">Learning Progress</p>
      <p className="mt-2 font-display text-5xl font-semibold leading-[58px] text-ink">55%</p>
      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-surface-4">
        <div className="h-full w-[56%] rounded-full bg-blue-600" />
      </div>
    </FloatingCard>
  )
}

function StudentsCard() {
  return (
    <FloatingCard className="right-0 top-8 w-[258px] lg:right-2">
      <p className="text-base font-medium leading-[19px] text-ink">Happy Students</p>
      <p className="mt-1.5 flex items-center gap-1 text-xs leading-[19px] text-muted">
        4.5 (240)
        <Icon name="star" filled className="h-4 w-4 text-lime-500" />
      </p>
      <div className="mt-3">
        <AvatarStack />
      </div>
    </FloatingCard>
  )
}

function CategoryChip() {
  return (
    <FloatingCard className="bottom-6 left-6 w-[208px] lg:left-16">
      <p className="text-base font-medium leading-[19px] text-ink">UI/UX Design</p>
      <p className="mt-1.5 text-xs leading-[19px] text-muted">
        200 Courses <span className="px-1 text-[10px]">&bull;</span> 1000+ Students
      </p>
    </FloatingCard>
  )
}

export default function Hero() {
  const [query, setQuery] = useState('')

  return (
    <section className="relative overflow-hidden bg-blue-600">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />

      <div className="relative pt-[220px] pb-0 lg:pt-[240px]">
        <Container className="text-center">
          <h1 className="mx-auto max-w-[935px] font-display text-h1 font-semibold text-white">{hero.heading}</h1>
          <p className="mx-auto mt-6 max-w-[819px] text-lg leading-[29px] text-surface-5">{hero.subheading}</p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mx-auto mt-10 flex w-full max-w-[581px] items-center gap-3"
            role="search"
          >
            <div className="flex h-[52px] flex-1 items-center gap-2 rounded-full bg-white pl-6 pr-2">
              <Icon name="search" className="h-4 w-4 shrink-0 text-muted" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder={hero.searchPlaceholder}
                aria-label={hero.searchPlaceholder}
                className="h-full w-full bg-transparent text-lg text-ink outline-none placeholder:text-muted"
              />
            </div>
            <button type="submit" className="btn-lime h-[46px] shrink-0">
              {hero.searchLabel}
            </button>
          </form>
        </Container>

        <div className="relative mx-auto mt-10 max-w-[900px] px-6 lg:mt-6">
          <img
            src={heroImage}
            alt="A student progressing through a ByteSpace course"
            width={578}
            height={541}
            className="mx-auto w-full max-w-[578px] select-none"
            draggable="false"
          />

          <div className="pointer-events-none absolute inset-0 hidden md:block">
            <ProgressCard />
            <StudentsCard />
            <CategoryChip />
          </div>
        </div>
      </div>
    </section>
  )
}
