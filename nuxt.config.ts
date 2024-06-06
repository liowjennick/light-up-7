// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    static: true,
    prerender: {
      failOnError: false,
    },
  },
  build: {
    transpile: ["gsap"],
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {},
      },
    },
  },
});
