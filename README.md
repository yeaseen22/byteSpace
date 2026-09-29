# ByteSpace

Marketing site for **ByteSpace**, a learning and teaching platform for creators and
learners. Built from the Figma design file.

## What is here

| Route        | Page                                              |
| ------------ | ------------------------------------------------- |
| `/`          | Landing page                                      |
| `/login`     | Login page                                        |
| `/register`  | Signup / create-account page                      |
| `*`          | 404                                               |

### Landing page sections

Hero (blue, with search), partner strip, section intro, featured categories,
category filters, course grid, second section intro, category tiles,
why-ByteSpace (growth stats + creator features), CTA, testimonials, footer.

## Stack

- [Vite](https://vite.dev) 6 + [React](https://react.dev) 19
- [Tailwind CSS](https://tailwindcss.com) 4 (via the Vite plugin and the CSS `@theme`)
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

## Design system

Tokens live in the `@theme` block in `src/index.css` and are used as Tailwind
utilities, so a rebrand is a single-file change.

**Type** — Poppins for display headings, Satoshi for body and UI, Clash Display for
the wordmark. Loaded from Google Fonts and Fontshare. The scale follows the Figma
style guide and is exposed as `text-h1` (72/86.4), `text-h2` (44/52.8),
`text-h3` (36/43.2) and `text-h4` (20/24), with body sizes at 160% line height and
labels at 120%.

**Colour** — `blue-600` `#003BE2` is the brand blue, `lime-400` `#D4FB20` the
primary accent. Surfaces are `#FFFFFF` / `#FAFAFA` / `#F6F6F6` / `#F5F5F6`. Text
runs `ink` `#242528` down through `body` `#4B4C53` to `muted` `#82868E`.

**Layout** — 1440px page with 120px margins gives a 1200px content column and a
40px gutter, expressed by the `container-page` utility.

## Project structure

```
src/
├── assets/figma/     # Illustrations exported from Figma
├── components/
│   ├── auth/         # Reusable form controls for login and register
│   ├── layout/       # Navbar, Footer, AuthLayout, ScrollToTop
│   ├── sections/     # One landing-page section per component
│   └── ui/           # Button, Container, Icon, SectionIntro
├── data/
│   └── content.js    # All page copy, kept out of the components
├── pages/            # Route-level components
├── App.jsx           # Router and layout switching
└── index.css         # Tailwind import and design tokens
```

Copy lives in `src/data/content.js` so it can be edited without touching any
component. `CourseCard` is exported from `CourseGrid.jsx` and reused by
`WhyByteSpace.jsx`, which is the only place sections share a piece of UI.

## Contributing

Work on a feature branch and open a pull request:

```bash
git checkout -b feat/my-change
# ...make the change...
npm run lint && npm run build
git push -u origin feat/my-change
```
