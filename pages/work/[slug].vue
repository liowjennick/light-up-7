<template>
  <div id="project-item">
    <div class="content-container">
      <div class="section-container">
        <h1 class="font-white just-sans font-50">{{ project_data.title }}</h1>
        <p class="description-text just-sans font-22 mb-40">{{ project_data.subtitle }}</p>

        <p class="challenge-result-title font-white just-sans font-30 mb-20"><b>{{ project_data.challenge_result_title }}</b></p>
        <p class="font-orange just-sans font-28 mb-10"><b>challenge</b></p>
        <p class="font-white just-sans font-18">{{ project_data.challenge_description }}</p>
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
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/layout"
@import "../../assets/sass/reset"

#project-item
  min-height: 100vh
  background-color: black
  .content-container
    padding-top: 120px
    // background-color: black
    .section-container
      h1
      .description-text
        color: #7E7E7E

</style>