<template>
  <div id="project-item">
    <div class="content-container">
      <div class="section-container">
        <div class="project-section-container" v-for="(item, i) in project_data.contents" :key="i">
          <img class="company-logo mb-20" :src="`/images/work/projects/${route.params.slug}/${item.company_logo_src}`" v-if="item.company_logo_src" />

          <div class="mb-30">
            <div class="workscope-list-container">
              <div class="workscope-item" v-for="(workscope, i) in item.workscope_tags" :key="i">
                <img class="workscope-icon" src="/images/work/projects/lightbulb-icon.png" />
                <p class="font-10 font-weight-100 font-gray">{{ workscope }}</p>
              </div>
            </div>
          </div>

          <h1 class="font-white just-sans font-50">{{ item.title }}</h1>
          <p class="description-text just-sans font-22 mb-40">{{ item.subtitle }}</p>

          <div class="media-container-mobile">
            <template v-for="(image, j) in item.featured_media_src" :key="j">
              <template v-if="image && image.is_youtube_video && image.src">
                <div class="iframe-container" :style="{ width: image.width_percent + '%' }">
                  <iframe
                    width="100%"
                    :src="image.src"
                    frameborder="0"
                    title="Hello"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  >
                  </iframe>
                  <p class="caption just-sans font-white text-center" v-if="image.caption">{{image.caption}}</p>
                </div>
              </template>

                <template v-else>
                  <div :style="{ width: image.width_percent + '%' }" class="image-container">
                    <div class="image-item-container" v-for="(src, l) in image.src" :key="l">
                      <img :src="`/images/work/projects/${route.params.slug}/${src}`" />
                      <p class="caption just-sans font-white text-center" v-if="image.caption">{{image.caption}}</p>
                    </div>
                  </div>
                </template>
            </template>
        
          </div>

          <div class="challenge-result-container">
            <div class="text-container">
              <p class="challenge-result-title font-white just-sans font-30 mb-20"><b>{{ item.challenge_result_title }}</b></p>

              <div class="mb-30" v-if="item.challenge_description">
                <p class="font-orange just-sans font-28 mb-10"><b>challenge</b></p>
                <p class="font-white just-sans font-18 font-weight-100">{{ item.challenge_description }}</p>
              </div>

              <div class="mb-30" v-if="item.outcome_description">
                <p class="font-orange just-sans font-28 mb-10"><b>outcome</b></p>
                <p class="font-white just-sans font-18 font-weight-100">{{ item.outcome_description }}</p>
              </div>

              <div class="mb-30" v-if="item.results_description">
                <p class="font-orange just-sans font-28 mb-10"><b>results</b></p>
                <p class="font-white just-sans font-18 font-weight-100">{{ item.results_description }}</p>
              </div>
            </div>

            <div class="media-container">
              <template v-for="(image, j) in item.featured_media_src" :key="j">
                <template v-if="image && image.is_youtube_video && image.src">
                  <div class="iframe-container" :style="{ width: image.width_percent + '%' }">
                    <iframe
                      width="100%"
                      :src="image.src"
                      frameborder="0"
                      title="Hello"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerpolicy="strict-origin-when-cross-origin"
                      allowfullscreen
                    >
                    </iframe>
                  </div>
                </template>

                <template v-else>
                  <div :style="{ width: image.width_percent + '%' }" class="image-container">
                    <div class="image-item-container" v-for="(src, l) in image.src" :key="l">
                      <img :src="`/images/work/projects/${route.params.slug}/${src}`" />
                      <p class="caption just-sans font-white text-center" v-if="image.caption">{{image.caption}}</p>
                    </div>
                  </div>
                </template>
              </template>
            </div>
          </div>

          <div class="mb-30">
            <p class="font-orange just-sans font-28 mb-10"><b>deliverables</b></p>
            <div class="deliverables-list-container">
              <div class="deliverables-item" v-for="(deliverable, i) in item.deliverables" :key="i">
                <p class="font-10">{{ deliverable }}</p>
              </div>
            </div>
          </div>

          <div class="media-gallery-container" v-for="(gallery, j) in item.media_gallery" :key="j">
            <template v-for="(image, k) in gallery" :key="k">
              <template v-if="image && image.is_youtube_video && image.src">
                <div class="iframe-container" :style="{ width: image.width_percent + '%' }">
                  <iframe
                    width="100%"
                    :src="image.src"
                    frameborder="0"
                    title="Hello"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                  >
                  </iframe>
                  <p class="caption just-sans font-white text-center" v-if="image.caption">{{image.caption}}</p>
                </div>
              </template>

              <template v-else>
                <div :style="{ width: image.width_percent + '%' }" class="image-container">
                  <div class="image-item-container" v-for="(src, l) in image.src" :key="l">
                    <img :src="`/images/work/projects/${route.params.slug}/${src}`" />
                    <p class="caption just-sans font-white text-center" v-if="image.caption">{{image.caption}}</p>
                  </div>
                </div>
              </template>
            </template>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import projectData from "../../public/data/projects_data.js"
 
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
  .project-section-container
    padding-bottom: 120px
  .content-container
    padding-top: 120px
    +desktop
      padding-top: 160px
    // background-color: black
    .featured-image-container
      width: 100%
    .featured-image-container-mobile
      width: 100%
      display: none
      +desktop
        display: block
    .section-container
      .company-logo
        height: 150px
      h1
        margin-bottom: 20px
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
          .image-container
            padding: 5px
            box-sizing: border-box
            display: inline-block
            img
              width: 100%
          .iframe-container
            iframe
              height: 400px
      .media-container-mobile
        display: none
        +desktop
          display: block
        .image-container
          padding: 5px
          box-sizing: border-box
          display: inline-block
          img
            max-width: 100%
        .iframe-container
          iframe
            height: 400px

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
        // display: block
        padding-bottom: 80px
        +large-mobile
          display: block
        .iframe-container
          padding: 5px
          box-sizing: border-box
          display: flex
          flex-direction: column
          iframe
            flex: 1
            min-height: 600px
        .image-container
          display: inline-block
          img
            width: 100%
            padding: 5px
            box-sizing: border-box
  .caption
    margin-top: 20px
</style>