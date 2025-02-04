<template>
  <div id="navbar-container" :class="{ minimized: navbarMinimized }">
    <div class="section-container">
      <div class="opacity-background"></div>
      <div class="navbar-contents">
        <div class="logo-container">
          <a href="/">
            <img alt="Light Up 7 Logo" src="../assets/images/home/logo-large-header.png" />
          </a>
        </div>

        <!-- Desktop Navigation -->
        <div class="navigation-list-container">
          <a class="nav-item" href="/services"><p>services</p></a>
          <a class="nav-item" href="/work"><p>work</p></a>
          <a class="nav-item" href="/about"><p>about</p></a>
          <a class="nav-item" href="/news"><p>news</p></a>
          <a class="nav-item" href="/careers"><p>careers</p></a>
          <a class="nav-item" href="/contact"><p>contact</p></a>

          <!-- Flags for Desktop View -->
          <div class="desktop-flags">
            <a class="flag-icon" href="https://www.lightup7.com">
              <img src="../assets/images/home/malaysia.svg" alt="Malaysia Flag" />
            </a>
            <a class="flag-icon"><p>|</p></a>
            <a class="flag-icon" href="https://www.lightup7.com.au/">
              <img src="../assets/images/home/australia.svg" alt="Australia Flag" />
            </a>
          </div>
        </div>

        <!-- Burger Menu Icon (Mobile Only) -->
        <div class="burger-menu" @click="toggleMenu" :aria-expanded="isMenuOpen" aria-label="Menu">
          <span v-if="!isMenuOpen">☰</span>
          <span v-else>✕</span>
        </div>
      </div>
    </div>

    <!-- Mobile Menu (Hidden by Default) -->
    <div class="mobile-menu" :class="{ open: isMenuOpen }">
      <a class="nav-item" href="/services"><p>services</p></a>
      <a class="nav-item" href="/work"><p>work</p></a>
      <a class="nav-item" href="/about"><p>about</p></a>
      <a class="nav-item" href="/news"><p>news</p></a>
      <a class="nav-item" href="/careers"><p>careers</p></a>
      <a class="nav-item" href="/contact"><p>contact</p></a>

      <!-- Flags for Mobile View -->
      <div class="mobile-flags">
        <a class="flag-icon" href="https://www.lightup7.com">
          <img src="../assets/images/home/malaysia.svg" alt="Malaysia Flag" />
        </a>
        <a class="flag-icon"><p>|</p></a>
        <a class="flag-icon" href="https://www.lightup7.com.au/">
          <img src="../assets/images/home/australia.svg" alt="Australia Flag" />
        </a>
      </div>
    </div>

    <!-- Overlay for Mobile Menu -->
    <div class="overlay" :class="{ open: isMenuOpen }" @click="toggleMenu"></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

const navbarMinimized = ref(false);
const previousScroll = ref(0);
const isMenuOpen = ref(false); // State for mobile menu

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

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

      previousScroll.value = st;
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
  padding: 5px

  .opacity-background
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

    img
      width: auto
      height: 15px
      display: inline-block
      vertical-align: middle
      padding-left: 10px
      padding-right: 10px

    p
      margin: 0
      padding-left: 10px
      padding-right: 10px
      font-size: 18px
      line-height: 1
      display: inline-block
      color: white

  .desktop-flags
    display: flex
    align-items: center

  .mobile-flags
    display: none

  .burger-menu
    display: none
    cursor: pointer
    font-size: 24px
    color: white

  .mobile-menu
    position: fixed
    top: 0
    left: -100%
    width: 80%
    height: 100vh
    background: #1A1A1A
    transition: left 0.3s ease-in-out
    z-index: 1000
    padding-top: 60px

    &.open
      left: 0

    .nav-item
      display: block
      padding: 15px
      color: black
      text-decoration: none

      p
        color: white
  
  .overlay
    position: fixed
    top: 0
    left: 0
    width: 100%
    height: 100vh
    background: rgba(0, 0, 0, 0.5)
    z-index: 999
    display: none

    &.open
      display: block

  // Media Query for Mobile View
  @media (max-width: 768px)
    .desktop-flags
      display: none

    .navigation-list-container
      display: none !important
    
    .burger-menu
      display: flex
      justify-content: center
      padding-bottom: 10px

    .mobile-flags
      display: flex
      justify-content: left
      padding-top: 10px
      padding-left: 8px

    .flag-icon img
      height: 13px

    

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
