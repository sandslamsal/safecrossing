# Safe Crossing Foundation

A launch-ready nonprofit frontend built with Next.js, React, TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Recommended Folder Structure

```text
app/
  about/
  contact/
  donate/
  get-involved/
  projects/
  globals.css
  layout.tsx
  page.tsx
components/
  button-link.tsx
  contact-form.tsx
  cta-banner.tsx
  donation-card.tsx
  footer.tsx
  hero.tsx
  icons.tsx
  impact-stats.tsx
  logo.tsx
  navbar.tsx
  page-header.tsx
  project-card.tsx
  projects-filter.tsx
  section-title.tsx
data/
  site-content.ts
public/
  images/
```

## Notes For Future Customization

- Shared placeholder copy lives in [`data/site-content.ts`](/Users/sandeshlamsal/Documents/New project/data/site-content.ts) so it can later be replaced by a CMS or project database.
- Reusable forms live in [`components/contact-form.tsx`](/Users/sandeshlamsal/Documents/New project/components/contact-form.tsx) and can be wired to a CRM, donation workflow, or volunteer backend.
- Local SVG artwork in [`public/images`](/Users/sandeshlamsal/Documents/New project/public/images) can be swapped for documentary photography or CMS-managed assets later.

