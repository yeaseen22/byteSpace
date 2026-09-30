export function Field({ label, name, type = 'text', autoComplete, placeholder }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-sm font-medium leading-[17px] text-ink">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        autoComplete={autoComplete}
        placeholder={placeholder}
        required
        className="field-input"
      />
    </div>
  )
}

export function SubmitButton({ children }) {
  return (
    <button type="submit" className="btn-lime h-[46px] w-auto px-6">
      {children}
    </button>
  )
}

export function Divider({ children }) {
  return (
    <div className="flex items-center gap-4">
      <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
      <span className="text-lg leading-[29px] text-faint">{children}</span>
      <span aria-hidden="true" className="h-px flex-1 bg-ink/15" />
    </div>
  )
}

const socials = {
  google: (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden="true">
      <path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8Z" />
      <path fill="#34A853" d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 0 1-10.7-3.8H1.3v3.1A12 12 0 0 0 12 24Z" />
      <path fill="#FBBC05" d="M5.3 14.3a7.1 7.1 0 0 1 0-4.6V6.6H1.3a12 12 0 0 0 0 10.8l4-3.1Z" />
      <path fill="#EA4335" d="M12 4.8c1.8 0 3.3.6 4.6 1.8l3.4-3.4A12 12 0 0 0 1.3 6.6l4 3.1A7.2 7.2 0 0 1 12 4.8Z" />
    </svg>
  ),
  apple: (
    <svg viewBox="0 0 24 24" className="h-6 w-6 fill-ink" aria-hidden="true">
      <path d="M16.4 12.7c0-2.4 2-3.6 2.1-3.7-1.1-1.7-2.9-1.9-3.5-1.9-1.5-.2-2.9.9-3.6.9s-1.9-.9-3.1-.8c-1.6 0-3.1.9-3.9 2.4-1.7 2.9-.4 7.2 1.2 9.5.8 1.2 1.7 2.4 3 2.4 1.2 0 1.6-.8 3.1-.8s1.8.8 3.1.7c1.3 0 2.1-1.2 2.9-2.3.9-1.3 1.3-2.6 1.3-2.7-.1 0-2.5-1-2.6-3.7ZM14 5.3c.7-.8 1.1-1.9 1-3-1 0-2.2.6-2.9 1.5-.6.7-1.2 1.9-1 3 1.1.1 2.2-.6 2.9-1.5Z" />
    </svg>
  ),
}

export function SocialButtons() {
  return (
    <div className="flex gap-4">
      {Object.entries(socials).map(([name, glyph]) => (
        <button
          key={name}
          type="button"
          aria-label={`Continue with ${name}`}
          className="grid h-18 w-18 place-items-center rounded-3xl border border-ink/10 bg-white transition-colors hover:bg-surface-4"
          style={{ height: '72px', width: '72px' }}
        >
          {glyph}
        </button>
      ))}
    </div>
  )
}
