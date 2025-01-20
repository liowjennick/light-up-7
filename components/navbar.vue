<template>
  <div id="navbar-container" :class="{ minimized: navbarMinimized }">
    <div class="section-container">
      <div class="opacity-background" />
      <div class="navbar-contents">
        <div class="logo-container">
          <a href="/">
            <img alt="Light Up 7 Logo" src="../assets/images/home/logo-large-header.png" />
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
          <a class="nav-item" href="/contact">
            <p>contact</p>
          </a>
          <a class="nav-item flag-icon" >
            <img src="../assets/images/home/malaysia.svg" alt="Flag Icon" href="https://www.lightup7.com/"/>
            <p>|</p>
            <img src="../assets/images/home/australia.svg" alt="Flag Icon" href="https://www.lightup7.com.au/"/>
          </a>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const navbarMinimized = ref(false);
const previousScroll = ref(0);

onMounted(() => {
  window.addEventListener("scroll", (event) => {
    if (scrollY <= 0) {
      navbarMinimized.value = false;
    } else {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      if (st > previousScroll.value) {
        navbarMinimized.value = true;
      } else {
        navbarMinimized.value = false; 
      }

      previousScroll.value = st
    }

  }, false);
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
  transition: 0.5s all
  // background: red
  padding: 5px
  .opacity-background
    // background: linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(80,86,94,0) 100%)
    background: grey
    opacity: 0.2
    position: absolute
    width: 100%
    height: 100%
    z-index: -1
    top: 0
    left: 0
    transition: 0.2s all
  .flag-icon
    display: flex
    align-items: center
    justify-content: center
    gap: 8px
    
  .flag-icon img
    width: auto
    height: 15px
    display: inline-block
    vertical-align: middle
    padding-left: 10px
    padding-right: 10px
  
  .flag-icon p
    margin: 0
    padding-left: 10px
    padding-right: 10px
    font-size: 18px
    line-height: 1
    display: inline-block

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
        width: 100px
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
        padding: 30px 40px
        text-decoration: none
        display: block
        // font-family: "JustSans"
        font-weight: normal
        p
          color: white
          transition: 0.4s all
        &:hover
          p
           color: $orange
        +desktop
          padding: 15px 15px
        +large-mobile
          padding: 10px 10px
        +mobile
          padding: 10px 10px
        p
          font-size: 16px
          // transition: 0.2s font-size
          // text-decoration: none
          font-family: "JustSans"
          +desktop
            font-size: 16px
          +mobile
            font-size: 14px
  &.minimized
    overflow: hidden
    opacity: 0
    pointer-events: none
    .opacity-background
      opacity: 0
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
