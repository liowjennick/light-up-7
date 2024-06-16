<template>
  <div id="homepage">
    <video
      id="intro-video"
      autoplay
      muted
    >
      <source
        src="../assets/images/home/light-up-7-intro-video.mp4"
        type="video/mp4"
      />
    </video>

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
        <p class="font-white font-16 just-sans">A creative solutions agency lighting up the Asia-Pacific region, one bright idea at a time.</p>
      </div>
    </div>
    <!-- YELLOW OUTLINE TEXT SECTION -->
    <div id="outline-container">
      <!-- FIRST -->
      <div
        class="full-screen-section-container section-container yellow-outline-banner-trigger"
        id="yellow-outline-first-banner-trigger"
      >
        <div class="full-screen-center-content">
          <div class="flex-row">
            <div class="yellow-outline-text-container">
              <img
                class="background"
                src="../assets/images/home/quarter-circle-black-background.png"
              />
              <img
                class="floating-shapes diamond"
                src="../assets/images/home/double-diamond.png"
              />
              <img
                class="yellow-outline-text"
                src="../assets/images/home/illuminate-brands-yellow-outline.png"
              />
            </div>
            <div class="text-container">
              <p class="font-white font-18 just-sans">Make the best parts of your business <b>shine bright</b> with our strategy, branding and growth services.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- SECOND -->
      <div
        class="full-screen-section-container section-container yellow-outline-banner-trigger"
        id="yellow-outline-second-banner-trigger"
      >
        <div class="full-screen-center-content">
          <div class="flex-row">
            <div class="yellow-outline-text-container">
              <img
                class="background"
                src="../assets/images/home/star-black-background.png"
              />
              <img
                class="floating-shapes star"
                src="../assets/images/home/double-star.png"
              />
              <img
                class="yellow-outline-text"
                src="../assets/images/home/spark-creativity-yellow-outline.png"
              />
            </div>
            <div class="text-container">
              <p class="font-white font-18 just-sans">Seeking effective marketing solutions? Look no further! Our custom-made digital strategies <b>deliver results tailored to your audience.</b></p>
            </div>
          </div>
        </div>
      </div>

      <!-- THIRD -->
      <div
        class="full-screen-section-container section-container yellow-outline-banner-trigger"
        id="yellow-outline-third-banner-trigger"
      >
        <div class="full-screen-center-content">
          <div class="flex-row">
            <div class="yellow-outline-text-container">
              <img
                class="background"
                src="../assets/images/home/circle-black-background.png"
              />
              <img
                class="floating-shapes circle"
                src="../assets/images/home/double-circle.png"
              />
              <img
                class="yellow-outline-text"
                src="../assets/images/home/visible-marketing-yellow-outline.png"
              />
            </div>
            <div class="text-container">
              <p class="font-white font-18 just-sans">Make the best parts of your business <b>shine bright</b> with our strategy, branding and growth services.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="full-screen-section-container section-container full-screen-center-content"
      style="background-color: black"
    ></div>

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

          <img
            class="bulb-base-background image-glow"
            src="../assets/images/home/our-services-bulb-background.png"
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
        class="plug-to-right one"
        src="../assets/images/home/client-section-plug-to-right.png"
      />
      <div class="section-container mb-20">
        <p class="font-orange font-20 just-sans mb-10">our distinguished clients:</p>
        <p class="font-white font-30 just-sans mb-40">brand growth specialists delivering quality without compromise.</p>
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
        <p class="font-white font-30 just-sans mb-40">awards and recognition by</p>
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
        class="plug-to-right two"
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
          <p class="font-white just-sans font-46"><b>light up</b> your</p>
        </div>

        <div class="bulb-container">
          <img
            class="large-bulb"
            src="../assets/images/home/light-up-your-idea-large-bulb.png"
          />
          <img
            class="large-bulb-glow"
            :class="{ active: lightUpYourIdeasBulbActive }"
            src="../assets/images/home/light-up-your-idea-large-bulb-glow.png"
          />
          <div class="large-bulb-pull-image">
            <img src="../assets/images/home/light-up-your-idea-large-bulb-pull.png" />
          </div>
          <div class="pull-me-text-container">
            <img src="../assets/images/home/arrow-down.png" />
            <p class="font-white just-sans">pull me</p>
          </div>
          <div class="bulb-text-container">
            <p
              class="font-white just-sans font-46"
              :class="{ active: lightUpYourIdeasBulbActive }"
            >
              <b>ideas</b>
            </p>

            <NuxtLink
              to="#"
              class="cta-circle"
              :class="{ active: lightUpYourIdeasBulbActive }"
            >
              <div class="arrow-container">
                <img src="../assets/images/home/arrow-diagonal.png" />
              </div>
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

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

