# Ministero Internazionale Kabod Ticino Landing Page

A bilingual landing page for Ministero Internazionale Kabod Ticino, built with React, Vite and Bootstrap.

## Overview

Responsive single-page site that presents the ministry online: hero with the pastor's photo, about and pastoral leadership sections, church location and welcome, schedule, embedded YouTube message, giving section, FAQ accordion, contact details with map, cookie consent and a terms & conditions modal. Full IT/EN switch with no page reload.

## Screenshots

> The PNGs in `docs/screenshots/` were captured against an earlier visual; refresh them after the next deploy if you want them to match the current blue/gold palette and the updated footer (YouTube + Email).

### Hero

![Hero section](docs/screenshots/hero.png)

### About Section

![About section](docs/screenshots/about.png)

### Footer

![Footer section](docs/screenshots/footer.png)

## Features

- Bilingual content (IT / EN) with persistent `<html lang>` sync
- Responsive layout (desktop, tablet, mobile) with a dedicated mobile menu
- Hero with full-bleed background and SVG wave transition
- Reveal-on-scroll sections via `IntersectionObserver`
- Mission, pastoral leadership, church, welcome, schedule, video, giving, FAQ, contact and map sections
- Embedded YouTube message and Google Maps location
- Cookie consent banner with accept/reject persistence (`localStorage`)
- Terms & Conditions modal
- Footer with Instagram, Facebook, YouTube, WhatsApp and Email (opens Gmail compose directly)
- Back-to-top floating button

## Tech Stack

- React 18
- Vite 5
- Bootstrap 5 + Bootstrap Icons

## Project Structure

```text
kabod_church/
  docs/screenshots/     README screenshots
  img/                  Images imported by the React app (hashed on build)
  public/               Static files copied verbatim to the site root
    img/logo.jpg        Stable URL used by site.webmanifest
    robots.txt
    sitemap.xml
    site.webmanifest
  src/
    App.jsx             App, content, sections, modals
    main.jsx            React entry, Bootstrap CSS imports
    styles.css          Theme tokens and component styles
  index.html            HTML entry
  package.json
  vite.config.js
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm 9+

### Install dependencies

```bash
npm install
```

### Development server

```bash
npm run dev
```

### Production build

```bash
npm run build
```

### Preview production build

```bash
npm run preview
```

## Deployment (Vercel)

The project is ready to deploy on Vercel with zero config — Vercel autodetects Vite (build command `npm run build`, output directory `dist`).

1. Push the repository to GitHub
2. On vercel.com → **Add New** → **Project** → import the repo
3. Keep all defaults and click **Deploy**

After the first deploy, update `public/robots.txt` and `public/sitemap.xml` to point to the production URL (currently set to `https://kabod-ticino.vercel.app/`).

## Content and Assets

- Images imported from JS live in `img/` and are bundled with content hashes by Vite
- Files in `public/` (including `public/img/logo.jpg` for the PWA manifest) are served as-is at the site root

## SEO

- `public/robots.txt` allows all crawlers and points to the sitemap
- `public/sitemap.xml` lists the home page
- `index.html` sets `title` and `meta description`; `public/site.webmanifest` provides PWA install metadata

## Security

See `SECURITY.md` for vulnerability reporting.

## License

MIT — see `LICENSE`.
