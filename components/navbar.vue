<template>
  <div id="navbar-container" :class="{ minimized: navbarMinimized }">
    <div class="section-container">
      <div class="opacity-background" />
      <div class="navbar-contents">
        <div class="logo-container">
          <a href="/">
            <img src="../assets/images/light-up-7-logo.png" />
          </a>
        </div>

        <div class="navigation-list-container">
          <a class="nav-item" href="/services">
            <p>services</p>
          </a>
          <a class="nav-item" href="/work">
            <p>work</p>
          </a>
          <a class="nav-item" href="/about">
            <p>about</p>
          </a>
          <a class="nav-item" href="/news">
            <p>news</p>
          </a>
          <a class="nav-item" href="/careers">
            <p>careers</p>
          </a>
          <a class="nav-item" href="/news/news_1">
            <p>contact</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navbarMinimized = ref(false);

onMounted(() => {
  window.addEventListener("scroll", (event) => {
    if (scrollY <= 0) {
      navbarMinimized.value = false;
    } else {
      navbarMinimized.value = true;
    }
  });
});
</script>

<style lang="sass" scoped>
@import "../assets/sass/fonts"
@import "../assets/sass/responsive"
@import "../assets/sass/layout"

#navbar-container
  position: fixed
  width: 100vw
  z-index: 1000
  transition: 0.2s all
  // background: red
  padding: 10px
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
    +desktop
      display: block
    .logo-container
      flex: 1
      display: flex
      align-content: center
      +desktop
        align-content: center
        justify-content: center
        padding-top: 20px
      a
        width: 150px
        transition: 0.2s all
        img
          transition: 0.2s all
          width: 100%
    .navigation-list-container
      display: flex
      +desktop
        align-content: center
        justify-content: center
      .nav-item
        transition: 0.2s all
        padding: 40px 40px
        color: white
        text-decoration: none
        display: block
        // font-family: "JustSans"
        font-weight: normal
        &:hover
          font-weight: bold
        +desktop
          padding: 20px 20px
        +large-mobile
          padding: 15px 10px
        +mobile
          padding: 15px 10px
        p
          font-size: 20px
          transition: 0.2s font-size
          // text-decoration: none
          font-family: "JustSans"
          +desktop
            font-size: 16px
          +mobile
            font-size: 14px
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
          +desktop
            padding: 20px 20px
          +large-mobile
            padding: 15px 10px
          +mobile
            padding: 15px 10px
          p
            font-size: 16px
</style>
