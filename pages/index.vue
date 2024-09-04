<template>
  <div id="homepage">
    <ClientOnly>
      <template v-if="!hideIntroVideo">
        <video
          id="intro-video"
          autoplay
          muted
          playsinline
        >
          <source
            src="../assets/images/home/light-up-7-intro-video-2.mp4"
            type="video/mp4"
          />
        </video>
        <div
          @click="skipIntro"
          class="skip-button-container"
        >
          <p>Skip Video</p>
        </div>
      </template>
    </ClientOnly>

    <!-- BANNER SECTION -->
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="home-banner-section"
    >
      <NuxtParticles
        id="tsparticles"
        url="/particles/particlesjs-config.json"
      />
      <div class="background-text-container">
        <!-- <img src="../assets/images/home/header-background.png" /> -->
        <div class="text-background-row first">
          <p class="first">A</p>
          <p class="second">brand</p>
          <p class="third">activation</p>
        </div>

        <div class="text-background-row second">
          <p class="first">agency</p>
          <p class="second">lighting</p>
          <p class="third">up</p>
        </div>

        <div class="text-background-row third">
          <p class="first">the</p>
          <div class="large-logo-container">
            <img
              alt="Light up 7 Logo"
              src="../assets/images/home/logo-large-header.png"
            />
          </div>
          <p class="second">Asia-</p>
        </div>

        <div class="text-background-row fourth">
          <p class="first">Pacific</p>
          <p class="second">region,</p>
          <p class="third">one</p>
        </div>

        <div class="text-background-row fifth">
          <p class="first">bright</p>
          <p class="second">idea</p>
          <p class="third">at</p>
          <p class="fourth">a</p>
          <p class="fifth">time.</p>
        </div>
      </div>
    </div>
    <!-- YELLOW OUTLINE TEXT SECTION -->
    <div
      id="outline-container"
      class="section-container"
    >
      <div class="indicator-container-list">
        <div
          class="indicator-button"
          :class="{ active: yellowOutlineIndex === i }"
          v-for="i in 3"
          :key="i"
        />
      </div>

      <LottieAnimation
        class="arrow-down"
        autoplay
        loop
        :animation-data="ArrowDownJSON"
      />

      <!-- FIRST -->
      <div
        class="full-screen-section-container section-container yellow-outline-banner-trigger"
        id="yellow-outline-first-banner-trigger"
      >
        <div class="full-screen-center-content">
          <div class="flex-row">
            <div class="yellow-outline-text-container">
              <img
                alt="Quarter Circle"
                class="background"
                src="../assets/images/home/quarter-circle-black-background.png"
              />
              <div class="yellow-outline-image-container">
                <img
                  alt="Illuminate Brands"
                  class="yellow-outline-text"
                  src="../assets/images/home/illuminate-brands-yellow-outline.png"
                />
                <div
                  class="svg-floating-shapes"
                  :class="{ star: yellowOutlineIndex === 2, circle: yellowOutlineIndex === 3, diamond: yellowOutlineIndex === 1 }"
                >
                  <svg
                    width="60"
                    height="60"
                    viewbox="0 0 200 200"
                    stroke-width="4"
                  >
                    <path
                      fill="none"
                      stroke="white"
                    />
                  </svg>
                </div>
                <div
                  class="svg-floating-shapes-small"
                  :class="{ star: yellowOutlineIndex === 2, circle: yellowOutlineIndex === 3, diamond: yellowOutlineIndex === 1 }"
                >
                  <svg
                    width="40"
                    height="40"
                    viewbox="0 0 200 200"
                    stroke-width="6"
                  >
                    <path
                      fill="none"
                      stroke="white"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="text-container">
              <p class="font-white font-weight-200 just-sans">Make the best parts of your business <b>shine bright</b> with our strategy, branding and growth services.</p>
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
                alt="Star"
                class="background"
                src="../assets/images/home/star-black-background.png"
              />
              <!-- <img
                class="floating-shapes star"
                src="../assets/images/home/double-star.png"
              /> -->
              <img
                alt="Spark Creavity"
                class="yellow-outline-text"
                src="../assets/images/home/spark-creativity-yellow-outline.png"
              />
            </div>
            <div class="text-container">
              <p class="font-white font-weight-200 just-sans">We specialise in <b>bringing ideas to life</b>, spanning from design and video production to event planning, all to <b>ignite transformative branding experiences</b>.</p>
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
                alt="Circle"
                class="background"
                src="../assets/images/home/circle-black-background.png"
              />
              <!-- <img
                class="floating-shapes circle"
                src="../assets/images/home/double-circle.png"
              /> -->
              <img
                alt="Visible Marketing"
                class="yellow-outline-text"
                src="../assets/images/home/visible-marketing-yellow-outline.png"
              />
            </div>
            <div class="text-container">
              <p class="font-white font-weight-200 just-sans">Seeking effective marketing solutions? Look no further! Our custom-made digital strategies <b>deliver results tailored to your audience</b>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div
      class="full-screen-section-container section-container full-screen-center-content"
      style="background-color: black"
    ></div> -->

    <div
      id="video-section"
      class="full-screen-section-container section-container full-screen-center-content"
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/CCRH-ITDix0?autoplay=1"
        title="THIS IS LIGHT UP 7!"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        v-if="showHeroVideo"
      >
      </iframe>

      <div
        class="hero-video-container"
        v-if="!showHeroVideo"
      >
        <video
          id="hero-video"
          autoplay
          muted
          playsinline
          loop
        >
          <source
            src="../assets/images/home/home-hero-gif.mp4"
            type="video/mp4"
          />
        </video>

        <div class="play-button-container">
          <img
            alt="Play Button"
            @click="showHeroVideo = true"
            src="../assets/images/home/play-button.png"
          />
        </div>
      </div>
    </div>

    <!-- OUR SERVICES SECTION -->
    <div
      class="full-screen-section-container section-container full-screen-center-content"
      id="our-services-section"
    >
      <div class="bullet-container">
        <p class="font-orange font-20 font-weight-200 just-sans mb-20">our services</p>
        <div class="services-list-container">
          <div
            class="services-item pb-8 pt-8"
            :key="i"
            v-for="(item, i) in ourServicesItems"
            @mouseover="onMouseOverServiceItem(i)"
            @mouseleave="onMouseLeaveServiceItem(i)"
            :class="{ active: ourServicesItemsHighlightedSection === i }"
          >
            <p class="bullet font-white font-18 font-weight-200 just-sans">0{{ i + 1 }}.</p>
            <p class="text font-white font-18 font-weight-200 just-sans">{{ item.display_text }}</p>
          </div>

          <a
            href="/work"
            class="cta-button-row"
            style="margin-top: 40px"
          >
            <div class="cta-button">
              <p class="font-orange font-18">view our services</p>
            </div>
          </a>
        </div>
      </div>

      <div class="bulb-container">
        <div class="bulb-image-container">
          <img
            alt="Bulb Base"
            class="bulb-base"
            src="../assets/images/home/our-services-bulb-base.png"
          />

          <img
            alt="Our Services"
            class="bulb-base-background"
            src="../assets/images/home/our-services-bulb-background.png"
            :class="{ active: ourServicesItemsHighlightedSection !== -1 }"
          />

          <div
            class="bulb-image-text-container"
            :alt="`Bulb ${i}`"
            v-for="(item, i) in ourServicesItems"
            :key="i"
            :data-bulb-number="i"
            @mouseover="onMouseOverServiceItem(i)"
            @mouseleave="onMouseLeaveServiceItem(i)"
            :class="{ active: ourServicesItemsHighlightedSection === i }"
          >
            <img
              alt="Bulb"
              class="bulb"
              src="../assets/images/home/our-services-bulb.png"
            />
            <img
              alt="Bulb Glow"
              class="bulb-glow"
              src="../assets/images/home/our-services-bulb-glow.png"
            />
            <p class="font-white bulb-text just-sans">{{ item.display_text }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- DISTINGUISHED CLIENTS SECTION -->
    <div id="distinguished-clients-section">
      <img
        alt="Plug"
        class="plug-to-right one"
        src="../assets/images/home/client-section-plug-to-right.png"
      />
      <div class="section-container mb-20">
        <p class="font-orange font-20 font-weight-200 just-sans mb-10">our distinguished clients:</p>
        <p class="font-white font-30 font-weight-200 just-sans mb-40">trusted by local and global names across industries.</p>
      </div>

      <div class="clients-list-container mb-40">
        <div class="section-container">
          <a
            href="/work/balang-kuih-abah"
            class="client-item"
          >
            <img
              alt="PNB Logo"
              class="client-logo"
              src="../assets/images/home/logo/pnb-logo.png"
            />
          </a>
          <a
            href="/work/hotlink-music-video"
            class="client-item"
          >
            <img
              alt="Hotlink Logo"
              class="client-logo"
              src="../assets/images/home/logo/hotlink.png"
            />
          </a>

          <a
            href="/work/ktmb-corporate-video"
            class="client-item"
          >
            <img
              alt="KTM Logo"
              class="client-logo"
              src="../assets/images/home/logo/ktm-logo.png"
            />
          </a>
          <a
            href="/work/innoex-highlight-video"
            class="client-item"
          >
            <img
              alt="Cyberview Logo"
              class="client-logo"
              src="../assets/images/home/logo/cyberview-logo.png"
            />
          </a>
          <a
            href="/work/7-eleven-social-media-marketing"
            class="client-item"
          >
            <img
              alt="7 Eleven Logo"
              class="client-logo"
              src="../assets/images/home/logo/7-eleven.png"
            />
          </a>

          <a
            href="/work/ahh-yum-digital-marketing-suite"
            class="client-item"
          >
            <img
              alt="Ahh Yum Logo"
              class="client-logo"
              src="../assets/images/home/logo/ahh-yum.png"
            />
          </a>

          <a
            href="/work/bangkit-bersama-melawan-scammer"
            class="client-item"
          >
            <img
              alt="BNM Logo"
              class="client-logo"
              src="../assets/images/home/logo/bank-negara.png"
            />
          </a>

          <a
            href="/work/malaysia-next-chicken-chop"
            class="client-item"
          >
            <img
              alt="Unilever Logo"
              class="client-logo"
              src="../assets/images/home/logo/unilever.png"
            />
          </a>

          <a
            href="/work/saya-sayang-saya-unicef"
            class="client-item"
          >
            <img
              alt="Unicef Logo"
              class="client-logo"
              src="../assets/images/home/logo/unicef.png"
            />
          </a>

          <a
            href="/work/superhero-kewangan"
            class="client-item"
          >
            <img
              alt="Art Gallery Logo"
              class="client-logo"
              src="../assets/images/home/logo/art-gallery.png"
            />
          </a>
        </div>
      </div>

      <a
        href="/work"
        class="cta-button-row"
      >
        <div class="cta-button">
          <p class="font-orange font-18">view more</p>
        </div>
      </a>

      <img
        alt="Plug"
        class="plug-to-left"
        src="../assets/images/home/client-section-plug-to-left.png"
      />

      <div class="section-container mb-20">
        <p class="font-orange font-20 just-sans mb-10 font-weight-200">our prestigious achievements:</p>
        <p class="font-white font-30 just-sans mb-40 font-weight-200">awards and recognition by</p>
      </div>

      <div class="award-list-container mb-40">
        <div class="section-container">
          <div class="award-item">
            <img
              alt="Award SME 100 Logo"
              class="client-logo"
              src="../assets/images/home/award-sme-100.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Award the Bizz Hybrid Logo"
              class="client-logo"
              src="../assets/images/home/award-the-bizz-hybrid.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Golden Bull Award 2024"
              class="client-logo"
              src="../assets/images/home/golden-bull-award-2024.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Award Agency of the Year 2022 Logo"
              class="client-logo"
              src="../assets/images/home/award-agency-of-the-year-2022.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Google Partner Logo"
              class="client-logo"
              src="../assets/images/home/award-google-partner.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Award Trusted Malaysia Logo"
              class="client-logo"
              src="../assets/images/home/award-trusted-malaysia.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Awards Products Nation Logo"
              class="client-logo"
              src="../assets/images/home/award-products-nation.png"
            />
          </div>
          <div class="award-item">
            <img
              alt="Award Best in Malaysia Logo"
              class="client-logo"
              src="../assets/images/home/award-best-in-malaysia.png"
            />
          </div>
        </div>
      </div>

      <img
        alt="Plug"
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
          <p class="font-white just-sans font-32"><b>light up</b> your</p>
        </div>

        <div class="bulb-container">
          <img
            alt="Large Bulb"
            class="large-bulb"
            src="../assets/images/home/light-up-your-idea-large-bulb.png"
          />
          <img
            alt="Large Bulb Glow"
            class="large-bulb-glow"
            :class="{ active: lightUpYourIdeasBulbActive }"
            src="../assets/images/home/light-up-your-idea-large-bulb-glow.png"
          />
          <p class="font-white just-sans pull-me-text">pull me</p>

          <div class="large-bulb-pull-image">
            <p class="font-white just-sans pull-me-text-desktop">pull me</p>
            <img
              alt="Light Up your Idea Pull String"
              :class="{ idle: bulbPullIdle }"
              src="../assets/images/home/light-up-your-idea-large-bulb-pull.png"
            />
          </div>

          <div class="pull-me-text-container">
            <!-- <img src="../assets/images/home/arrow-down.png" /> -->
            <!-- <p class="font-white just-sans">pull me</p> -->
          </div>

          <div class="bulb-text-container">
            <p class="font-white just-sans font-32 active">
              <b id="bulb-text">{{ lightBulbTextList[currentLightBulbTextIndex] }}</b>
            </p>

            <a
              href="/services"
              class="cta-circle"
              :class="{ active: lightUpYourIdeasBulbActive }"
            >
              <div class="arrow-container">
                <img
                  alt="Arrow Diagonal"
                  src="../assets/images/home/arrow-diagonal.png"
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin, Draggable } from "gsap/all";
import { setCookie, getCookie } from "../utils/cookies";
import { LottieAnimation } from "lottie-web-vue";
import ArrowDownJSON from "@/assets/images/home/arrow-down-lottie.json";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

