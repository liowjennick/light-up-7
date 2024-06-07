// https://nuxt.com/docs/api/configuration/nuxt-config

import newsData from "./static/data/news_data.json";

const generate_routes:string[] = []
newsData.map((item) => generate_routes.push(`/news/${item.slug}`))

export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    static: true,
    prerender: {
      failOnError: false,
    },
  },
  build: {
    transpile: ["gsap"],
  },
  generate: {
    routes: generate_routes
  },
  vite: {
    css: {
      preprocessorOptions: {
        sass: {},
      },
    },
  },
});
