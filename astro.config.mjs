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
    image: {
        experimentalLayout: 'responsive',
    },
    experimental: {
        responsiveImages: true,
    },
    integrations: [
      tailwind({nesting: true}),
      alpinejs(),
      react({include: ['**/react/*']}),
      mdx({
          optimize: true,
      }),
      vue({ jsx: true }),
      icon({
          include: {
              mdi: ["*"],
            //   fa: ["*"],
          },
          }),
      preact({ compat: true })
    ]
});