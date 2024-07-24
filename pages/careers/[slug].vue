<script setup lang="ts">
import { ref } from 'vue'
useHead({
  title: "Light Up 7 | Brand Activation Agency",
  meta: [{ name: "description", content: "Light Up 7 | Brand Activation Agency" }],
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
    <div class="section-container bg-orange-25" style="padding: 80px; max-width: 100%;">
      <div class="section-container" style="padding-inline: 80px">
        <p class="font-orange" style="font-size: 60px; line-height: none; margin-bottom: 24px">Finance & Accounting
          Executive</p>
        <p>We are searching for a highly organized and detail-oriented finance & accounting assistant to join our
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
          resources are utilized beneficially.
        </p>
      </div>
    </div>
    <div class="section-container" style="padding-inline: 80px; margin-block: 75px;">
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
    <div class="section-container" style="padding-inline: 80px; margin-block: 75px 35px;">
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
    </div>
    <div class="section-container" style="padding-inline: 80px; margin-bottom: 60px">
      <p style="font-size: 20px; font-weight: 900;">This is a full-time position with a competitive salary plus
        benefits.</p>
    </div>
    <div class="section-container" style="padding: 0">
      <div class="full-screen-start-start"
        style="flex: 1; padding: 60px 120px; border-radius: 60px; background-color: #FFCF6D35; flex-direction: column;">
        <div style="margin-bottom: 32px">
          <p style="font-size: 36px; margin-bottom: 8px" class="font-orange">Apply now:</p>
          <p>Fill up the form below or email jobs@lightup7.com <br>
            Please attach your updated resume & portfolio.</p>
        </div>
        <div class="parent">
          <div class="div1">
            <input type="text" class="form-input" placeholder="full name">
          </div>
          <div class="div2">
            <input type="email" class="form-input" placeholder="email">
          </div>
          <div class="div3">
            <input type="tel" class="form-input" placeholder="phone">
          </div>
          <div class="div4">
            <select type="text" class="form-input">
              <option value="" disabled selected hidden>gender</option>
              <option value="male">male</option>
              <option value="female">female</option>
            </select>
          </div>
          <div class="div5">
            <input type="number" class="form-input" placeholder="age" style="">
          </div>
          <div class="div6">
            <select type="text" class="form-input">
              <option value="" disabled selected hidden>marital status</option>
              <option value="single">single</option>
              <option value="married">married</option>
              <option value="divorced">divorced</option>
            </select>
          </div>
          <div class="div7" style="position: relative">
            <p class="font-orange"
              style="position: absolute; top: -10%; left: 5%; transform: translate(-50%, -50%); font-size: 20px;">
              Position</p>
            <input type="text" class="form-input" placeholder="select position">
          </div>
          <div class="div8">
            <select type="text" class="form-input">
              <option value="" disabled selected hidden>have you read and understood the job description fully?</option>
              <option value="no">no</option>
              <option value="yes">yes</option>
            </select>
          </div>
          <div class="div9">
            <select type="text" class="form-input">
              <option value="" disabled selected hidden>are you available for immediate hiring?</option>
              <option value="no">no</option>
              <option value="yes">yes</option>
            </select>
          </div>
          <div class="div10">
            <input type="text" class="form-input" placeholder="current salary (RM)">
          </div>
          <div class="div11">
            <input type="text" class="form-input" placeholder="expected monthly salary range (RM)">
          </div>
          <div class="div12">
            <select type="text" class="form-input" placeholder="malaysia">
              <option value="malaysia" selected>Malaysia</option>
              <option value="non-malaysia">No</option>
            </select>
          </div>
          <div class="div13">
            <select type="text" class="form-input">
              <option value="" disabled selected hidden>are you currently residing in Kuala Lumpur?</option>
              <option value="no">no</option>
              <option value="yes">yes</option>
            </select>
          </div>
          <div class="div14">
            <select type="text" class="form-input">
              <option value="" disabled selected hidden>os preference</option>
              <option value="windows">windows</option>
              <option value="macOS">macOS</option>
            </select>
          </div>
          <div class="div15" style="position: relative">
            <p class="font-orange"
              style="position: absolute; top: -10%; left: 10%; transform: translate(-50%, -50%); font-size: 20px;">
              Resume
            </p>
            <label for="resume" style="display: inline-block">
              <div class="white-outlined-button" style="font-family: 'JustSans';">Choose file</div>
            </label>
            <input type="file" hidden id="resume" accept=".pdf,.doc,.docx">
            <p style="margin: 16px;">accepted file types: pdf, doc, docx. Max. file size: 2 MB</p>
          </div>
          <div class="div16">
            <textarea type="text" class="form-input" style="height: -webkit-fill-available; border-radius: 40px;">share with us your incredible qualities and achievements
            </textarea>
          </div>
          <div class="div17">
            <button type="submit" class="orange-outlined-button" style="width: 100%; font-size: 20px;">submit
              form</button>
          </div>
        </div>
      </div>
    </div>
    <div class="section-container full-screen-center-start" style="padding: 0; margin-block: 60px; gap: 60px">
      <NuxtLink class="orange-outlined-button" to="/contact">let’s get in touch!</NuxtLink>
      <NuxtLink class="orange-outlined-button" to="/careers">other openings</NuxtLink>
    </div>
  </div>
</template>

<style lang="sass">
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

#career-details
  padding: 110px 0px
  color: white
li
  margin-block: 4px
.parent 
  display: grid
  grid-template-columns: repeat(6, 1fr)
  grid-template-rows: repeat(12, 1fr)
  grid-column-gap: 30px
  grid-row-gap: 0px
  width: 100%
  div
    padding-block: 12px
  option
    background: transparent
    color: black

.div1  
  grid-area: 1 / 1 / 2 / 7
.div2  
  grid-area: 2 / 1 / 3 / 5
.div3  
  grid-area: 2 / 5 / 3 / 7
.div4  
  grid-area: 3 / 1 / 4 / 3
.div5  
  grid-area: 3 / 3 / 4 / 5
.div6  
  grid-area: 3 / 5 / 4 / 7
.div7  
  grid-area: 4 / 1 / 5 / 7
.div8  
  grid-area: 5 / 1 / 6 / 4
.div9  
  grid-area: 5 / 4 / 6 / 7
.div10  
  grid-area: 6 / 1 / 7 / 4
.div11  
  grid-area: 6 / 4 / 7 / 7
.div12  
  grid-area: 7 / 1 / 8 / 4
.div13  
  grid-area: 7 / 4 / 8 / 7
.div14  
  grid-area: 8 / 1 / 9 / 4
.div15  
  grid-area: 9 / 1 / 10 / 4
.div16  
  grid-area: 10 / 1 / 12 / 7
.div17  
  grid-area: 12 / 1 / 13 / 3

.form-input
  border: 1px solid white
  border-radius: 100px
  padding: 16px 20px
  background: transparent
  font-family: 'JustSans'
  width: -webkit-fill-available
  color: white
  &:-webkit-autofill
    &:hover &:focus &:active 
      transition: background-color 5000s ease-in-out 0s
      -webkit-text-fill-color: white !important

</style>