// VIDEO
const showHeroVideo = ref(false);

// YELLOW OUTLINE SCROLL
var firstOutlineTimeline: gsap.core.Timeline;
var secondOutlineTimeline: gsap.core.Timeline;
var thirdOutlineTimeline: gsap.core.Timeline;

const yellowOutlineIndex = ref(0);
watch(yellowOutlineIndex, (newIndex: Number, oldIndex: Number) => {
  if (newIndex !== oldIndex) {
    const enterDuration = 0.6;
    const exitDuration = 0.2;
    switch (newIndex) {
      case 1:
        firstOutlineTimeline.play();
        secondOutlineTimeline.timeScale(2).reverse();
        thirdOutlineTimeline.timeScale(2).reverse();
        break;
      case 2:
        firstOutlineTimeline.timeScale(2).reverse();
        secondOutlineTimeline.play();
        thirdOutlineTimeline.timeScale(2).reverse();
        break;
      case 3:
        firstOutlineTimeline.timeScale(2).reverse();
        secondOutlineTimeline.timeScale(2).reverse();
        thirdOutlineTimeline.play();
        break;
      default:
        break;
    }
  }
});

// OUR SERVICES
const ourServicesItems = [
  {
    display_text: "Growth Strategy",
    slug: "growth-strategy",
  },
  {
    display_text: "Digital Marketing",
    slug: "digital-marketing",
  },
  {
    display_text: "Video & Photography",
    slug: "video-photography",
  },
  {
    display_text: "Branding & Creative Design",
    slug: "branding-creative",
  },
  {
    display_text: "Websites & Apps",
    slug: "website-apps",
  },
  {
    display_text: "Event Management",
    slug: "event-management",
  },
  {
    display_text: "Media Buying",
    slug: "media-buying",
  },
];

