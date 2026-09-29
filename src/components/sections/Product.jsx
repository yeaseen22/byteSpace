import Button from '../ui/Button'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

const steps = [
  {
    title: 'Create your workspace',
    description: 'Sign up and invite your team. Import from Jira, Linear, or Notion in a couple of clicks.',
    icon: '01',
  },
  {
    title: 'Shape your workflow',
    description: 'Customise statuses, fields, and views so the workspace matches how your team actually works.',
    icon: '02',
  },
  {
    title: 'Ship with confidence',
    description: 'Track every release with real-time progress your whole company can understand at a glance.',
    icon: '03',
  },
]

export default function Product() {
  return (
    <section id="product" className="scroll-mt-20 border-y border-ink-700 bg-ink-950/50 py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="How it works"
          title="Up and running in minutes"
          description="No migration project, no consultant, no six-week rollout. Just add your team and start shipping."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {steps.map((step) => (
            <div
              key={step.title}
              className="relative rounded-2xl border border-ink-700 bg-ink-900/60 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <span className="font-mono text-sm text-brand-400">{step.icon}</span>
              <h3 className="mt-4 text-base font-semibold text-ink-100">{step.title}</h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink-400">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button to="/signup" size="lg">
            Create your workspace
          </Button>
        </div>
      </Container>
    </section>
  )
}
