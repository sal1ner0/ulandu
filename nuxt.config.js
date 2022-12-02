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
    { src: "~/plugins/vuelidate" },
    { src: "~/plugins/vue-toastification", mode: "client" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/google-analytics',
    '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    '@nuxtjs/gtm',
    '@nuxtjs/robots',
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: `${process.env.BACKEND_BASE_URL}/api/ulandu/`,
    // credentials: true,
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

  image: {
    provider: 'static'
  },

  publicRuntimeConfig: {
    contact: {
      email: process.env.CONTACT_EMAIL,
      phone_number: process.env.CONTACT_PHONE_NUMBER,
      address: process.env.CONTACT_ADDRESS,
    },
    social_links: {
      facebook: process.env.SOCIAL_FACEBOOK,
      twitter: process.env.SOCIAL_TWITTER,
      instagram: process.env.SOCIAL_INSTAGRAM,
      linkedin: process.env.SOCIAL_LINKEDIN,
    },
  },
}
