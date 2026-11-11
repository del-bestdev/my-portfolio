import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// If you deploy to GitHub Pages at <user>.github.io/<repo>, set `base: '/<repo>'`.
// For a custom domain or Netlify/Vercel, leave `base` out.
export default defineConfig({
  site: 'https://del-bestdev.github.io',
  vite: { plugins: [tailwindcss()] },
});
