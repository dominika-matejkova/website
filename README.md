# Dominika Matějková — Personal Portfolio

Personal portfolio website and auto-generated PDF CV, built with React, Vite, and Tailwind CSS. Deployed to GitHub Pages.

**Live site:** https://dominika-matejkova.github.io/website/

## Features

- Responsive single-page portfolio (hero, about, experience timeline, skills, certifications, languages, education, GitHub activity)
- One-click CV download — PDF generated client-side from the same data source as the website
- Profile photo with graceful fallback to initials
- GitHub Pages deployment via GitHub Actions

## Tech stack

- [React 19](https://react.dev) + TypeScript
- [Vite 6](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Lucide React](https://lucide.dev) — icons
- [@react-pdf/renderer](https://react-pdf.org) — client-side PDF generation
- GitHub Pages (deployed via GitHub Actions)

## Project structure

```
src/
  data.ts      # shared data: experiences, skills, certifications, languages
  App.tsx      # website UI
  CV.tsx       # PDF CV document
public/
  profile.png
  fonts/       # OpenSans TTF fonts for PDF rendering
```
