<template>
  <div id="work">
    <div id="light-bulb-section">
      <div class="light-background-triangle" />
      <div class="light-bulb-container">
        <div class="black-circle" />
        <img
          class="bulb"
          src="../../assets/images/work/light-bulb.png"
        />
        <img
          class="bulb-glow"
          src="../../assets/images/work/light-bulb-glow.png"
        />
        <img
          class="glow-line"
          :class="{ active: initialAnimationComplete }"
          src="../../assets/images/work/light-beam-line.png"
        />
      </div>
      <h1 class="page-title">WORK</h1>

      <div id="sliding-button">
        <p class="font-orange text-center just-sans font-20 font-weight-200">swipe right to see our past works</p>
        <div class="sliding-button-container">
          <div class="sliding-button">
            <div class="slider-progress-background" />

            <div class="icon-container-work">
              <img src="../../assets/images/work/work-slider-icon.png" />
            </div>

            <div class="icon-container-projects">
              <img src="../../assets/images/work/projects-slider-icon.png" />
            </div>

            <p class="font-weight-200" v-if="displayMode === DisplayMode.Clients">our clients</p>
            <p class="font-weight-200" v-if="displayMode === DisplayMode.Projects">our projects</p>
            <div class="slider-circle">
              <img src="../../assets/images/work/right-caret.png" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="client-list-section">
      <div class="light-background" />
      <div
        class="client-project-slider-container"
        :class="{ 'project-active': displayMode === DisplayMode.Projects }"
      >
        <div class="work-section-container">
          <div class="section-container">
            <div class="client-logo-container">
              <!-- <img class="client-bulb-image" src="../../assets/images/work/clients-logo/petronas-logo.png" /> -->
              <!-- class="client-generic-bulb" -->
              <img class="client-generic-bulb" src="../../assets/images/work/clients-logo/generic-bulb.png" />
              <img :class="{ active: activeClientBulbImage === client.slug }"  v-for="(client, i) in clientsCarouselLogo" :key="i" class="client-bulb-image" :src="`/images/work/clients-bulb-logo/petronas-logo.png`" />

              <h1 class="client-large-name">clients</h1>
              <h1 class="client-back-name">clients</h1>
            </div>

            <!-- <div class="bulb-cutout-section">
              <img src="../../assets/images/work/clients-logo/petronas-logo.png" />
            </div> -->

            <div class="client-list-image-container">
              <div @mouseover="activeClientBulbImage = client.slug" class="client-image-container" :key="i" v-for="(client, i) in clientsCarouselLogo">
                <img :src="`/images/work/clients-carousel-logo/${client.image_src}`" />
              </div>
            </div>
          </div>
        </div>

        <div class="projects-section-container">
          <div class="section-container">
            <div class="project-list-banner-container">
              <div
                class="project-banner-item"
                v-for="(item, i) in ProjectData"
                :key="i"
              >
                <NuxtLink :to="`work/${item.slug}`">
                  <img :src="`/images/work/projects/${item.slug}/${item.banner_image_src}`" />
                </NuxtLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin, Draggable } from "gsap/all";
import ProjectData from "../../public/data/projects_data.js";
import { setCookie, getCookie } from "../../utils/cookies"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

const initialAnimationComplete = ref(false)

enum DisplayMode {
  Clients,
  Projects,
}

const displayMode = ref(DisplayMode.Clients);

const activeClientBulbImage = ref("")

