import { categoryFilters } from '../../data/content'
import Container from '../ui/Container'

export default function CategoryFilters() {
  return (
    <section className="pb-4">
      <Container className="flex flex-col gap-4">
        {categoryFilters.map((row, rowIndex) => (
          <ul key={rowIndex} className="flex flex-wrap gap-4">
            {row.map((label, i) => (
              <li key={label}>
                <button
                  type="button"
                  className={`pill h-[43px] px-5 text-base font-medium leading-[19px] transition-colors ${
                    rowIndex === 0 && i === 0
                      ? 'bg-lime-400 text-ink'
                      : 'bg-surface-4 text-body hover:bg-surface-3'
                  }`}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>
        ))}

        <button type="button" className="self-start text-base font-medium leading-[19px] text-blue-600 hover:opacity-70">
          + More
        </button>
      </Container>
    </section>
  )
}
