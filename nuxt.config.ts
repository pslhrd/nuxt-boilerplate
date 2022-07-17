import { defineNuxtConfig } from 'nuxt'
import glsl from 'vite-plugin-glsl'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({

  ssr: false,

  css: [
    '@/assets/fonts/fonts.scss',
    '@/assets/styles/main.scss',
    '@/assets/styles/reset.scss'
  ],

  modules: ['nuxt-graphql-client'],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@import "@/assets/styles/_variables.scss";'
        },
      },
    },
    plugins: [glsl()],
  },

  runtimeConfig: {
    public: {
      "graphql-client": {
        clients: {
          default: {
            host: process.env.SHOPIFY_DOMAIN,
            token: {
              name: "X-Shopify-Storefront-Access-Token",
              value: process.env.SHOPIFY_STOREFRONT_TOKEN,
              type: null,
            },
            retainToken: true,
          },
        },
      },
    },
  },
})
