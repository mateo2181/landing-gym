
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Fivo Gym',
    htmlAttrs: {
      lang: 'es'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/animate.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~plugins/vue-carousel', ssr: false },
    { src: '~plugins/validation', ssr: false },
    { src: '~plugins/i18n', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    ['nuxt-i18n', {
      lazy: true,
      loadLanguagesAsync: true,
      locales: [
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
        {
          name: 'Spain',
          code: 'es',
          iso: 'es-ES',
          file: 'es.js'
        },
      ],
      langDir: 'locales/',
      defaultLocale: 'es',
      fallbackLocale: 'es',
      prefix: false,
      detectBrowserLanguage: {
        useCookie: true,
        cookieKey: 'i18n_redirected',
      },
      rootRedirect: ''
    }]
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
