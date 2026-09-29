import { features } from '../../data/content'
import Container from '../ui/Container'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

export default function Features() {
  return (
    <section id="features" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Features"
          title="Everything your team needs, nothing it doesn't"
          description="A focused toolkit for planning, building, and shipping — with the depth to grow into as your team does."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group relative rounded-2xl border border-ink-700 bg-ink-800/40 p-6 transition-colors duration-300 hover:border-ink-600 hover:bg-ink-800/70"
            >
              <div className="grid h-11 w-11 place-items-center rounded-xl border border-ink-600 bg-ink-800 text-brand-300 transition-colors group-hover:border-brand-500/40 group-hover:text-brand-200">
                <Icon name={feature.icon} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-ink-100">{feature.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
