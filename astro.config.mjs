// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
        // CAMBIAR ESTO A TRUE
        // Esto le dice a Astro: "Sí, mis archivos están en carpetas /es/ y /en/"
        prefixDefaultLocale: true 
    }
  },
  vite: {
    plugins: [tailwindcss()]
  }
});