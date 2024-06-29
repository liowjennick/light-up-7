<template>
  <div id="services">
    <!-- Banner -->
    <div>
      <!-- Animation Here -->
    </div>
    <!-- Services List -->
    <div class="full-screen-center-content hover-services" style="flex-direction: column;">
      <NuxtLink class="divider-parent" style="width: 100%; text-decoration: none;" :to="`/services/growth-strategy`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Growth />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1; color: white;">
            <h2>Growth Strategy</h2>
            <p>Propel your business with a tactical plan optimised to achieve your desired goals. </p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="divider-parent" style="width: 100%; text-decoration: none;" :to="`/services/digital-marketing`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Digital />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1;color: white;">
            <h2>Digital Marketing</h2>
            <p>Stay ahead on the digital front with a host of approaches, integrated to meet your business needs </p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="divider-parent" style="width: 100%; text-decoration: none;" :to="`/services/video-photography`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Video />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1;color: white;">
            <h2>Video & Photography</h2>
            <p>A picture is worth a thousand words. Tell your brand story with captivating images and engaging videos.
            </p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="divider-parent" style="width: 100%; text-decoration: none;" :to="`/services/brand-creative-design`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Brand />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1; color: white;">
            <h2>Branding & Creative Design</h2>
            <p>With a little sparkle and some zing, your new brand identity is ready to take on the world. </p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="divider-parent" style="width: 100%; text-decoration: none;" :to="`/services/website-apps`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Website />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1; color: white;">
            <h2>Websites & Apps</h2>
            <p>Your business’ first point of contact can leave a lasting impression. Build your best brand website with
              us! </p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="divider-parent" style="width: 100%;text-decoration: none;" :to="`/services/event-management`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Event />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1; color: white;">
            <h2>Event Management</h2>
            <p>From conceptualising all the way to d-day handling, our event management team is poised to bring it all
              to life.
            </p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child"><img :src="arrowUpRight" alt="Arrow up right"></div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink class="divider-parent" style="width: 100%; text-decoration: none;" :to="`/services/media-buying`">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%;" class="full-screen-center-content">
            <Media />
          </div>
          <div class="full-screen-start-center" style="flex-direction: column; flex: 1; color: white;">
            <h2>Media Buying</h2>
            <p>Put your brand in front of the right audience at the right time and place. Let us help you optimise your
              digital presence. </p>
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
import arrowUpRight from '@/assets/svg/arrow-up-right.svg'
import { Growth, Digital, Brand, Event, Media, Video, Website } from '@/assets/svg'

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
            path[fill="#DC9F41"]
              fill: white
            path[stroke="#DC9F41"]
              stroke: white
            .cta-btn-parent
              background-color: black
              transform: translate(-75%, 50%)
              .hover-text
                visibility: visible
                color: $orange
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