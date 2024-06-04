<template>
    <p @click="test" class="font-20">Home Page</p>
</template>

<script setup lang="ts">
// @ts-expect-error
import gsap from "gsap"

useHead({
  title: "Test Home Title",
  meta: [
    { name: "description", content: "Amazing"}
  ]
})

const test = () => { console.log("hi")}

</script>

<style lang="sass">
@import "../assets/sass/responsive.sass"

p
  font-family: "JustSans"
  font-size: 50px
</style>