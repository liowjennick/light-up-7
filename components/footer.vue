<template>
  <div id="footer-container">
    <div class="section-container" >
      <div class="logo-image-container" >
        <img alt="Light Up 7 Logo" src="../assets/images/light-up-7-logo-with-bulb.png" />
      </div>

      <!-- <div class="contact-column">
        <div class="mb-20 top">
          <p class="font-white just-sans"><b>New Business &amp; Inquiries</b></p>
          <p class="font-light-gray just-sans font-weight-100">info@lightup7.com</p>
          <p class="font-light-gray just-sans font-weight-100">+6011-11578977</p>
          <p class="font-light-gray just-sans font-weight-100">+603-8605 3561</p>
        </div>

        <div class="bottom">
          <p class="font-white just-sans"><b>Careers</b></p>
          <p class="font-light-gray just-sans font-weight-100">jobs@lightup7.com</p>
        </div>
      </div>

      <div class="address-column">
        <p class="font-white just-sans"><b>Location</b></p>
        <p class="font-light-gray just-sans font-weight-100">West Wing 1st Floor,</p>
        <p class="font-light-gray just-sans font-weight-100">Bangunan ECM Libra, 8,</p>
        <p class="font-light-gray just-sans font-weight-100">Jalan Damansara Endah,</p>
        <p class="font-light-gray just-sans font-weight-100">Bukit Damansara,</p>
        <p class="font-light-gray just-sans font-weight-100">50490 Kuala Lumpur,</p>
        <p class="font-light-gray just-sans font-weight-100">Wilayah Persekutuan Kuala Lumpur</p>
      </div> -->

      <div class="social-media-column">
        <div class="social-media-list-container top">
          <div class="social-media-item-container">
            <a
              href="https://www.instagram.com/lightupseven/"
              target="_blank"
              class="social-media-item"
            >
              <img alt="Instagram Logo" src="../assets/images/social-media-logo/instagram-logo.png" />
            </a>
            <!-- <p class="font-light-gray just-sans font-weight-100">instagram</p> -->
          </div>

          <div class="social-media-item-container">
            <a
              href="https://www.facebook.com/lightupseven/"
              target="_blank"
              class="social-media-item"
            >
              <img alt="Facebook Logo" src="../assets/images/social-media-logo/facebook-logo.png" />
            </a>
            <!-- <p class="font-light-gray just-sans font-weight-100">facebook</p> -->
          </div>

          <div class="social-media-item-container">
            <a
              href="https://www.linkedin.com/company/lightup7"
              target="_blank"
              class="social-media-item"
            >
              <img alt="Linkedin Logo" src="../assets/images/social-media-logo/linkedin-logo.png" />
            </a>
            <!-- <p class="font-light-gray just-sans font-weight-100">linkedin</p> -->
          </div>

          <div class="social-media-item-container">
            <a
              href="https://www.youtube.com/@LightUp7"
              target="_blank"
              class="social-media-item"
            >
              <img alt="Youtube Logo" src="../assets/images/social-media-logo/youtube-logo.png" />
            </a>
            <!-- <p class="font-light-gray just-sans font-weight-100">youtube</p> -->
          </div>
        </div>
      </div>

      <div class="copyright-column">
        <p class="font-light-gray just-sans font-weight-100">© 2025 Light Up 7 Sdn Bhd | All rights reserved</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="sass" scoped>
@import "../assets/sass/layout"
@import "../assets/sass/fonts"

#footer-container
  background-color: black
  z-index: 10
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
      display: flex
      align-items: center
      justify-content: flex-end
      flex: 1
      +desktop
        margin-bottom: 20px
        display: block
      p
        font-size: 12px
        margin-top: 12px
      img
        width: 150px
        display: block
        margin: 0 150px 0px auto
        +desktop
          margin: 0 auto
    .contact-column
      flex: 3
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
      justify-content: center
      align-items: center
      .top
        flex: 1
      .social-media-list-container
        display: flex
        justify-content: center
        flex: 0 0 50%
        flex-wrap: wrap
        flex: 1
        +desktop
          justify-content: center
          margin-bottom: 20px
          justify-content: center
        .social-media-item-container
          // flex: 1
          // margin-right: 10px
          display: flex
          align-items: center
          cursor: pointer
          margin: 0 20px
          +desktop
            margin-right: 10px
            margin-left: 10px
            margin-bottom: 10px
            // flex: 1
            justify-content: center
            display: block
            // margin: 10px auto
          .social-media-item
            height: 30px
            width: 30px
            display: block
            border: 1px solid white
            border-radius: 50%
            display: flex
            align-items: center
            justify-content: center
            padding: 5px
            // margin-right: 10px
            cursor: pointer
            img
              height: 20px
              cursor: pointer
    .copyright-column
      flex: 1
      align-items: center
      display: flex
      justify-content: flex-end
      +desktop
        display: block
      p
        text-align: right
        +desktop
          text-align: center
    p
      font-size: 16px
      line-height: 25px
</style>
