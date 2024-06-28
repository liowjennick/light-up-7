<template>
  <div id="services">
    <!-- Header -->
    <div class="full-screen-start-center">
      <img src="" alt="">
      <div class="full-screen-center-start" style="color: #DC9F41; flex-direction: column;">
        <h1>Growth Strategy</h1>
        <p>Propel your business with a tactical plan optimised to achieve your desired goals.</p>
      </div>
    </div>
    <!-- Animation header -->
    <div>
      <!-- Animation Here -->
    </div>
    <!-- Service Details -->
    <div class="service-detail-grid-2">
      <div v-for="(detail, key) in serviceDetails" :key="key" class="full-screen-center-start service-detail-item"
        style="flex-direction: column;">
        <h3>{{ detail.title }}</h3>
        <p>{{ detail.description }}</p>
      </div>
    </div>
    <!-- Quick Nav -->
    <div class="full-screen-center-around">
      <NuxtLink v-for="nav in navs" :key="nav.slug" class="orange-outlined-button">
        {{ nav.text }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';

const serviceDetails = reactive([
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
])

const navs = reactive([
  {
    text: "let's get in touch!",
    slug: 'contact'
  },
  {
    text: "view all services",
    slug: 'services'
  },
  {
    text: "view our work",
    slug: 'work'
  }
])
</script>
<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

#services
  background: black
.service-detail-grid-2
  display: grid
  grid-template-columns: auto auto
  gap: 120px
  .service-detail-item
    color: #DC9F41
    padding: 24px
    &:hover
      border: 1px solid #DC9F41

</style>