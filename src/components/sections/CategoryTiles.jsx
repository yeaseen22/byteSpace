import { categories } from '../../data/content'
import Container from '../ui/Container'
import Icon from '../ui/Icon'

export default function CategoryTiles() {
  return (
    <section className="pb-20 lg:pb-24">
      <Container>
        <ul className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:grid-cols-6">
          {categories.items.map((item) => (
            <li key={item.label} className="flex flex-col items-start gap-3">
              <span className="grid h-[60px] w-[60px] place-items-center rounded-[40px] bg-lime-400 text-ink">
                <Icon name={item.icon} className="h-9 w-9" />
              </span>
              <span className="text-xl font-medium leading-[24px] text-ink">{item.label}</span>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
