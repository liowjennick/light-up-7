<template>
  <div id="navbar-container" :class="{ minimized: navbarMinimized }">
    <div class="section-container">
      <div class="opacity-background" />
      <div class="navbar-contents">
        <div class="logo-container">
          <img src="../assets/images/light-up-7-logo.png" />
        </div>

        <div class="navigation-list-container">
          <NuxtLink class="nav-item" to="/news/news_1"><p>services</p></NuxtLink>
          <NuxtLink class="nav-item" to="/work"><p>work</p></NuxtLink>
          <NuxtLink class="nav-item" to="/news/news_1"><p>about</p></NuxtLink>
          <NuxtLink class="nav-item" to="/news/news_1"><p>news</p></NuxtLink>
          <NuxtLink class="nav-item" to="/news/news_1"><p>careers</p></NuxtLink>
          <NuxtLink class="nav-item" to="/news/news_1"><p>contact</p></NuxtLink>  
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navbarMinimized = ref(false)

onMounted(() => {
  window.addEventListener("scroll", (event) => {
    if (scrollY <= 0) {
      navbarMinimized.value = false
    } else {
      navbarMinimized.value = true
    }
  })
})


</script>

<style lang="sass">
@import "../assets/sass/fonts.sass"

#navbar-container
  position: fixed
  width: 100%
  z-index: 1000
  transition: 0.2s all
  // background: red
  .opacity-background
    background-color: #474747
    opacity: 0
    position: absolute
    width: 100%
    height: 100%
    z-index: -1
    top: 0
    left: 0
    transition: 0.2s all
  .navbar-contents
    display: flex
    align-items: center
    z-index: 100
    .logo-container
      flex: 1
      display: flex
      align-content: center
      img
        width: 150px
        transition: 0.2s all
    .navigation-list-container
      display: flex
      .nav-item
        transition: 0.2s all
        padding: 40px 40px
        color: white
        text-decoration: none
        font-family: "JustSans"
        font-weight: normal
        &:hover
          font-weight: bold
        p
          font-size: 20px
          transition: 0.2s font-size
  &.minimized
    .opacity-background
      opacity: 0.5
    .navbar-contents
      .logo-container
        img
          width: 100px
      .navigation-list-container
        .nav-item
          padding: 20px 30px
          p
            font-size: 16px
</style>