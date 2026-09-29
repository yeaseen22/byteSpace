import { testimonials } from '../../data/content'
import Container from '../ui/Container'
import SectionHeading from '../ui/SectionHeading'

export default function Testimonials() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by teams that ship"
          description="Thousands of product teams rely on byteSpace every day to keep work moving."
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="flex h-full flex-col rounded-2xl border border-ink-700 bg-ink-800/40 p-6"
            >
              <div className="flex gap-1" aria-label="Rated 5 out of 5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" className="h-4 w-4 fill-accent-400" aria-hidden="true">
                    <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                  </svg>
                ))}
              </div>

              <blockquote className="mt-5 flex-1 text-sm leading-relaxed text-ink-200">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-700 pt-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-ink-600 to-ink-700 text-xs font-semibold text-ink-100">
                  {testimonial.initials}
                </span>
                <div>
                  <p className="text-sm font-medium text-ink-100">{testimonial.name}</p>
                  <p className="text-xs text-ink-400">{testimonial.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </Container>
    </section>
  )
}
