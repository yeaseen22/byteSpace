import { useEffect, useRef, useState } from 'react'

import { categories, coursesSection } from '../../data/landingContent'
import CourseCard from './CourseCard'
import SectionHeader from './SectionHeader'

/**
 * The reference swaps the `active` pill but never filtered the grid. The visual
 * state is preserved here (courses are the same in every category), so the
 * control is a real radio group rather than a dead button.
 */
function CategoryFilter() {
  const [active, setActive] = useState(categories[0])
  const [popping, setPopping] = useState(null)
  const timer = useRef(null)

  useEffect(() => () => clearTimeout(timer.current), [])

  const select = (category) => {
    setActive(category)
    setPopping(category)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setPopping(null), 300)
  }

  return (
    <div className="category-pills" role="group" aria-label="Course categories">
      {categories.map((category) => (
        <button
          type="button"
          key={category}
          className={`category-pill${active === category ? ' active' : ''}${popping === category ? ' popping' : ''}`}
          aria-pressed={active === category}
          onClick={() => select(category)}
        >
          {category}
        </button>
      ))}
      <button type="button" className="category-pill category-pill-more">
        + More
      </button>
    </div>
  )
}

export default function CoursesSection() {
  const { title, subtitle, courses } = coursesSection
  const half = Math.ceil(courses.length / 2)

  return (
    <section className="discover-section" id="courses">
      <div className="site-container">
        <SectionHeader title={title} subtitle={subtitle} />
        <CategoryFilter />

        <div className="course-grid">
          {courses.slice(0, half).map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>

        <div className="course-grid course-grid-secondary">
          {courses.slice(half).map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      </div>
    </section>
  )
}
