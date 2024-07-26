<template>
  <div id="contact-page">
    <div class="header-container">
      <div class="contact-header full-screen-center-content">
        <img class="banner-image" src="../../assets/images/contact/contact-banner.svg" />
        <img src="../../assets/images/contact/contact-header.png" id="contact-header-title" />
        <div class="black-screen">
        </div>
        <!-- <PhoneLine class="phone-line" />
        <Phone class="phone" /> -->
      </div>
    </div>
    <div class="section-container contact-body">
      <div class="contact-info-container">
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
        <a target="_blank"
          href="https://www.google.com/maps/place/Light+Up+7/@3.1498933,101.6651169,17z/data=!3m2!4b1!5s0x31cc49ab0e0f7ac3:0xcaf3484f21fd43ab!4m6!3m5!1s0x31cc4c5fabb47ffb:0x52e9e06c169d79dc!8m2!3d3.1498933!4d101.6651169!16s%2Fg%2F11b6gchlp_?entry=ttu"
          class="orange-outlined-button" style="margin-block: 32px 24px; text-decoration: none;">
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
        <a href="/careers" class="orange-outlined-button" style="margin-top: 32px; text-decoration: none;">
          view openings
        </a>
      </div>
      <div class="contact-form-container">
        <p style="font-size: 36px; margin-bottom: 32px" class="font-orange">Contact Form</p>
        <div class="contact-form-item">
          <label for="name" class="font-white">your name</label>
          <input type="text" v-model="formValues.name" id="name" class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="business_name" class="font-white">business name</label>
          <input type="text" v-model="formValues.business_name" id="business_name"
            class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="email" class="font-white">email</label>
          <input type="text" v-model="formValues.email" id="email" class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="phone" class="font-white">phone</label>
          <input type="text" v-model="formValues.phone" id="phone" class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="company_website" class="font-white">company website</label>
          <input type="text" v-model="formValues.company_website" id="company_website"
            class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="business_industry" class="font-white">business industry</label>
          <input type="text" v-model="formValues.business_industry" id="business_industry"
            class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="interest" class="font-white">interest</label>
          <input type="text" v-model="formValues.interest" id="interest" class="font-white contact-form-text" />
        </div>
        <div class="contact-form-item">
          <label for="tell_us_more" class="font-white">tell us more</label>
          <textarea id="tell_us_more" v-model="formValues.tell_us_more" class="font-white contact-form-text"></textarea>
        </div>

        <div>
          <button class="orange-outlined-button g-recaptcha" data-sitekey="6LeVjccUAAAAALn5Y5sSEv3fwy_MAq8gxXR0e9J3"
            data-callback="onSubmit" data-action='submit'>submit form</button>
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
  title: "Light Up 7 | Brand Activation Agency",
  meta: [{ name: "description", content: "Light Up 7 | Brand Activation Agency" }],
  script: [
    {
      type: "text/javascript",
      async: true,
      defer: true,
      src: `https://www.google.com/recaptcha/api.js`
    }
  ]
})

const grecaptchaWidget = ref(null)

onMounted(() => {
  window.onSubmit = (token: string) => {
    submitForm(token)
  }

  gsap.from(".banner-image", {
    x: "-150vw",
    scrollTrigger: {
      ease: "power3.inOut",
      trigger: ".header-container",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play reverse play reverse"
    }
  })
})

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

async function submitForm(token: string) {
  console.log(token)
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
      input_1: formValues.value.name,
      input_2: formValues.value.business_name,
      input_3: formValues.value.phone,
      input_4: formValues.value.email,
      input_5: formValues.value.company_website,
      input_6: formValues.value.business_industry,
      input_7: formValues.value.interest,
      // "tell_us_more": formValues.value.tell_us_more,
      input_8: token
    })
  })

  const response_data = response.json()
  console.log(response_data)
}
</script>

<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/reset.sass"
@import "../../assets/sass/inputs.sass"

.contact-body
  display: flex
  gap: 60px
  justify-content: center
  padding: 48px
  +large-mobile
    flex-direction: column-reverse
    gap: 40px
  +mobile
    gap: 20px
    padding: 24px
  .contact-info-container
    display: flex
    flex-direction: column
    padding: 24px 0px
    a
      width: fit-content
  .contact-form-container
    display: flex
    flex-direction: column
    flex: 1
    padding: 48px
    border-radius: 60px
    background-color: #FFCF6D35
    gap: 20px
    +mobile
      padding: 12px
      border-radius: 20px
    .contact-form-item
      display: flex
      flex: 1
      // width: 100%
      flex-direction: column
      gap: 20px
      +mobile
        gap: 6px
        label
          margin-left: 4px
      #tell_us_more
        height: 160px
        border-radius: 40px !important
      .contact-form-text
        border: 1px solid white
        border-radius: 100px
        padding: 16px 20px
        background: transparent
        font-family: 'JustSans'
        +mobile
          padding: 8px 10px
.header-container
  height: 100vh

.contact-header
  position: relative
  height: 100%

#contact-header-title
  position: absolute
  width: 75%
  height: auto
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 5
.phone-line
  transform: translate(-4.5%, 5%)
  height: 100%
  width: 100%
// .black-screen
//   height: inherit
//   width: 45%
//   background-color: black
//   position: absolute
//   top: 0
//   right: 0
//   z-index: 2
.phone
  position: absolute
  top: 29.5%
  right: -4%
  z-index: 3
  height: auto
  width: 20%
  opacity: 0
  +desktop
    top: 36.5%
  +large-mobile
    top: 41%
  +mobile
    top: 47.5%
.banner-image
  width: 100%
  position: absolute
  bottom: 0%
</style>
