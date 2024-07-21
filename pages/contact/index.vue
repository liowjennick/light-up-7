<template>
  <div id="contact-page">
    <div class="header-container">
      <div class="contact-header full-screen-center-content">
        <img src="../../assets/images/contact/contact-header.png" style="width: 60%; height: auto;"
          id="contact-header-title" />
        <PhoneLine class="phone-line" />
        <div class="black-screen">
        </div>
        <Phone class="phone" />
      </div>
    </div>
    <div class="section-container full-screen-start-center" style="gap: 60px">
      <div style="padding: 24px 0px; flex-direction: column;" class="full-screen-start-start">
        <p style="margin-bottom: 8px" class="font-orange">ready to light up?</p>
        <p style="margin-bottom: 30px; font-weight: 900; font-size: 74px; line-height: 1em;" class="font-orange">let’s
          talk</p>
        <p class="font-orange">our office</p>
        <p class="font-white">LIGHT UP 7 SDN. BHD. <br>
          1st Floor, West Wing, <br>
          Bangunan ECM Libra, <br>
          No. 8 Jalan Damansara Endah, <br>
          Damansara Heights, <br>
          50490 Kuala Lumpur, Malaysia
          <br><br>
          Business Hours <br>
          9.00 am – 6.00 pm | Monday – Friday <br>
          Weekends & Public Holidays – Closed
        </p>
        <a target="_blank" href="https://www.google.com/maps/place/Light+Up+7/@3.1498933,101.6651169,17z/data=!3m2!4b1!5s0x31cc49ab0e0f7ac3:0xcaf3484f21fd43ab!4m6!3m5!1s0x31cc4c5fabb47ffb:0x52e9e06c169d79dc!8m2!3d3.1498933!4d101.6651169!16s%2Fg%2F11b6gchlp_?entry=ttu" class="orange-outlined-button" style="margin-block: 32px 24px; text-decoration: none;">
          view map
        </a>
        <p style="font-size: 20px;" class="font-orange">new business & inquiries</p>
        <p class="font-white">
          info@lightup7.com
          <br><br>
          +6011-11578977 <br>
          +603-8605 3561
        </p>
        <p style="font-size: 20px; margin-top: 20px" class="font-orange">Careers</p>
        <p class="font-white">jobs@lightup7.com</p>
        <NuxtLink to="/careers" class="orange-outlined-button" style="margin-top: 32px; text-decoration: none;">
          view openings
        </NuxtLink>
      </div>
      <div class="full-screen-start-start"
        style="flex: 1; padding: 48px; border-radius: 60px; background-color: #FFCF6D35; gap: 20px; flex-direction: column;">
        <p style="font-size: 36px; margin-bottom: 32px" class="font-orange">Contact Form</p>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="name" class="font-white">your name</label>
          <input type="text" v-model="formValues.name" id="name" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="business_name" class="font-white">business name</label>
          <input type="text" v-model="formValues.business_name" id="business_name" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="email" class="font-white">email</label>
          <input type="text" v-model="formValues.email" id="email" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="phone" class="font-white">phone</label>
          <input type="text" v-model="formValues.phone" id="phone" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="company_website" class="font-white">company website</label>
          <input type="text" v-model="formValues.company_website" id="company_website" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="business_industry" class="font-white">business industry</label>
          <input type="text" v-model="formValues.business_industry" id="business_industry" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="interest" class="font-white">interest</label>
          <input type="text" v-model="formValues.interest" id="interest" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>
        <div style="width: 100%; flex-direction: column; gap: 20px;" class="full-screen-start-start">
          <label for="tell_us_more" class="font-white">tell us more</label>
          <input type="text" v-model="formValues.tell_us_more" id="tell_us_more" class="font-white"
            style="width: 95%; border: 1px solid white; border-radius: 100px; padding: 16px 20px; background: transparent; font-family: 'JustSans'" />
        </div>

        <p class="font-white">CAPTCHA</p>
        <div id="g-recaptcha">
        </div>

        <div>
          <button @click="submitForm" class="orange-outlined-button">submit form</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap';
import { ScrollTrigger, CustomEase } from 'gsap/all';
import PhoneLine from '~/assets/svg/phone-line.vue';
import Phone from '~/assets/svg/phone.vue'

