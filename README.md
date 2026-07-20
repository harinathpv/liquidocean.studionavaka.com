# liquidocean.studionavaka.com

The digital home of **Liquid Ocean®** — the strategy of continuous reinvention.
A standalone Next.js site, part of Studio NAVAKA.

## Stack
- Next.js 14 (App Router)
- No CSS framework — a single hand-authored `app/globals.css` (the "Imprint" design system)
- Fonts: Fraunces, Spectral, IBM Plex Mono (via Google Fonts)
- Zero client dependencies beyond React; the scroll-reveal is a small `IntersectionObserver` effect

## Develop
```bash
npm install
npm run dev
```
Open http://localhost:3000

## Deploy (Vercel)
This repo is linked to the Vercel project `liquidocean-studionavaka-com`.
Pushing to the default branch triggers a production deploy. Assign the domain
`liquidocean.studionavaka.com` under **Settings → Domains**.

## Structure
```
app/
  layout.jsx     Root layout, metadata, fonts
  page.jsx       The homepage (single page)
  globals.css    The complete Imprint design system
public/
  images/        (Tide of Advantage is inline SVG; folder kept for future assets)
```

## Design system
Warm paper (#FAF9F6), charcoal ink (#1F2328), institutional green (#163D35) as a
rare accent, muted brass (#8A6A3B) for labels. Every page opens on paper and
closes on green. See the master design language document for the full spec.
