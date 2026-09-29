import Container from './Container'

/**
 * The centred intro block used by two sections in the design
 * ("Discover Your Passion..." and "Explore Diverse Learning Paths...").
 */
export default function SectionIntro({ heading, body, size = 'h2', className = '' }) {
  return (
    <Container className={`max-w-[917px] text-center ${className}`}>
      <h2
        className={`font-display font-semibold text-ink-deep ${
          size === 'h2' ? 'text-h2' : 'text-h3'
        }`}
      >
        {heading}
      </h2>
      <p className="mx-auto mt-6 max-w-[917px] text-lg leading-[1.6] text-muted">{body}</p>
    </Container>
  )
}