const ourServicesItemsHighlightedSection = ref(-1);

const onMouseOverServiceItem = (index: number) => {
  ourServicesItemsHighlightedSection.value = index;
};

const onMouseLeaveServiceItem = (index: number) => {
  if (ourServicesItemsHighlightedSection.value !== -1) {
    ourServicesItemsHighlightedSection.value = -1;
  }
};

const hideIntroVideo = ref(false);

const bulbPullIdle = ref(true);
const lightUpYourIdeasBulbActive = ref(false);
const bulbInitialY = ref(0);

const lightBulbTextList = ref(["brand", "message", "growth"]);
const currentLightBulbTextIndex = ref(0);

useHead({
  title: "Light Up 7 | Brand Activation Agency",
  meta: [
    { name: "description", content: "As a brand activation and marketing agency, we take brand experiences to new heights. Learn more about LU7, our work and how we can transform your business." },
    { name: "keywords", content: "brand activation agency" },
  ],
});

const skipIntro = () => {
  const cookieName = "home-intro-video-played";
  hideIntroVideo.value = true;
  setCookie(cookieName, "true", 0.5);
};

onBeforeMount(() => {
  const cookieName = "home-intro-video-played";
  const homeIntroVideoCookieValue = getCookie(cookieName);

  if (homeIntroVideoCookieValue && homeIntroVideoCookieValue === "true") {
    hideIntroVideo.value = true;
  } else {
    setCookie(cookieName, "true", 0.5);
  }
});

