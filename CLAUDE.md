# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Agent Guidelines

- ALWAYS write detailed human readable comments for your code. Inline are expected for particularly dense or complicated segments
- Never do anything you're not explicitly asked to do without asking the user first. If you don't completely understand what's being asked of you, ask and clarify don't assume

## Commands

```bash
npm run dev       # Start local dev server (Vite)
npm run build     # Build for production → dist/
npm run preview   # Preview production build locally
npm run lint      # Run ESLint
```

There are no tests in this project.

## Architecture

Single-page React app built with Vite, deployed to GitHub Pages at `/personal-site/`.

- `src/App.jsx` — the entire UI (header with nav, hero section, social links)
- `src/App.css` — component styles
- `src/index.css` — global/reset styles
- `vite.config.js` — sets `base: '/personal-site/'` required for GitHub Pages routing

Deployment is automatic: pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci && npm run build` and uploads `dist/` to GitHub Pages.
