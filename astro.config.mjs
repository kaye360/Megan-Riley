import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site : import.meta.env.PROD ? 'https://meganmriley.com/' : '',
  base : import.meta.env.PROD ? '/join' : '/'
});