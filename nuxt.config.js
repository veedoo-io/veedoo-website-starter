import { apiEndpoint } from './sm.json';
import Prismic from '@prismicio/client';
import { Link } from '@prismicio/helpers';

const glob = require('glob');

const getStoriesPaths = () => {
  return [
    '.slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|svelte)',
    'customtypes/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ].reduce((acc, p) => (glob.sync(p).length ? [...acc, `../${p}`] : acc), []);
};

const routes = [
  {
    type: 'home_page',
    path: '/',
  },
  {
    type: 'page',
    path: '/:uid',
  },
];

export default {
  target: 'static',
  generate: {
    routes: async () => {
      const client = Prismic.client(apiEndpoint, {
        routes: routes,
      });
      const pages = await client.query(
        Prismic.Predicates.at('document.type', 'page')
      );

      return pages.results.map((page) => page.url);
    },
  },
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'veedoo-website-starter',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    exposeConfig: true,
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/vue-agile'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/prismic',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    Poppins: [500, 400, 600, 700],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['nuxt-runtime-compiler'],

  prismic: {
    endpoint: apiEndpoint,
    modern: true,
    apiOptions: {
      routes: routes,
    },
    /* see configuration for more */
  },

  storybook: {
    stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['@prismicio/vue', 'vue-agile'],
  },
};
