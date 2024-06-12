<template>
  <div id="project-item">
    <div class="content-container">
      <div class="section-container">
        <img class="company-logo mb-20" :src="`/images/work/projects/${route.params.slug}/${project_data.company_logo_src}`" />

        <div class="mb-30">
          <div class="workscope-list-container">
            <div class="workscope-item" v-for="(workscope, i) in project_data.workscope_tags" :key="i">
              <img class="workscope-icon" src="/images/work/projects/lightbulb-icon.png" />
              <p class="font-10">{{ workscope }}</p>
            </div>
          </div>
        </div>

        <h1 class="font-white just-sans font-50">{{ project_data.title }}</h1>
        <p class="description-text just-sans font-22 mb-40">{{ project_data.subtitle }}</p>

        <img class="mobile-featured-image" :src="`/images/work/projects/${route.params.slug}/${project_data.featured_media_src}`" />

        <div class="challenge-result-container">
          <div class="text-container">
            <p class="challenge-result-title font-white just-sans font-30 mb-20"><b>{{ project_data.challenge_result_title }}</b></p>

            <div class="mb-30">
              <p class="font-orange just-sans font-28 mb-10"><b>challenge</b></p>
              <p class="font-white just-sans font-18">{{ project_data.challenge_description }}</p>
            </div>

            <div class="mb-30">
              <p class="font-orange just-sans font-28 mb-10"><b>results</b></p>
              <p class="font-white just-sans font-18">{{ project_data.results_description }}</p>
            </div>
          </div>

          <div class="media-container">
            <img :src="`/images/work/projects/${route.params.slug}/${project_data.featured_media_src}`" />
          </div>
        </div>

        <div class="mb-30">
          <p class="font-orange just-sans font-28 mb-10"><b>deliverables</b></p>
          <div class="deliverables-list-container">
            <div class="deliverables-item" v-for="(deliverable, i) in project_data.deliverables" :key="i">
              <p class="font-10">{{ deliverable }}</p>
            </div>
          </div>
        </div>

        <div class="media-gallery-container">
          <div class="media-item" :class="{ 'full-width': media.full_width }" v-for="(media, i) in project_data.media_gallery" :key="i">
            <img :src="`/images/work/projects/${route.params.slug}/${media.src}`" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import projectData from "../../public/data/projects_data.json"

const route = useRoute()
const project_data = ref(projectData.find((item, i) => item.slug === route.params.slug))

useHead({
  title: project_data.value.title,
  meta: [{ name: "description", content: project_data.value.title }]
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/fonts"
@import "../../assets/sass/layout"
@import "../../assets/sass/reset"

#project-item
  min-height: 100vh
  background-color: black
  .content-container
    padding-top: 120px
    +desktop
      padding-top: 160px
    // background-color: black
    .mobile-featured-image
      width: 100%
      display: none
      +desktop
        display: block
    .section-container
      .company-logo
        height: 50px
      h1
      .description-text
        color: #7E7E7E
      .challenge-result-container
        display: flex
        justify-content: space-between
        align-items: center
        +desktop
          display: block
          margin-top: 20px
        .text-container
          flex: 0 0 49%
        .media-container
          flex: 0 0 49%
          +desktop
            display: none
          img
            width: 100%

      .workscope-list-container
        .workscope-item
          border: 1px solid $orange
          display: inline-flex
          align-items: center
          padding: 5px 15px
          border-radius: 50px
          margin-bottom: 10px
          margin-right: 10px
          transition: 0.2s all
          cursor: default
          +large-mobile
            margin-right: 5px
            margin-bottom: 5px
          .workscope-icon
            width: 10px
            margin-right: 5px
          p
            color: $orange
            font-family: "JustSans"
            text-align: center
          &:hover
            background-color: $orange
            p
              color: white

      .deliverables-list-container
        .deliverables-item
          border: 1px solid white
          display: inline-block
          padding: 5px 15px
          border-radius: 50px
          margin-bottom: 10px
          margin-right: 10px
          transition: 0.2s all
          cursor: default
          +large-mobile
            margin-bottom: 5px
            margin-right: 5px
          p
            color: white
            font-family: "JustSans"
            text-align: center
          &:hover
            background-color: white
            p
              color: black

      .media-gallery-container
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        padding-bottom: 80px
        +large-mobile
          display: block
        .media-item
          flex: 0 0 49%
          margin-bottom: 5px
          &.full-width
            flex: 0 0 100%
          img
            width: 100%
</style>