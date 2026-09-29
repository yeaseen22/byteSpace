import Button from '../components/ui/Button'
import Container from '../components/ui/Container'

export default function NotFoundPage() {
  return (
    <section className="bg-surface py-32">
      <Container className="text-center">
        <p className="font-display text-h3 font-semibold text-blue-600">404</p>
        <h1 className="mt-4 font-display text-h2 font-semibold text-ink-deep">This page could not be found</h1>
        <p className="mx-auto mt-5 max-w-md text-lg leading-[29px] text-muted">
          The page you are looking for may have been moved or no longer exists.
        </p>
        <div className="mt-10 flex justify-center gap-3">
          <Button to="/">Back to home</Button>
          <Button to="/register" variant="outline">
            Create account
          </Button>
        </div>
      </Container>
    </section>
  )
}
