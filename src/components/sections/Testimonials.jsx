import { testimonials } from '../../data/content'
import Container from '../ui/Container'

const avatarTones = [
  'from-blue-600 to-[#7F30F7]',
  'from-lime-500 to-lime-400',
  'from-[#424348] to-[#4B4C53]',
]

export default function Testimonials() {
  return (
    <section className="bg-surface-2 py-20 lg:py-24">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
          <div>
            <h2 className="max-w-[577px] font-display text-h2 font-semibold text-ink-deep">{testimonials.heading}</h2>
            <p className="mt-6 max-w-[580px] text-lg leading-[29px] text-[#4F4F4F]">{testimonials.body}</p>
          </div>

          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.items.map((item, i) => (
              <li key={item.name}>
                <figure className="card flex h-full flex-col border border-surface-4 p-6">
                  <span
                    className={`grid h-20 w-20 shrink-0 place-items-center rounded-full bg-gradient-to-br ${
                      avatarTones[i % avatarTones.length]
                    } font-display text-h4 font-semibold text-white`}
                    aria-hidden="true"
                  >
                    {item.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>

                  <figcaption className="mt-5">
                    <p className="font-display text-h4 font-semibold leading-[24px] text-ink">{item.name}</p>
                    <p className="mt-1 text-lg leading-[29px] text-blue-600">{item.role}</p>
                  </figcaption>

                  <blockquote className="mt-4 text-lg leading-[29px] text-[#4F4F4F]">
                    &ldquo;{item.quote}&rdquo;
                  </blockquote>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
