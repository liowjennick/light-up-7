<template>
  <div id="services">
    <!-- <div :style="{
      top: mouseMoveAttributes.y,
      left: mouseMoveAttributes.x,
      transform: `translate(-50%, -50%) skew(${mouseMoveAttributes.skewed}deg, ${mouseMoveAttributes.skewed}deg) scaleX(${mouseMoveAttributes.scaleX}) scaleY(${mouseMoveAttributes.scaleY})`
    }" class="cursor-follow">
      <p>Text here</p>
    </div> -->
    <!-- Banner -->
    <div class="full-screen-section-container section-container full-screen-center-content"
      id="services-banner-section">
      <div class="page-title-container">
        <img alt="Services Title" src="../../assets/images/services/services-title.png" />
      </div>

      <div class="yellow-shadow-container" />

      <div class="yellow-shadow-container-bottom">
        <div class="icon-container">
          <img alt="Icon Group" src="../../assets/images/services/icons/icon-group.png" />
        </div>
      </div>

      <!-- <div class="arrow-down-container">
        <LottieAnimation
          class="arrow-down"
          autoplay
          loop
          :animation-data="ArrowDownJSON"
        />
      </div> -->
    </div>
    <!-- Services List -->
    <div class="full-screen-center-content hover-services" style="flex-direction: column">
      <a v-for="(item, i) in servicesItem" class="divider-parent" :key="i" :id="`item-${i}`"
        style="width: 100%; text-decoration: none" :href="`/services/${item.slug}`"
        @mouseenter="() => setActiveFollowCircleIndex(i)" @mouseleave="() => setActiveFollowCircleIndex(-1)">
        <div class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px">
          <div style="width: 10%; z-index: 1" class="full-screen-center-content">
            <img :alt="`${item.slug} Icon`" class="item-icon-orange" v-if="activeCircleFollowIndex !== i"
              :src="`/images/services/list-icons/icons/orange/${item.slug}-orange.png`" />
            <LottieAnimation autoplay
            loop class="item-icon" :animation-data="item.lottie" />
          </div>
          <div class="full-screen-start-center" style="z-index: 1; flex-direction: column; flex: 1; color: white">
            <h2>{{ item.title }}</h2>
            <p>{{ item.description }}</p>
          </div>
          <div class="cta-btn-parent full-screen-center-content" :class="{ active: activeCircleFollowIndex === i }"
            :id="`circle-mouse-follow-${i}`">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img :src="arrowUpRight" alt="Arrow up right" />
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import arrowUpRight from "@/assets/svg/arrow-up-right.svg";
import Growth from "@/assets/images/services/lottie/growth-strategy-hover.json"
import Digital from "@/assets/images/services/lottie/digital-marketing-hover.json"
import Media from "@/assets/images/services/lottie/media-buying-hover.json"
import Branding from "@/assets/images/services/lottie/branding-creative-hover.json"
import Website from "@/assets/images/services/lottie/website-apps-hover.json"
import Video from "@/assets/images/services/lottie/video-photography-hover.json"
import Event from "@/assets/images/services/lottie/event-management-hover.json"
import { ScrollTrigger, ScrollToPlugin, Draggable } from "gsap/all";
import { LottieAnimation } from "lottie-web-vue";
import ArrowDownJSON from "@/assets/images/home/arrow-down-lottie.json";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

useHead({
  title: "Our Services | Light Up 7",
  meta: [{ name: "description", content: "We offer creative, production and marketing services for your brand to shine bright. View our services as a brand activation and creative agency in Malaysia." },
    {name: "keywords", content: "creative agency malaysia"}
  ],
});

const activeCircleFollowIndex = ref(-1);

const setActiveFollowCircleIndex = (index: number) => {
  activeCircleFollowIndex.value = index;
  console.log(index);
};

const servicesItem = ref([
  {
    title: "Growth Strategy",
    description: "We ignite your brand’s potential with strategic plans designed to illuminate your path to growth and success.",
    slug: "growth-strategy",
    lottie: Growth
  },
  {
    title: "Digital Marketing",
    description: "Spark meaningful connections with tailored digital strategies that keep your brand ahead in the ever-changing online landscape.",
    slug: "digital-marketing",
    lottie: Digital
  },
  {
    title: "Video & Photography",
    description: "Illuminate your brand’s story with stunning visuals and compelling videos that resonate with your audience.",
    slug: "video-photography",
    lottie: Video
  },
  {
    title: "Branding & Creative Design",
    description: "Transform your brand into a beacon of creativity with bold designs and innovative solutions that leave a lasting impression.",
    slug: "branding-creative",
    lottie: Branding
  },
  {
    title: "Websites & Apps",
    description: "Shine brighter online with sleek, user-friendly websites and apps that captivate and engage seamlessly.",
    slug: "website-apps",
    lottie: Website
  },
  {
    title: "Event & Activations",
    description: "Spark unforgettable experiences with dynamic events and activations that bring your brand’s vision to life and connect with audiences on a deeper level.",
    slug: "event-and-activations",
    lottie: Event
  },
  {
    title: "Performance Marketing",
    description: "Accelerate your brand’s growth with data-driven strategies designed to maximize ROI and deliver measurable results across every campaign.",
    slug: "performance-marketing",
    lottie: Media
  },
]);

// #circle-mouse-follow-1