const mousePosition = ref({
  x: 0,
  y: 0,
});

const onMouseMoveFunction = (e: MouseEvent) => {
  const pageX = e.clientX;
  const pageY = e.clientY;

  mousePosition.value = {
    x: pageX,
    y: pageY,
  };
};

const mouseMoveTimer = () => {
  setTimeout(() => {
    const mouseX = mousePosition.value.x;
    const mouseY = mousePosition.value.y;

    const xOffset = document.querySelector(".bulb-text-container")?.getBoundingClientRect().right || 0;
    const yOffset = document.querySelector(`.bulb-text-container`)?.getBoundingClientRect().bottom || 0;

    const currentX = document.querySelector(`.cta-circle`)?.getBoundingClientRect().right || 0;
    const currentY = document.querySelector(`.cta-cirlce`)?.getBoundingClientRect().bottom || 0;

    let destinationX = mouseX - xOffset + 155;
    let destinationY = mouseY - yOffset - 65;

    const minX = 0 - 50;
    const maxX = 0 + 50;
    const minY = 0 - 20;
    const maxY = 0 + 60;

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
    const differenceX = Math.abs(mouseX - currentX + 70);
    const differenceY = Math.abs(currentY - mouseY);

    gsap.to(`.cta-circle`, {
      x: destinationX,
      y: destinationY,
      scaleX: Math.min(1 + differenceX / 300, 1.1),
      scaleY: Math.min(1 + differenceY / 200, 1.1),
      duration: 1,
    });

    mouseMoveTimer();
  }, 100);
};

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

