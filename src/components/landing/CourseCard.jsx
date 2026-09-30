import { courseAvatars, images } from '../../assets/landing/images'
import Icon from './Icon'

export default function CourseCard({ course }) {
  return (
    <article className="course-card">
      <div className="course-thumb">
        <img src={images[course.image]} alt={course.title} />
        <div className="thumb-badges">
          {course.badges.map((badge) => (
            <span key={badge}>{badge}</span>
          ))}
        </div>
      </div>

      <div className="course-content">
        <div className="title-rating-row">
          <h3 className="course-title">{course.title}</h3>
          <span className="course-rating">
            {course.rating} <Icon name="fa-star" />
          </span>
        </div>

        <p className="course-author">
          by <span className="author-name">{course.author}</span>
        </p>

        <div className="course-bottom-row">
          <div className="level-and-avatars">
            <span className="level-badge">
              <Icon name="fa-chart-simple" /> {course.level}
            </span>
            <div className="mini-avatar-stack">
              {courseAvatars.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  style={{ zIndex: courseAvatars.length - index }}
                />
              ))}
              <span className="mini-badge">{course.learners}</span>
            </div>
          </div>
          <div className="course-price">
            {course.price}
            <span>/lifetime</span>
          </div>
        </div>
      </div>
    </article>
  )
}
