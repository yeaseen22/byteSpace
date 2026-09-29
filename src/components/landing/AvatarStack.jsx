import { heroAvatars } from '../../assets/landing/images'

/**
 * Overlapping student avatar strip plus the lime count pill. Used by the hero
 * "Happy Students" card and by the creator showcase.
 *
 * The design stacks seven 43px portraits (Figma `1:1828`-`1:1834`) followed by
 * a lime circle holding the total, so the strip is rendered as a real stack
 * rather than a single flattened image.
 */
export default function AvatarStack({ badge, className = '' }) {
  return (
    <div className={`avatar-stack${className ? ` ${className}` : ''}`}>
      {heroAvatars.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          className="avatar-strip-img"
          style={{ zIndex: heroAvatars.length - index }}
        />
      ))}
      <div className="avatar-badge">{badge}</div>
    </div>
  )
}