onMounted(() => {
  // ADD MOUSE X Y LISTENER
  document.addEventListener("mousemove", onMouseMoveFunction);
  mouseMoveTimer();

  // INTRO VIDEO END
  setTimeout(() => {
    if (document.getElementById("intro-video")) {
      gsap.to(["#intro-video", ".skip-button-container"], {
        opacity: 0,
        onComplete: () => {
          document.getElementById("intro-video")!.style.display = "none";
          localStorage.setItem("home-intro-video-played", "true");
          hideIntroVideo.value = true;
        },
      });
    }
  }, 8000);

  const lightBulbTextTimeline = gsap.timeline({ repeat: -1, repeatDelay: 2 });
  lightBulbTextTimeline
    .to("#bulb-text", {
      opacity: 0,
      y: -100,
      onComplete: () => {
        if (currentLightBulbTextIndex.value + 1 > lightBulbTextList.value.length - 1) {
          currentLightBulbTextIndex.value = 0;
        } else {
          currentLightBulbTextIndex.value += 1;
        }
      },
    })
    .to("#bulb-text", {
      opacity: 1,
      y: 0,
    });

  // OUTLINE SECTION SCROLL TRIGGER
  ScrollTrigger.create({
    trigger: "#outline-container",
    start: "top top",
    end: "bottom+=3000 bottom",
    pin: true,
    onUpdate: (self) => {
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
  firstOutlineTimeline = gsap.timeline();
  firstOutlineTimeline
    .addLabel("first")
    .to(
      "#yellow-outline-first-banner-trigger .background",
      {
        opacity: 1,
        duration: 0.8,
        scale: 1,
      },
      "first"
    )
    .to(
      "#yellow-outline-first-banner-trigger .yellow-outline-text",
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.2,
      },
      "first"
    )
    .to(
      "#yellow-outline-first-banner-trigger .text-container",
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.2,
      },
      "first"
    );

  secondOutlineTimeline = gsap.timeline();
  secondOutlineTimeline
    .addLabel("second")
    .to(
      "#yellow-outline-second-banner-trigger .background",
      {
        opacity: 1,
        duration: 0.8,
        scale: 1,
      },
      "second"
    )
    .to(
      "#yellow-outline-second-banner-trigger .yellow-outline-text",
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.2,
      },
      "second"
    )
    .to(
      "#yellow-outline-second-banner-trigger .text-container",
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.2,
      },
      "second"
    )
    .pause();

  thirdOutlineTimeline = gsap.timeline();
  thirdOutlineTimeline
    .addLabel("third")
    .to(
      "#yellow-outline-third-banner-trigger .background",
      {
        opacity: 1,
        duration: 0.8,
        scale: 1,
      },
      "third"
    )
    .to(
      "#yellow-outline-third-banner-trigger .yellow-outline-text",
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.2,
      },
      "third"
    )
    .to(
      "#yellow-outline-third-banner-trigger .text-container",
      {
        y: 0,
        duration: 0.8,
        opacity: 1,
        delay: 0.2,
      },
      "third"
    )
    .pause();

  // VIDEO PIN
  // ScrollTrigger.create({
  //   trigger: "#video-section",
  //   start: "top top",
  //   end: "bottom+=600 bottom",
  //   pin: true,
  // });

  // SERVICES PIN
  ScrollTrigger.create({
    trigger: "#our-services-section",
    start: "top top",
    end: "bottom+=600 bottom",
    pin: true,
  });

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
  // gsap.to(".pull-me-text-container img", {
  //   y: 10,
  //   duration: 1,
  //   yoyo: true,
  //   repeat: -1,
  // });

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
      bulbPullIdle.value = false;
      bulbInitialY.value = this.target.getBoundingClientRect().top;
    },
    onDragEnd: function (e) {
      if (this.target.getBoundingClientRect().top - bulbInitialY.value > 50 * 0.8) {
        lightUpYourIdeasBulbActive.value = !lightUpYourIdeasBulbActive.value;
        bulbClickAudio.play();
      }

      gsap.to(this.target, {
        y: 0,
        duration: 0.1,
        ease: "bounce",
        onComplete: () => {
          setTimeout(() => {
            bulbPullIdle.value = true;
          }, 100);
        },
      });
    },
  });
});
</script>

