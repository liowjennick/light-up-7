<template>
  <div id="news">
    <!-- Banner -->
    <div
      id="news-banner-section"
      class="section-container full-screen-center-content full-screen-section-container"
      style="padding-top: 120px;"
    >
      <!-- Animation here -->
      <div class="banner-title-container">
        <img
          alt="News Banner Title"
          class="banner-title"
          src="../../assets/images/news/banner-title.png"
        />

        <div class="paperplane-face-right-container">
          <img
            alt="paperplane-right"
            src="../../assets/images/news/paperplane-face-right.png"
          />
        </div>

        <div class="paperplane-face-left-container">
          <img
            alt="paperplane-left"
            src="../../assets/images/news/paperplane-face-left.png"
          />
        </div>

        <!-- <div class="star-1-container">
          <LottieAnimation
            autoplay
            loop
            :animation-data="NewsStar"
            class="star-1"
          />
        </div>
        <div class="star-2-container">
          <LottieAnimation
            autoplay
            loop
            :animation-data="NewsStar"
            class="star-2"
          />
        </div> -->
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
    <!-- Header -->
    <div
      class="section-container"
      style="text-align: center; flex-direction: column"
    >
      <div>
        <h1
          class="font-orange mb-10 font-weight-600"
          style="font-size: 48px"
        >
          What we've been up to
        </h1>
        <p class="font-white font-weight-100">Learn more about our shining work for clients, plus illuminating insights and company stories.</p>
      </div>
      <!-- Animation Here -->
      <div>
        <LottieAnimation
          class="lottie-globe-rotate"
          autoplay
          loop
          :animation-data="GlobeRotateJSON"
        />
        <!-- <img :src="glow_space_bulb" alt="Space bulb" class="pulse-opacity"> -->
      </div>
    </div>
    <!-- News List -->
    <div
      class="full-screen-center-content hover-news"
      style="flex-direction: column"
    >
      <div
      v-for="thumb in paginatedNews"
      :key="thumb.id"
      style="width: 100%"
      class="divider-parent"
      :to="`/news/${thumb.id}`"
      >
        <div class="section-container full-screen-start-start divider-child news-row">
          <div class="thumbnail-container">
            <img
              :alt="thumb.title"
              :src="`/images/news/${thumb.thumbnail_src}`"
              style="width: 100%"
            />
          </div>
          <div
            class="news-content-container full-screen-start-center"
            style="flex-direction: column; flex: 2; color: white; gap: 16px; padding: 0 24px"
          >
            <p
              class="font-weight-200"
              style="font-size: 18px"
            >
              <span class="mr-4">{{ thumb.created_at }}</span> | <span class="ml-4">{{ thumb.category }}</span>
            </p>
            <h1
              class="font-weight-700"
              style="font-size: 36px; margin: 0"
            >
              {{ thumb.title }}
            </h1>
            <p class="news-description font-weight-200">{{ thumb.description }}</p>
            <NuxtLink
              class="white-outlined-button full-screen-center-content"
              :to="`/news/${thumb.slug}`"
            >
              <div class="read-more">read more</div>
              <div style="height: 16px">
                <img
                  alt="Double Chevron"
                  :src="double_chevron"
                  style="height: 100%"
                />
              </div>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
    <!-- Pagination -->
    <div
      class="section-container full-screen-center-content"
      style="padding-block: 48px"
    >
      <div class="full-screen-center-content paginate-group">
        <button
          @click="switchPage(-1, $event)"
          class="full-screen-center-content"
          style="gap: 24px"
        >
          <div style="height: 24px">
            <img
              :src="arrow_left"
              alt="Prev"
              style="height: 100%"
            />
          </div>
          <p class="font-white">Prev</p>
        </button>
        <!-- Page Numbers -->
        <div class="full-screen-center-content">
          <button
            v-for="page in paginateLength"
            :key="page"
            @click="switchPage(page, $event)"
            style="color: white; font-size: 24px"
            :class="{ 'current-page': currentPage == page }"
            :value="page"
          >
            {{ page }}
          </button>
        </div>
        <!-- Next Button -->
        <button
        
          @click="switchPage(0, $event)"
          class="full-screen-center-content"
          style="gap: 24px"
        >
          <p class="font-white">Next</p>
          <div style="height: 24px">
            <img
              :src="arrow_right"
              alt="Next"
              style="height: 100%"
            />
          </div>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import double_chevron from "@/assets/svg/angle-double-right.svg";
import arrow_left from "@/assets/svg/arrow-left.svg";
import arrow_right from "@/assets/svg/arrow-right.svg";
import space_bulb from "@/assets/svg/space-bulb.svg";
import glow_space_bulb from "@/assets/svg/glow-space-bulb.svg";
import NewsThumbnail from "@/assets/images/news/news-thumbnail.png";
import { computed, ref } from "vue";
import { DotLottieVue } from "@lottiefiles/dotlottie-vue";
import NewsData from "../../public/data/news_data.js";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin, Draggable } from "gsap/all";
import { LottieAnimation } from "lottie-web-vue";
import GlobeRotateJSON from "@/assets/images/news/lottie/globe-lottie.json";
import NewsStar from "@/assets/images/news/lottie/NewsHeader_Stars.json";
import NewsDialog from "@/assets/images/news/lottie/NewsHeader_Dialog.json";
import NewsLoudspeaker from "@/assets/images/news/lottie/NewsHeader_Loudspeaker.json";
import ArrowDownJSON from "@/assets/images/home/arrow-down-lottie.json";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable);

