<template>
  <div id="contact-page">
    <div class="header-container">
      <div class="contact-header full-screen-center-content">
        <img
          alt="Contact Banner"
          class="banner-image"
          src="../../assets/images/contact/contact-banner.svg"
        />
        <img
          alt="Contact Title"
          src="../../assets/images/contact/contact-header.png"
          id="contact-header-title"
        />
        <div class="black-screen"></div>
        <!-- <PhoneLine class="phone-line" />
        <Phone class="phone" /> -->
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
    <div class="section-container contact-body">
      <div class="contact-info-container">
        <p
          style="margin-bottom: 8px"
          class="font-orange font-weight-200 font-16"
        >
          ready to light up?
        </p>
        <p
          style="margin-bottom: 30px; font-weight: 900; font-size: 74px; line-height: 1em"
          class="font-orange"
        >
          let's talk
        </p>
        <p class="font-orange font-20 font-weight-200">our offices</p>
        <p class="font-white font-16 font-weight-200">
          <br />
          Kuala Lumpur<br /><br />
          1st Floor, West Wing, <br />
          Bangunan ECM Libra, <br />
          No. 8 Jalan Damansara Endah, <br />
          Damansara Heights, <br />
          50490 Kuala Lumpur, Malaysia
          <br />
          <br />
          Sydney<br /><br />
          81-83 Campbell Street, <br />
          Surry Hills, New South Wales,<br />
          2010 Australia<br />
          <br />
          9.00 am – 6.00 pm | Monday – Friday <br />
          Weekends & Public Holidays – Closed
        </p>
        <a
          target="_blank"
          href="https://www.google.com/maps/place/Light+Up+7/@3.1498933,101.6651169,17z/data=!3m2!4b1!5s0x31cc49ab0e0f7ac3:0xcaf3484f21fd43ab!4m6!3m5!1s0x31cc4c5fabb47ffb:0x52e9e06c169d79dc!8m2!3d3.1498933!4d101.6651169!16s%2Fg%2F11b6gchlp_?entry=ttu"
          class="orange-outlined-button font-weight-200 font-16"
          style="margin-block: 32px 24px; text-decoration: none; width: 160px; text-align: center"
        >
          view map
        </a>
        <p class="font-orange font-20 font-weight-200">new business & inquiries</p>
        <a href="mailto:info@lightup7.com" class="font-white font-16 font-weight-200" style="text-decoration: none;">
          info@lightup7.com</a>
          <br /><br />
          <a href="https://wa.me/601119846276" target="_blank" rel="noopener noreferrer" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.017-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>+6011-19846276</a>
          <a href="tel:+60386053561" style="color: white; text-decoration: none; display: flex; align-items: center; gap: 8px;">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>+603-8605 3561</a>
        <br /><br />
        <p class="font-orange font-20 font-weight-200">Careers</p>
        <a href="mailto:jobs@lightup7.com" class="font-white font-16 font-weight-200" style="text-decoration: none;">jobs@lightup7.com</a>
        <a
          href="/careers"
          class="orange-outlined-button font-16 font-weight-200"
          style="margin-top: 32px; text-decoration: none; width: 160px; text-align: center"
        >
          view openings
        </a>
      </div>
      <!-- <div class="contact-form-container">
        <p
          style="font-size: 36px; margin-bottom: 32px"
          class="font-orange font-weight-200"
        >
          Contact Form
        </p>
        <div class="contact-form-item">
          <label
            for="name"
            class="font-white"
            >your name</label
          >
          <input
            type="text"
            v-model="formValues.name"
            id="name"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="business_name"
            class="font-white"
            >business name</label
          >
          <input
            type="text"
            v-model="formValues.business_name"
            id="business_name"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="email"
            class="font-white"
            >email</label
          >
          <input
            type="text"
            v-model="formValues.email"
            id="email"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="phone"
            class="font-white"
            >phone</label
          >
          <input
            type="text"
            v-model="formValues.phone"
            id="phone"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="company_website"
            class="font-white"
            >company website</label
          >
          <input
            type="text"
            v-model="formValues.company_website"
            id="company_website"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="business_industry"
            class="font-white"
            >business industry</label
          >
          <input
            type="text"
            v-model="formValues.business_industry"
            id="business_industry"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="interest"
            class="font-white"
            >interest</label
          >
          <input
            type="text"
            v-model="formValues.interest"
            id="interest"
            class="font-white contact-form-text"
          />
        </div>
        <div class="contact-form-item">
          <label
            for="tell_us_more"
            class="font-white"
            >tell us more</label
          >
          <textarea
            id="tell_us_more"
            v-model="formValues.tell_us_more"
            class="font-white contact-form-text"
          ></textarea>
        </div>

        <div>
          <button
            class="orange-outlined-button g-recaptcha"
            data-sitekey="6LeVjccUAAAAALn5Y5sSEv3fwy_MAq8gxXR0e9J3"
            data-callback="onSubmit"
            data-action="submit"
            style="width: 240px"
          >
            <span class="font-16 font-weight-200">submit form</span>
          </button>
        </div>
      </div> 
      <component is="script" src="https://www.cognitoforms.com/f/seamless.js" data-key="KYyGeNiZ80OLqp3g9SCdyQ" data-form="2" async />-->
      <div class="iframe-container"><iframe src="https://forms.monday.com/forms/embed/16b20cbb8ea4b975970634c5145cb958?r=use1" width="750" height="1380" style="border: 0; box-shadow: 5px 5px 56px 0px rgba(0,0,0,0.25);"></iframe></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import gsap from "gsap";
