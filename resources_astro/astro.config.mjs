// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  //output: 'static'
  output: 'server', // Use 'server' for SSR or 'static' for static output
  adapter: vercel(),
  
});