const news: any[] = reactive(NewsData);


useHead({
  title: "Our News | Light Up 7",
  meta: [{ name: "description", content: "The latest news, updates and insights from Light Up 7, an advertising agency in Kuala Lumpur, specialising in brand activation experiences. Read more here. " },
    {name: "keywords", content: "advertising agency in kuala lumpur"}
  ],
});

const currentPage: Ref<number> = ref(1);
const itemsPerPage = 4;
const paginatedNews = computed(() => {
  const startIndex = (currentPage.value - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  return news.slice(startIndex, endIndex); // Only show items for the current page
});
const paginateLength = computed(() => Math.ceil(news.length / itemsPerPage));
const switchPage = (page: number, e: Event) => {
  switch (true) {
    case page == 0 && currentPage.value < paginateLength.value:
      currentPage.value++;
      break;
    case page == -1 && currentPage.value > 1:
      currentPage.value--;
      break;
    case page > 0:
      currentPage.value = page;
      break;
  }
};

onMounted(() => {
  // INTRO ANIMATION
  // MEGAPHONE DIM
  // LIGHT UP
  // gsap.to(".banner-title-container .banner-title", {
  //   duration: 1,
  //   opacity: 1,
  //   delay: 1.2,
  //   ease: "sine.inOut",
  // });
  // gsap.to(".banner-message-bubble-container", {
  //   duration: 0.5,
  //   opacity: 1,
  //   delay: 1.4,
  // });
  // gsap.to(".banner-megaphone-container", {
  //   duration: 0.5,
  //   opacity: 1,
  //   delay: 1.4,
  // });
  let bannerTimeline = gsap.timeline({
    scrollTrigger: {
      pin: true,
      trigger: "#news-banner-section ",
      start: "top top",
      end: "+=500",
      scrub: 1,
      toggleActions: "play reverse play reverse",
      onLeave: () => {
        gsap.to(".banner-title-container .banner-title", {
          duration: 0.2,
          opacity: 1,
        })
      }
    }
  })

  bannerTimeline
    .addLabel("first")
    .to(".paperplane-face-right-container", {
      left: "15%"
    }, "first")
    .to(".paperplane-face-left-container", {
      right: "0%"
    }, "first")
});
</script>

<style lang="sass" scoped>
@import '../../assets/sass/layout.sass'
@import '../../assets/sass/inputs.sass'
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"

@keyframes pulsing-glow
    0%
        opacity: 50%
    100%
        opacity: 100%

.pulse-opacity
    animation: 2s infinite alternate pulsing-glow
.paginate-group
    button
        transition: background .1s linear
        padding: 8px 24px
        border-radius: 100px
        background-color: transparent
        border: none
        cursor: pointer
        &:hover
            @extend .bg-orange-25
.current-page
    color: $orange !important
.hover-news
    .divider-parent
        text-decoration: none
        &:hover
            @extend .bg-orange-25
        .divider-child
            border-top: 1px solid #ffffff40
    .divider-parent:last-child
        .divider-child
            border-bottom: 1px solid #ffffff40

#news-banner-section
  position: relative
  .banner-title-container
      width: 70%
      position: relative
      z-index: 0
      .banner-title
          opacity: 0.4
          width: 100%
  .banner-megaphone-container
      width: 35%
      position: absolute
      top: -25%
      left: -12%
      z-index: -1
      opacity: 0.4
      img
          width: 100%
  .banner-megaphone-dim-container
      width: 12%
      position: absolute
      top: 9%
      left: -4.4%
      opacity: 0.4
      img
          width: 100%
          transform-origin: bottom right
  .banner-message-bubble-container
      width: 30%
      position: absolute
      bottom: -12%
      right: -12%
      opacity: 0.4
      z-index: -1
      img
          width: 100%
  .star-1-container
      position: absolute
      width: 15%
      right: 0
      top: 0
      z-index: -1
      img
          width: 100%
          -webkit-transform: scaleX(-1)
          transform: scaleX(-1)
  .star-2-container
      position: absolute
      width: 15%
      left: -5%
      bottom: -5%
      transform: scaleX(-1)
      z-index: -1
      img
          width: 100%
.lottie-globe-rotate
    width: 600px
    display: block
    margin: 0 auto
    +large-mobile
        width: 400px
    +mobile
        width: 100%

.white-outlined-button
    font-size: 16px
    padding: 8px 40px
    text-decoration: none
    font-weight: 200
    display: flex
    align-items: center
    transition: 0.2s all
    .read-more
        margin-right: 10px
    &:hover
        background-color: $orange
        box-shadow: 0 0 20px $orange

.news-description
    line-height: 24px
    font-size: 16px

.news-row
    display: flex
    padding: 35px 80px
    +desktop
        display: block
    +large-mobile
        padding: 0 0 80px 0
    .thumbnail-container
        flex: 1
        +desktop
            margin-bottom: 20px
    .news-content-container

.paperplane-face-right-container
  position: absolute
  bottom: -20px
  left: -25%
  width: 25%
  +large-mobile
    left: -150%
  img
    width: 100%

.paperplane-face-left-container
  position: absolute
  top: -40px
  right: -30%
  width: 40%
  +large-mobile
    right: -150%
  img
    width: 100%

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
