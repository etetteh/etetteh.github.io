// @ts-check
import { defineConfig } from 'astro/config';
import remarkToc from 'remark-toc';

import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import node from '@astrojs/node';

import preact from '@astrojs/preact';

export default defineConfig({
  integrations: [
    tailwind(),
    alpinejs(),
    react(),
    partytown(),
    mdx(),
    sitemap(),
    preact()
  ],
  markdown: {
    remarkPlugins: [ [remarkToc, { heading: "contents"} ] ],
  },

  output: 'server',

  adapter: node({
    mode: 'standalone'
  })
});