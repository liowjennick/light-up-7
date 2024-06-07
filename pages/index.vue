<template>
  <div id="homepage">
    <!-- BANNER SECTION -->
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="home-banner-section"
    >
      <div class="flex-row">
        <img
          src="../assets/images/home/banner-bulb.png"
          class="bulb"
        />
        <p class="font-white font-24 just-sans">A creative solutions agency lighting up the Asia-Pacific region, one bright idea at a time.</p>
      </div>
    </div>

    <!-- YELLOW OUTLINE TEXT SECTION -->
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="yellow-outline-first-banner-container"
    >
      <div class="flex-row">
        <img
          class="yellow-outline-text"
          src="../assets/images/home/illuminate-brands-yellow-outline.png"
        />
        <p class="font-white font-18 just-sans">Make the best parts of your business <b>shine bright</b> with our strategy, branding and growth services.</p>
      </div>
    </div>

    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="yellow-outline-second-banner-container"
    >
      <div class="flex-row">
        <img
          class="yellow-outline-text"
          src="../assets/images/home/spark-creativity-yellow-outline.png"
        />
        <!-- <p class="font-white">{{ scrollText }}</p> -->
        <p class="font-white font-18 just-sans">We specialise in bringing <b>ideas to life</b>, spanning from design and video production to event planning, all to <b>ignite transformative branding experiences.</b></p>
      </div>
    </div>

    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="yellow-outline-third-banner-container"
    >
      <div class="flex-row">
        <img
          class="yellow-outline-text"
          src="../assets/images/home/visible-marketing-yellow-outline.png"
        />
        <!-- <p class="font-white">{{ scrollText }}</p> -->
        <p class="font-white font-18 just-sans">Seeking effective marketing solutions? Look no further! Our custom-made digital strategies <b>deliver results tailored to your audience.</b></p>
      </div>
    </div>

    <!-- OUR SERVICES SECTION -->
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="our-services-section"
    >
      <div class="bullet-container">
        <p class="font-orange font-20 just-sans mb-20">our services</p>
        <div class="services-list-container">
          <div
            class="services-item pb-8 pt-8"
            :key="i"
            v-for="(item, i) in ourServicesItems"
            @mouseover="onMouseOverServiceItem(i)"
            @mouseleave="onMouseLeaveServiceItem(i)"
            :class="{ active: ourServicesItemsHighlightedSection === i }"
          >
            <p class="bullet font-white font-18 just-sans">0{{ i + 1 }}.</p>
            <p class="text font-white font-18 just-sans">{{ item }}</p>
          </div>
        </div>
      </div>

      <div class="bulb-container">
        <div class="bulb-image-container">
          <img
            class="bulb-base"
            src="../assets/images/home/our-services-bulb-base.png"
          />

          <div
            class="bulb-image-text-container"
            v-for="(item, i) in ourServicesItems"
            :key="i"
            :data-bulb-number="i"
            @mouseover="onMouseOverServiceItem(i)"
            @mouseleave="onMouseLeaveServiceItem(i)"
            :class="{ active: ourServicesItemsHighlightedSection === i }"
          >
            <img
              class="bulb"
              src="../assets/images/home/our-services-bulb.png"
            />
            <img
              class="bulb-glow"
              src="../assets/images/home/our-services-bulb-glow.png"
            />
            <p class="font-white bulb-text just-sans">{{ item }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- DISTINGUISHED CLIENTS SECTION -->
    <div id="distinguished-clients-section">
      <img
        class="plug-to-right"
        src="../assets/images/home/client-section-plug-to-right.png"
      />
      <div class="section-container mb-20">
        <p class="font-orange font-20 just-sans mb-10">our distinguished clients:</p>
        <p class="font-white font-30 just-sans">brand growth specialists delivering quality without compromise.</p>
      </div>

      <div class="clients-list-container mb-40">
        <div class="section-container">
          <div class="client-item">
            <img
              class="client-logo"
              src="../assets/images/home/client-logo-unilever.png"
            />
          </div>
          <div class="client-item">
            <img
              class="client-logo"
              src="../assets/images/home/client-logo-hotlink.png"
            />
          </div>

          <div class="client-item">
            <img
              class="client-logo"
              src="../assets/images/home/client-logo-bank-negara.png"
            />
          </div>
          <div class="client-item">
            <img
              class="client-logo"
              src="../assets/images/home/client-logo-petronas.png"
            />
          </div>
          <div class="client-item">
            <img
              class="client-logo"
              src="../assets/images/home/client-logo-7-eleven.png"
            />
          </div>
        </div>
      </div>

      <div class="cta-button-row">
        <div class="cta-button">
          <p class="font-orange font-18">view more</p>
        </div>
      </div>

      <img
        class="plug-to-left"
        src="../assets/images/home/client-section-plug-to-left.png"
      />

      <div class="section-container mb-20">
        <p class="font-orange font-20 just-sans mb-10">our prestigious achievements:</p>
        <p class="font-white font-30 just-sans">awards and recognition by</p>
      </div>

      <div class="award-list-container mb-40">
        <div class="section-container">
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-sme-100.png"
            />
          </div>
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-the-bizz-hybrid.png"
            />
          </div>

          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/client-logo-bank-negara.png"
            />
          </div>
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-agency-of-the-year-2022.png"
            />
          </div>
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-google-partner.png"
            />
          </div>
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-trusted-malaysia.png"
            />
          </div>
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-products-nation.png"
            />
          </div>
          <div class="award-item">
            <img
              class="client-logo"
              src="../assets/images/home/award-best-in-malaysia.png"
            />
          </div>
        </div>
      </div>

      <img
        class="plug-to-right"
        src="../assets/images/home/client-section-plug-to-right.png"
      />
    </div>

    <!-- LIGHT UP YOUR IDEAS SECTION -->
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="light-up-your-ideas-section"
    >
      <div class="flex-row">
        <div class="text-container">
          <p class="font-white just-sans font-60"><b>light up</b> your</p>
        </div>
        <div class="large-bulb-container">
          <div class="large-bulb-image-container">
            <div class="large-bulb-image">
              <img
                class="large-bulb"
                src="../assets/images/home/light-up-your-idea-large-bulb.png"
              />

              <img
                class="large-bulb-glow"
                src="../assets/images/home/light-up-your-idea-large-bulb-glow.png"
              />
            </div>
            <div class="large-bulb-pull-image">
              <img src="../assets/images/home/light-up-your-idea-large-bulb-pull.png" />
            </div>
          </div>
          <div class="bulb-text-container">
            <p class="font-white just-sans font-60"><b>ideas</b></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// OUR SERVICES
const ourServicesItems = ["Growth Strategy", "Digital Marketing", "Video & Photography", "Branding & Creative Design", "Websites & Apps", "Event Management", "Media Buying"];
const ourServicesItemsHighlightedSection = ref(-1);

const onMouseOverServiceItem = (index: Number) => {
  ourServicesItemsHighlightedSection.value = index;
  console.log(ourServicesItemsHighlightedSection.value);
};

const onMouseLeaveServiceItem = (index: Number) => {
  if (ourServicesItemsHighlightedSection !== -1) {
    ourServicesItemsHighlightedSection.value = -1;
  }
};

useHead({
  title: "Test Home Title",
  meta: [{ name: "description", content: "Amazing" }],
});

onMounted(() => {
  console.log("setup mounted");
  gsap.to("#yellow-outline-first-banner-container .flex-row", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "bounce",
    scrollTrigger: {
      trigger: "#yellow-outline-first-banner-container",
      start: "top top",
      end: "bottom top",
      // pin: true,
      // markers: true,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.to("#yellow-outline-second-banner-container .flex-row", {
    y: 0,
    opacity: 1,
    duration: 1.5,
    ease: "bounce",
    scrollTrigger: {
      trigger: "#yellow-outline-second-banner-container",
      start: "top top",
      end: "bottom top",
      // pin: true,
      markers: true,
    },
  });

  gsap.from(".plug-to-right", {
    x: "-50vw",
    duration: 2,
    // ease: "bounce",
    scrollTrigger: {
      trigger: ".plug-to-right",
      start: "top-=200 center",
      end: "top top",
      // markers: true,
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".plug-to-left", {
    x: "100vw",
    duration: 2,
    // ease: "bounce",
    scrollTrigger: {
      trigger: ".plug-to-left",
      start: "top bottom",
      end: "center center",
      // markers: true,
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });
});
</script>

<style lang="sass">
@import "../assets/sass/responsive.sass"
@import "../assets/sass/fonts.sass"

.full-screen-section-container
  height: 100vh
  width: 100vw

.full-screen-center-content
  display: flex
  align-items: center
  justify-content: center
  box-sizing: border-box

.section-container
  padding: 0 80px
  box-sizing: border-box

#home-banner-section
  background-color: black
  .flex-row
    display: flex
    align-items: center
    justify-content: center
    +large-mobile
      display: block
    .bulb
      width: 40%
      +large-mobile
        width: 100%
    p
      width: 30%
      +large-mobile
        width: 100%

#yellow-outline-first-banner-container, #yellow-outline-second-banner-container, #yellow-outline-third-banner-container
  background-color: black
  position: relative
  .flex-row
    display: flex
    align-items: center
    justify-content: center
    opacity: 0
    transform: translateY(-150px)
    // position: absolute
    .yellow-outline-text
      width: 65%
    p
      width: 25%
  // #yellow-outline-first-banner-container
  //   opacity: 0
  //   bottom: -50px
  // #yellow-outline-second-banner-container
  //   opacity: 0
  //   bottom: -50px
  // #yellow-outline-third-banner-container
  //   opacity: 0
  //   bottom: -50px

#our-services-section
  background-color: black
  .bullet-container
    flex: 2
    .services-list-container
      .services-item
        display: flex
        p
          transition: 0.2s all
        &.active
          p
            color: $orange
        .bullet
          padding-right: 20px
        .text
          flex: 1
  .bulb-container
    flex: 3
    transform: translateY(25%)
    .bulb-image-container
      position: relative
      .bulb-base
        width: 100%
      .bulb-image-text-container
        position: absolute
        width: 20%
        &[data-bulb-number="0"]
          top: -3%
          left: -0.5%
        &[data-bulb-number="1"]
          top: -47.5%
          left: 13%
        &[data-bulb-number="2"]
          top: -3%
          left: 26.5%
        &[data-bulb-number="3"]
          top: -47.5%
          left: 40%
        &[data-bulb-number="4"]
          top: -3%
          left: 53.5%
        &[data-bulb-number="5"]
          top: -47.5%
          left: 67%
        &[data-bulb-number="6"]
          top: -3%
          left: 80.5%
        .bulb
          width: 100%
        .bulb-glow
          width: 152%
          position: absolute
          top: -17.5%
          left: -26%
          opacity: 0
          transition: 0.2s opacity
          cursor-pointer-events: none
        p
          text-align: center
          position: absolute
          opacity: 0
          top: 40%
          left: 50%
          transform: translate(-50%, -50%)
          text-shadow: 0px 0px 5px #DC9F41, 0px 0px 5px #DC9F41
          transition: 0.2s all
        &.active
          .bulb-glow
            opacity: 1
          p
            opacity: 1

#distinguished-clients-section
  background-color: black
  .plug-to-right
    width: 90%
  .plug-to-left
    width: 90%
    display: block
    margin-left: auto
  .clients-list-container
    .section-container
      display: flex
      background-color: rgba(255, 255, 255, 0.28)
      .client-item
        flex: 1
        img
          width: 100%
  .cta-button-row
    display: flex
    justify-content: center
    .cta-button
      border: 1px solid $orange
      border-radius: 24px
      font-family: "JustSans"
      text-align: center
      padding: 10px 80px
      display: inline-flex
      cursor: pointer
      transition: 0.2s all
      p
        transition: 0.2s all
      &:hover
        background-color: $orange
        box-shadow: 0 0 20px $orange
        p
          color: white

  .award-list-container
    .section-container
      display: flex
      background-color: rgba(255, 205, 89, 0.25)
      .award-item
        flex: 1
        img
          width: 100%

#light-up-your-ideas-section
  background-color: black
  .flex-row
    display: flex
    align-content: center
    justify-content: flex-end
    .text-container
      flex: 1
      display: flex
      margin-top: 20%
      padding-right: 3%
      // align-content: center
      // justify-content: center
      p
        width: 100%
        text-align: right
    .large-bulb-container
      flex: 1
      position: relative
      height: 100%
      width: 100%
      .large-bulb-image-container
        flex: 1
        display: flex
        flex-direction: column
        position: relative
        .large-bulb-image
          flex: 2
          height: 50vh
          .large-bulb
            height: 50vh
            display: block
            margin: 0 auto
        .large-bulb-glow
          position: absolute
          top: -12%
          left: -8%
          height: 65vh
        .large-bulb-pull-image
          flex: 1
          overflow: hidden
          img
            // width: 20px
            height: 15vh
            display: block
            margin: 0 auto
            transform: translateY(-20%)
            overflow: hidden
            cursor: pointer
            -webkit-user-drag: none
            -khtml-user-drag: none
            -moz-user-drag: none
            -o-user-drag: none
            user-drag: none
      .bulb-text-container
        position: absolute
        top: 20%
        left: 0
        width: 100%
        p
          text-align: center
</style>
