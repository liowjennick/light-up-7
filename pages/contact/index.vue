<template>
  <div id="contact-page">
    <div class="full-screen-section-container section-container full-screen-center-content">
      <div>
        <div>
          <h3 class="font-white">Input 1</h3>
          <input type="text" v-model="formValues.input_1" />
        </div>

        <div>
          <h3 class="font-white">Input 2</h3>
          <input type="text" v-model="formValues.input_2" />
        </div>

        <div>
          <h3 class="font-white">Input 4</h3>
          <input type="text" v-model="formValues.input_4" />
        </div>

        <div>
          <h3 class="font-white">Input 5</h3>
          <input type="text" v-model="formValues.input_5" />
        </div>

<div id="g-recaptcha"></div>

        <button @click="submitForm">Submit</button>
      </div>
    </div>

    <p class="font-white">{{ JSON.stringify(formValues) }}</p>
  </div>
</template>

<script setup lang="ts">
useHead({
  script: [
    {
      type: "text/javascript",
      async: true,
      defer: true,
      render: "explicit",
      src: "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    }
  ]
})

const grecaptchaWidget = ref(null)

onMounted(() => {
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
  input_1: "",
  input_2: "",
  input_4: "",
  input_5: "",
  input_8: ""
})

const submitForm = async (e) => {
  e.preventDefault()

  console.log(grecaptcha.getResponse(grecaptchaWidget.value))
  const token = grecaptcha.getResponse(grecaptchaWidget.value)
  // formValues.value.input_8 = token

  console.log(formValues.value)
  const consumer_key = "ck_b5c2220b7a8a191bf1e459f792ded895c4f4d6d2"
  const consumer_secret = "cs_323064df8c1c4dd7f14239a0420906cf3bad4dc7"

  console.log("Basic " + btoa(`${consumer_key}:${consumer_secret}`))

  const response = fetch("https://lightup7.com/wp-json/gf/v2/forms/2/submissions", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + btoa(`${consumer_key}:${consumer_secret}`),
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      "input_1": formValues.value.input_1,
      "input_2": formValues.value.input_2,
      "input_4": formValues.value.input_4,
      "input_5": formValues.value.input_5,
      "input_8": token
    })
  })

  const response_data = response.json()
}
</script>

<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/reset.sass"

</style>

