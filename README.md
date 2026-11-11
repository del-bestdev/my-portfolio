# Portfolio — Hayato Otsuka

A fast, static developer portfolio built with **Astro 5** and **Tailwind CSS 4**, in the
dark neon "stack.dev" style. No runtime framework, no client-side router — just HTML, a
single stylesheet, and a few small inline scripts.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built site
npm run check    # Astro + TypeScript diagnostics
```

---

## Where to edit things

**Almost everything lives in one file: [`src/data/site.ts`](src/data/site.ts).**
Name, role, email, socials, stats, tech stack, experience, projects, FAQ and testimonials
are all plain data there. Change the data and the pages follow.

Every placeholder is tagged with a `// TODO` comment. Search the file for `TODO` to find
them all.

| Want to change | Edit |
| --- | --- |
| Any text, project, FAQ, job history | `src/data/site.ts` |
| Colours, glow, fonts, animations | `src/styles/global.css` |
| Section order on the home page | `src/pages/index.astro` |
| A section's layout | `src/sections/*.astro` |
| Icons available to `<Icon name="…" />` | `src/components/Icon.astro` |

### Design tokens

Defined in the `@theme` block of `src/styles/global.css`:

| Token | Value |
| --- | --- |
| `--color-tech-dark` | `#0f0921` — page background |
| `--color-tech-darker` | `#0a0617` — panel background |
| `--color-tech-purple` | `#9333ea` — gradient start |
| `--color-tech-teal` | `#06b6d4` — gradient end, accents |

Fonts are **Inter** (UI) and **Fira Code** (mono), loaded from Google Fonts in
`src/layouts/Base.astro`.

---

## Already filled in from the CV

Name, title, Tokyo location and contact email; all five roles
(Timee, IBM, Mercari, Money Forward, Sansan) with dates and achievements; education;
the full technical stack; six projects derived from real production work; and four
stat counters that each trace to a specific CV line — 12+ years, 45K+ platform users,
4.5M+ daily events, 3.5x throughput gain. `public/resume.pdf` is the CV, and the header
Resume button links to it.

## Before you publish — the checklist

1. **Wire up the contact form.** It posts to [Formspree](https://formspree.io) so it works
   on a static host with no backend. Create a free form, then replace `YOUR_FORM_ID` in
   `src/sections/Contact.astro`. Until you do, submitting shows a setup notice rather than
   silently losing the message. Your email address is always shown as a fallback.

2. **The CV still shows the old contact details.** The site now lists
   `hayatootsuka.dev@gmail.com` and no LinkedIn, but `public/resume.pdf` is the original
   PDF — it still carries the Outlook address and the LinkedIn URL, and it is downloadable
   from the Resume button. Export a fresh PDF and overwrite `public/resume.pdf` so the two
   agree.

3. **Add a photo.** `src/sections/Hero.astro` renders your initials in the avatar ring.
   There is a commented-out `<img>` block right there — drop a square photo at
   `public/img/avatar.jpg` and swap it in. A real face measurably helps.

4. **Confirm the GitHub link.** `site.socials.github` points at `del-bestdev`, which was
   not on the CV. Change or remove it if that is not the account you want employers to see.

5. **Projects show "Private / under NDA".** That is accurate for enterprise work at Timee,
   IBM and Mercari. If any of it is public, or you have side projects worth showing, set
   `repo` / `demo` on those entries and the links appear.

6. **Re-read the project descriptions.** They are written from CV bullet points, so they
   describe outcomes rather than implementation detail. Make sure each one matches how you
   would describe your own contribution in an interview — you will be asked.

7. **Testimonials are deliberately empty.** The `testimonials` array in `site.ts` is `[]`,
   so that section does not render at all. Paste in genuine quotes — a LinkedIn
   recommendation, or a line from a manager with their permission — and it appears by
   itself. Do not invent them: a fake quote attributed to a real-sounding person is a
   serious liability on a page you send to employers.

8. **Set your domain.** Update `site` in `astro.config.mjs` so canonical URLs and
   structured data point at the right place.

9. **Note the Timee end date.** The CV lists Timee as ending Oct 2026, so the site says
   you are open to new roles. If you are still there, change `site.availability`.

---

## Deploying

The build output in `dist/` is plain static files — any host will serve it.

### GitHub Pages

A workflow is included at `.github/workflows/deploy.yml`. Push to `main`, then in your
repo go to **Settings → Pages → Build and deployment → Source: GitHub Actions**.

If you publish to `https://<user>.github.io/<repo>/` rather than a custom domain, set the
`base` option in `astro.config.mjs` to `'/<repo>'`, otherwise CSS and links will 404.

### Netlify / Vercel / Cloudflare Pages

Build command `npm run build`, publish directory `dist`. Nothing else to configure.

---

## What is already handled

- **Responsive** from 320px up; verified at 390px, 768px and 1440px.
- **Accessible**: skip link, visible focus rings, labelled form fields, `aria-expanded`
  on the nav and FAQ, `role="meter"` on the skill bars, and icons hidden from
  screen readers unless they carry meaning.
- **`prefers-reduced-motion`** is respected throughout — the hex rain, orbit, custom
  cursor, count-ups and reveal animations all switch off or jump to their end state.
- **SEO**: per-page title and description, canonical URL, Open Graph and Twitter cards,
  and `Person` JSON-LD so recruiter tooling can parse the profile.
- **No JS dependencies.** Icons are inlined SVG; the menu, accordion, carousel, counters
  and scroll-spy are a few dozen lines of vanilla JS. The whole page ships as one HTML
  file plus one stylesheet.
