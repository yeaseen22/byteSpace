import Container from '../ui/Container'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  className = '',
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'

  return (
    <Container className={`max-w-3xl ${alignment} ${className}`}>
      {eyebrow ? <p className="eyebrow mb-5">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem] lg:leading-[1.1]">
        <span className="gradient-text">{title}</span>
      </h2>
      {description ? (
        <p className="mt-5 text-base leading-relaxed text-pretty text-ink-300 sm:text-lg">
          {description}
        </p>
      ) : null}
    </Container>
  )
}
