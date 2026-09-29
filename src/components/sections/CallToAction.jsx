import { cta } from '../../data/content'
import Button from '../ui/Button'
import Container from '../ui/Container'

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-blue-600">
      <div aria-hidden="true" className="grid-lines absolute inset-0" />

      <Container className="relative py-20 text-center lg:py-24">
        <h2 className="mx-auto max-w-[710px] font-display text-h2 font-semibold text-surface-4">{cta.heading}</h2>
        <p className="mx-auto mt-6 max-w-[964px] text-lg leading-[29px] text-surface-4">{cta.body}</p>
        <Button to="/register" variant="lime" size="lg" className="mt-10">
          {cta.button}
        </Button>
      </Container>
    </section>
  )
}
