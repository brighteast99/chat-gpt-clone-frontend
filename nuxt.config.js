import vuetify from 'vite-plugin-vuetify'
import {config} from 'dotenv'
import {defineNuxtConfig} from 'nuxt/config'

config({
  path: `./.env${process.env.NODE_ENV === 'production' ? '' : '.local'}`
})

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'ChatGPT'
    }
  },
  ssr: false,
  runtimeConfig: {
    gptKey: process.env.NUXT_OPENAI_API_KEY,
    public: {}
  },
  css: [
    'vuetify/lib/styles/main.sass',
    '@mdi/font/css/materialdesignicons.min.css'
  ],
  components: [
    {
      global: true,
      path: '~/components',
      pathPrefix: false
    }
  ],
  modules: [
    '@nuxtjs/eslint-module',
    '@pinia/nuxt',
    async (options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', config =>
        config.plugins.push(
          vuetify({
            autoImport: true,
            styles: {
              configFile: 'assets/scss/settings.scss'
            }
          })
        )
      )
    },
    'nuxt-chatgpt'
  ],
  build: {
    transpile: ['vuetify']
  },
  sourcemap: {
    server: false,
    client: false
  },
  devtools: {
    enabled: true,
    timeline: {
      enabled: true
    }
  },
  eslint: {
    lintOnStart: false
  },
  vite: {
    define: {
      'process.env.DEBUG': false
    }
  },
  chatgpt: {
    apiKey: process.env.NUXT_OPENAI_API_KEY
  }
})