const clientsCarouselLogo = ref([
  {
    image_src: "7-eleven.png",
    slug: "7-eleven"
  },
  {
    image_src: "ahhyum.png",
    slug: "ahhyum"
  },
  {
    image_src: "ambank.png",
    slug: "ambank"
  },
  {
    image_src: "astro.png",
    slug: "astro"
  },
  {
    image_src: "asus.png",
    slug: "asus"
  },
  {
    image_src: "beats-by-dr-dre.png",
    slug: "beats-by-dr-dre"
  },
  {
    image_src: "bnm.png",
    slug: "bnm"
  },
  {
    image_src: "bursa-malaysia.png",
    slug: "bursa-malaysia"
  },
  {
    image_src: "cyberview.png",
    slug: "cyberview"
  },
  {
    image_src: "dubai-uae.png",
    slug: "dubai-uae"
  },
  {
    image_src: "epsom.png",
    slug: "epsom"
  },
  {
    image_src: "fen.png",
    slug: "fen"
  },
  {
    image_src: "fimm.png",
    slug: "fimm"
  },
  {
    image_src: "fwd.png",
    slug: "fwd"
  },
  {
    image_src: "hitachi.png",
    slug: "hitachi"
  },
  {
    image_src: "hotlink.png",
    slug: "hotlink"
  },
  {
    image_src: "khazanah-nasional.png",
    slug: "khazanah-nasional"
  },
  {
    image_src: "kpj.png",
    slug: "kpj"
  },
  {
    image_src: "ktm.png",
    slug: "ktm"
  },
  {
    image_src: "kwap.png",
    slug: "kwap"
  },
  {
    image_src: "kwsp.png",
    slug: "kwsp"
  },
  {
    image_src: "leonardo.png",
    slug: "leonardo"
  },
  {
    image_src: "malaysia-airports.png",
    slug: "malaysia-airports"
  },
  {
    image_src: "mprc.png",
    slug: "mprc"
  },
  {
    image_src: "paynet.png",
    slug: "paynet"
  },
  {
    image_src: "pdi.png",
    slug: "pdi"
  },
  {
    image_src: "petronas.png",
    slug: "petronas"
  },
  {
    image_src: "pidm.png",
    slug: "pidm"
  },
  {
    image_src: "pnb.png",
    slug: "pnb"
  },
  {
    image_src: "rjm.png",
    slug: "rjm"
  },
  {
    image_src: "rosken.png",
    slug: "rosken"
  },
  {
    image_src: "selangor.png",
    slug: "selangor"
  },
  {
    image_src: "sime-darby.png",
    slug: "sime-darby"
  },
  {
    image_src: "suria-klcc.png",
    slug: "suria-klcc"
  },
  {
    image_src: "suruhanjaya.png",
    slug: "suruhanjaya"
  },
  {
    image_src: "tabung-haji.png",
    slug: "tabung-haji"
  },
  {
    image_src: "tokio-marine.png",
    slug: "tokio-marine"
  },
  {
    image_src: "ubermen.png",
    slug: "ubermen"
  },
  {
    image_src: "unicef.png",
    slug: "unicef"
  },
  {
    image_src: "unilever.png",
    slug: "unilever"
  },
])



