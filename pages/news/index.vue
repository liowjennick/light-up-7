import { NuxtLink } from '../../.nuxt/components';

<template>
    <div id="news">
        <!-- Banner -->
        <div>
            <!-- Animation Here -->
        </div>
        <!-- Header -->
        <div>
            <h1>What we've been up to</h1>
            <p>Learn more about our shining work for clients, plus illuminating insights and company stories.</p>
            <!-- Animation Here -->
        </div>
        <!-- News List -->
        <div class="full-screen-center-content" style="flex-direction: column;">
            <div v-for="thumb in news" :key="thumb.id">
                <div class="section-container"></div>
                <div class="bg-orange-25 full-screen-center-content">
                    <img :src="thumb.img" />
                    <div class="full-screen-center-start" style="flex-direction: column;">
                        <p style="font-size: 20px;">{{ thumb.date }} | {{ thumb.type }}</p>
                        <h4>{{ thumb.title }}</h4>
                        <p>{{ thumb.description }}</p>
                        <NuxtLink class="white-outlined-button" style="font-family: 'JustSans';"
                            :to="`/news/${thumb.id}`">Read more<span><img src="double_chevron" width="16" /></span>
                        </NuxtLink>
                    </div>
                </div>
                <div class="section-container"></div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import double_chevron from '@/assets/svg/angle-double-right.svg'
import NewsThumbnail from '@/assets/images/news/news-thumbnail.png'

const news = [
    {
        id: '1',
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
        id: '4',
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
        id: '2',
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
        id: '3',
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
]
</script>

<style></style>