<style lang="sass">
@import "../assets/sass/responsive.sass"
@import "../assets/sass/fonts.sass"
@import "../assets/sass/animations.sass"
@import "../assets/sass/layout.sass"
@import "../assets/sass/reset.sass"

#homepage
  padding-top: 0px

#intro-video
  width: 100vw
  height: 100vh
  // background: black
  position: fixed
  z-index: 100
  opacity: 1

#home-banner-section
  background-color: black
  overflow: hidden
  .background-text-container
    position: relative
    transition: 1s all
    opacity: 1
    width: 100%
    height: 80%
    display: flex
    flex-direction: column
    z-index: 10
    +desktop
      height: 70%
    .text-background-row
      display: flex
      flex: 1
      align-items: center
      position: relative
      p
        font-size: 100px
        color: white
        font-weight: bold
        transition: 0.3s all
        opacity: 0.1
        +desktop
          font-size: 60px
        +large-mobile
          font-size: 40px
        +mobile
          font-size: 30px
        &:hover
          opacity: 0.3
          text-shadow: 0px 0px 8px white

      &.first
        p
          &.first
            flex: 1
          &.second
            flex: 2
          &.third
            flex: 1
            text-align: right
      &.second
        p
          &.first
            flex: 2
          &.second
            flex: 1
          &.third
            flex: 1
            text-align: right
      &.third
        p
          &.first
            flex: 1
          &.second
            flex: 1
            text-align: right
      &.fourth
        p
          &.first
            flex: 3
          &.second
            flex: 1
          &.third
            flex: 2
            text-align: right
      &.fifth
        p
          &.first
            flex: 6
          &.second
            flex: 5
            text-align: center
          &.third
            flex: 2.7
            text-align: center
          &.fourth
            flex: 2.2
            text-align: center
          &.fifth
            flex: 5


  .large-logo-container
    position: absolute
    width: 280px
    top: calc(50%)
    left: 50%
    transform: translate(-50%, -35%)
    +desktop
      width: 160px
      top: calc(50%)
    +large-mobile
      width: 135px
    +mobile
      width: 125px
    img
      width: 100%
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
  +desktop
    padding: 0 !important
  .indicator-container-list
    position: absolute
    right: 20px
    top: 50%
    transform: translateY(-50%)
    +desktop
      display: flex
      bottom: 12%
      left: 50%
      right: unset
      transform: translateX(-50%)
      top: unset
    .indicator-button
      width: 12px
      height: 12px
      margin-top: 10px
      margin-bottom: 10px
      border-radius: 50%
      border: 2px solid white
      transition: 0.4s all
      +desktop
        margin-left: 5px
        margin-right: 5px
        margin-top: 0px
        margin-bottom: 20px
      &.active
        background-color: white
  .full-screen-section-container
    +desktop
      width: auto
  .yellow-outline-banner-trigger
    height: 100vh
    display: flex
    position: absolute
  .arrow-down
    position: absolute
    transform: translateX(-50%)
    transform-origin: center center
    bottom: 20px
    left: 50%
    width: 120px
    z-index: -1
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
      // transform: translateY(-200px)
      opacity: 0
      +desktop
        margin-top: 25px
      p
        padding-right: 80px
        +desktop
          padding-right: 0
          font-size: 22px
          text-align: center