// const mouseMoveAttributes = ref({
//   x: 0,
//   y: 0,
//   scaleX: 1,
//   scaleY: 1,
//   skewed: 0,
// });

const mousePosition = ref({
  x: 0,
  y: 0,
});

const angle = (cx: number, cy: number, ex: number, ey: number) => {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  return theta;
};
const angle360 = (cx: number, cy: number, ex: number, ey: number) => {
  var theta = angle(cx, cy, ex, ey); // range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
};

const mouseMoveTimer = () => {
  setTimeout(() => {
    const mouseX = mousePosition.value.x;
    const mouseY = mousePosition.value.y;

    servicesItem.value.map((item, i) => {
      if (activeCircleFollowIndex.value === i) {
        const xOffset = document.querySelector(".section-container")?.getBoundingClientRect().right || 0;
        const yOffset = document.querySelector(`#item-${i}`)?.getBoundingClientRect().bottom || 0;

        const currentX = document.querySelector(`#circle-mouse-follow-${i}`)?.getBoundingClientRect().right || 0;
        const currentY = document.querySelector(`#circle-mouse-follow-${i}`)?.getBoundingClientRect().bottom || 0;

        let destinationX = mouseX - xOffset + 90;
        let destinationY = mouseY - yOffset + 70;

        const minX = 0 - 210;
        const maxX = 0 + 70;
        const minY = 0 - 70;
        const maxY = 0 + 70;

        if (destinationX < minX) {
          destinationX = minX;
        }

        if (destinationX > maxX) {
          destinationX = maxX;
        }

        if (destinationY < minY) {
          destinationY = minY;
        }

        if (destinationY > maxY) {
          destinationY = maxY;
        }

        // TODO REMOVE HARD
        const differenceX = Math.abs(mouseX - currentX + 60);
        const differenceY = Math.abs(currentY - mouseY);

        gsap.to(`#circle-mouse-follow-${i}`, {
          x: destinationX,
          y: destinationY,
          scaleX: Math.min(1 + differenceX / 300, 1.4),
          scaleY: Math.min(1 + differenceY / 200, 1.4),
          duration: 0.1,
        });
      } else {
        gsap.to(`#circle-mouse-follow-${i}`, {
          x: 0,
          y: 0,
          scaleX: 1,
          scaleY: 1,
          duration: 0.2,
        });
      }
    });

    mouseMoveTimer();
  }, 100);
};

const onMouseMoveFunction = (e: MouseEvent) => {
  const pageX = e.clientX;
  const pageY = e.clientY;

  mousePosition.value = {
    x: pageX,
    y: pageY,
  };
};

onMounted(() => {
  gsap.to(".icon-container", {
    bottom: "40%",
    scrollTrigger: {
      trigger: "#services-banner-section",
      start: "top top",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });

  gsap.to([".yellow-shadow-container", ".yellow-shadow-container-bottom"], {
    y: -150,
    scrollTrigger: {
      trigger: "#services-banner-section",
      start: "center-=200 top",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });

  document.addEventListener("mousemove", onMouseMoveFunction);
  mouseMoveTimer();
});
</script>

<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"

#services
  background: black
.hover-services
  .divider-parent
      text-decoration: none
      overflow: hidden
      &:hover
        background-color: #d8a54b
        .service-item
          path[fill="#d8a54b"]
            fill: white
          path[stroke="#d8a54b"]
            stroke: white
        .item-icon
          display: initial
          position: absolute
          // .cta-btn-parent
          //   background-color: black
          //   transform: translate(-75%, 50%)
          //   .hover-text
          //     visibility: visible
          //     color: $orange
          //   .cta-btn-child
          //     transform: translate(115%, -145%)
      .divider-child
        border-top: 1px solid #ffffff40
      .service-item
        padding: 20px 40px
        +large-mobile
          padding: 0
        .cta-btn-parent
          position: relative
          width: 70px
          height: 70px
          border-radius: 100%
          background-color: #d8a54b
          transition: all .2s linear
          +large-mobile
            display: none
          &.active
            background-color: black
            .hover-text
              visibility: visible
              color: $orange
            .cta-btn-child
              display: none
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
#services-banner-section
  position: relative
  .icon-list
    position: absolute
    display: flex
    width: 80%
    z-index: 3
    bottom: 15%
    .icon-container
      img
        width: 80%
        display: block
        margin: 0 auto
  .page-title-container
    z-index: 12
    img
      width: 100%
  .yellow-shadow-container
    position: absolute
    bottom: 20%
    z-index: 10
    border: 2px solid $orange
    width: 95%
    height: 20%
    border-radius: 50%
  .yellow-shadow-container-bottom
    width: 200%
    position: absolute
    bottom: 20%
    height: 95%
    border-radius: 0% 0% 50% 50%
    overflow: hidden
    .icon-container
      width: 32%
      transform: translate(50%)
      position: absolute
      bottom: -10%
      left: 18%
      overflow: hidden
      img
        width: 100%

.cursor-follow
  height: 100px
  width: 100px
  background-color: $orange
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  position: absolute
  transform: translate(-50%, -50%)
  transition: 0.2s all
  z-index: 0

.item-icon
  width: 90px
  position: absolute
  display: none

.item-icon-orange
  width: 50px

.arrow-down-container
  position: absolute
  bottom: 14%
.arrow-down
  position: absolute
  transform-origin: center center
  transform: translateX(-50%)
  left: 50%
  width: 120px
</style>
