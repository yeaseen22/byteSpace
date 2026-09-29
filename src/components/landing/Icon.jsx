/**
 * FontAwesome Free (solid) glyph. `name` is the FA class without the `fa-solid`
 * prefix, e.g. "fa-bag-shopping".
 */
export default function Icon({ name, className = '' }) {
  return <i aria-hidden="true" className={`fa-solid ${name}${className ? ` ${className}` : ''}`} />
}
