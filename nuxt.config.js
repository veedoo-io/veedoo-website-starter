import { apiEndpoint } from './prismic-configuration';
import Prismic from '@prismicio/client';

const glob = require('glob');

//the current  getStoriesPaths provied by prismic doesn't work
//so we use this one to get a list of all the slice and custom type stories
const getStoriesPaths = () => {
  return [
    '.slicemachine/assets/**/*.stories.@(js|jsx|ts|tsx|svelte)',
    'customtypes/**/*.stories.@(js|jsx|ts|tsx|svelte)',
  ].reduce((acc, p) => (glob.sync(p).length ? [...acc, `../${p}`] : acc), []);
};

//list of types and thier routes
//for example if the type is home_page Prismic link should route it to the path '/'
//and if it's blog_post it should rout it to '/blog/uid' where uid the is the uid of the blog
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
  //console.log(`using prismic repo ${apiEndpoint}`)

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
          src: "https://www.termsfeed.com/public/cookie-consent/4.1.0/cookie-consent.js",
          charset: 'UTF-8',
          tagPosition: "bodyOpen"
        },
        {
          innerHTML: `document.addEventListener("DOMContentLoaded", function () {
            cookieconsent.run({
              notice_banner_type: "simple",
              consent_type: "express",
              palette: "dark",
              language: "en",
              page_load_consent_levels: ["strictly-necessary"],
              notice_banner_reject_button_hide: false,
              preferences_center_close_button_hide: false,
            });
          });`,
          hid: 'cookie-consent'
        },
        {
          src:
            'https://www.googletagmanager.com/gtag/js?id=' +
            google_analytics_code,
          async: true,
          "data-cookie-consent": "tracking",
          type: "text/plain"
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
          "data-cookie-consent": "tracking",
          type: "text/plain"
        },
      ],
      __dangerouslyDisableSanitizersByTagID: {
        'gtag-content': ['innerHTML'],
        'cookie-consent': ['innerHTML']
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
          hid: 'og:description',
          property: 'og:description',
          content: description,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: image?.url,
        },
        {
          hid: 'og:url',
          name: 'og:url',
          content: "",
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

    storybook: {
      stories: [...getStoriesPaths().map((path) => path.replace('../', '~/'))],
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      transpile: ['@prismicio/vue', 'vue-agile', 'vue-youtube-embed'],
      postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      extend(config) {
        config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto',
        })
      },
    },
  };
};
