<script setup lang="ts">
import { useRoute } from "vue-router"
import { ref } from 'vue'
import jobsData from '~/public/data/jobs_data';

const { params } = useRoute()

const route = useRoute()
const career_details = jobsData
const career_details_data = ref(career_details.find((item) => item.slug === route.params.slug))

useHead({
  title: `Our Careers – ${career_details_data.value.title} | Light Up 7`,
  // meta: [{ name: "description", content: career_details_data.responsibilities.length > 0 ? career_details_data.responsibilities[0] : career_details_data.value.title }],
});
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
</script>

<template>
  <div id="career-details">
    <div class="bg-orange-25 jd-title-container">
      <div class="section-container">
        <p class="font-orange jd-title">{{ career_details_data.title }}</p>
        <div class="description-html" v-html="career_details_data.description_html">
        </div>
      </div>
    </div>
    <div class="jd-respo-container" v-if="career_details_data.responsibilities && career_details_data.responsibilities.length > 0">
      <div class="section-container">
        <p class="font-orange" style="font-size: 32px;">Responsibilities:</p>
        <ul style="list-style: outside disc; padding-left: 28px;">
          <li style="margin-bottom: 12px;" v-for="(responsibility, i) in career_details_data.responsibilities" :key="i" v-html="responsibility"></li>
        </ul>
      </div>
    </div>
    <div class="jd-req-container" v-if="career_details_data.desired_skills && career_details_data.desired_skills.length > 0">
      <div class="section-container">
        <p class="font-orange" style="font-size: 32px;">Desired Skills & Experience:</p>
        <ul style="list-style: outside disc; padding-left: 28px;">
          <li :key="i" v-for="(skill, i) in career_details_data.desired_skills">{{ skill }}</li>
        </ul>
       <!-- <p style="font-size: 20px; font-weight: 900; margin-top: 80px;">This is a full-time position with a competitive
          salary plus
          benefits.</p> -->
          <p v-if="career_details_data.slug !== 'internship' && career_details_data.slug !== 'motion-artist-internship'" 
           style="font-size: 20px; font-weight: 900; margin-top: 80px;">
           This is a full-time position with a competitive salary plus benefits.
         </p>
       </div>
      </div>

    <div class="form-container">
      <!--<component is="script" src="https://www.cognitoforms.com/f/seamless.js" data-key="KYyGeNiZ80OLqp3g9SCdyQ" data-form="5" async />
      Conditionally render the form based on the type of career -->
      <component v-if="career_details_data?.slug === 'internship'"
                 is="script" 
                 src="https://www.cognitoforms.com/f/seamless.js" 
                 data-key="KYyGeNiZ80OLqp3g9SCdyQ" 
                 data-form="6" 
                 async />
      <component v-else-if="career_details_data?.slug === 'motion-artist-internship'"
                 is="script" 
                 src="https://www.cognitoforms.com/f/seamless.js" 
                 data-key="KYyGeNiZ80OLqp3g9SCdyQ" 
                 data-form="7" 
                 async />
      <component v-else
                 is="script" 
                 src="https://www.cognitoforms.com/f/seamless.js" 
                 data-key="KYyGeNiZ80OLqp3g9SCdyQ" 
                 data-form="5" 
                 async />
    </div>
    <!-- <div class="form-container">
      <div class="full-screen-start-start">
        <div class="section-container form-body">
          <div style="margin-bottom: 32px">
            <p style="font-size: 36px; margin-bottom: 8px" class="font-orange">Apply now:</p>
            <p>Fill up the form below or email <a href="mailto:jobs@lightup7.com"
                class="font-white mail-to">jobs@lightup7.com</a> <br>
              Please attach your updated resume & portfolio.</p>
          </div>
          <div class="parent">
            <div class="input-group full-screen-start-start">
              <input type="text" class="form-input" placeholder="full name">
            </div>
            <div class="input-group full-screen-start-start">
              <input type="email" class="form-input" placeholder="email">
              <input type="tel" class="form-input" placeholder="phone">
            </div>
            <div class="input-group full-screen-start-start">
              <select type="text" class="form-input">
                <option value="" disabled selected>gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
              <input type="number" class="form-input" placeholder="age" style="">
              <select type="text" class="form-input">
                <option value="" disabled selected>marital status</option>
                <option value="single">single</option>
                <option value="married">married</option>
                <option value="divorced">divorced</option>
              </select>
            </div>
            <div class="input-group-title full-screen-start-start">
              <p class="font-orange">
                Position</p>
              <input type="text" class="form-input" placeholder="select position">
            </div>
            <div class="input-group full-screen-start-start">
              <select type="text" class="form-input">
                <option value="" disabled selected>have you read and understood the job description fully?</option>
                <option value="no">no</option>
                <option value="yes">yes</option>
              </select>
              <select type="text" class="form-input">
                <option value="" disabled selected>are you available for immediate hiring?</option>
                <option value="no">no</option>
                <option value="yes">yes</option>
              </select>
            </div>
            <div class="input-group full-screen-start-start">
              <input type="text" class="form-input" placeholder="current salary (RM)">
              <input type="text" class="form-input" placeholder="expected monthly salary range (RM)">
            </div>
            <div class="input-group full-screen-start-start">
              <select type="text" class="form-input" placeholder="malaysia">
                <option value="malaysia" selected>Malaysia</option>
                <option value="non-malaysia">No</option>
              </select>
              <select type="text" class="form-input">
                <option value="" disabled selected>are you currently residing in Kuala Lumpur?</option>
                <option value="no">no</option>
                <option value="yes">yes</option>
              </select>
            </div>
            <div class="input-group full-screen-start-start os-pref">
              <select type="text" class="form-input">
                <option value="" disabled selected>os preference</option>
                <option value="windows">windows</option>
                <option value="macOS">macOS</option>
              </select>
            </div>
            <div class="input-group-title full-screen-start-start">
              <p class="font-orange">
                Resume
              </p>
              <label for="resume" style="display: inline-block">
                <div class="white-outlined-button" style="font-family: 'JustSans';">choose file</div>
              </label>
              <input type="file" hidden id="resume" accept=".pdf,.doc,.docx">
              <p>accepted file types: pdf, doc, docx. Max. file size: 2 MB</p>
            </div>
            <div class="input-group full-screen-start-start">
              <textarea type="text" class="form-input" rows="6">share with us your incredible qualities and achievements
              </textarea>
            </div>
            <div class="input-group full-screen-start-start">
              <button type="submit" class="orange-outlined-button">submit
                form</button>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div class="full-screen-center-start links-container">
      <div class="section-container">
        <div class="button-container">
          <a class="orange-outlined-button" href="/contact">let’s get in touch!</a>
          <a class="orange-outlined-button" href="/careers">other openings</a>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

