<template>
  <div id="news-content">
    <!-- News Header Image -->
    <div class="section-container">
      <img :src="`/images/news/${news_data.slug}/${news_data.page_content.banner_src}`" alt="News Header Thumbnail" style="width: 100%; height: auto;">
    </div>
    <div class="section-container">
      <!-- News Date | Type -->
      <div class="date-category-container" style="margin-bottom: 28px;">
        <p class="font-weight-00 font-white" style="font-size: 18px;"><span class="mr-4">{{ news_data.created_at }}</span> | <span class="ml-4">{{ news_data.category }}</span></p>
      </div>
      <!-- News Title -->
      <h1 class="font-white font-40 font-weight-700">{{ news_data?.title }}</h1>
      <!-- News Paragraph -->
      <div class="page-content" v-html="news_data.page_content.html_content" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import newsData from "../../public/data/news_data.js"
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
  meta: [{ name: "description", content: news_data.value?.description }]
});


</script>
<style lang="sass">
@import '../../assets/sass/responsive.sass'
@import '../../assets/sass/layout.sass'
@import '../../assets/sass/fonts.sass'

#news-content
  background-color: black
  padding: 120px 0 80px 0
  .date-category-container
    margin-top: 40px
  h1
    margin-bottom: 0
  .page-content
    .content-section
      padding-bottom: 40px
      padding-top: 40px
    img
      width: 80%
      display: block
      margin: 0 auto
      &.width-square
        width: 60%
    p
      color: white
      font-size: 20px
      font-weight: 200
      margin-bottom: 40px
      line-height: 28px
    .caption
      text-align: center
      font-size: 14px
    .bold-text
      font-weight: 700
      margin-bottom: 30px
    a
      color: $orange
      margin-bottom: 0
      p
        color: $orange
    .multiline-no-space-container
      p
        margin-top: 0
        margin-bottom: 0
</style>