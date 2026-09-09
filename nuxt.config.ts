// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/icon'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },

  icon: {
    // 1. Force the module to statically scan components for icons at build time
    clientBundle: {
      scan: true,
      sizeLimitKb: 512
    },
    // 2. Lock down the local bundle collections
    serverBundle: {
      collections: ['lucide', 'simple-icons']
    },
    // 3. Completely shut off network requests to the Iconify API
    fallbackToApi: false
  }
})
