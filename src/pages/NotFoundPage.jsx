import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <section className="py-32">
      <Container className="text-center">
        <p className="font-mono text-sm text-brand-400">404</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          <span className="gradient-text">This page took a wrong turn</span>
        </h1>
        <p className="mx-auto mt-4 max-w-md text-ink-300">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-9 flex justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/signup" variant="outline">
            Get started
          </Button>
        </div>
      </Container>
    </section>
  )
}
