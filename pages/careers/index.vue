<template>
  <div id="careers">
    <!-- Banner -->
    <div class="section-container" style="padding-top: 120px;">
      <!-- Animation here -->
    </div>
    <!-- Staff pics -->
    <div class="section-container full-screen-center-content" style="flex-direction: column; margin-block: 24px;">
      <div class="full-screen-start-between w-full mobile-container"
        style="gap: 24px;  padding-block: 24px; border-bottom: 1px solid white;">
        <div>
          <h2 class="font-orange" style="margin-bottom: 16px">Join us in lighting up the world!</h2>
          <p>
            All great things start with a spark—and at Light Up 7, we believe in
            fanning the embers of creativity and success in each team member.<br /><br /> We
            are a proudly all-in and in-house team that provides support and
            avenues for you to bring your aspirations and visions to life.<br /><br /> When
            you’re ready to light up your career, Light Up 7 is ready for you.
          </p>
        </div>
        <div style="width: 100%;">
          <Carousel :item-to-show="staffPics.length / 2" :autoplay="2000" :wrap-around="true"
            :pauseAutoplayOnHover="true" :transition="600">
            <Slide v-for="(staffPic, key) in staffPics" :key="key">
              <div class="carousel__item">
                <img :src="staffPic.url" :alt="staffPic.alt" class="slide-image" />
              </div>
            </Slide>
          </Carousel>
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
          <div style="width: fit-content; height: 150px; ">
            <img :src="mottoIcon.url" :alt="mottoIcon.alt" style="height: 100%;" />
          </div>
          <div>
            <p style="font-size: 20px; text-align: center;">{{ mottoIcon.title }}</p>
          </div>
          <div>
            <p style="text-align: center;">
              {{ mottoIcon.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <!-- Company pics -->
    <div style="margin-block: 24px;">
      <h2 class="section-container font-orange" style="margin-bottom: 24px;">Our team at work (and play!)</h2>
      <div class="section-container bg-orange-25 full-screen-center-between mobile-container"
        style="gap: 16px; padding-block: 24px;">
        <div v-for="(company, key) in companyPics" :key="key" class="overlay-parent">
          <img :src="company.url" :alt="company.alt" style="width: 100%;" />
          <!-- overlay text -->
          <div class="overlay-child">
            <p v-html="company.text">
            </p>
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
      <h4>check out your dream role here.</h4>
      <!-- filter tabs -->
      <div class="full-screen-center-content tab-parent-container">
        <div class="full-screen-center-content tab-container btn-group" style="flex-wrap: wrap; row-gap: 8px;">
          <button v-for="vacancyTab in vacancyTabs" :key="vacancyTab" class="tab-button" :name="vacancyTab" @click="">{{
            vacancyTab }}</button>
        </div>
      </div>
      <!-- vacancy grid -->
      <div class="grid-3-cols">
        <div v-for="(recent, key) in recentJobs" :key="key" class="full-screen-center-content"
          style="flex-direction: column; gap: 16px">
          <div>
            <p style="font-size: 24px;">{{ recent.title }}</p>
          </div>
          <NuxtLink class="orange-outlined-button vacancy-btn" style="font-family: 'JustSans';" :to="recent.url">apply
            now!</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as Staffs } from '@/assets/images/careers/staff-pics'
import { default as Mottos } from '@/assets/images/careers/motto-icons'
import { default as Companys } from '@/assets/images/careers/company-pics'

const staffPics = Staffs.map((staff: any, key: number) => ({
  url: staff,
  alt: `Staff pic ${key + 1}`
}))
const mottoTitle = ['Celebrating Creativity', 'Doing Work That Matters', 'Always Growing, Never Stopping']
const mottoText = [`We believe the greatest ideas comes from the experience of being
              human. Whatever shape or form, your creativity will always have a
              seat at our table.`, `Joining Light Up 7 means being part of projects that make a
              difference. Lead or have a hand in creating lasting impact with
              brands and organisations across the APAC region.`, `We understand wanting to leave your mark in the industry and we
              will support you until you make it! No matter the goals, you will
              have the resources to thrive.`]
const mottoIcons = Mottos.map((motto, key) => ({
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
    title: "Job title",
    url: ""
  },
  {
    title: "Job title",
    url: ""
  },
  {
    title: "Job title",
    url: ""
  },
  {
    title: "Job title",
    url: ""
  },
  {
    title: "Job title",
    url: ""
  },
  {
    title: "Job title",
    url: ""
  },
]
</script>

<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

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
