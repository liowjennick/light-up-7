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
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="services-banner-section"
    >
      <div class="page-title-container">
        <img src="../../assets/images/services/services-title.png" />
      </div>

      <div class="yellow-shadow-container" />

      <div class="yellow-shadow-container-bottom">
        <div class="icon-container">
          <img src="../../assets/images/services/icons/icon-group.png" />
        </div>
      </div>
    </div>
    <!-- Services List -->
    <div
      class="full-screen-center-content hover-services"
      style="flex-direction: column"
    >
      <NuxtLink
        class="divider-parent"
        id="item-0"
        style="width: 100%; text-decoration: none"
        :to="`/services/growth-strategy`"
        @mouseenter="() => setActiveFollowCircleIndex(0)"
        @mouseleave="() => setActiveFollowCircleIndex(-1)"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Growth />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Growth Strategy</h2>
            <p>Propel your business with a tactical plan optimised to achieve your desired goals.</p>
          </div>
          <div
            class="cta-btn-parent full-screen-center-content"
            :class="{ active: activeCircleFollowIndex === 0 }"
            id="circle-mouse-follow-0"
          >
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        class="divider-parent"
        @mouseenter="() => setActiveFollowCircleIndex(1)"
        @mouseleave="() => setActiveFollowCircleIndex(-1)"
        style="width: 100%; text-decoration: none"
        :to="`/services/digital-marketing`"
        id="item-1"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Digital />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Digital Marketing</h2>
            <p>Stay ahead on the digital front with a host of approaches, integrated to meet your business needs</p>
          </div>
          <div
            :class="{ active: activeCircleFollowIndex === 1 }"
            id="circle-mouse-follow-1"
            class="cta-btn-parent full-screen-center-content"
          >
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        class="divider-parent"
        style="width: 100%; text-decoration: none"
        :to="`/services/video-photography`"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Video />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Video & Photography</h2>
            <p>A picture is worth a thousand words. Tell your brand story with captivating images and engaging videos.</p>
          </div>
          <div
            :class="{ active: activeCircleFollowIndex === 1 }"
            class="cta-btn-parent full-screen-center-content"
          >
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        class="divider-parent"
        style="width: 100%; text-decoration: none"
        :to="`/services/brand-creative-design`"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Brand />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Branding & Creative Design</h2>
            <p>With a little sparkle and some zing, your new brand identity is ready to take on the world.</p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        class="divider-parent"
        style="width: 100%; text-decoration: none"
        :to="`/services/website-apps`"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Website />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Websites & Apps</h2>
            <p>Your business’ first point of contact can leave a lasting impression. Build your best brand website with us!</p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        class="divider-parent"
        style="width: 100%; text-decoration: none"
        :to="`/services/event-management`"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Event />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Event Management</h2>
            <p>From conceptualising all the way to d-day handling, our event management team is poised to bring it all to life.</p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
      <NuxtLink
        class="divider-parent"
        style="width: 100%; text-decoration: none"
        :to="`/services/media-buying`"
      >
        <div
          class="divider-child full-screen-center-content service-item section-container"
          style="gap: 60px; padding: 35px 40px"
        >
          <div
            style="width: 10%"
            class="full-screen-center-content"
          >
            <Media />
          </div>
          <div
            class="full-screen-start-center"
            style="flex-direction: column; flex: 1; color: white"
          >
            <h2>Media Buying</h2>
            <p>Put your brand in front of the right audience at the right time and place. Let us help you optimise your digital presence.</p>
          </div>
          <div class="cta-btn-parent full-screen-center-content">
            <p class="hover-text">learn more</p>
            <div class="cta-btn-child">
              <img
                :src="arrowUpRight"
                alt="Arrow up right"
              />
            </div>
          </div>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>
<script setup lang="ts">
import gsap from "gsap";
import arrowUpRight from "@/assets/svg/arrow-up-right.svg";
import { Growth, Digital, Brand, Event, Media, Video, Website } from "@/assets/svg";
import { ScrollTrigger, ScrollToPlugin, Draggable } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

const activeCircleFollowIndex = ref(-1);

const setActiveFollowCircleIndex = (index: number) => {
  activeCircleFollowIndex.value = index;
  console.log(index);
};

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

const angle = (cx, cy, ex, ey) => {
  var dy = ey - cy;
  var dx = ex - cx;
  var theta = Math.atan2(dy, dx); // range (-PI, PI]
  theta *= 180 / Math.PI; // rads to degs, range (-180, 180]
  return theta;
};
const angle360 = (cx, cy, ex, ey) => {
  var theta = angle(cx, cy, ex, ey); // range (-180, 180]
  if (theta < 0) theta = 360 + theta; // range [0, 360)
  return theta;
};

const mouseMoveTimer = () => {
  setTimeout(() => {
    const mouseX = mousePosition.value.x;
    const mouseY = mousePosition.value.y;

    if (activeCircleFollowIndex.value === 0) {
      const xOffset = document.querySelector(".section-container")?.getBoundingClientRect().right;
      const yOffset = document.querySelector("#item-0")?.getBoundingClientRect().bottom;

      const currentX = document.querySelector("#circle-mouse-follow-0")?.getBoundingClientRect().right;
      const currentY = document.querySelector("#circle-mouse-follow-0")?.getBoundingClientRect().bottom;

      // TODO REMOVE HARD
      const differenceX = Math.abs(mouseX - currentX + 60);
      const differenceY = Math.abs(currentY - mouseY);

      const destinationX = mouseX - xOffset + 80;
      const destinationY = mouseY - yOffset + 100;

      gsap.to("#circle-mouse-follow-0", {
        x: destinationX,
        y: destinationY,
        scaleX: 1 + differenceX / 300,
        scaleY: 1 + differenceY / 200,
        duration: 0.1,
      });
    } else {
      gsap.to("#circle-mouse-follow-0", {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.2,
      });
    }

    if (activeCircleFollowIndex.value === 1) {
      const xOffset = document.querySelector(".section-container")?.getBoundingClientRect().right;
      const yOffset = document.querySelector("#item-1")?.getBoundingClientRect().bottom;

      const currentX = document.querySelector("#circle-mouse-follow-1")?.getBoundingClientRect().right;
      const currentY = document.querySelector("#circle-mouse-follow-1")?.getBoundingClientRect().bottom;

      // TODO REMOVE HARD
      const differenceX = Math.abs(mouseX - currentX + 60);
      const differenceY = Math.abs(currentY - mouseY);

      const destinationX = mouseX - xOffset + 80;
      const destinationY = mouseY - yOffset + 100;

      gsap.to("#circle-mouse-follow-1", {
        x: destinationX,
        y: destinationY,
        scaleX: 1 + differenceX / 300,
        scaleY: 1 + differenceY / 200,
        duration: 0.1,
      });
    } else {
      gsap.to("#circle-mouse-follow-1", {
        x: 0,
        y: 0,
        scaleX: 1,
        scaleY: 1,
        duration: 0.2,
      });
    }

    mouseMoveTimer();
  }, 100);
};

const onMouseMoveFunction = (e) => {
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
      &:hover
          background-color: #DC9F41
          .service-item
            path[fill="#DC9F41"]
              fill: white
            path[stroke="#DC9F41"]
              stroke: white
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
        .cta-btn-parent
          position: relative
          width: 70px
          height: 70px
          border-radius: 100%
          background-color: #DC9F41
          transition: all .2s linear
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
    width: 100%
    height: 20%
    border-radius: 50%
  .yellow-shadow-container-bottom
    width: 200%
    position: absolute
    bottom: 20%
    height: 100%
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
</style>
