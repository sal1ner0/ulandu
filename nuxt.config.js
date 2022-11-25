export default {
  target: 'static',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Ulandu',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8 '},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/css/common.css',
    '~/assets/css/style.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-awesome-swiper', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  gtm: {
    id: process.env.GOOGLE_TAG_MANAGER_ID
  },

  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID
  },

  robots: {
    UserAgent: '*',
    Allow: '/'
  },
}
