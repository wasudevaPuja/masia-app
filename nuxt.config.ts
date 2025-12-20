// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxtjs/sitemap'
  ],
  plugins: [
    { src: '~/plugins/aos', mode: 'client' }
  ],
  ssr: true,

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],
  site: {
    url: 'https://www.masiaglobal.asia'
  },

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-15',

  nitro: {
    preset: 'static'
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  },
  googleFonts: {
    families: {
      Sora: [400, 500, 600, 700],
      Inter: [300, 400, 500, 600]
    },
    display: 'swap',
    preload: true,
    preconnect: true,
    prefetch: true,
    download: true
  },
  sitemap: {
    urls: [
      {
        loc: '/',
        priority: 1.0,
        changefreq: 'monthly'
      }
    ]
  }
})
