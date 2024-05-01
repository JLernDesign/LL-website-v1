// https://nuxt.com/docs/api/configuration/nuxt-config
const path = require('path');
const dir = '/';

export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: dir,
    head: {
      title: 'Lindsey Lerner PsyD',
      meta: [
        {
          name: 'description',
          content:
            'Licensed Psychologist in Oregon specializing in Trauma/PTSD, Eating Disorders, Gender and Sexuality, Existential Issues, Addiction/Co-Dependency, Relationship Issues, Chronic Pain, Bipoc Issues',
        },
        {
          name: 'keywords',
          content:
            'therapy, portland, oregon, psyd, psychologist, psychology, trauma, gender, sexuality, existential, eating disorder, ptsd, addiction, chronic pain, bipoc, queer, relationship, counseling',
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
  modules: ['@vueuse/nuxt', '@nuxt/image', 'nuxt-gtag'],
  css: [
    '~/assets/css/reset.css',
    '~/assets/css/setup.css',
    '~/assets/css/main.css',
  ],
  alias: {
    assets: '/<rootDir>/assets',
  },
  devtools: { enabled: false },
  gtag: {
    id: 'G-751YVZCCDP',
  },
});
