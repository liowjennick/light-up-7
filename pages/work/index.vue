<template>
  <div id="work">
    <div
      id="light-bulb-section"
    >
      <div class="light-background-triangle"/>
      <div class="light-bulb-container">
        <img class="bulb" src="../../assets/images/work/light-bulb.png" />
        <img class="bulb-glow image-glow" src="../../assets/images/work/light-bulb-glow.png" />
        <img class="glow-line image-glow" src="../../assets/images/work/light-beam-line.png" />
      </div>
      <h1 class="page-title">WORK</h1>

      <div>
        <p class="font-orange text-center just-sans font-20">swipe right to see our past works</p>
        <div class="sliding-button-container">
          <div class="sliding-button">
            <div class="slider-progress-background" />
            <p v-if="displayMode === DisplayMode.Clients">our clients</p>
            <p v-if="displayMode === DisplayMode.Projects">our projects</p>
            <div class="slider-circle">
              <p class="font-white">&#8250;</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="client-list-section">
      <div class="light-background" />
      <div class="section-container">
        <div class="client-logo-container">
          <img src="../../assets/images/work/clients-logo/petronas-logo.png" />
          <h1 class="client-large-name">clients</h1>
          <h1 class="client-back-name">clients</h1>
        </div>

        <div class="client-list-image-container">
          <img src="assets/images/work/all-clients.png" />
        </div>

        <div class="project-list-banner-container">
          <div class="project-banner-item" v-for="(item, i) in ProjectData" :key="i">
            <NuxtLink :to="`work/${item.slug}`">
              <img :src="`/images/work/projects/${item.banner_image_slug}.png`" />
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin, Draggable } from "gsap/all";
import ProjectData from "../../public/data/projects_data.json"

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

enum DisplayMode {
  Clients,
  Projects
}

const displayMode = ref(DisplayMode.Clients) // clients, projects

onMounted(() => {
  const sliderButtonWidth = 60
  const sliderMaxDragDistance = document.querySelector(".sliding-button")?.clientWidth - sliderButtonWidth

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
      const element = document.querySelector(".slider-circle")
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);
      console.log(matrix.m41)
      gsap.to(".slider-progress-background", {
        duration: 0,
        opacity: 0.2,
        width: matrix.m41 + sliderButtonWidth
      })
    },
    onDragEnd: function (e) {
      const element = document.querySelector(".slider-circle")
      const style = window.getComputedStyle(element);
      const matrix = new WebKitCSSMatrix(style.transform);
      const dragDistance = matrix.m41

      // IF DRAGGED TO THE RIGHT, SET STATE TO PROJECTS ELSE CLIENTS
      if (dragDistance > sliderMaxDragDistance * 0.9) {
        gsap.to(this.target, {
          x: sliderMaxDragDistance,
          duration: 0.2,
          rotation: 180,
        })

        gsap.to(".slider-progress-background", {
          duration: 1,
          width: 0,
          borderRadius: 40,
          opacity: 0.2
        })

        displayMode.value = DisplayMode.Projects
      } else {
        gsap.to(this.target, {
          x: 0,
          duration: 0.1,
          rotation: 0,
        });

        gsap.to(".slider-progress-background", {
          duration: 0.1,
          width: sliderButtonWidth
        })

        displayMode.value = DisplayMode.Clients
      }
    },
  })
})

</script>

<style lang="sass" scoped>
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/animations.sass"

.image-glow
  --webkit-animation: image-glow 1s ease-in-out infinite alternate
  animation: image-glow 1s ease-in-out infinite alternate

#work
  #light-bulb-section
    background-color: black
    padding-bottom: 40px
    position: relative
    .light-background-triangle
      background: $orange
      opacity: 0.15
      height: 0px
      width: 0px
      position: absolute
      bottom: 0
      left: 50%
      bottom: 0
      transform: translateX(-50%)
      border-left: 50vw solid black
      border-right: 50vw solid black
      border-bottom: 25vw solid $orange
    .light-bulb-container
      display: flex
      align-items: flex-start
      justify-content: center
      position: relative
      .bulb
        display: block
        width: 10%
      .bulb-glow
        display: block
        width: 15.2%
        position: absolute
      .glow-line
        position: absolute
        width: 60%
        top: 70%
    .page-title
      color: none
      text-align: center
      font-family: "JustSans"
      // text-shadow: 0 0 3px white, 0 0 5px white, 0 0 20px white
      text-shadow: 0 0 5px white, 0 0 5px white, 0 0 20px white
      font-size: 80px
      --webkit-animation: text-glow 1s ease-in-out infinite alternate
      animation: text-glow 1s ease-in-out infinite alternate
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
          background-color: rgba(255, 222, 135, 1)
          // opacity: 0.5
          position: absolute
          border-radius: 50%
          top: 0
          left: 0
          cursor: pointer
          box-shadow: 1px 0px 8px black
          z-index: 2
          p
            color: white
            font-family: "JustSans"
            font-weight: bold
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
          opacity: 0.2
          border-radius: 40px
          left: 0

  #client-list-section
    background-color: black
    position: relative
    .light-background
      background: $orange
      opacity: 0.15
      height: 100%
      width: 100%
      position: absolute
    .section-container
      padding-top: 80px
      padding-bottom: 40px
      position: relative
      .client-logo-container
        position: relative
        margin-bottom: 40px
        img
          display: block
          width: 400px
          margin: 0 auto
          position: relative
          z-index: 1
          // mix-blend-mode: difference
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
          z-index: 1
          mix-blend-mode: overlay
          filter: drop-shadow(0px 0px 4px black)
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
  .client-list-image-container
    img
      width: 100%
  .project-list-banner-container
    .project-banner-item
      margin-bottom: 20px
      a
        display: block
        img
          width: 100%


</style>