// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
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
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com',
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;700&display=swap',
          crossorigin: '',
        },
      ],
    },
  },
  modules: ['@vueuse/nuxt'],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/setup.css',
    '~/assets/css/main.css',
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  devtools: { enabled: true },
});
