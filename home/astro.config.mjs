// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  build: {
    inlineStylesheets: 'always',
  },
  vite: {
    build: {
      assetsInlineLimit: 1024 * 1024,
    },
  },
});
