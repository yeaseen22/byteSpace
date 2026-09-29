import { courseMeta, courses } from '../../data/content'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

const stacks = [
  { initials: 'A1', bg: 'bg-blue-600' },
  { initials: 'B2', bg: 'bg-lime-400 text-ink' },
  { initials: 'C3', bg: 'bg-[#7F30F7]' },
  { initials: 'D4', bg: 'bg-[#424348]' },
  { initials: courseMeta.students, bg: 'bg-ink text-white' },
]

function CardImage({ title }) {
  return (
    <div className="relative flex h-[195px] w-full items-end overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-blue-600/85 to-[#7F30F7] p-4">
      <div aria-hidden="true" className="grid-lines absolute inset-0 opacity-30" />
      <ul className="relative flex flex-wrap gap-2">
        {[courseMeta.lessons, courseMeta.duration, courseMeta.comments].map((pill) => (
          <li key={pill} className="pill h-[26px] bg-surface-3 px-3 text-xs font-medium leading-[14px] text-[#4F4F4F]">
            {pill}
          </li>
        ))}
      </ul>
      <span className="absolute right-4 top-4 font-display text-h4 font-semibold text-white/25" aria-hidden="true">
        {title.slice(0, 2).toUpperCase()}
      </span>
    </div>
  )
}

function CardMeta() {
  return (
    <div className="mt-4 flex items-center justify-between gap-3">
      <span className="pill h-8 gap-1.5 bg-surface-4 px-3 text-xs font-medium leading-[14px] text-body">
        <Icon name="signal" className="h-[18px] w-[18px]" />
        {courseMeta.level}
      </span>
      <span className="flex -space-x-2.5">
        {stacks.map((a) => (
          <span
            key={a.initials}
            className={`grid h-8 w-8 place-items-center rounded-full text-xs font-medium ring-2 ring-white ${a.bg}`}
          >
            {a.initials}
          </span>
        ))}
      </span>
    </div>
  )
}

export function CourseCard({ title, priceTone = 'blue' }) {
  return (
    <article className="card flex h-full flex-col overflow-hidden border border-surface-4 p-4 transition-shadow duration-300 hover:shadow-xl hover:shadow-ink/5">
      <CardImage title={title} />

      <h3 className="mt-4 font-display text-h4 font-semibold leading-[24px] text-ink">{title}</h3>
      <p className="mt-1.5 text-xs leading-[19px] text-[#4F4F4F]">{courseMeta.author}</p>

      <CardMeta />

      <div className="mt-4 flex items-baseline gap-1.5">
        <span
          className={`font-display text-h4 font-semibold leading-[24px] ${
            priceTone === 'blue' ? 'text-blue-600' : 'text-plum'
          }`}
        >
          {courseMeta.price}
        </span>
        <span className="text-xs leading-[19px] text-[#4F4F4F]">{courseMeta.period}</span>
      </div>

      <p className="mt-auto flex items-center gap-2 pt-4 text-lg leading-[29px] text-[#4F4F4F]">
        {courseMeta.rating}
        <Icon name="star" filled className="h-5 w-5 text-lime-500" />
      </p>
    </article>
  )
}

export default function CourseGrid() {
  return (
    <section id="courses" className="scroll-mt-24 py-12">
      <Container>
        <ul className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <li key={course.title}>
              <CourseCard title={course.title} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
