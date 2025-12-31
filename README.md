# EMS-based Directional Feedback for UAV Swarm Search — Website

This repository contains a minimal Next.js (App Router) + Tailwind CSS static site scaffold for the research project. It's intentionally simple and designed for academic-style presentation.

Quick start

```bash
cd website
npm install
npm run dev
```

Build & export (static)

```bash
npm run build
npm run export
# output will be in `out/` for hosting on GitHub Pages
```

Deployment

- Vercel: push to repo, import project in Vercel (default Next support).
- GitHub Pages: run `npm run export` and publish the `out/` directory.

Files of interest

- `app/` — App Router pages and layout
- `components/NavBar.jsx` — simple navigation
- `styles/globals.css` — Tailwind base styles

Next steps

- Replace placeholder content in `app/*/page.jsx`.
- Add figures (place under `public/` and reference in pages).
- Optional: convert to TypeScript and add CI.
