import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // disabling injection of base.css import on every page
      applyBaseStyles: false,
    }),
  ],
});