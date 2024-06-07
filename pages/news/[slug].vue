<template>
  <div id="news">
    <p>{{ news_data.title }}</p>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import newsData from "../../static/data/news_data.json"

interface News {
  title?: string,
  description?: string,
  slug?: string
}

const route = useRoute()
const news_data = ref(newsData.find((item) => item.slug === route.params.slug))

useHead({
  title: news_data.value.title,
  meta: [{ name: "description", content: news_data.value.title }]
});


</script>