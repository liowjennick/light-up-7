<template>
  <div id="services">
    <!-- Banner -->
    <div>
      <!-- Animation Here -->
    </div>
    <!-- Services List -->
    <div class="full-screen-center-content hover-services" style="flex-direction: column;">
      <NuxtLink v-for="service in services" :key="service.slug" class="divider-parent" style="width: 100%;"
        :to="`/services/${service.slug}`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content"><img :src="service.icon" alt="icon">
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1;">
            <h2>{{ service.title }}</h2>
            <p>{{ service.description }}</p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue'
import arrowUpRight from '@/assets/svg/arrow-up-right.svg'
import icons from '@/assets/svg'

interface Service {
  icon: string,
  title: string,
  description: string,
  slug: string
}
const services: Service[] = reactive(icons.map((icon, key) => ({
  icon,
  title: 'Service Title',
  description: 'Service description',
  slug: `service_${key}`
})))
</script>
<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"

#services
  background: black
.hover-services
  .divider-parent
      text-decoration: none
      &:hover
          background-color: #DC9F41
          .service-item
            .cta-btn-parent
              background-color: black
              transform: translate(-75%, 50%)
              .hover-text
                visibility: visible
                color: #DC9F41
              .cta-btn-child
                transform: translate(115%, -145%)
      .divider-child
          border-top: 1px solid #ffffff40
      .service-item
        padding: 20px 40px
        .cta-btn-parent
          position: relative
          width: 70px
          height: 70px
          border-radius: 100%
          background-color: #DC9F41
          transition: all .2s linear
          .hover-text
            visibility: hidden
            text-align: center
          .cta-btn-child
            position: absolute
            top: 50%
            left: 50%
            transform: translate(-50%, -50%)
            transition: transform .2s linear
  .divider-parent:last-child
      .divider-child
        border-bottom: 1px solid #ffffff40
</style>