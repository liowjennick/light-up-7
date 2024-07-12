<template>
  <div id="services">
    <!-- Header -->
    <div class="full-screen-center-content section-container"
      style="padding-top: 150px; gap: 45px; padding-bottom: 48px;">
      <img :src="growth" alt="growth" width="100" style="margin-left: auto; height: auto;">
      <div class="full-screen-start-center" style="color: #DC9F41; flex-direction: column;">
        <h1 style="margin: 0; font-size: 64px; font-weight: normal;">Growth Strategy</h1>
        <p style="font-size: 26px; margin: 0;">Propel your business with a tactical plan optimised to achieve your
          desired goals.</p>
      </div>
    </div>
    <!-- Animation header -->
    <div>
      <!-- Animation Here -->
      <LineToBulb />
    </div>
    <!-- Service Details -->
    <div class="service-detail-grid-2 section-container" style="padding: 48px 0px">
      <div v-for="(detail, key) in serviceDetails" :key="key" class="full-screen-start-center service-detail-item"
        style="flex-direction: column;">
        <p>{{ detail.title }}</p>
        <p>{{ detail.description }}</p>
      </div>
    </div>
    <!-- Quick Nav -->
    <div class="full-screen-center-around section-container">
      <NuxtLink v-for="nav in navs" :key="nav.slug" class="orange-outlined-button">
        {{ nav.text }}
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';
import growth from '@/assets/svg/growth.svg'
import LineToBulb from '~/assets/svg/line-to-bulb.vue';

const serviceDetails = reactive([
  {
    title: 'Marketing Strategy & Consultation',
    description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
  },
  {
    title: 'Brand Positioning',
    description: `Showcase your brand's best angles! We’ll help you put your best foot forward to connect with your audience.`
  },
  {
    title: 'Brand Audit',
    description: `Get a comprehensive brand audit to optimise your positioning and leverage strengths for accelerated success.`
  },
  {
    title: 'Multi-channel Strategy',
    description: `Maximise potential with a versatile 360-approach tailored to amplify your brand across diverse platforms. `
  },
  {
    title: 'Audience & Personas',
    description: `Gain insights into your target audience's behaviour via data analysis, social listening and other methodologies. `
  },
  {
    title: 'Competitive Analysis',
    description: `Gain a competitive edge with a deep dive into the industry to inform your initiatives and outperform the rest.`
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
<style lang="sass" scoped>
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
  row-gap: 120px
  column-gap: 60px
  .service-detail-item
    padding: 24px
    border: 1px solid #000000
    color: white
    p:first-child
      font-size: 30px
      font-weight: normal
      margin: 0
    &:hover
      color: #DC9F41
      border: 1px solid #DC9F41

</style>