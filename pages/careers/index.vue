<template>
  <div id="careers">
    <!-- Banner -->
    <div class="section-container full-screen-center-content" style="height: 100vh;">
      <!-- Animation here -->
      <div class="banner">
        <img class="careers-banner" src="../../assets/images/careers/careers.png" alt="Careers">
        <img class="computer-unglow" :src="ComputerUnglow" alt="Unglow computer">
        <img class="computer-glow" :src="ComputerGlow" alt="glow computer">
        <img class="cursor-unglow" src="../../assets/images/careers/cursor-unglow.png" alt="Unglow cursor" :width="84">
        <img class="cursor-glow" src="../../assets/images/careers/glow-cursor.png" alt="Glow cursor" :width="207">
      </div>
    </div>
    <!-- Staff pics -->
    <div class="section-container full-screen-center-content" style="flex-direction: column; margin-block: 24px;">
      <div class="full-screen-start-between w-full mobile-container"
        style="gap: 24px;  padding-block: 24px; border-bottom: 1px solid white;">
        <div>
          <h2 class="font-orange" style="margin-bottom: 16px">Join us in lighting up the world!</h2>
          <p class="font-white">
            All great things start with a spark—and at Light Up 7, we believe in
            fanning the embers of creativity and success in each team member.<br /><br /> We
            are a proudly all-in and in-house team that provides support and
            avenues for you to bring your aspirations and visions to life.<br /><br /> When
            you're ready to light up your career, Light Up 7 is ready for you.
          </p>
        </div>
        <div style="width: 100%;">
          <div class="image-container">
            <img :src="currentImageUrl" :height="250" class="fade-in-out">
            <img :src="currentImageUrl2" :height="250" class="fade-in-out2">
            <img :src="currentImageUrl3" :height="250" class="fade-in-out3">
          </div>
          <div class="full-screen-center-content w-full" style="margin-top: 16px">
            <button class="orange-outlined-button">be part of LU7!</button>
          </div>
        </div>
      </div>
    </div>
    <!-- Company values -->
    <div class="section-container full-screen-start-center"
      style="flex-direction: column; gap: 32px; margin-block: 64px;">
      <h2 class="font-orange">How we continue to shine</h2>
      <div class="full-screen-center-around mobile-container" style="gap: 48px">
        <div v-for="(mottoIcon, key) in mottoIcons" :key="key" class="full-screen-center-between"
          style="flex-direction: column; gap: 16px">
          <div style="width: fit-content; height: 160px; ">
            <!-- <img :src="mottoIcon.url" :alt="mottoIcon.alt" style="height: 100%;" /> -->
            <DotLottieVue style="height: 100%; width: auto" autoplay loop :src="mottoIcon.url" />
          </div>
          <div>
            <p class="font-white" style="font-size: 20px; text-align: center;">{{ mottoIcon.title }}</p>
          </div>
          <div>
            <p class="font-white" style="text-align: center;">
              {{ mottoIcon.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Company pics -->
    <div style="margin-block: 24px;">
      <div class="section-container">
        <h2 class="font-orange" style="margin-bottom: 24px;">Our team at work (and play!)</h2>
      </div>
      <div class="bg-orange-25 full-screen-center-between mobile-container" style="gap: 16px; padding-block: 24px;">
        <div class="section-container full-screen-center-between mobile-container"
          style="gap: 16px; padding-block: 24px;">
          <div v-for="(company, key) in companyPics" :key="key" class="overlay-parent">
            <img :src="company.url" :alt="company.alt" style="width: 100%;" />
            <!-- overlay text -->
            <div class="overlay-child">
              <p class="font-white" v-html="company.text">
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="section-container">
        <div style="border-bottom: 1px solid white;padding: 24px"></div>
      </div>
    </div>
    <!-- Vacancies -->
    <div class="section-container" style="margin-block: 24px">
      <h2 class="font-orange">ready to explore a new path?</h2>
      <h4 class="font-white">check out your dream role here.</h4>
      <!-- filter tabs -->
      <div class="full-screen-center-content tab-parent-container">
        <div class="full-screen-center-content tab-container btn-group" style="flex-wrap: wrap; row-gap: 8px;">
          <button v-for="vacancyTab in vacancyTabs" :key="vacancyTab" class="tab-button" :name="vacancyTab" @click="">{{
            vacancyTab }}</button>
        </div>
      </div>
      <!-- vacancy grid -->
      <div class="grid-3-cols">
        <div v-for="(recent, key) in recentJobs" :key="key" class="full-screen-start-center"
          style="flex-direction: column; gap: 16px">
          <div>
            <p class="font-white" style="font-size: 24px;">{{ recent.title }}</p>
          </div>
          <a class="orange-outlined-button vacancy-btn" style="font-family: 'JustSans';" :href="recent.url">apply
            now!</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as Companys } from '@/assets/images/careers/company-pics'
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import { default as Staffs } from '@/assets/images/careers/staff-pics'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { computed, ref, reactive } from 'vue';
import { default as ComputerUnglow } from '@/assets/images/careers/computer-unglow.png'
import { default as ComputerGlow } from '@/assets/images/careers/glow-computer.png'

gsap.registerPlugin(ScrollTrigger)
const staffPics = reactive(Staffs)
// Image Set 1
let currentImageIndex = ref(0);
const currentImageUrl = computed(() => {
  return staffPics[currentImageIndex.value];
})
const fadeOutCurrentImage = () => {
  gsap.fromTo('.fade-in-out', { opacity: 1 }, {
    opacity: 0, y: -100, duration: 1.5, ease: "power2.in"
  });
};
const fadeInNewImage = () => {
  currentImageIndex.value = getRandomIndex(staffPics.length);
  gsap.fromTo('.fade-in-out', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", onComplete: onComplete1 });
};
function getRandomIndex(max: number) {
  let rand = Math.floor(Math.random() * max)
  while (rand == currentImageIndex2.value || rand == currentImageIndex3.value)
    rand = Math.floor(Math.random() * max)
  return rand
};
const onTransitionEnd = () => {
  setTimeout(() => {
    fadeOutCurrentImage();
    setTimeout(() => {
      fadeInNewImage();
    }, 1500); // Adjust delay between fade out and fade in
  }, 1500);
};
const onComplete1: gsap.Callback = () => {
  setTimeout(() => {
    onTransitionEnd()
  }, 4500);
}

// Image Set 2
let currentImageIndex2 = ref(1);
const currentImageUrl2 = computed(() => {
  return staffPics[currentImageIndex2.value];
})
const fadeOutCurrentImage2 = () => {
  gsap.fromTo('.fade-in-out2', { opacity: 1 }, {
    opacity: 0, y: -100, duration: 1.5, ease: "power2.in"
  });
};
const fadeInNewImage2 = () => {
  currentImageIndex2.value = getRandomIndex2(staffPics.length);
  gsap.fromTo('.fade-in-out2', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", onComplete: onComplete2 });
};
function getRandomIndex2(max: number) {
  let rand = Math.floor(Math.random() * max)
  while (rand == currentImageIndex.value || rand == currentImageIndex3.value)
    rand = Math.floor(Math.random() * max)
  return rand
};

const onTransitionEnd2 = () => {
  setTimeout(() => {
    fadeOutCurrentImage2();
    setTimeout(() => {
      fadeInNewImage2();
    }, 1500); // Adjust delay between fade out and fade in
  }, 1500);
};
const onComplete2: gsap.Callback = () => {
  setTimeout(() => {
    onTransitionEnd2()
  }, 4500);
}

// Image Set 3
let currentImageIndex3 = ref(2);
const currentImageUrl3 = computed(() => {
  return staffPics[currentImageIndex3.value];
})
const fadeOutCurrentImage3 = () => {
  gsap.fromTo('.fade-in-out3', { opacity: 1 }, {
    opacity: 0, y: -100, duration: 1.5, ease: "power2.in"
  });
};
const fadeInNewImage3 = () => {
  currentImageIndex3.value = getRandomIndex3(staffPics.length);
  gsap.fromTo('.fade-in-out3', { opacity: 0, y: -100 }, { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", onComplete: onComplete3 });
};
function getRandomIndex3(max: number) {
  let rand = Math.floor(Math.random() * max)
  while (rand == currentImageIndex2.value || rand == currentImageIndex.value)
    rand = Math.floor(Math.random() * max)
  return rand
};
const onTransitionEnd3 = () => {
  setTimeout(() => {
    fadeOutCurrentImage3();
    setTimeout(() => {
      fadeInNewImage3();
    }, 1500); // Adjust delay between fade out and fade in
  }, 1500);
};
const onComplete3: gsap.Callback = () => {
  setTimeout(() => {
    onTransitionEnd3()
  }, 4500);
}

// Banner Animation
const onCompleteUnglowCursorClick: gsap.Callback = () => {
  gsap.to(['.cursor-unglow', '.computer-unglow'], {
    opacity: 0,
    duration: 0,
  })
  gsap.fromTo('.cursor-glow', { scale: 0.9, opacity: 0 }, {
    opacity: 1,
    scale: 1.1,
    duration: .1
  })
  gsap.to('.computer-glow', {
    opacity: 1,
    duration: 0
  })
}
const onReverseCompleteUnglowCursorClick: gsap.Callback = () => {
  gsap.set(['.cursor-unglow', '.computer-unglow'], {
    opacity: 1,
    duration: 0,
  })
  gsap.fromTo('.cursor-glow', { scale: 1.1, opacity: 1 }, {
    opacity: 0,
    scale: 0.9,
    duration: .1
  })
  gsap.set('.computer-glow', {
    opacity: 0,
    duration: 0
  })
}
onMounted(() => {
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: '#careers',
      start: "top top",
      end: "bottom 100%",
      pin: true,
      scrub: 1,
      toggleActions: "play reverse play reverse",
    }
  })
  tl.to('.computer-unglow', {
    y: -150,
    opacity: 1,
    duration: 1,
    ease: "power3.inOut",
  })
  tl.to('.cursor-unglow', {
    scale: 0.9,
    duration: .1,
    onComplete: onCompleteUnglowCursorClick,
    onReverseComplete: onReverseCompleteUnglowCursorClick
  })
  tl.to('.computer-glow', {
    duration: .5
  })
  onTransitionEnd();
  setTimeout(() => {
    onTransitionEnd2();
    setTimeout(() => {
      onTransitionEnd3();
    }, 3000);
  }, 3000); // Start the loop initially
});

onUnmounted(() => {
  gsap.killTweensOf('.fade-in-out')
  gsap.killTweensOf('.fade-in-out2')
  gsap.killTweensOf('.fade-in-out3')
})
const mottoTitle = ['Celebrating Creativity', 'Doing Work That Matters', 'Always Growing, Never Stopping']
const mottoText = [`We believe the greatest ideas comes from the experience of being
              human. Whatever shape or form, your creativity will always have a
              seat at our table.`, `Joining Light Up 7 means being part of projects that make a
              difference. Lead or have a hand in creating lasting impact with
              brands and organisations across the APAC region.`, `We understand wanting to leave your mark in the industry and we
              will support you until you make it! No matter the goals, you will
              have the resources to thrive.`]
const mottoIcons = ["https://lottie.host/94aaa01b-e14b-49c6-a7ff-c954b071ae62/mv0ZtYJHNn.json", "https://lottie.host/f0396e62-133c-44f9-9283-43ed82c1e173/KuudAy4Kvb.json", "https://lottie.host/8367b1b3-3995-46ef-b640-00c387413c09/7ZGBxnbywM.json"].map((motto, key) => ({
  url: motto,
  title: mottoTitle[key],
  text: mottoText[key],
  alt: `Motto ${key + 1}`
}))

const companyText = [`“I love how diverse the team is. You learn so much from people of
            various backgrounds and plus point: more festive celebrations!’<br/><br/> F.I,
            Head of Motion Design`, `“Super thankful for all the opportunities where the team trusted me
            to take lead on projects. Truly a transformative experience at Light
            Up 7.”<br/><br/> I.S, Project Manager`, `“The work’s challenging but so is the downtime! Nothing beats a long
            day of projects like one (or 5) rounds of pool.”<br/><br/> M.S, Video
            Production Specialist`]
const companyPics = Companys.map((comp, key) => ({
  url: comp,
  text: companyText[key],
  alt: `Company pic ${key + 1}`
}))

const vacancyTabs = [
  "all",
  "finance/accounting",
  "events",
  "internship",
  "client services",
  "content",
  "creative",
  "video",
  "web",
]
const recentJobs = [
  {
    title: "Event Manager",
    url: "/careers/1"
  },
  {
    title: "Finance and Accounting Executive",
    url: "/careers/1"
  },
  {
    title: "Internship",
    url: "/careers/1"
  },
  {
    title: "Project Manager",
    url: "/careers/1"
  },
  {
    title: "Video Production Manager",
    url: "/careers/1"
  },
  {
    title: "Senior Digital Designer",
    url: "/careers/1"
  },
]
</script>

<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

.banner
  position: relative
  flex: 1 0 0
  margin-top: 100px
  .careers-banner
    width: 100%
    height: auto
    margin-top: 100px
  .cursor-unglow
    position: absolute
    top: 0
    right: 18%
    transform: translate(0%, -50%)
  .cursor-glow
    position: absolute
    top: 0
    right: 13%
    transform: translate(0%, -50%)
    opacity: 0
  .computer-unglow
    position: absolute
    top: 20%
    left: 50%
    transform: translate(-50%, -50%)
    height: 100%
    opacity: 0
  .computer-glow
    position: absolute
    top: -22%
    left: 50%
    transform: translate(-50%, -50%)
    height: 113%
    opacity: 0
  
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
    +mobile
      padding-inline: 8px 
  button:last-child
    border-right: none
.vacancy-btn
  padding: 8px 24px
  +mobile
    padding: 8px 12px
    font-size: 12px
</style>
