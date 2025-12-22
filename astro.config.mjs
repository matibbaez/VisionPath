import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: 'https://visionpath-agency.vercel.app',

  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: true 
    }
  },

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [sitemap()]
});