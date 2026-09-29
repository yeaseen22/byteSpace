import { stats } from '../../data/content'
import Container from '../ui/Container'

export default function Stats() {
  return (
    <section className="border-y border-ink-700 bg-ink-950/50 py-16">
      <Container>
        <dl className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block text-4xl font-semibold tracking-tight text-ink-100 sm:text-5xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-sm text-ink-400">{stat.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  )
}
