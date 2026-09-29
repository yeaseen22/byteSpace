import { plans } from '../../data/content'
import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

function Check() {
  return (
    <svg
      viewBox="0 0 20 20"
      className="mt-0.5 h-4 w-4 shrink-0 fill-accent-400"
      aria-hidden="true"
    >
      <path d="M8.2 14.5 3.5 9.8l1.4-1.4 3.3 3.3 7.9-7.9 1.4 1.4z" />
    </svg>
  )
}

export default function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-20 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Pricing"
          title="Simple pricing that scales with you"
          description="Start free, upgrade when you are ready. Every plan includes unlimited docs and issues."
        />

        <div className="mt-16 grid items-start gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex h-full flex-col rounded-2xl border p-7 transition-colors duration-300 ${
                plan.featured
                  ? 'border-brand-500/50 bg-gradient-to-b from-brand-500/10 to-ink-800/40 shadow-xl shadow-brand-500/10 lg:-mt-4 lg:pb-11 lg:pt-11'
                  : 'border-ink-700 bg-ink-800/40 hover:border-ink-600'
              }`}
            >
              {plan.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-500 px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              ) : null}

              <h3 className="text-base font-semibold text-ink-100">{plan.name}</h3>
              <p className="mt-1.5 text-sm text-ink-400">{plan.description}</p>

              <div className="mt-6 flex items-baseline gap-1.5">
                <span className="text-4xl font-semibold tracking-tight text-ink-100">{plan.price}</span>
                <span className="text-sm text-ink-400">{plan.period}</span>
              </div>

              <Button
                to="/signup"
                variant={plan.featured ? 'primary' : 'outline'}
                className="mt-7 w-full"
              >
                {plan.cta}
              </Button>

              <ul className="mt-7 space-y-3 border-t border-ink-700 pt-7">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3 text-sm text-ink-300">
                    <Check />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
