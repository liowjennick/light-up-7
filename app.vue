<template>
  <div>
    <Navbar />
    <NuxtPage style="background-color: black;"/>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Navbar from "./components/navbar.vue";
import Footer from "./components/footer.vue";
</script>

<style lang="sass">
@import "/assets/sass/reset.sass"
@import "/assets/sass/font-face.sass"
</style>