#our-services-section
  background-color: black
  +large-mobile
    padding-top: 40%
    padding-bottom: 40%
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
        text-decoration: none
        p
          transition: 0.2s all
          +desktop
            font-size: 20px
        &.active
          p
            color: $orange
        .bullet
          padding-right: 20px
          width: 20px
        .text
          flex: 1
  .bulb-container
    flex: 3
    transform: translateY(25%)
    +large-mobile
      flex: 2
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
        opacity: 0
        transition: 0.2s all
        &.active
          opacity: 1
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
    background-color: rgba(255, 255, 255, 0.28)
    .section-container
      display: flex
      align-items: center
      +large-mobile
        flex-wrap: wrap
        justify-content: space-evenly
      .client-item
        flex: 1
        // margin: 0 10px
        // padding: 20px 0
        transition: 0.2s all
        +large-mobile
          flex: 0 0 20.5%
        &:hover
          transform: scale(1.1)
        img
          width: 100%
  .cta-button-row
    display: flex
    justify-content: center
    text-decoration: none
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
    background-color: rgba(255, 205, 89, 0.25)
    .section-container
      display: flex
      padding-top: 20px
      padding-bottom: 20px
      +large-mobile
        flex-wrap: wrap
        justify-content: space-evenly
      .award-item
        flex: 1
        display: flex
        align-items: center
        +large-mobile
          flex: 0 0 24.5%
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
      width: 20vw
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
        text-align: center
        transform: translate(-50%, -50%)
        opacity: 1
        transition: 0.4s all
        width: 100%
        +desktop
          top: 30%
        p
          opacity: 0
          margin-top: 10px
          width: 100%
          &.active
            opacity: 1
          +desktop
            font-size: 50px
      .large-bulb-pull-image
        position: absolute
        left: 50%
        transform: translateX(-50%)
        overflow-y: clip
        .pull-me-text-desktop
          position: absolute
          right: -40px
          top: 20px
          display: initial
          +large-mobile
            display: none
        img
          width: 20px
          transform: translateY(-50%)
          padding: 0 40px 40px 40px
          &.idle
            animation: bulb-switch-shake 2s ease-in-out infinite
      .pull-me-text-container
        display: flex
        position: absolute
        align-items: center
        justify-content: center
        right: 0
        bottom: 0
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
        width: 143.4%
        top: -17.5%
        left: -21.5%
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
        opacity: 0
        display: flex
        &:hover
          // box-shadow: 0 0 8px yellow
        &.active
          opacity: 1
        .arrow-container
          img
            width: 50px
            height: 50px

