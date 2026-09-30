import { images } from '../../assets/landing/images'
import { testimonialsSection } from '../../data/landingContent'

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <div className="mesh-glow-bg" />

      <div className="site-container">
        <div className="testimonials-header-row">
          <h2 className="testi-title">{testimonialsSection.title}</h2>
          <p className="testi-desc">{testimonialsSection.description}</p>
        </div>

        <div className="testimonials-grid">
          {testimonialsSection.testimonials.map((testimonial) => (
            <article className="testimonial-card" key={testimonial.name}>
              <div className="user-profile-row">
                <img
                  className="user-avatar-circle"
                  src={images[testimonial.image]}
                  alt=""
                  aria-hidden="true"
                />
                <div>
                  <h4 className="user-name">{testimonial.name}</h4>
                  <span className="user-role">{testimonial.role}</span>
                </div>
              </div>
              <p className="user-quote">{testimonial.quote}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
