import Button from '../ui/Button'
import Container from '../ui/Container'

export default function CallToAction() {
  return (
    <section className="pb-20 sm:pb-28">
      <Container>
        <div className="relative overflow-hidden rounded-3xl border border-ink-700 bg-gradient-to-br from-ink-800 to-ink-900 px-6 py-16 text-center sm:px-12 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,116,246,0.22),transparent_60%)]"
          />

          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            <span className="gradient-text">Ready to ship faster with your team?</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-pretty text-ink-300">
            Join thousands of teams already building in byteSpace. Set up takes less than two minutes.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button to="/signup" size="lg" className="w-full sm:w-auto">
              Get started free
              <span aria-hidden="true">&rarr;</span>
            </Button>
            <Button to="/login" variant="outline" size="lg" className="w-full sm:w-auto">
              I already have an account
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
