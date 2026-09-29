const base =
  'h-11 w-full rounded-xl border border-ink-600 bg-ink-900/60 px-4 text-sm text-ink-100 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/20'

export function Field({ label, type = 'text', name, autoComplete, placeholder, className = '' }) {
  return (
    <div className={className}>
      <label htmlFor={name} className="mb-2 block text-sm font-medium text-ink-200">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        className={base}
      />
    </div>
  )
}

export function Checkbox({ name, children, className = '' }) {
  return (
    <label className={`flex items-start gap-2.5 text-sm text-ink-300 ${className}`}>
      <input
        type="checkbox"
        name={name}
        className="mt-0.5 h-4 w-4 shrink-0 rounded border-ink-600 bg-ink-900 accent-brand-500"
      />
      <span>{children}</span>
    </label>
  )
}

export function SubmitButton({ children, pending, pendingLabel }) {
  return (
    <button
      type="submit"
      disabled={pending}
      className="h-11 w-full rounded-xl bg-brand-500 text-sm font-medium text-white transition-colors hover:bg-brand-400 disabled:opacity-60"
    >
      {pending ? pendingLabel : children}
    </button>
  )
}

export function Divider({ children }) {
  return (
    <div className="relative text-center">
      <span className="relative z-10 bg-ink-900 px-3 text-xs text-ink-500">{children}</span>
      <span aria-hidden="true" className="absolute inset-x-0 top-1/2 h-px bg-ink-700" />
    </div>
  )
}

export function SocialButton({ children }) {
  return (
    <button
      type="button"
      className="h-11 w-full rounded-xl border border-ink-600 text-sm font-medium text-ink-200 transition-colors hover:border-ink-500 hover:bg-ink-800"
    >
      {children}
    </button>
  )
}
