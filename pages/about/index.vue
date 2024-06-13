<template>
  <div id="about-page">
    <div class="full-screen-section-container section-container full-screen-center-content">
      <div class="title-container">
        <h1 class="page-title">about</h1>
        <img class="title-icon image-glow" src="../../assets/images/about/question-mark-glow.png" />
      </div>
    </div>

    <div id="multi-award-section" class="full-screen-section-container">
      <div class="section-container">
        <div class="address-container">
          <p class="font-white font-20 just-sans">Light Up 7 Bags 4 Awards at</p>
          <p class="font-white font-20 just-sans">Prestigious Agency of the Year</p>
          <p class="font-white font-20 just-sans">and MARKIES Awards 2022</p>
        </div>
      </div>
    </div>

    <div id="team-section" class="full-screen-section-container">
      <div class="team-image-container">
        <!-- <img src="../../assets/images/about/about-team.png" /> -->
      </div>
      <div class="team-caption-container section-container">
        <p class="font-white font-16 just-sans">At our agency, we shed light on your brand's potential, guiding you towards success with our expertise, innovation and unparalleled creativity.</p>
      </div>
    </div>

    <div id="journey-section" class="full-screen-section-container">
      <div class="section-container">
        <div class="yellow-background" />

        <img class="journey-start-bulb" src="../../assets/images/about/about-small-bulb.png" />


        <!-- <svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="none"
            stroke="red"
            d="M 10,10 h 10
              m  0,10 h 10
              m  0,10 h 10
              M 40,20 h 10
              m  0,10 h 10
              m  0,10 h 10
              m  0,10 h 10
              M 50,50 h 10
              m-20,10 h 10
              m-20,10 h 10
              m-20,10 h 10" />

          <path
            fill="none"
            stroke="green"
            d="M 50,0
              L 50, 100
              C 30,110 50,100 45,108
              M 50.5, 100
              L 0, 100
            " />
        </svg> -->
        <!-- <svg style="display: block; margin: 0 auto; margin-top: -30px; padding-right: 38.5px" height="40" width="40" xmlns="http://www.w3.org/2000/svg">
          <path fill="none" stroke="white" stroke-width="2" d="M40,20 a20,20 0 0,1 -20,20" />
        </svg> -->

        <div id="first-line" style="height: 200px" />

        <div class="text-container first">
          <p class="font-white font-16 just-sans">Established in 2014, Light Up 7 grew out of the emergent need that the world was headed towards a new era. Everything was getting digitised. Fast.</p>
        </div>
        <div class="text-container second">
          <p class="font-white font-16 just-sans mb-20">Since then, brands everywhere have embraced this change but then another challenge emerged. Technology and online spaces can seem to change and evolve overnight.</p>
          <p class="font-white font-16 just-sans">They realise the importance of a strong partner to be part of this dynamic, sometimes fickle, landscape.</p>
        </div>
        <div class="text-container third">
          <p class="font-white font-16 just-sans mb-20">Here's where we've cut our teeth and become an industry leader.</p>
          <p class="font-white font-16 just-sans">Having worked with leading brands across multiple industries, Light Up 7 has come a long way in honing our expertise in being a provider of creative solutions. Our team of strategists, marketers, designers, video specialists and event managers bring their years of experience to collaborate with client partners, ensuring successes and wins on each project.</p>
        </div>
        <div class="text-container fourth">
          <p class="font-white font-16 just-sans">Our partnerships have allowed us to create gold-standard experiences that have driven substantial revenue and growth for some of the most beloved and recognisable brands in the APAC region.</p>
        </div>

        <img class="journey-end-bulb" src="../../assets/images/about/about-small-bulb.png" />

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable, MotionPathPlugin);

onMounted(() => {
  gsap.to("#first-line", {
    duration: 2,
    repeat: 5,
    yoyo: true,
    motionPath: [{x: 100, y: 100}, {x: 100, y: 100}, {x: 100, y: 300}],
  })
})

</script>

<style lang="sass" scoped>
@import "../../assets/sass/fonts"
@import "../../assets/sass/responsive"
@import "../../assets/sass/layout"
@import "../../assets/sass/animations"

#about-page
  background-color: black
  .title-container
    position: relative
    .page-title
      color: none
      text-align: center
      font-family: "JustSans"
      text-shadow: 0 0 5px white, 0 0 5px white, 0 0 20px white
      font-size: 80px
      --webkit-animation: text-glow 1s ease-in-out infinite alternate
      animation: text-glow 1s ease-in-out infinite alternate
    .title-icon
      position: absolute
      width: 250px
      top: -30%
      right: -50%

  #multi-award-section
    background-image: url("../../assets/images/about/multi-award-winning-agency.png")
    background-size: 100%
    background-repeat: no-repeat
    background-position: center center
    +desktop
      background-size: auto 100%
    .section-container
      position: relative
      height: 100%
      width: 100%
      .address-container
        position: absolute
        bottom: 40px
        left: 40px

  #team-section
    .team-image-container
      background-image: url("../../assets/images/about/about-team.png")
      background-size: 100%
      margin-top: 10%
      background-repeat: no-repeat
      background-position: center center
      height: 80%
      +desktop
        background-size: auto 100%
    .team-caption-container
      text-align: center
      max-width: 850px
      padding-top: 30px
      padding-bottom: 10px
      display: block
      margin: 0 auto

  #journey-section
    +desktop
      height: auto
    .section-container
      position: relative
      .journey-start-bulb
        width: 50px
        display: block
        margin: 0 auto
      .journey-end-bulb
        width: 50px
        display: block
        margin: 0 auto
      .yellow-background
        // position: absolute
        // top: 0
        // left: 0
        // background-color: orange
        // height: 0%
        // width: 100%
        // animation: journey-yellow-background 3s ease-in 1 forwards
        // mix-blend-mode: multiply
      .text-container
        max-width: 550px
        padding: 20px
        +desktop
          display: block
          margin: 0 auto
        p
          text-align: center

@keyframes journey-yellow-background
  0%
    height: 0%
  100%
    height: 100%
</style>
