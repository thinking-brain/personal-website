# Elvis Jr. Crego — Personal Website

A single-page portfolio built with **React + TypeScript + Vite + Tailwind CSS**.  
Fully static — no backend required. Host for free on GitHub Pages, Netlify, or Vercel.

## Features
- 🌐 Bilingual (English / Español)
- 🌙 Dark / Light mode toggle
- 📱 Fully responsive
- ✨ Scroll-triggered animations
- ⚡ Zero-runtime dependencies beyond React

## Sections
Hero · About · Work Experience · Education · Projects · Skills · Contact

## Quick start

```bash
npm install
npm run dev       # dev server → http://localhost:5173
npm run build     # production build → dist/
npm run preview   # preview the production build locally
```

## Update your data

All personal info lives in **one file**: [`src/data/profile.ts`](src/data/profile.ts)

Fields marked `// TODO` need to be updated:
- Name, photo URL, location
- LinkedIn, GitHub, email links
- Work experience (companies, roles, dates, bullets)
- Education (institutions, degrees, dates)
- Projects (names, descriptions, links)
- Skills list

## Deployment

The `dist/` folder after `npm run build` is a plain static site. Drop it anywhere:

| Host | Command |
|------|---------|
| **Netlify** | Drag & drop `dist/` or connect repo |
| **GitHub Pages** | `gh-pages -d dist` |
| **Vercel** | Connect repo, framework = Vite |
| **Any CDN/static host** | Upload `dist/` contents |

My own personal web site.
