import { useRef } from 'react'
import gsap from 'gsap'

/**
 * Button/link that drifts toward the cursor and springs back on exit.
 * Touch devices never fire mousemove, so it degrades to a plain control.
 */
export default function MagneticButton({
  as: Tag = 'button',
  className = '',
  strength = 0.25,
  children,
  ...rest
}) {
  const ref = useRef(null)

  const handleMove = (event) => {
    const element = ref.current
    if (!element || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const rect = element.getBoundingClientRect()
    gsap.to(element, {
      x: (event.clientX - rect.left - rect.width / 2) * strength,
      y: (event.clientY - rect.top - rect.height / 2) * strength,
      duration: 0.4,
      ease: 'power2.out',
    })
  }

  const handleLeave = () => {
    if (ref.current) {
      gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' })
    }
  }

  return (
    <Tag
      {...rest}
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
    >
      {children}
    </Tag>
  )
}