.svg-floating-shapes-small
  position: absolute
  z-index: 1
  transition: 0.5s all
  svg
    path
      transition: 0.5s all
  &.star
    top: 18%
    left: 30%
    opacity: 1
    svg
      path
        d: path("M100,25 q0,75 -75,75 q75,0 75,75 q0,-75 75,-75 q-75,0 -75,-75")
  &.circle
    top: 19%
    left: 8%
    opacity: 1
    svg
      path
        d: path("M100,25 q-70,6 -75,75 q6,70 75,75 q70,-5 75,-75 q-5,-70 -75,-75")
  &.diamond
    top: 8%
    left: 32%
    opacity: 1
    svg
      path
        d: path("M100,25 q-44,43 -75,75 q40,42 75,75 q33,-31 75,-75 q-38,-37 -75,-75")


.svg-floating-shapes
  position: absolute
  z-index: 1
  transition: 0.5s all
  opacity: 0
  svg
    path
      transition: 0.5s all
  &.star
    top: 6%
    left: 34%
    opacity: 1
    svg
      path
        d: path("M100,25 q0,75 -75,75 q75,0 75,75 q0,-75 75,-75 q-75,0 -75,-75")
  &.circle
    top: 15%
    left: 16%
    transform: scale(1.2)
    opacity: 1
    svg
      path
        d: path("M100,25 q-70,6 -75,75 q5,70 75,75 q70,-5 75,-75 q-5,-70 -75,-75")
  &.diamond
    top: 0%
    left: 25%
    opacity: 1
    svg
      path
        d: path("M100,25 q-44,43 -75,75 q40,42 75,75 q33,-31 75,-75 q-38,-37 -75,-75")

#video-section
  .hero-video-container
    position: relative
    width: 100%
    #hero-video
      width: 100%
    .play-button-container
      position: absolute
      z-index: 1
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)
      cursor: pointer
      img
        width: 100px

#tsparticles
  position: absolute !important
  width: 100vw
  height: 100vh
  top: 0
  left: 0
  bottom: 0
  right: 0
  padding: 0
  margin: 0
  z-index: 0
  // height: 100vh
  // width: 100%
  // display: flex
  // overflow: hidden
  // position: absolute
  // canvas
  //   width: 100%
  //   height: 100%

.pull-me-text

  display: none
  +large-mobile
    display: initial
    position: absolute
    bottom: -40px
    left: 55%
    transform: translateX(50%)

.services-list-container
  .cta-button-row
    display: flex
    justify-content: flex-start
    text-decoration: none
    .cta-button
      border: 1px solid $orange
      border-radius: 24px
      font-family: "JustSans"
      text-align: center
      padding: 10px 40px
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

.skip-button-container
  border: 1px solid $orange
  border-radius: 24px
  font-family: "JustSans"
  padding: 10px 80px
  display: inline-flex
  cursor: pointer
  transition: 0.2s all
  position: fixed
  right: 80px
  bottom: 25px
  background-color: black
  z-index: 101
  +large-mobile
    right: 50%
    transform: translateX(50%)
    bottom: 40px
  p
    color: $orange
    text-align: center
  &:hover
    background-color: $orange
    box-shadow: 0 0 20px $orange
    p
      color: white




@keyframes arrow-down-move
  0%
    bottom: 10px
  20%
    bottom: 20px
  40%
    bottom: 10px
  60%
    bottom: 20px
  80%
    bottom: 10px
  100%
    bottom: 10px


@keyframes bulb-switch-shake
  0%
    margin-top: 0px
  20%
    margin-top: 20px
  40%
    margin-top: 0px
  60%
    margin-top: 20px
  80%
    margin-top: 0px
  100%
    margin-top: 0px
</style>
