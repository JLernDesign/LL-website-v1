// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
const dir = '/lindsey-lerner/preview/';

export default defineNuxtConfig({
  app: {
    baseURL: dir,
    head: {
      title: 'Lindsey Lerner PsyD',
      meta: [
        {
          name: 'description',
          content:
            'Coming to therapy to take the first steps towards healing is one of the bravest things a person can do. ',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: dir + 'favicon.png',
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;700&display=swap',
          crossorigin: '',
        },
      ],
    },
  },
  modules: ['@vueuse/nuxt', "@nuxt/image"],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/setup.css',
    '~/assets/css/main.css',
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  devtools: { enabled: true },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '/preview/'),
    },
  },
});