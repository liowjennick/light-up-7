<template>
  <div id="careers">
    <!-- Banner -->
    <div
      id="careers-banner-animation"
      class="section-container full-screen-center-content"
      style="height: 100vh"
    >
      <div class="banner">
        <img
          class="careers-banner"
          src="../../assets/images/careers/careers-1.png"
          alt="Careers"
        />
        <img
          class="computer-unglow"
          :src="ComputerUnglow"
          alt="Unglow computer"
        />
        <img
          class="cursor-glow"
          src="../../assets/images/careers/glow-cursor.png"
          alt="Glow cursor"
        />
        <img
          class="computer-glow"
          src="../../assets/images/careers/glow-computer-1.png"
          alt="Glow computer"
        />
        <!-- <img class="star" src="../../assets/images/news/star.png" />
        <img class="star-2" src="../../assets/images/news/star.png" /> -->
      </div>
      <div class="arrow-down-container">
        <LottieAnimation
          class="arrow-down"
          autoplay
          loop
          :animation-data="ArrowDownJSON"
        />
      </div>
    </div>
    <!-- Staff pics -->
    <div
      class="section-container full-screen-center-content"
      style="flex-direction: column; margin-block: 24px"
    >
      <div
        class="w-full mobile-container team-member-row"
        style="border-bottom: 1px solid white"
      >
        <div class="team-member-image-container">
          <div class="bulb-mask">
            <img
              alt="Team Member"
              :src="currentImageUrl"
              class="fade-in-out"
            />
          </div>

          <img
            alt="Bulb Mask Outline"
            class="mask-outline"
            src="../../assets/images/careers/bulb-mask-outline.png"
          />
        </div>
        <div class="team-member-text-container">
          <h2 class="font-orange font-weight-600 font-25">Join us in lighting up the world!</h2>
          <p class="font-white">
            All great things start with a spark—and at Light Up 7, we believe in fanning the embers of creativity and success in each team member.<br /><br />
            We are a proudly all-in and in-house team that provides support and avenues for you to bring your aspirations and visions to life.<br /><br />
            When you're ready to light up your career, Light Up 7 is ready for you.
          </p>
          <div class="w-full">
            <button
              @click="scrollToExplore"
              class="orange-outlined-button"
            >
              be part of LU7!
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Company values -->
    <div
      class="section-container full-screen-start-center"
      style="flex-direction: column; gap: 32px; margin-block: 64px"
    >
      <h2 class="font-orange font-25">How we continue to shine</h2>
      <div
        class="full-screen-center-around mobile-container"
        style="gap: 48px"
      >
        <div
          v-for="(mottoIcon, key) in mottoIcons"
          :key="key"
          class="full-screen-center-between"
          style="flex-direction: column; gap: 16px"
        >
          <div>
            <LottieAnimation
              class="company-value-icon"
              autoplay
              loop
              :animation-data="mottoIcon.url"
            />
          </div>
          <div>
            <p
              class="font-white"
              style="font-size: 20px; text-align: center"
            >
              {{ mottoIcon.title }}
            </p>
          </div>
          <div>
            <p
              class="font-white"
              style="text-align: center"
            >
              {{ mottoIcon.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Company pics -->
    <div style="margin-block: 24px">
      <div class="section-container">
        <h2
          class="font-orange font-25"
          style="margin-bottom: 24px"
        >
          Our team at work (and play!)
        </h2>
      </div>
      <div
        class="bg-orange-25 full-screen-center-between mobile-container"
        style="gap: 16px; padding-block: 24px"
      >
        <div
          class="section-container full-screen-center-between mobile-container"
          style="gap: 16px; padding-block: 24px"
        >
          <div
            v-for="(company, key) in companyPics"
            :key="key"
            class="overlay-parent"
          >
            <img
              :src="company.url"
              :alt="company.alt"
              style="width: 100%"
            />
            <!-- overlay text -->
            <div class="overlay-child">
              <p
                class="font-white"
                v-html="company.text"
              ></p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-container">
        <div style="border-bottom: 1px solid white; padding: 24px"></div>
      </div>
    </div>
    <!-- Vacancies -->
    <div
      class="section-container"
      id="vacancies-section"
      style="margin-block: 24px"
    >
      <h2 class="font-orange font-30">ready to explore a new path?</h2>
      <h4 class="font-white">check out your dream role here.</h4>
      <!-- filter tabs -->
      <div class="full-screen-center-content tab-parent-container">
        <div
          class="full-screen-center-content tab-container btn-group"
          style="flex-wrap: wrap; row-gap: 8px"
        >
          <button
            v-for="vacancyTab in vacancyTabs"
            :key="vacancyTab"
            class="tab-button"
            :name="vacancyTab"
            @click=""
          >
            {{ vacancyTab }}
          </button>
        </div>
      </div>
      <!-- vacancy grid -->
      <div class="vacancy-container">
        <div
          v-for="(recent, key) in recentJobs"
          :key="key"
          class="vacancy-item"
        >
          <div>
            <p
              class="font-white"
              style="font-size: 20px"
            >
              {{ recent.title }}
            </p>
          </div>
          <a
            class="orange-outlined-button vacancy-btn"
            style="font-family: 'JustSans'"
            :href="recent.url"
            >apply now!</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as Companys } from "@/assets/images/careers/company-pics";
import { default as Staffs } from "@/assets/images/careers/staff-pics";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { computed, ref, reactive } from "vue";
import { default as ComputerUnglow } from "@/assets/images/careers/computer-unglow.png";
import { default as ComputerGlow } from "@/assets/images/careers/glow-computer.png";
import { LottieAnimation } from "lottie-web-vue";
import Value1 from "@/assets/images/careers/lottie/Icon1_Celebrating Creativity_V1.gif.json";
import Value2 from "@/assets/images/careers/lottie/Icon2_Doing Work That Matters.json";
import Value3 from "@/assets/images/careers/lottie/Icon3_Always Growing.json";
import ArrowDownJSON from "@/assets/images/home/arrow-down-lottie.json";

gsap.registerPlugin(ScrollTrigger);

useHead({
  title: "Career | Light Up 7",
  meta: [
    { name: "description", content: "Work at one of the top advertising companies in Malaysia! At Light Up 7, we welcome passionate and creative individuals from all backgrounds. Learn more here." },
    { name: "keywords", content: "top advertising company in malaysia" },
  ],
});

const scrollToExplore = () => {
  const scrollY = (document.getElementById("vacancies-section")?.getBoundingClientRect().top || 0) + window.scrollY;
  window.scrollTo({
    top: scrollY,
    behavior: "smooth",
  });
};

const staffPics = reactive(Staffs);
// Image Set 1
let currentImageIndex = ref(0);
const currentImageUrl = computed(() => {
  return staffPics[currentImageIndex.value];
});
const fadeOutCurrentImage = () =>
  gsap.fromTo(
    ".fade-in-out",
    { opacity: 1 },
    {
      opacity: 0,
      y: 40,
      duration: 1.5,
      ease: "power2.in",
    }
  );
const fadeInNewImage = () => gsap.fromTo(".fade-in-out", { opacity: 0, y: 40 }, { opacity: 1, y: 40, duration: 1.5, ease: "power2.out", onComplete: onTransitionEnd });
function getRandomIndex(max: number, prev: number) {
  let rand = Math.floor(Math.random() * max);
  while (rand == prev) rand = getRandomIndex(max, prev);
  return rand;
}
function onTransitionEnd() {
  setTimeout(() => {
    fadeOutCurrentImage();
    setTimeout(() => {
      currentImageIndex.value = getRandomIndex(staffPics.length, currentImageIndex.value);
      fadeInNewImage();
    }, 1500); // Adjust delay between fade out and fade in
  }, 1000);
}

onMounted(() => {
  onTransitionEnd();
  let bannerTimeline = gsap.timeline({
    scrollTrigger: {
      trigger: "#careers",
      pin: true,
      start: "top top",
      end: "+=1000",
      scrub: 1,
    },
  });

  bannerTimeline
    .to(".computer-unglow", {
      bottom: "77%",
      opacity: 1,
    })
    .to([".computer-glow", ".cursor-glow", ".careers-banner"], {
      opacity: 1,
    });
});

onUnmounted(() => {
  gsap.killTweensOf(".fade-in-out");
});
const mottoTitle = ["Celebrating Creativity", "Doing Work That Matters", "Always Growing, Never Stopping"];
const mottoText = [
  `We believe the greatest ideas comes from the experience of being
              human. Whatever shape or form, your creativity will always have a
              seat at our table.`,
  `Joining Light Up 7 means being part of projects that make a
              difference. Lead or have a hand in creating lasting impact with
              brands and organisations across the APAC region.`,
  `We understand wanting to leave your mark in the industry and we
              will support you until you make it! No matter the goals, you will
              have the resources to thrive.`,
];
const mottoIcons = ref(
  [Value1, Value2, Value3].map((motto, key) => ({
    url: motto,
    title: mottoTitle[key],
    text: mottoText[key],
    alt: `Motto ${key + 1}`,
  }))
);

const companyText = [
  `“I love how diverse the team is. You learn so much from people of
            various backgrounds and plus point: more festive celebrations!’<br/><br/> F.I,
            Head of Motion Design`,
  `“Super thankful for all the opportunities where the team trusted me
            to take lead on projects. Truly a transformative experience at Light
            Up 7.”<br/><br/> I.S, Project Manager`,
  `“The work’s challenging but so is the downtime! Nothing beats a long
            day of projects like one (or 5) rounds of pool.”<br/><br/> M.S, Video
            Production Specialist`,
];
const companyPics = Companys.map((comp, key) => ({
  url: comp,
  text: companyText[key],
  alt: `Company pic ${key + 1}`,
}));

const vacancyTabs = ["all", "finance/accounting", "events", "internship", "client services", "content", "creative", "video", "web"];
const recentJobs = [
  {
    title: "Event Manager",
    url: "/careers/1",
  },
  {
    title: "Finance and Accounting Executive",
    url: "/careers/1",
  },
  {
    title: "Internship",
    url: "/careers/1",
  },
  {
    title: "Project Manager",
    url: "/careers/1",
  },
  {
    title: "Video Production Manager",
    url: "/careers/1",
  },
  {
    title: "Senior Digital Designer",
    url: "/careers/1",
  },
];
</script>

<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

.vacancy-container
  display: grid
  grid-template-columns: 1fr 1fr 1fr
  grid-template-rows: 1fr 1fr
  gap: 60px
  padding: 24px
  +mobile
    padding: 12px
    display: flex
    flex-direction: column
    gap: 40px
    align-items: center
  .vacancy-item
    display: flex
    flex-direction: column
    gap: 16px
    a
      width: fit-content
    +mobile
      align-items: center
      text-align: center
      gap: 8px
.company-value-icon
  width: 160px
.banner
  position: relative
  flex: 1 0 0
  margin-top: 100px
  // height: 100%
  .careers-banner
    width: 80%
    display: block
    margin: 0 auto
    position: relative
    bottom: 30%
    opacity: 0.5
  .cursor-unglow
    position: absolute
    top: -12%
    right: 21.5%
    transform: translate(-50%, -50%)
    height: 37%
    width: auto
  .cursor-glow
    position: absolute
    bottom: 30%
    right: 26.5%
    transform: translate(0%, -50%)
    opacity: 0.5
    width: 15%
  .computer-unglow
    position: absolute
    bottom: 40%
    left: 50%
    transform: translateX(-50%)
    // height: 100%
    width: 23%
    opacity: 0
  .computer-glow
    position: absolute
    bottom: 5%
    left: 50%
    transform: translate(-50%, -50%)
    width: 34.6%
    opacity: 0
  .star
    position: absolute
    width: 10%
    bottom: -0%
    transform: scaleX(-1)
  .star-2
    position: absolute
    width: 10%
    right: 0
    bottom: -0%

.image-container
  display: flex
  justify-content: center
  align-items: center
  img
    max-width: 100%
    max-height: 100%
    opacity: 1
#careers
  padding-block: 48px
  h2, h4, p
    margin: 0px
.slide-image
  max-width: 100%
.mobile-container
  +mobile
    flex-direction: column

.overlay-parent
  position: relative
  max-width: 30%
  +mobile
    max-width: 100%
    position: static
.overlay-child
  position: absolute
  width: 100%
  height: 98%
  background-color: rgba(0, 0, 0, 70%)
  top: 50%
  left:50%
  transform: translate(-50%, -51%)
  opacity: 0
  text-align: center
  display: flex
  align-items: center
  justify-content: center
  transition: opacity .3s linear
  p
    padding: 24px
  &:hover
    opacity: 100%
    backdrop-filter: blur(3px)
  +mobile
    position: static
    opacity: 100%
    transform: translateY(-3%)
.tab-parent-container
  margin-block: 32px
  +mobile
    margin-block: 12px
.tab-container
  margin-block: 24px
  padding: 12px
  border: 1px solid $orange
  border-radius: 100px
  width: fit-content
  button
    background: none
    border: none
    border-right: 1px solid $orange
    color: $orange
    cursor: pointer
    padding-inline: 24px
    &:hover
      text-shadow: 0 0 10px white
    +desktop
      padding-inline: 12px
    +large-mobile
      padding-inline: 12px
    +mobile
      padding-inline: 8px
  button:last-child
    border-right: none
.vacancy-btn
  padding: 8px 24px
  +mobile
    padding: 8px 12px
    font-size: 12px

.team-member-row
  display: flex
  align-items: center
  padding: 0 80px
  box-sizing: border-box
  gap: 80px
  +desktop
    gap: 40px
    padding: 0
  +large-mobile
    display: block
  .team-member-text-container
    display: flex
    flex-direction: column
    gap: 16px
    flex: 4
    +desktop
      flex: 3
    +large-mobile
      padding-left: 0px
      padding-bottom: 80px
    button
      margin-top: 24px
  .team-member-image-container
    flex: 1.5
    position: relative
    +large-mobile
      width: 100%
      max-width: 300px
      display: block
      margin: 0 auto
    .mask-outline
      position: absolute
      top: 50%
      left: 0
      width: 100%
      transform: translateY(-50%)
  .bulb-mask
    mask-image: url("../../assets/images/careers/bulb-mask-1x.png")
    mask-repeat: no-repeat
    mask-position: center center
    mask-size: 100%
    -webkit-mask-image: url("../../assets/images/careers/bulb-mask-1x.png")
    -webkit-mask-repeat: no-repeat
    -webkit-mask-position: center center
    width: 100%
    img
      width: 100%
      height: 50%
      transform: translateY(40px)
#careers-banner-animation
  position: relative
.arrow-down-container
  position: absolute
  bottom:18%
.arrow-down
  position: absolute
  transform-origin: center center
  transform: translateX(-50%)
  left: 50%
  width: 120px

.orange-outlined-button
  cursor: pointer

@keyframes arrow-down-move
  0%
    transform: translate(-50%, 10%) rotate(90deg)
  20%
    transform: translate(-50%, 0%) rotate(90deg)
  40%
    transform: translate(-50%, 10%) rotate(90deg)
  60%
    transform: translate(-50%, 0%) rotate(90deg)
  80%
    transform: translate(-50%, 10%) rotate(90deg)
  100%
    transform: translate(-50%, 0%) rotate(90deg)
</style>
