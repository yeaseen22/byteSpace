import { partners } from '../../data/content'
import Container from '../ui/Container'

export default function Partners() {
  return (
    <section className="bg-surface-4 py-16">
      <Container className="flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
        {partners.map((name) => (
          <span
            key={name}
            className="font-display text-xl font-semibold tracking-tight text-ink/35 transition-colors hover:text-ink/60"
          >
            {name}
          </span>
        ))}
      </Container>
    </section>
  )
}