onMounted(() => {
  // INIT ANIMATION
  gsap.to(".bulb-glow", {
    duration: 1,
    opacity: 0.6,
    delay: 1,
    onComplete: () => {
      document.querySelector(".bulb-glow")?.classList.add("image-glow");
    },
  });
  // gsap.to(".glow-line", {
  //   duration: 1,
  //   opacity: 0.8,
  //   delay: 1.1,
  //   onComplete: () => {
  //     document.querySelector(".bulb-glow")?.classList.add("image-glow");
  //   },
  // });
  gsap.to(".light-background-triangle", {
    duration: 1,
    opacity: 0.15,
    delay: 1.2,
  });
  gsap.to(".page-title", {
    duration: 1,
    opacity: 1,
    delay: 1.2,
  });
  gsap.to("#sliding-button", {
    duration: 1,
    opacity: 1,
    delay: 1.2,
  });
  gsap.to("#client-list-section", {
    duration: 1,
    opacity: 1,
    delay: 1.2,
    onComplete: () => {
      initialAnimationComplete.value = true
    }
  });

  // SLIDING BUTTON
  const sliderButtonWidth = 60;
  const sliderMaxDragDistance = document.querySelector(".sliding-button")?.clientWidth - sliderButtonWidth;

  // INITIAL SECTION OF SLIDING BUTTON
  const sectionCookie = getCookie("work-section")
  const element = document.querySelector(".slider-circle");

  if (sectionCookie === JSON.stringify(DisplayMode.Projects)) {
    displayMode.value = DisplayMode.Projects

    gsap.to(element, {
      x: sliderMaxDragDistance,
      duration: 0.2,
      rotation: 180,
    });
  }

  Draggable.create(".slider-circle", {
    type: "x",
    inertia: true,
    dragResistance: 0.1,
    bounds: { minX: 0, maxX: sliderMaxDragDistance },
    onDragStart: function (e) {
      // bulbInitialY.value = this.target.getBoundingClientRect().top
    },
    onDrag: function (e) {
      // PROGRESS BAR OPACITY FOLLOW
      const element = document.querySelector(".slider-circle");
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);
      console.log(matrix.m41);
      gsap.to(".slider-progress-background", {
        duration: 0,
        opacity: 0.2,
        width: matrix.m41 + sliderButtonWidth,
      });
    },
    onDragEnd: function (e) {
      const element = document.querySelector(".slider-circle");
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);
      const dragDistance = matrix.m41;

      // IF DRAGGED TO THE RIGHT, SET STATE TO PROJECTS ELSE CLIENTS
      if (dragDistance > sliderMaxDragDistance * 0.9) {
        gsap.to(this.target, {
          x: sliderMaxDragDistance,
          duration: 0.2,
          rotation: 180,
        });

        gsap.to(".slider-progress-background", {
          duration: 1,
          width: 0,
          borderRadius: 40,
          opacity: 0.2,
        });

        displayMode.value = DisplayMode.Projects;
        setCookie("work-section", displayMode.value, 2)
      } else {
        gsap.to(this.target, {
          x: 0,
          duration: 0.1,
          rotation: 0,
        });

        gsap.to(".slider-progress-background", {
          duration: 0.1,
          width: sliderButtonWidth,
        });

        displayMode.value = DisplayMode.Clients;
        setCookie("work-section", displayMode.value, 2)
      }
    },
  });
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/animations.sass"

.image-glow
  --webkit-animation: image-glow 1s ease-in-out infinite alternate
  animation: image-glow 1s ease-in-out infinite alternate

