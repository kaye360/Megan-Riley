import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site : import.meta.env.PROD ? 'https://meganmriley.com' : 'http://localhost:3000',
  base : import.meta.env.PROD ? '/join' : '/',
  server : {
    host : true
  }
});