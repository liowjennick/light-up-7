<template>
  <div id="work">
    <div
      id="light-bulb-section"
    >
      <div class="light-bulb-container">
        <img src="../../assets/images/work/light-bulb.png" />
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
              <p>></p>
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

#work
  #light-bulb-section
    background-color: black
    .light-bulb-container
      display: flex
      align-items: flex-start
      justify-content: center
      img
        display: block
        width: 10%
    .page-title
      color: none
      text-align: center
      font-family: "JustSans"
      text-shadow: 0 0 3px white
      font-size: 80px
    .sliding-button-container
      padding: 10px
      border: 1px solid $orange
      border-radius: 50px
      margin-top: 10px
      width: 300px
      display: block
      margin: 10px auto
      .sliding-button
        background-color: $orange
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
          background-color: #ffde87
          // opacity: 0.5
          position: absolute
          border-radius: 50%
          top: 0
          left: 0
          cursor: pointer
          box-shadow: 2px 0px 4px black
          z-index: 2
          p
            color: black
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
</style>