#work
  background-color: black
  #light-bulb-section
    background-color: black
    padding-bottom: 40px
    position: relative
    .light-background-triangle
      background: $orange
      // opacity: 0.15
      height: 0px
      width: 0px
      position: absolute
      bottom: 0
      left: 50%
      bottom: 0
      transform: translateX(-50%)
      border-left: 60vw solid black
      border-right: 60vw solid black
      border-bottom: 45vh solid $orange
      opacity: 0
    .light-bulb-container
      display: flex
      align-items: flex-start
      justify-content: center
      position: relative
      .bulb
        display: block
        width: 10%
        position: relative
      .black-circle
        position: relative
        position: absolute
        width: 10%
        height:30%
        background-color: red
        top: 67%
        left: 50%
        transform: translateX(-50%)
        border-radius: 50%
        background-color: black
      .bulb-glow
        display: block
        width: 15.2%
        position: absolute
        opacity: 0
      .glow-line
        position: absolute
        width: 60%
        top: 70%
        opacity: 0
        transform-origin: center top
        transform: scale(0)
        z-index: 10
        &.active
          animation: glow-line-expand 1s ease-out infinite alternate
    .page-title
      color: none
      text-align: center
      font-family: "JustSans"
      // text-shadow: 0 0 3px white, 0 0 5px white, 0 0 20px white
      text-shadow: 0 0 5px white, 0 0 5px white, 0 0 20px white
      font-size: 80px
      --webkit-animation: text-glow 1s ease-in-out infinite alternate
      animation: text-glow 1s ease-in-out infinite alternate
      margin-bottom: 10px
      opacity: 0
    #sliding-button
      opacity: 0
      z-index: 20
      position: relative
    .sliding-button-container
      padding: 10px
      border: 1px solid $orange
      border-radius: 50px
      margin-top: 10px
      width: 300px
      display: block
      margin: 10px auto
      .sliding-button
        background-color: rgba(255, 222, 135, 0.5)
        border-radius: 40px
        position: relative
        height: 60px
        display: flex
        align-items: center
        justify-content: center
        overflow: hidden
        p
          color: white
          font-family: "JustSans"
          text-align: center
          font-size: 20px
        .slider-circle
          height: 60px
          width: 60px
          background-color: rgba(255, 222, 135, 0.5)
          // opacity: 0.5
          position: absolute
          border-radius: 50%
          top: 0
          left: 0
          cursor: pointer
          box-shadow: 1px 0px 8px black
          z-index: 2
          display: flex
          align-items: center
          justify-content: center
          transition: 0.2s all
          img
            width: 20px
            transition: 0.2s all
          &:hover
            box-shadow: 1px 0 14px black
            background-color: rgba(255, 222, 135, 0.8)
            img
              transform: scale(1.2)
          p
            color: white
            font-family: "JustSans"
            // font-weight: bold
            display: flex
            justify-content: center
            align-items: center
            height: 100%
        .slider-progress-background
          background-color: white
          width: 60px
          height: 60px
          position: absolute
          z-index: 1
          opacity: 0.1
          border-radius: 40px
          left: 0
        .icon-container-work
          position: absolute
          top: 0
          height: 100%
          left: 0
          img
            height: 100%
        .icon-container-projects
          position: absolute
          top: 0
          height: 100%
          right: 0
          img
            height: 100%

  #client-list-section
    background-color: black
    position: relative
    opacity: 0
    .light-background
      background: $orange
      opacity: 0.15
      height: 100%
      width: 100%
      position: absolute
    .client-project-slider-container
      display: flex
      transform: translateX(0%)
      transition: 0.25s transform
      &.project-active
        transform: translateX(-100%)
        .work-section-container
          opacity: 0
        .projects-section-container
          opacity: 1
          overflow: unset
          height: 100%
      .work-section-container
        transition: 1.5s opacity
        opacity: 1
        flex: 0 0 100%
      .projects-section-container
        transition: 1.5s opacity
        opacity: 0
        flex: 0 0 100%
        height: 0px
        overflow: hidden
    .section-container
      padding-top: 80px
      padding-bottom: 40px
      position: relative
      flex: 0 0 100%
      .bulb-cutout-section
        position: absolute
        top: 0
        left: 0
        width: 100%
        background-color: $orange
        img
          width: 400px
      .client-logo-container
        position: relative
        margin-bottom: 40px
        // background: $orange
        // opacity: 0.15
        .client-generic-bulb
          display: block
          margin: 0 auto
          position: relative
          z-index: 1
          width: 400px
          // mix-blend-mode: multiply

          +large-mobile
            max-width: 300px
          // mix-blend-mode: difference
          +mobile
            width: 200px
        .client-bulb-image
          position: absolute
          top: 0
          left: 50%
          transform: translateX(-50%)
          width: 400px
          z-index: 2
          opacity: 0
          transition: 0.2s all
          +large-mobile
            max-width: 300px
          // mix-blend-mode: difference
          +mobile
            width: 200px
          &.active
            opacity: 1
        .client-large-name
          top: 20%
          left: 0
          width: 100%
          // background: rgba(255, 255, 255, 0.2)
          position: absolute
          color: white
          opacity: 0.6
          // opacity: 0.4
          text-align: center
          font-family: "JustSans"
          text-shadow: 0 0 10px white
          font-size: 140px
          z-index: 2
          mix-blend-mode: overlay
          filter: drop-shadow(0px 0px 4px black)
          +large-mobile
            font-size: 100px
          +mobile
            font-size: 60px
        .client-back-name
          top: 20%
          left: 0
          width: 100%
          position: absolute
          color: none
          opacity: 1
          text-align: center
          font-family: "JustSans"
          text-shadow: 0 0 8px white
          font-size: 140px
          z-index: 0
          +large-mobile
            font-size: 100px
          +mobile
            font-size: 60px
  .client-list-image-container
    display: flex
    flex-wrap: wrap
    align-items: center
    justify-content: center
    .client-image-container
      flex: 0 0 10%
      padding: 10px
      +desktop
        flex: 0 0 14%
      +large-mobile
        flex: 0 0 20%
      img
        width: 100%
  .project-list-banner-container
    .project-banner-item
      margin-bottom: 20px
      a
        display: block
        img
          width: 100%

@keyframes glow-line-expand
  0%
    transform: scale(1)
  100%
    transform: scale(1.4)
    opacity: 1
</style>
