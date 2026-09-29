# byteSpace

A marketing site for **byteSpace**, the collaborative workspace for product teams.

## What is here

| Route     | Page                                        |
| --------- | ------------------------------------------- |
| `/`       | Landing page                                |
| `/login`  | Login page                                  |
| `/signup` | Signup page                                 |
| `*`       | Not found page                              |

## Stack

- [Vite](https://vite.dev) 6 + [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4 (configured through the Vite plugin and CSS `@theme`)
- [React Router](https://reactrouter.com) 7
- ESLint 9 (flat config)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Project structure

```
src/
├── components/
│   ├── auth/       # Reusable form controls for login and signup
│   ├── layout/     # Navbar, Footer, AuthLayout, ScrollToTop
│   ├── sections/   # Landing page sections, one per component
│   └── ui/         # Button, Container, Icon, SectionHeading
├── data/
│   └── content.js  # All landing page copy, kept out of the components
├── pages/          # Route-level components
├── App.jsx         # Router and layout switching
└── index.css       # Tailwind import and design tokens
```

Content lives in `src/data/content.js` so the copy can be updated without touching
any component. Design tokens (the `ink`, `brand`, and `accent` palettes) are defined
once in the `@theme` block in `src/index.css` and used as Tailwind classes such as
`text-ink-300` or `bg-brand-500`.

## Contributing

Work on a feature branch and open a pull request:

```bash
git checkout -b feat/my-change
# ...make the change...
npm run lint && npm run build
git push -u origin feat/my-change
```
