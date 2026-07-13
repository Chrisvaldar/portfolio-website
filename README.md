# portfolio-website

Personal portfolio for Christopher Valensio Darsono. React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. Import the project in [Vercel](https://vercel.com).
3. Framework preset: **Vite** (auto-detected).
4. Build command: `npm run build`
5. Output directory: `dist`

`vercel.json` includes an SPA fallback rewrite.

## Content

All copy lives in [`src/data/portfolio.js`](src/data/portfolio.js). Edit that file to update experience, projects, and contact info.

## Project images

Set the `image` field on each project in `portfolio.js` to a public path (e.g. `/images/up2u.png`) once screenshots are ready.
