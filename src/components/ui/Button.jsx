import { Link } from 'react-router-dom'

const variants = {
  primary:
    'bg-brand-500 text-white shadow-lg shadow-brand-500/25 hover:bg-brand-400 hover:shadow-brand-400/30',
  secondary: 'bg-ink-100 text-ink-950 hover:bg-white',
  outline: 'border border-ink-600 text-ink-100 hover:border-ink-500 hover:bg-ink-800',
  ghost: 'text-ink-300 hover:bg-ink-800 hover:text-ink-100',
}

const sizes = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-900 disabled:pointer-events-none disabled:opacity-60'

/**
 * @param {object} props
 * @param {'primary'|'secondary'|'outline'|'ghost'} [props.variant]
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {string} [props.to] Renders a react-router <Link> when provided.
 * @param {string} [props.href] Renders an anchor when provided.
 */
export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
