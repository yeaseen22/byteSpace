import { images } from '../../assets/landing/images'

/**
 * Student avatar strip plus the lime count pill. Used by the hero "Happy
 * Students" card and by the creator showcase.
 */
export default function AvatarStack({ badge, className = '' }) {
  return (
    <div className={`avatar-stack${className ? ` ${className}` : ''}`}>
      <img src={images.avatars} alt="Students" className="avatar-strip-img" />
      <div className="avatar-badge">{badge}</div>
    </div>
  )
}
