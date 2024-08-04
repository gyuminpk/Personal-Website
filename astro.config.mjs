import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  experimental: {
    viewTransitions: true
  },
  site: 'https://gyuminpk.github.io',
  base: 'Personal-Website',
  integrations: [assets()]
});