// YELLOW OUTLINE SCROLL
var firstOutlineTimeline
var secondOutlineTimeline
var thirdOutlineTimeline

const yellowOutlineIndex = ref(0);
watch(yellowOutlineIndex, (newIndex:Number, oldIndex:Number) => {
  if (newIndex !== oldIndex) {
    const enterDuration = 0.6;
    const exitDuration = 0.2;
    switch (newIndex) {
      case 1:
        firstOutlineTimeline.play()
        secondOutlineTimeline.timeScale(2).reverse()
        thirdOutlineTimeline.timeScale(2).reverse()
        break;
      case 2:
        firstOutlineTimeline.timeScale(2).reverse()
        secondOutlineTimeline.play()
        thirdOutlineTimeline.timeScale(2).reverse()
        break;
      case 3:
        firstOutlineTimeline.timeScale(2).reverse()
        secondOutlineTimeline.timeScale(2).reverse()
        thirdOutlineTimeline.play()
        break;
      default:
        break;
    }
  }
});

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

const lightUpYourIdeasBulbActive = ref(false);
const bulbInitialY = ref(0);

useHead({
  title: "Test Home Title",
  meta: [{ name: "description", content: "Amazing" }],
});

onMounted(() => {
  console.log("setup mounted");

  // OUTLINE SECTION SCROLL TRIGGER
  ScrollTrigger.create({
    trigger: "#outline-container",
    start: "top top",
    end: "bottom+=2000 bottom",
    pin: true,
    onUpdate: (self) => {
      console.log(self.progress);

      if (self.progress > 0.66) {
        yellowOutlineIndex.value = 3;
      } else if (self.progress > 0.33) {
        yellowOutlineIndex.value = 2;
      } else {
        yellowOutlineIndex.value = 1;
      }
    },
  });

  // OUTLINE SECTION TIMELINE
  firstOutlineTimeline = gsap.timeline()
  firstOutlineTimeline
    .addLabel("first")
    .to("#yellow-outline-first-banner-trigger .background", {
      opacity: 1,
      duration: 0.8,
      scale: 1
    }, "first")
    .to("#yellow-outline-first-banner-trigger .floating-shapes", {
      scale: 1,
      duration: 0.8,
      delay: 0.4
    }, "first")
    .to("#yellow-outline-first-banner-trigger .yellow-outline-text", {
      y: 0,
      duration: 0.8,
      opacity: 1,
      delay: 0.2
    }, "first")
    .to("#yellow-outline-first-banner-trigger .text-container", {
      y: 0,
      duration: 0.8,
      opacity: 1,
      delay: 0.2
    }, "first")

  secondOutlineTimeline = gsap.timeline()
  secondOutlineTimeline
    .addLabel("second")
    .to("#yellow-outline-second-banner-trigger .background", {
      opacity: 1,
      duration: 0.8,
      scale: 1
    }, "second")
    .to("#yellow-outline-second-banner-trigger .floating-shapes", {
      scale: 1,
      duration: 0.8,
      delay: 0.4
    }, "second")
    .to("#yellow-outline-second-banner-trigger .yellow-outline-text", {
      y: 0,
      duration: 0.8,
      opacity: 1,
      delay: 0.2
    }, "second")
    .to("#yellow-outline-second-banner-trigger .text-container", {
      y: 0,
      duration: 0.8,
      opacity: 1,
      delay: 0.2
    }, "second").pause()

  thirdOutlineTimeline = gsap.timeline()
  thirdOutlineTimeline
    .addLabel("third")
    .to("#yellow-outline-third-banner-trigger .background", {
      opacity: 1,
      duration: 0.8,
      scale: 1
    }, "third")
    .to("#yellow-outline-third-banner-trigger .floating-shapes", {
      scale: 1,
      duration: 0.8,
      delay: 0.4
    }, "third")
    .to("#yellow-outline-third-banner-trigger .yellow-outline-text", {
      y: 0,
      duration: 0.8,
      opacity: 1,
      delay: 0.2
    }, "third")
    .to("#yellow-outline-third-banner-trigger .text-container", {
      y: 0,
      duration: 0.8,
      opacity: 1,
      delay: 0.2
    }, "third").pause()

  // INTRO VIDEO END
  document.getElementById("intro-video")?.addEventListener(
    "ended",
    () => {
      console.log("Video ended");
      gsap.to("#intro-video", {
        opacity: 0,
        onComplete: () => {
          document.getElementById("intro-video").style.display = "none";
        },
      });
      gsap.to("#home-banner-section .bulb", {
        opacity: 0.8,
        duration: 1,
        ease: "power2",
        delay: 1,
        onComplete: () => {
          document.querySelector("#home-banner-section .bulb")?.classList.add("image-glow");
        },
      });
      gsap.to("#home-banner-section p", {
        opacity: 1,
        duration: 1,
        ease: "power2",
        delay: 1,
      });
    },
    false
  );

  gsap.from(".plug-to-right.one", {
    x: "-50vw",
    duration: 2,
    scrollTrigger: {
      trigger: ".plug-to-right.one",
      start: "top-=200 center",
      end: "top top",
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
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.from(".plug-to-right.two", {
    x: "-50vw",
    duration: 2,
    scrollTrigger: {
      trigger: ".plug-to-right.two",
      start: "top-=200 center",
      end: "top top",
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });

  // PULL ARROW ANIMATE
  gsap.to(".pull-me-text-container img", {
    y: 10,
    duration: 1,
    yoyo: true,
    repeat: -1,
  });

  // const bulbInitialY = document.querySelector(".large-bulb-pull-image")?.getBoundingClientRect().y
  const bulbMaxDragY = 60;
  const bulbClickAudio = new Audio("https://assets.codepen.io/605876/click.mp3");

  Draggable.create(".large-bulb-pull-image img", {
    type: "y",
    inertia: true,
    dragResistance: 0.5,
    bounds: { minY: 0, maxY: bulbMaxDragY },
    overshootTolerance: 1,
    onDragStart: function (e) {
      bulbInitialY.value = this.target.getBoundingClientRect().top;
    },
    onDragEnd: function (e) {
      if (this.target.getBoundingClientRect().top - bulbInitialY.value > 60 * 0.9) {
        lightUpYourIdeasBulbActive.value = !lightUpYourIdeasBulbActive.value;
        bulbClickAudio.play();
      }

      gsap.to(this.target, {
        y: 0,
        duration: 0.1,
      });
    },
  });
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/responsive.sass"
@import "../assets/sass/fonts.sass"
@import "../assets/sass/animations.sass"
@import "../assets/sass/layout.sass"

#homepage
  background-color: black

#intro-video
  width: 100vw
  height: 100vh
  background: black
  position: fixed
  z-index: 100

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
      opacity: 0.2
      transform: translateX(10px)
      +large-mobile
        width: 100%
        transform: translateX(0px)
    p
      width: 30%
      transform: translateX(-10px)
      opacity: 0
      +large-mobile
        width: 100%
        transform: translateX(0px)
        text-align: center
        font-size: 20px
        margin-top: -40px

#outline-container
  position: relative
  height: 100vh
  background-color: black
  .yellow-outline-banner-trigger
    height: 100vh
    display: flex
    position: absolute
  .flex-row
    display: flex
    // opacity: 0
    // transform: translateY(-200px)
    +desktop
      display: block
    .yellow-outline-text-container
      position: relative
      flex: 2
      .background
        width: 60%
        position: absolute
        top: -15%
        left: 50%
        transform: translateX(-50%) scale(0)
        transform-origin: center center
        z-index: 0
        opacity: 0
      .floating-shapes
        position: absolute
        width: 12%
        top: 0
        left: 27%
        transform: scale(0)
        transform-origin: center center
      .yellow-outline-text
        z-index: 2
        width: 100%
        position: relative
        transform: translateY(-200px)
        opacity: 0
    .text-container
      flex: 1
      display: flex
      align-items: center
      justify-content: center
      transform: translateY(-200px)
      opacity: 0
      +desktop
        margin-top: 25px
      p
        +desktop
          font-size: 22px
          text-align: center

#our-services-section
  background-color: black
  +desktop
    flex-direction: column-reverse
  .bullet-container
    flex: 2
    +desktop
      // flex: 1
      width: 100%
      padding-top: 20px
    p
      +desktop
        font-size: 20px
    .services-list-container
      .services-item
        display: flex
        p
          transition: 0.2s all
          +desktop
            font-size: 20px
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
    +desktop
      flex: 1
      transform: translateY(0)
    .bulb-image-container
      position: relative
      .bulb-base
        width: 100%
        position: relative
        z-index: 1
      .bulb-base-background
        position: absolute
        width: 100%
        left: 50%
        top: -60%
        z-index: 0
        transform: translateX(-50%)
      .bulb-image-text-container
        position: absolute
        width: 20%
        z-index: 2
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
    padding-top: 80px
    padding-bottom: 80px
  .plug-to-left
    width: 90%
    padding-top: 80px
    padding-bottom: 80px
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
  +desktop
    padding-top: 60px
    padding-bottom: 180px
  .flex-row
    display: flex
    +desktop
      display: block
    .text-container
      position: relative
      height: 50vh
      width: 40vw
      +desktop
        height: initial
        width: 100%
      p
        position: absolute
        top: 35%
        right: 20px
        transform: translate(0, -50%)
        width: 100%
        text-align: right
        +desktop
          position: initial
          text-align: center
          font-size: 50px
    .bulb-container
      position: relative
      height: 50vh
      width: 20vw
      +desktop
        max-width: 400px
        width: 100%
        height: initial
      .large-bulb
        width: 100%
      .bulb-text-container
        position: absolute
        top: 35%
        left: 50%
        transform: translate(-50%, -50%)
        opacity: 1
        transition: 0.4s all
        +desktop
          top: 30%
        p
          &.active
            // opacity: 0
          +desktop
            font-size: 50px
      .large-bulb-pull-image
        position: absolute
        left: 50%
        transform: translateX(-50%)
        overflow: hidden
        img
          width: 20px
          transform: translateY(-50%)
      .pull-me-text-container
        display: flex
        position: absolute
        align-items: center
        justify-content: center
        right: -20%
        +desktop
          right: 0
        img
          width: 20px
          transform: translateY(0)
        p
          margin-left: 10px
          font-size: 20px
      .large-bulb-glow
        opacity: 0
        position: absolute
        width: 142%
        top: -16%
        left: -21%
        transition: 0.1s all
        &.active
          opacity: 1
        +desktop
          top: -14.8%
          width: 142%
      .cta-circle
        background-color: #DC9F41
        border-radius: 50%
        width: 80px
        height: 80px
        // display: flex
        align-items: center
        justify-content: center
        position: absolute
        left: 50%
        top: 120%
        transform: translateX(-50%)
        display: none
        &:hover
          box-shadow: 0 0 8px yellow
        &.active
          display: flex
        .arrow-container
          img
            width: 50px
            height: 50px
</style>
