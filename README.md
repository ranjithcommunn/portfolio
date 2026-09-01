# Ranjith — Developer Portfolio

A production-quality, single-page developer portfolio built with React, TypeScript, Vite and Tailwind CSS. The layout, spacing, and interaction patterns are inspired by the modern "dark sidebar" style of developer portfolios — a fixed profile sidebar alongside a scrollable content column — recreated here with original code, components, and content.

## Tech stack

- **React 19** + **TypeScript**
- **Vite** for tooling
- **Tailwind CSS v4** (CSS-first config via `@theme` in [src/index.css](src/index.css))
- **Framer Motion** for animation
- **Lucide React** for icons

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

```bash
npm run build    # type-check + production build to dist/
npm run preview  # preview the production build locally
npm run lint     # ESLint
```

## Making it yours

Everything editable lives in **[src/data/portfolio.ts](src/data/portfolio.ts)** — profile info, About copy, Services, Skills, Experience, Education, Projects, contact details, social links, and SEO metadata. Components render this data; there's no copy hardcoded across multiple files.

To update the site:

1. **Content** — edit [src/data/portfolio.ts](src/data/portfolio.ts).
2. **Profile photo** — replace [src/assets/profile.svg](src/assets/profile.svg) (or point `profile.avatar` at a new file, e.g. a `.webp`/`.jpg`).
3. **Project images** — replace the files in [src/assets/projects/](src/assets/projects/) and update the `image` import in `portfolio.ts`.
4. **Résumé PDF** — replace [public/resume.pdf](public/resume.pdf) with your real CV (same filename, or update `profile.resumeUrl`).
5. **Colors** — all design tokens (background, surface, border, text, accent, shadows) are centralized in the `@theme` block at the top of [src/index.css](src/index.css). Change `--color-accent` to re-theme the whole site.
6. **Favicon / OG image** — [public/favicon.svg](public/favicon.svg) and [public/og-image.svg](public/og-image.svg).

## Project structure

```
src/
├── assets/           placeholder images (profile + project mockups, all original SVGs)
├── components/
│   ├── Sidebar/      profile card, contacts, social links
│   ├── Header/       sticky section navigation with scroll-spy
│   ├── About/        intro + stats
│   ├── Services/     "what I'm doing" cards
│   ├── Skills/       categorized, data-driven skill bars
│   ├── Portfolio/    project cards
│   ├── Resume/       experience/education timeline
│   ├── Contact/      contact info + validated form
│   └── common/       Section, SectionHeading, Reveal, IconBox, Badge, Footer, brand icons
├── data/portfolio.ts single source of truth for all editable content
├── hooks/            useActiveSection, useMediaQuery, useSeo
├── layouts/          MainLayout (sidebar + content grid)
├── lib/              icons registry, motion variants, button styles, cn()
├── pages/HomePage.tsx
├── types/portfolio.ts
├── App.tsx
└── main.tsx
```

## Notes

- **Layout**: a sticky two-column grid on large screens (`lg:` and up); the sidebar collapses into a top profile card on smaller screens, with a "Show Contacts" disclosure to keep it compact.
- **Navigation**: a sticky pill nav with `IntersectionObserver`-based active-section highlighting and smooth scrolling.
- **Animation**: subtle scroll-reveal (opacity/translateY) via Framer Motion, respecting `prefers-reduced-motion`.
- **Contact form**: client-side validation only — no backend is wired up. Wire `ContactForm`'s `handleSubmit` to your API/email service of choice when ready.
- **Icons**: Lucide React for all UI icons. Lucide no longer ships brand/logo marks, so the GitHub and LinkedIn glyphs in [src/components/common/icons/SocialGlyphs.tsx](src/components/common/icons/SocialGlyphs.tsx) are small original line/shape icons drawn to match Lucide's visual weight.