.mail-to
  text-decoration: none 
  cursor: pointer
  &:hover
    color: #FFCF6D
.links-container
  // padding-inline: 60px 
  margin: 60px 0
  gap: 60px
  +mobile
    flex-direction: column
    gap: 30px
  .section-container
    width: 100%
    .button-container
      display: flex
      +mobile
        flex-direction: column
        gap: 16px
        align-items: center
        a
          width: 130px
          text-align: center
      a
        margin: 0 10px
.jd-title-container
  padding: 60px 120px
  max-width: 100%
  +large-mobile
    padding-inline: 60px
  +mobile
    padding-inline: 30px
  .jd-title
    font-size: 60px
    line-height: none 
    margin-bottom: 24px
    +large-mobile
      font-size: 48px
    +mobile
      font-size: 36px
.jd-respo-container
  padding-inline: 120px
  margin: 75px 0
  +large-mobile
    padding-inline: 60px
  +mobile
    padding-inline: 30px
.jd-req-container
  padding-inline: 120px
  margin: 75px 0
  +large-mobile
    padding-inline: 60px
  +mobile
    padding-inline: 30px
.form-container
  padding: 0px 60px
  margin: 0
  +large-mobile
    padding: 0 60px
  +mobile
    padding: 0
  .form-body
    flex: 1
    padding: 60px 90px
    border-radius: 60px 
    background-color: #FFCF6D35
    flex-direction: column
    +large-mobile
      padding: 30px 40px
    .form-input
      border: 1px solid white
      border-radius: 100px
      padding: 16px 20px
      background: transparent
      font-family: 'JustSans'
      width: 100%
      color: white
      +mobile
        width: -webkit-fill-available 
      &:-webkit-autofill
        &:hover &:focus &:active 
          transition: background-color 5000s ease-in-out 0s
          -webkit-text-fill-color: white !important


#career-details
  padding: 110px 0px
  color: white
li
  margin-block: 4px
.parent 
  display: flex
  flex-direction: column
  gap: 60px
  width: 100%
  +large-mobile
    gap: 30px
  +mobile
    gap: 15px

.input-group
  gap: 45px
  +large-mobile
    gap: 30px
  +mobile
    flex-direction: column
    gap: 15px
  textarea
    border-radius: 30px !important
    +mobile
      width: -webkit-fill-available
  button
    width: 35% 
    font-size: 20px
    +mobile
      width: 100%
  select
    option
      background: transparent
      color: black
.input-group-title  
  gap: 10px
  width: 100%
  flex-wrap: wrap
  p
    width: 100%
    margin-left: 15px
  p:nth-child(1)
    font-size: 20px
.os-pref
  width: 47.5%
  +large-mobile
    width: 100%

.description-html
  p
    margin-bottom: 20px
</style>