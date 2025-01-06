// @ts-check
import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import tailwind from '@astrojs/tailwind';
import alpinejs from '@astrojs/alpinejs';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import vue from '@astrojs/vue';
import icon from 'astro-icon';
import preact from '@astrojs/preact';


export default defineConfig({
    site: 'https://etetteh.github.io',
    adapter: node({
        mode: 'standalone'
    }),
    image: {
        // Used for all `<Image />` and `<Picture />` components unless overridden
        experimentalLayout: 'responsive',
    },
    experimental: {
        responsiveImages: true,
    },
    integrations: [tailwind({nesting: true}), alpinejs(), react({include: ['**/react/*']}), mdx({
        optimize: true,
    }), vue({ jsx: true }), icon({
        include: {
          mdi: ["*"],
        },
      }), preact({ compat: true })]
});