<template>
    <div id="news">
        <!-- Banner -->
        <div id="news-banner-section" class="section-container full-screen-center-content full-screen-section-container" style="padding-top: 120px;">
            <!-- Animation here -->
            <div class="banner-title-container">
                <img src="../../assets/images/news/banner-title.png" />
                <div class="banner-megaphone-container">
                    <img src="../../assets/images/news/banner-glow-megaphone.png" />
                </div>
                <div class="banner-message-bubble-container">
                    <img src="../../assets/images/news/banner-message-bubble.png" />
                </div>
            </div>

        </div>
        <!-- Header -->
        <div class="section-container"
            style="text-align: center; flex-direction: column;">
            <div>
                <h1 class="font-orange mb-10 font-weight-600" style="font-size: 48px;">What we've been up to</h1>
                <p class="font-white font-weight-100">Learn more about our shining work for clients, plus illuminating insights and company stories.</p>
            </div>
            <!-- Animation Here -->
            <div>
            <DotLottieVue class="lottie-globe-rotate" autoplay loop src="/lottie/news/globe-rotate.json" />
                <!-- <img :src="glow_space_bulb" alt="Space bulb" class="pulse-opacity"> -->
            </div>
        </div>
        <!-- News List -->
        <div class="full-screen-center-content hover-news" style="flex-direction: column;">
            <NuxtLink v-for="thumb in news" :key="thumb.id" style="width: 100%;" class="divider-parent"
                :to="`/news/${thumb.id}`">
                <div class="section-container full-screen-start-start divider-child news-row" style="padding: 35px 80px;">
                    <div class="thumbnail-container">
                        <img :src="`/images/news/${thumb.thumbnail_src}`" style="width: 100%;" />
                    </div>
                    <div class="news-content-container full-screen-start-center"
                        style="flex-direction: column; flex: 2; color: white; gap: 16px; padding: 0 24px;">
                        <p class="font-weight-200" style="font-size: 18px;"><span class="mr-4">{{ thumb.created_at }}</span> | <span class="ml-4">{{ thumb.category }}</span></p>
                        <h1 class="font-weight-700" style="font-size: 36px; margin: 0">{{ thumb.title }}</h1>
                        <p class="news-description font-weight-200">{{ thumb.description }}</p>
                        <NuxtLink class="white-outlined-button full-screen-center-content"
                            :to="`/news/${thumb.slug}`">
                            <div class="read-more">read
                                more</div>
                            <div style="height: 16px;"><img :src="double_chevron" style="height: 100%;" /></div>
                        </NuxtLink>
                    </div>
                </div>
            </NuxtLink>
        </div>
        <!-- Pagination -->
        <div class="section-container full-screen-center-content" style="padding-block: 48px;">
            <div class="full-screen-center-content paginate-group">
                <button class="full-screen-center-content" style="gap: 24px" @click="switchPage(-1, $event)">
                    <div style="height: 24px;">
                        <img :src="arrow_left" alt="Prev" style="height: 100%;">
                    </div>
                    <p class="font-white">Prev</p>
                </button>
                <div class="full-screen-center-content">
                    <button v-for="page in paginateLength" :key="page" style="color: white; font-size: 24px;"
                        :class="{ 'current-page': currentPage == page }" @click="switchPage(page, $event)"
                        :value="page">
                        {{ page }}
                    </button>
                </div>
                <button class="full-screen-center-content" style="gap: 24px" @click="switchPage(0, $event)">
                    <p class="font-white">Next</p>
                    <div style="height: 24px;">
                        <img :src="arrow_right" alt="Next" style="height: 100%;">
                    </div>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import double_chevron from '@/assets/svg/angle-double-right.svg'
import arrow_left from '@/assets/svg/arrow-left.svg'
import arrow_right from '@/assets/svg/arrow-right.svg'
import space_bulb from '@/assets/svg/space-bulb.svg'
import glow_space_bulb from '@/assets/svg/glow-space-bulb.svg'
import NewsThumbnail from '@/assets/images/news/news-thumbnail.png'
import { computed, ref } from "vue"
import { DotLottieVue } from '@lottiefiles/dotlottie-vue'
import NewsData from "../../public/data/news_data.js"

const news: any[] = reactive(NewsData)

const currentPage: Ref<number> = ref(1)
const paginateLength = computed(() => news.length % 4 > 0 ? Math.floor(news.length / 4) + 1 : Math.floor(news.length / 4))
const switchPage = (page: number, e: Event) => {
    switch (true) {
        case page == 0 && currentPage.value < paginateLength.value:
            currentPage.value++
            break;
        case page == -1 && currentPage.value > 1:
            currentPage.value--
            break;
        case page > 0:
            currentPage.value = Number((e.target as HTMLButtonElement).value)
            break;
    }
}
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
    .banner-title-container
        width: 80%
        position: relative
        img
            width: 100%
    .banner-megaphone-container
        width: 20%
        position: absolute
        top: 0%
        left: -5%
        img
            width: 100%
    .banner-message-bubble-container
        width: 15%
        position: absolute
        bottom: 5%
        right: -5%
        img
            width: 100%
.lottie-globe-rotate
    width: 400px
    height: 400px
    display: block
    margin: 0 auto

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
    +desktop
        display: block
    .thumbnail-container
        flex: 1
        +desktop
            margin-bottom: 20px
    .news-content-container
</style>