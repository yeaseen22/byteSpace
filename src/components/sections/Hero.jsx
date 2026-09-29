import Button from '../ui/Button'
import Container from '../ui/Container'

const collaborators = [
  { name: 'Amara', initials: 'AO', color: 'from-brand-400 to-brand-600' },
  { name: 'Daniel', initials: 'DR', color: 'from-accent-400 to-accent-500' },
  { name: 'Priya', initials: 'PN', color: 'from-ink-300 to-ink-500' },
  { name: 'Marcus', initials: 'MK', color: 'from-brand-300 to-accent-500' },
]

function HeroPreview() {
  return (
    <div className="relative mx-auto mt-16 max-w-5xl">
      <div
        aria-hidden="true"
        className="absolute -inset-x-8 -top-10 bottom-0 rounded-[2.5rem] bg-gradient-to-r from-brand-500/20 via-accent-500/10 to-transparent blur-3xl"
      />

      <div className="relative overflow-hidden rounded-2xl border border-ink-700 bg-ink-800/60 shadow-2xl shadow-ink-950/60 backdrop-blur">
        <div className="flex items-center gap-2 border-b border-ink-700 bg-ink-900/60 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="ml-3 font-mono text-xs text-ink-500">byteSpace.app/workspace</span>
        </div>

        <div className="grid gap-0 sm:grid-cols-[180px_1fr]">
          <div className="hidden flex-col gap-3 border-r border-ink-700 p-4 sm:flex">
            {['Overview', 'Issues', 'Docs', 'Roadmap'].map((item, i) => (
              <div
                key={item}
                className={`rounded-lg px-3 py-2 text-xs ${
                  i === 1 ? 'bg-brand-500/15 text-brand-300' : 'text-ink-400'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="p-4 sm:p-6">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-3 w-32 rounded bg-ink-700" />
              <div className="h-6 w-16 rounded-md bg-brand-500/25" />
            </div>
            <ul className="space-y-2.5">
              {[
                { w: 'w-3/4', t: 'bg-brand-400/20' },
                { w: 'w-1/2', t: 'bg-ink-700' },
                { w: 'w-2/3', t: 'bg-ink-700' },
                { w: 'w-1/3', t: 'bg-accent-500/20' },
              ].map((row) => (
                <li key={row.w} className="flex items-center gap-3 rounded-lg border border-ink-700/70 bg-ink-900/40 p-3">
                  <span className="h-3.5 w-3.5 rounded border border-ink-600" />
                  <span className={`h-2.5 rounded ${row.t} ${row.w}`} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,116,246,0.16),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      </div>

      <Container className="text-center">
        <a href="#features" className="eyebrow transition-colors hover:border-ink-500 hover:text-ink-100">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-400" />
          byteSpace 2.0 is here
          <span aria-hidden="true" className="text-ink-500">&rarr;</span>
        </a>

        <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl lg:leading-[1.05]">
          <span className="gradient-text">The workspace where great teams ship faster</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-pretty text-ink-300 sm:text-lg">
          Plan, build, and track every piece of work in one place. byteSpace gives your team a single
          source of truth, real-time collaboration, and the speed to ship on schedule.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button to="/signup" size="lg" className="w-full sm:w-auto">
            Get started free
            <span aria-hidden="true">&rarr;</span>
          </Button>
          <Button href="#product" variant="outline" size="lg" className="w-full sm:w-auto">
            Watch the tour
          </Button>
        </div>

        <p className="mt-4 text-xs text-ink-500">Free forever for up to 5 members. No credit card required.</p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
          <div className="flex -space-x-2">
            {collaborators.map((person) => (
              <span
                key={person.initials}
                title={person.name}
                className={`grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br ${person.color} text-xs font-semibold text-ink-950 ring-2 ring-ink-900`}
              >
                {person.initials}
              </span>
            ))}
          </div>
          <p className="text-sm text-ink-400">
            Trusted by <span className="font-medium text-ink-200">12,000+</span> teams worldwide
          </p>
        </div>

        <HeroPreview />
      </Container>
    </section>
  )
}
