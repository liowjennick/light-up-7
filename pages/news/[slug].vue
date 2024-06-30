<template>
  <div id="news">
    <!-- News Header Image -->
    <div style="padding: 120px 0 80px 0;">
      <img :src="NewsThumbnail" alt="News Header Thumbnail" style="width: 100%; height: auto;">
    </div>
    <div class="section-container">
      <!-- News Date | Type -->
      <div style="margin-bottom: 28px;">
        <p style="font-size: 20px;">{{ formateDate(news_data?.date as string) }} | {{ news_data?.type }}</p>
      </div>
      <!-- News Title -->
      <h1>{{ news_data?.title }}</h1>
      <!-- News Paragraph -->
      <p>{{ news_data?.description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import newsData from "../../public/data/news_data.json"
import { reactive } from "vue";
import NewsThumbnail from '@/assets/images/news/news-thumbnail.png'

interface News {
  title?: string,
  description?: string,
  date?: Date | string,
  type?: string,
  slug?: string
}

const route = useRoute()

const news: News[] = reactive(newsData)
const news_data: Ref<News | undefined> = ref(news.find((item) => item.slug === route.params.slug))
const formateDate = (dateISO = '') => new Date(dateISO).toLocaleDateString('en-US', {
  day: 'numeric',
  month: 'short',
  year: 'numeric'
})

useHead({
  title: news_data.value?.title ?? '',
  meta: [{ name: "description", content: news_data.value?.title }]
});


</script>
<style lang="sass" scoped>
@import '../../assets/sass/responsive.sass'
@import '../../assets/sass/layout.sass'
@import '../../assets/sass/fonts.sass'

#news
  background-color: black
</style>