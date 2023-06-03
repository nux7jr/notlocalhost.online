

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head(c) {
    let bodyClass = ''
    if (c.context) {
      bodyClass = c.context.$cookies.get("theme") === 'dark' ? 'theme-dark' : 'theme-light'
    }
    return {
      bodyAttrs: {
        class: bodyClass
      },
      title: 'notlocalhost',
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500&display=swap' }
      ],
    }
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/static/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ['~/plugins/v-tooltip.js', '~/plugins/v-switch-case.js'],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  transition: {
    name: 'layout',
    mode: 'out-in'
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  serverMiddleware: {
    '/api': '~/api'
  },
  axios: {
    baseURL: 'http://notlocalhost.online',
    browserBaseURL: 'http://localhost:3000',
  },

  modules: [
    // '@nuxtjs/axios',
    '@nuxtjs/auth-next',
    '@nuxt/image',
    ['cookie-universal-nuxt'],
    ['nuxt-i18n', {
      locales: [
        {
          name: 'Russian',
          code: 'ru',
          iso: 'ru-RU',
          file: 'ru.js'
        },
        {
          name: 'English',
          code: 'en',
          iso: 'en-US',
          file: 'en.js'
        },
      ],
      langDir: 'lang/',
      defaultLocale: 'en',
    }]
  ],
  auth: {
    strategies: {
      local: {
        token: {
          property: 'token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: 'user',
          // autoFetch: true
        },
        endpoints: {
          login: { url: '/api/auth/login', method: 'post' },
          // logout: { url: '/api/auth/logout', method: 'post' },
          // user: { url: '/api/auth/user', method: 'get' }
        }
      }
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'defu'
    ]
  },
  router: {
    middleware: ['auth']
  },
}
