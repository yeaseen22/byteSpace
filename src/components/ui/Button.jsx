import { Link } from 'react-router-dom'

const styles = {
  lime: 'bg-lime-400 text-ink hover:bg-lime-500',
  blue: 'bg-blue-600 text-white hover:opacity-90',
  outline: 'border border-ink/20 text-ink hover:bg-surface-4',
  ghost: 'text-ink hover:bg-surface-4',
  onBlue: 'border border-white/40 text-white hover:bg-white/10',
}

const sizes = {
  sm: 'h-11 px-6 text-base',
  md: 'h-[46px] px-6 text-lg',
  lg: 'h-14 px-8 text-lg',
}

/**
 * @param {object} props
 * @param {'lime'|'blue'|'outline'|'ghost'|'onBlue'} [props.variant]
 * @param {'sm'|'md'|'lg'} [props.size]
 * @param {string} [props.to]   renders a react-router <Link>
 * @param {string} [props.href] renders an anchor
 */
export default function Button({
  variant = 'lime',
  size = 'md',
  to,
  href,
  className = '',
  children,
  ...props
}) {
  const classes = `inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60 ${styles[variant]} ${sizes[size]} ${className}`

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
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
