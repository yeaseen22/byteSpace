import { categories } from '../../data/content'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

export default function Categories() {
  return (
    <section className="py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-[694px]">
            <p className="text-lg font-medium leading-[28px] text-violet">{categories.eyebrow}</p>
            <h2 className="mt-2 font-display text-h2 font-medium text-ink-deep">{categories.heading}</h2>
          </div>
          <a
            href="#courses"
            className="inline-flex h-10 shrink-0 items-center justify-center rounded-full bg-lime-500 px-5 text-base font-medium text-[#3A3B3F] transition-colors hover:bg-lime-400"
          >
            {categories.viewMore}
          </a>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {categories.items.map((item) => (
            <li
              key={item.label}
              className="group flex h-[167px] w-full flex-col items-center justify-center gap-3 rounded-3xl bg-surface-4 transition-colors hover:bg-lime-400"
            >
              <span className="grid h-[72px] w-[72px] place-items-center text-ink transition-transform duration-300 group-hover:scale-110">
                <Icon name={item.icon} className="h-12 w-12" />
              </span>
              <span className="px-2 text-center text-lg leading-[28px] text-body">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