gsap.registerPlugin(ScrollTrigger)
useHead({
  script: [
    {
      type: "text/javascript",
      async: true,
      defer: true,
      render: "explicit",
      src: `https://www.google.com/recaptcha/api.js?render=6LeVjccUAAAAALn5Y5sSEv3fwy_MAq8gxXR0e9J3`
    }
  ]
})

const grecaptchaWidget = ref(null)

onMounted(() => {
  const st = {
    trigger: ".contact-header",
    pin: ".header-container",
    scrub: 1,
    start: "top top",
    end: "bottom top",
    // markers: true,
    toggleActions: "play reverse play reverse",
  }
  const tl = gsap.timeline({
    scrollTrigger: st
  })
  tl.to(".black-screen", {
    keyframes: {
      width: ["100vw", "88vw", "85vw", "80vw", "73vw", "57vw", "57vw", "57vw", "57vw", "57vw", "55vw", "45vw", "35vw", "25vw", "15vw", "5vw", 0]
    }
  }
  ).to(".phone", {
    ease: "sine.inOut",
    keyframes: {
      rotate: ['135deg', '180deg', '135deg', '90deg', '45deg', '0deg', '-90deg', '-180deg', '-225deg', '-250deg', '-270deg', '-280deg', '-300deg', '-315deg', '-360deg'],
      x: [0, "1vw", "1vw", "10vw", "15vw", "25vw", "25vw", "25vw", "25vw", "25vw", "30vw", "40vw", "50vw", "60vw", "70vw", "80vw", "82.5vw"],
      yPercent: [0, 10, 60, 85, 90, 83, 75, 70, 75, 83, 95, 100, 103, 98, 80, 50, 31.5]
    },
  }, "<")
  .to(".extend", {
    duration: .1
  })
  
  console.log("Loaded")
  grecaptchaWidget.value = grecaptcha.render("g-recaptcha", {
    "sitekey": "6LfzyL4UAAAAAMKy1bCFyL8wKNOC3ehLQlt8PQH1"
  })
})

// const onloadCallback = () => {
//   console.log("Loaded")
//   grecaptcha.render("g-recaptcha", {
//     "sitekey": "6LfzyL4UAAAAAMKy1bCFyL8wKNOC3ehLQlt8PQH1"
//   })
// }

const formValues = ref({
  name: "",
  business_name: "",
  email: "",
  phone: "",
  company_website: "",
  business_industry: "",
  interest: "",
  tell_us_more: ""
})

const submitForm = async (e) => {
  e.preventDefault()

  grecaptcha.ready(async function () {
    const token = await grecaptcha.execute('6LeVjccUAAAAALn5Y5sSEv3fwy_MAq8gxXR0e9J3', { action: 'submit' })

    const consumer_key = "ck_b5c2220b7a8a191bf1e459f792ded895c4f4d6d2"
    const consumer_secret = "cs_323064df8c1c4dd7f14239a0420906cf3bad4dc7"

    console.log("Basic " + btoa(`${consumer_key}:${consumer_secret}`))

    const response = await fetch("https://lightup7.com/wp-json/gf/v2/forms/2/submissions", {
      method: "POST",
      headers: {
        "Authorization": "Basic " + btoa(`${consumer_key}:${consumer_secret}`),
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        "name": formValues.value.name,
        "business_name": formValues.value.business_name,
        "email": formValues.value.email,
        "phone": formValues.value.phone,
        "company_website": formValues.value.company_website,
        "business_industry": formValues.value.business_industry,
        "interest": formValues.value.interest,
        "tell_us_more": formValues.value.tell_us_more,
        "token": token
      })
    })

    const response_data = response.json()
    console.log(response_data)

  });
}
</script>

<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/reset.sass"
@import "../../assets/sass/inputs.sass"

.header-container
  height: 100vh

.contact-header
  position: relative
  height: 100%

#contact-header-title
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 5
.phone-line
  transform: translate(-4.5%, 0%)
  height: 100%
  width: 100%
.black-screen
  height: inherit
  width: 100%
  background-color: black
  position: absolute
  top: 0
  right: 0
  z-index: 2
.phone
  position: absolute
  top: 0
  left: 0
  z-index: 3
  transform: translate(-15%, -5%) 
</style>