import { ScrollTrigger, CustomEase } from "gsap/all";
import PhoneLine from "~/assets/svg/phone-line.vue";
import Phone from "~/assets/svg/phone.vue";
import ArrowDownJSON from "@/assets/images/home/arrow-down-lottie.json";
import { LottieAnimation } from "lottie-web-vue";



gsap.registerPlugin(ScrollTrigger);
useHead({
  title: "Contact Us | Light Up 7",
  meta: [
    { name: "description", content: "Are you looking for a marketing agency to take your brand to the next level? If you’re ready to light up with Light Up 7, contact us here." },
    { name: "keywords", content: "looking for marketing agency" },
  ],
  script: [
    {
      type: "text/javascript",
      async: true,
      defer: true,
      src: `https://www.google.com/recaptcha/api.js`,
    },
  ],
});

const grecaptchaWidget = ref(null);

onMounted(() => {
  window.onSubmit = (token: string) => {
    submitForm(token);
  };

  gsap.from(".banner-image", {
    x: "-150vw",
    scrollTrigger: {
      ease: "power3.inOut",
      trigger: ".header-container",
      start: "top center",
      end: "bottom center",
      scrub: 1,
      toggleActions: "play reverse play reverse",
    },
  });
});

const formValues = ref({
  name: "",
  business_name: "",
  email: "",
  phone: "",
  company_website: "",
  business_industry: "",
  interest: "",
  tell_us_more: "",
});

async function submitForm(token: string) {
  console.log(token);
  const consumer_key = "ck_b5c2220b7a8a191bf1e459f792ded895c4f4d6d2";
  const consumer_secret = "cs_323064df8c1c4dd7f14239a0420906cf3bad4dc7";

  console.log("Basic " + btoa(`${consumer_key}:${consumer_secret}`));

  const response = await fetch("https://lightup7.com/wp-json/gf/v2/forms/2/submissions", {
    method: "POST",
    headers: {
      Authorization: "Basic " + btoa(`${consumer_key}:${consumer_secret}`),
      "Content-Type": "application/json",
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
      input_8: token,
    }),
  });

  const response_data = response.json();
  console.log(response_data);
}
</script>

<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/reset.sass"
@import "../../assets/sass/inputs.sass"

form.cog-cognito
  width: 100% !important
  padding-top: 80px !important
  +large-mobile
    padding-top: 40px !important

.iframe-container 
  position: relative
  width: 100%
  overflow: hidden


.iframe-container iframe 
  width: 100%
  border: 0

/* Adjust height for mobile devices */
@media (max-width: 767px) 
  .iframe-container iframe 
    height: 1300px
  

/* Adjust height for tablet devices */
@media (min-width: 768px) and (max-width: 1023px) 
  .iframe-container iframe 
    height: 1300px
  


/* Adjust height for desktop devices */
@media (min-width: 1024px) 
  .iframe-container iframe 
    height: 1380px
  


.contact-body
  display: flex
  gap: 60px
  justify-content: center
  padding: 48px
  +large-mobile
    flex-direction: column
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
      label
        font-size: 18px
        font-weight: 200
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
  position: relative

.contact-header
  position: relative
  height: 100%
  z-index: 1

#contact-header-title
  position: absolute
  max-width: 850px
  width: 60%
  height: auto
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  z-index: 5
  +large-mobile
    width: 65%
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
  +large-mobile
    top: 50%

.arrow-down-container
  position: absolute
  bottom: 14%
  left: 50%
  z-index: 0
.arrow-down
  position: absolute
  transform-origin: center center
  transform: translateX(-50%)
  left: 50%
  width: 120px
</style>
