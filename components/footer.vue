<template>
  <div id="footer-container">
    <div class="section-container">
      <div class="logo-image-container">
        <img src="../assets/images/light-up-7-logo-vertical.png" />
        <p class="font-white just-sans text-center">201401020933 (1097019-X)</p>
      </div>

      <div class="contact-column">
        <div class="mb-20 top">
          <p class="font-white just-sans"><b>New Business &amp; Inquiries</b></p>
          <p class="font-white just-sans">info@lightup7.com</p>
          <p class="font-white just-sans">+6011-11578977</p>
          <p class="font-white just-sans">+603-8605 3561</p>
        </div>

        <div class="bottom">
          <p class="font-white just-sans"><b>Careers</b></p>
          <p class="font-white just-sans">jobs@lightup7.com</p>
        </div>
      </div>

      <div class="address-column">
        <p class="font-white just-sans"><b>Location</b></p>
        <p class="font-white just-sans">West Wing 1st Floor,</p>
        <p class="font-white just-sans">Bangunan ECM Libra, 8,</p>
        <p class="font-white just-sans">Jalan Damansara Endah,</p>
        <p class="font-white just-sans">Bukit Damansara,</p>
        <p class="font-white just-sans">50490 Kuala Lumpur,</p>
        <p class="font-white just-sans">Wilayah Persekutuan Kuala Lumpur</p>
      </div>

      <div class="social-media-column">
        <div class="social-media-list-container top">
          <div class="social-media-item">
            <a href="#" target="_blank">
              <img src="../assets/images/social-media-logo/instagram-logo.png" />
            </a>
          </div>

          <div class="social-media-item">
            <a href="#" target="_blank">
              <img src="../assets/images/social-media-logo/facebook-logo.png" />
            </a>
          </div>

          <div class="social-media-item">
            <a href="#" target="_blank">
              <img src="../assets/images/social-media-logo/linkedin-logo.png" />
            </a>
          </div>

          <div class="social-media-item">
            <a href="#" target="_blank">
              <img src="../assets/images/social-media-logo/youtube-logo.png" />
            </a>
          </div>
        </div>

        <div class="copyright-container bottom">
          <p class="font-white just-sans">© 2024 Light Up 7 | All rights reserved</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="sass" scoped>
@import "../assets/sass/layout"
@import "../assets/sass/fonts"

#footer-container
  background-color: black
  .section-container
    padding-top: 40px
    padding-bottom: 40px
    display: flex
    +desktop
      display: block
    p
      +desktop
        text-align: center
    .logo-image-container
      flex: 2
      +desktop
        margin-bottom: 20px
      img
        width: 120px
        display: block
        margin: 0 auto 10px auto
    .contact-column
      flex: 2
      display: flex
      flex-direction: column
      +desktop
        margin-bottom: 20px
      .top
        flex: 1
    .address-column
      flex: 3
      +desktop
        margin-bottom: 20px
    .social-media-column
      flex: 2
      display: flex
      flex-direction: column
      .top
        flex: 1
      .social-media-list-container
        display: flex
        +desktop
          justify-content: center
          margin-bottom: 20px
        .social-media-item
          // flex: 1
          margin-right: 10px
          +desktop
            margin-right: 5px
            margin-left: 5px
          a
            height: 40px
            width: 40px
            border: 1px solid white
            border-radius: 50%
            display: flex
            align-items: center
            justify-content: center
            padding: 5px
            img
              height: 30px

            
    p
      font-size: 18px
</style>