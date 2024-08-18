<script setup lang="ts">
import { ref } from 'vue'

const { params } = useRoute()

const jobDescription = ref({
  title: "Finance & Accounting Executive",
  description: `We are searching for a highly organized and detail-oriented finance & accounting assistant to join our
          finance
          team. Extensive knowledge of general accounting and bookkeeping practices is essential. You will assist with
          the
          day-to-day tasks in our finance department. You will play an integral role in maintaining the company’s
          account
          information.
          <br><br>
          We work with clients to provide creative solutions to grow their business through media advertising and fun
          projects. Working closely with the finance manager, you will manage, process and troubleshoot various accounts
          and transactions. Ultimately, you will help sustain, monitor our company’s financial health and ensure our
          resources are utilized beneficially.`
})
useHead({
  title: `Our Careers – ${jobDescription.value.title} | Light Up 7`,
  meta: [{ name: "description", content: jobDescription.value.description.split('.')[0] }],
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
        <p class="font-orange jd-title">{{ jobDescription.title }}</p>
        <p v-html="jobDescription.description">
        </p>
      </div>
    </div>
    <div class="jd-respo-container">
      <div class="section-container">
        <p class="font-orange" style="font-size: 32px;">Responsibilities:</p>
        <ul style="list-style: outside disc; padding-left: 28px;">
          <li>Manage data, records, and reports by checking for errors and verifying accuracy of financial information.
          </li>
          <li>Prepare receipts, invoices, for entry into data sheets.</li>
          <li>Assist in preparation of financial statements and reports.</li>
          <li>Assist in creating and setting budgets.</li>
          <li>Update and maintain financial records.</li>
          <li>Prepare spreadsheets for data entry, including budgets, accounting information, etc.</li>
          <li>Take direction from and report to the financial manager.</li>
          <li>Manage day-to-day accounting tasks such as data entry, billing, invoicing and payments.</li>
          <li>Provide stellar customer service to our clients and be informed on all company policy and practices
            (including data privacy).</li>
          <li>Review and audit financial statements/reports, ensures that all calculations and data entries are correct.
          </li>
          <li>Adhere to current accounting/finance standards and regulations.</li>
        </ul>
      </div>
    </div>
    <div class="jd-req-container">
      <div class="section-container">
        <p class="font-orange" style="font-size: 32px;">Desired Skills & Experience:</p>
        <ul style="list-style: outside disc; padding-left: 28px;">
          <li>Candidates must possess at least Diploma/Bachelor’s Degree/Post Graduate Diploma/Professional Degree in
            Finance, Accounting or any related field</li>
          <li>Mathematical and accounting acuity.</li>
          <li>Professional demeanor, self-motivated, thrives under pressure, proactive and able to work independently.
          </li>
          <li>Knowledgeable in basic accounting/bookkeeping practices and processes</li>
          <li>Computer knowledge, experience using Microsoft Suite (Word, Excel etc.) and other accounting/data input
            software.</li>
          <li>Excellent communication and interpersonal skills.</li>
          <li>Strong organizational and time-management skills.</li>
          <li>Thrives working both independently and collaboratively.</li>
          <li>Highly dependable, respectful and consistently works to uphold company ethics and standards.</li>
          <li>Minimum of 1 year of working experience in related field.</li>
        </ul>
        <p style="font-size: 20px; font-weight: 900; margin-top: 30px">This is a full-time position with a competitive
          salary plus
          benefits.</p>
      </div>
    </div>
    <div class="form-container">
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
    </div>
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
  padding: 0 60px
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
</style>