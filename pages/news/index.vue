<template>
    <div id="news">
        <!-- Banner -->
        <div class="section-container" style="padding-top: 120px;">
            <!-- Animation here -->
        </div>
        <!-- Header -->
        <div class="full-screen-center-content"
            style="text-align: center; margin-block: 48px; flex-direction: column; gap: 64px;">
            <div>
                <h1 class="font-orange" style="font-size: 48px; font-weight: bold;">What we've been up to</h1>
                <p>Learn more about our shining work for clients, plus illuminating insights and company stories.</p>
            </div>
            <!-- Animation Here -->
            <div>
                <img :src="glow_space_bulb" alt="Space bulb" class="pulse-opacity">
            </div>
        </div>
        <!-- News List -->
        <div class="full-screen-center-content hover-news" style="flex-direction: column;">
            <NuxtLink v-for="thumb in news" :key="thumb.id" style="width: 100%;" class="divider-parent"
                :to="`/news/${thumb.id}`">
                <div class="section-container full-screen-start-start divider-child" style="padding: 35px 80px;">
                    <div style="flex: 1;">
                        <img :src="thumb.img" style="width: 100%;" />
                    </div>
                    <div class="full-screen-start-center"
                        style="flex-direction: column; flex: 2; color: white; gap: 16px; padding: 0 24px;">
                        <p style="font-size: 18px;">{{ thumb.date }} | {{ thumb.type }}</p>
                        <h1 style="font-weight: bold; font-size: 36px; margin: 0">{{ thumb.title }}</h1>
                        <p>{{ thumb.description }}</p>
                        <NuxtLink class="white-outlined-button full-screen-center-content"
                            style="font-family: 'JustSans'; gap: 8px; padding: 4px 28px; text-decoration: none"
                            :to="`/news/${thumb.id}`">
                            <div>read
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
                    <p>Prev</p>
                </button>
                <div class="full-screen-center-content">
                    <button v-for="page in paginateLength" :key="page" style="color: white; font-size: 24px;"
                        :class="{ 'current-page': currentPage == page }" @click="switchPage(page, $event)"
                        :value="page">
                        {{ page }}
                    </button>
                </div>
                <button class="full-screen-center-content" style="gap: 24px" @click="switchPage(0, $event)">
                    <p>Next</p>
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

const news: any[] = reactive([
    {
        id: 'news_1',
        img: NewsThumbnail,
        date: new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        type: 'Blog',
        title: 'Title',
        description: 'Description',
    },
    {
        id: 'news_1',
        img: NewsThumbnail,
        date: new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        type: 'Blog',
        title: 'Title',
        description: 'Description',
    },
    {
        id: 'news_1',
        img: NewsThumbnail,
        date: new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        type: 'Blog',
        title: 'Title',
        description: 'Description',
    },
    {
        id: 'news_1',
        img: NewsThumbnail,
        date: new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        type: 'Blog',
        title: 'Title',
        description: 'Description',
    },
    {
        id: 'news_1',
        img: NewsThumbnail,
        date: new Date().toLocaleDateString('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
        }),
        type: 'Blog',
        title: 'Title',
        description: 'Description',
    },
])

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

<style lang="sass">
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
</style>