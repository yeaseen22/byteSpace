const paths = {
  design: (
    <>
      <path d="M4 20c0-1.5.8-2.6 2.3-3.3 1.9-.9 3-1.4 3-3.2 0-1.6-1-2.6-2.6-2.6-1.4 0-2.4.8-2.9 2" />
      <path d="M6.7 8.5a2.6 2.6 0 1 1 3.9 2.2C9.4 11.5 8.5 12.5 8 14" />
      <path d="M12.4 4.3 9.2 8.4l2.5 2.6 4.4-1.6" />
    </>
  ),
  development: (
    <>
      <path d="m9 8-5 4 5 4" />
      <path d="m15 8 5 4-5 4" />
    </>
  ),
  software: (
    <>
      <rect x="2.5" y="4" width="19" height="12.5" rx="2" />
      <path d="M8 20.5h8M12 16.5v4" />
    </>
  ),
  business: (
    <>
      <rect x="2.5" y="7" width="19" height="13" rx="2" />
      <path d="M8.5 7V5.5A2 2 0 0 1 10.5 3.5h3a2 2 0 0 1 2 2V7M2.5 12.5h19" />
    </>
  ),
  marketing: (
    <>
      <path d="M3.5 10.5v3a1.5 1.5 0 0 0 1.5 1.5h1.2l4.6 4.2a.8.8 0 0 0 1.3-.6V5.4a.8.8 0 0 0-1.3-.6L5.8 9H5a1.5 1.5 0 0 0-1.5 1.5Z" />
      <path d="M17 8.5a5 5 0 0 1 0 7" />
    </>
  ),
  photography: (
    <>
      <path d="M3 8.5A1.5 1.5 0 0 1 4.5 7h2.2l1.4-2.2h7.8L17.3 7h2.2A1.5 1.5 0 0 1 21 8.5v10A1.5 1.5 0 0 1 19.5 20h-15A1.5 1.5 0 0 1 3 18.5Z" />
      <circle cx="12" cy="13" r="3.6" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </>
  ),
  star: <path d="m12 3 2.6 5.9 6.4.6-4.8 4.3 1.4 6.2L12 17l-5.6 3 1.4-6.2L3 9.5l6.4-.6Z" />,
  signal: (
    <>
      <rect x="2" y="14" width="3.5" height="6" rx="1" />
      <rect x="8" y="10" width="3.5" height="10" rx="1" />
      <rect x="14" y="6" width="3.5" height="14" rx="1" />
      <rect x="20" y="2" width="3.5" height="18" rx="1" transform="translate(-1.5)" />
    </>
  ),
  check: <path d="m5 13 4.5 4.5L19 6" />,
  arrow: (
    <>
      <path d="M5 12h13" />
      <path d="m12.5 5.5 6.5 6.5-6.5 6.5" />
    </>
  ),
  menu: (
    <>
      <path d="M4 7h16M4 12h16M4 17h16" />
    </>
  ),
  close: <path d="M18 6 6 18M6 6l12 12" />,
  play: <path d="M9 7.5v9l7.5-4.5Z" />,
}

export default function Icon({ name, className = 'h-6 w-6', filled = false, ...props }) {
  const d = paths[name]
  if (!d) return null

  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {d}
    </svg>
  )
}
