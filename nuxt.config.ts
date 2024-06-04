// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    static: true
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {

        }
      }
    }
  }
})
