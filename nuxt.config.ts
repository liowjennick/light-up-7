// https://nuxt.com/docs/api/configuration/nuxt-config

import newsData from "./public/data/news_data.js";
import projectsData from "./public/data/projects_data.js";

const generate_routes: string[] = [];
newsData.map((item) => generate_routes.push(`/news/${item.slug}`));
projectsData.map((item) => generate_routes.push(`/work/${item.slug}`));

export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  nitro: {
    static: true,
    prerender: {
      failOnError: false,
    },
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      }
    }
  },
  build: {
    transpile: ["gsap"],
  },

  generate: {
    routes: generate_routes,
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {},
      },
    },
  },

  modules: ["vue3-carousel-nuxt", "nuxt-particles"]
});