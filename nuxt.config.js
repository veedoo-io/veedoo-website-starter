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
  {
    type: 'blog_post',
    path: '/blog/:uid',
  },
];

export default async () => {
  let client = Prismic.client(apiEndpoint, {
    routes: routes,
  });

  let websiteSettings = await client.getSingle('website_settings');

  let {
    google_analytics_code,
    website_name_for_logs,
    fibery_settings,
    website_fav_icon,
    title,
    description,
    image,
    website_language_code,
  } = websiteSettings?.data;

  //console.log('google_analytics_code', google_analytics_code);

  return {
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
      title: title,
      htmlAttrs: {
        lang: website_language_code ?? 'en',
      },
      script: [
        {
          src:
            'https://www.googletagmanager.com/gtag/js?id=' +
            google_analytics_code,
          async: true,
        },
        {
          hid: 'gtag-content',
          innerHTML: `
        window.dataLayer = window.dataLayer || [];
          function gtag() {
              dataLayer.push(arguments);
          }
          gtag("js", new Date());

          gtag("config", "${google_analytics_code}");`,
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-content': ['innerHTML'],
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'robots', content: 'index, follow' },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:title',
          name: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          name: 'og:image',
          content: image?.url,
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: website_fav_icon?.url },
      ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/css/tailwind.css'],

    // tailwindcss: {
    //   cssPath: '~/assets/css/tailwind.css',
    //   exposeConfig: true,
    // },

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
      '~/plugins/vue-agile',
      { src: '@/plugins/youtube.js', ssr: false },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      // '@nuxtjs/tailwindcss',
      '@nuxt/postcss8',
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
      preview: '/preview',
      apiOptions: {
        routes: routes,
      },
      /* see configuration for more */
    },

    // storybook: {
    //   stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
    // },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      transpile: ['@prismicio/vue', 'vue-agile'],
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  };
};
