// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n'
  ],
  css: [
    '~/assets/css/main.css',
    'primevue/resources/themes/lara-light-teal/theme.css',
    'primevue/resources/primevue.min.css',
    'primeicons/primeicons.css'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  primevue: {
    config: {
      ripple: true
    }
  },
  googleFonts: {
    families: {
      Inter: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
    }
  },
  build: {
    transpile: ['nuxt', 'primevue']
  },
  i18n: {
    vueI18n: './i18n.config.js',
    locales: ['en', 'tr'],
    defaultLocale: 'tr',

  }
})
