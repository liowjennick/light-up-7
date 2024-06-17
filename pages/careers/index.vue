<template>
  <div id="careers">
    <!-- Banner -->
    <div class="section-container" style="padding-top: 120px;">
      <!-- Animation here -->
    </div>
    <!-- Staff pics -->
    <div class="section-container full-screen-center-content" style="flex-direction: column; margin-block: 24px;">
      <div class="full-screen-start-between w-full"
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
          <Carousel :item-to-show="staffPics.length / 2" :autoplay="2000" :wrap-around="true" :pauseAutoplayOnHover="true"
            :transition="600">
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
    <div class="section-container full-screen-start-center" style="flex-direction: column; gap: 32px; margin-block: 64px;">
      <h2 class="font-orange">How we continue to shine</h2>
      <div class="full-screen-center-around" style="gap: 48px">
        <div v-for="(mottoIcon, key) in mottoIcons" :key="key" class="full-screen-center-between" style="flex-direction: column; gap: 16px">
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
    <div class="section-container">
      <h2 class="font-orange">Our team at work (and play!)</h2>
      <div class="bg-orange-25">
        <div>
          <img src="" width="477" />
          <!-- overlay text -->
          <p>
            “I love how diverse the team is. You learn so much from people of
            various backgrounds and plus point: more festive celebrations!’ F.I,
            Head of Motion Design
          </p>
        </div>
        <div>
          <img src="" width="477" />
          <!-- overlay text -->
          <p>
            “Super thankful for all the opportunities where the team trusted me
            to take lead on projects. Truly a transformative experience at Light
            Up 7.” I.S, Project Manager
          </p>
        </div>
        <div>
          <img src="" width="477" />
          <!-- overlay text -->
          <p>
            “The work’s challenging but so is the downtime! Nothing beats a long
            day of projects like one (or 5) rounds of pool.” M.S, Video
            Production Specialist
          </p>
        </div>
      </div>
    </div>
    <!-- Vacancies -->
    <div class="section-container">
      <p>ready to explore a new path?</p>
      <p>check out your dream role here.</p>
      <!-- filter tabs -->
      <div>
        <div>
          <div><button>all</button></div>
          <div><button>finance/accounting</button></div>
          <div><button>events</button></div>
          <div><button>internship</button></div>
          <div><button>client services</button></div>
          <div><button>content</button></div>
          <div><button>creative</button></div>
          <div><button>video</button></div>
          <div><button>web</button></div>
        </div>
      </div>
      <!-- vacancy grid -->
      <div>
        <div>
          <div>
            <p>Job Title</p>
          </div>
          <div><button>apply now!</button></div>
        </div>
        <div>
          <div>
            <p>Job Title</p>
          </div>
          <div><button>apply now!</button></div>
        </div>
        <div>
          <div>
            <p>Job Title</p>
          </div>
          <div><button>apply now!</button></div>
        </div>
        <div>
          <div>
            <p>Job Title</p>
          </div>
          <div><button>apply now!</button></div>
        </div>
        <div>
          <div>
            <p>Job Title</p>
          </div>
          <div><button>apply now!</button></div>
        </div>
        <div>
          <div>
            <p>Job Title</p>
          </div>
          <div><button>apply now!</button></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { default as Staffs } from '@/assets/images/careers/staff-pics'
import { default as Mottos } from '@/assets/images/careers/motto-icons'

const staffPics = Staffs.map((staff: any, key: number) => ({
  url: staff,
  alt: `Staff pic ${key + 1}`
}))
const mottoTitle = ['Celebrating Creativity','Doing Work That Matters','Always Growing, Never Stopping']
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

</script>

<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

.slide-image
  max-width: 100%
.bg-orange-25
  background-color: $orange
  opacity: 25%
</style>
