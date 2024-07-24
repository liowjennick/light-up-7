<template>
  <div id="services">
    <!-- Header -->
    <div class="full-screen-center-start section-container header-container">
      <LottieAnimation
          autoplay
          loop
          :animation-data="currentService.lottie"
          class="services-icon"
        />
      <div class="full-screen-start-center" style="color: #DC9F41; flex-direction: column;">
        <h1 style="margin: 0; font-size: 64px; font-weight: normal;">{{ currentService.title }}</h1>
        <p style="font-size: 26px; margin: 0;">{{ currentService.description }}</p>
      </div>
    </div>
    <!-- Animation header -->
    <div>
      <!-- Animation Here -->
      <LottieAnimation autoplay :animation-data="LineBulb" class="services-header" />
    </div>
    <!-- Service Details -->
    <div class="service-detail-grid-2" :style="{height: `${(serviceDetails.length + 1) * 100}px`}">
      <div v-for="(detail, key) in serviceDetails" :key="key" class="full-screen-start-center service-detail-item"
        style="flex-direction: column;">
        <p>{{ detail.title }}</p>
        <p>{{ detail.description }}</p>
      </div>
    </div>
    <!-- Quick Nav -->
    <div class="full-screen-center-around section-container">
      <a v-for="nav in navs" :href="`/${nav.slug}`" :key="nav.slug" class="orange-outlined-button">
        {{ nav.text }}
      </a>
    </div>
  </div>
</template>
<script setup lang='ts'>
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import { LottieAnimation } from 'lottie-web-vue'
import Growth from '@/assets/images/services/lottie/growth-strategy.json'
import Digital from '@/assets/images/services/lottie/digital-marketing.json'
import Media from '@/assets/images/services/lottie/media-buying.json'
import Branding from '@/assets/images/services/lottie/branding-creative.json'
import Website from '@/assets/images/services/lottie/website-apps.json'
import Video from '@/assets/images/services/lottie/video-photography.json'
import Event from '@/assets/images/services/lottie/event-management.json'
import LineBulb from '@/assets/images/services/lottie/services-line-bulb.json'

const { params } = useRoute()

useHead({
  title: "Light Up 7 | Brand Activation Agency",
  meta: [{ name: "description", content: "Light Up 7 | Brand Activation Agency" }],
});

const currentService = ref<{
  lottie: any,
  title: string,
  description: string,
}>({
  lottie: getIcon(params.slug as string),
  title: "",
  description: "",
})
const serviceDetails = ref<{ title: string, description: string }[]>([])

function getIcon (slug: string) { 
  switch (slug) {
    case "growth-strategy":
      return Growth
    case "digital-marketing":
      return Digital
    case "media-buying":
      return Media
    case "branding-creative":
      return Branding
    case "website-apps":
      return Website
    case "video-photography":
      return Video
    case "event-management":
      return Event
  }
 }
onMounted(() => {
  switch (params.slug) {
    case "growth-strategy":
      currentService.value.title = "Growth Strategy"
      currentService.value.description = "Propel your business with a tactical plan optimised to achieve your desired goals."
      serviceDetails.value = [{
        title: 'Marketing Strategy & Consultation',
        description: 'Unlock your potential with personalised strategies to fuel growth and maximise your digital presence.'
      },
      {
        title: 'Brand Audit',
        description: `Get a comprehensive brand audit to optimise your positioning and leverage strengths for accelerated success.`
      },
      {
        title: 'Audience & Personas',
        description: `Gain insights into your target audience's behaviour via data analysis, social listening and other methodologies. `
      },
      {
        title: 'Brand Positioning',
        description: `Showcase your brand's best angles! We’ll help you put your best foot forward to connect with your audience.`
      },
      {
        title: 'Multi-channel Strategy',
        description: `Maximise potential with a versatile 360-approach tailored to amplify your brand across diverse platforms. `
      },
      {
        title: 'Competitive Analysis',
        description: `Gain a competitive edge with a deep dive into the industry to inform your initiatives and outperform the rest.`
      },]
      break;
    case "digital-marketing":
      currentService.value.title = "Digital Marketing"
      currentService.value.description = "Stay ahead on the digital front with a host of approaches, integrated to meet your business needs"
      serviceDetails.value = [
        {
          title: "Social Media Management",
          description: "Up your online game with expert social media management for engaging content and targeted audience growth."
        },
        {
          title: "Social Community Management",
          description: "Nurture meaningful connections and foster engagement with us to enrich your brand’s social media experience."
        },
        {
          title: "Influencer / KOL Marketing",
          description: "Amplify your brand's reach and credibility through strategic Key Opinion Leader (KOL) marketing partnerships."
        },
        {
          title: "Data & Analytics",
          description: "Leveraging the power of data and analytics, unlock valuable insights to optimise your brand's potential for growth."
        },
        {
          title: "Search Engine Optimisation (SEO)",
          description: "Boost your online visibility and drive targeted traffic with effective SEO marketing so you always stay on top."
        },
        {
          title: "Display, Search & Video Advertising",
          description: "Capture attention and drive results with our uniquely crafted display, video and retargeting campaigns."
        },
        {
          title: "E-mail & SMS Marketing",
          description: "Engage and convert with impactful email and SMS marketing strategies for effective, direct customer comms."
        },
      ]
      break;
    case "media-buying":
      currentService.value.title = "Media Buying"
      currentService.value.description = "Put your brand in front of the right audience at the right time and place. Let us help you optimise your digital presence."
      serviceDetails.value = [
        {
          title: "Digital Advertising",
          description: "Social media campaigns, website ads, Google ads, and so much more. Your brand can stand out with the right messaging, to the right audience and in the right digital space."
        },
        {
          title: "Newspaper / Magazine Advertising",
          description: "Leap out of the page with attention-grabbing ads plus strategic newspaper and magazine placements for your brand."
        },
        {
          title: "Radio Advertising",
          description: "Thanks to top-notch audio pros, voiceover artists and imaginative writers, we can help your brand stand out to audiophiles everywhere."
        },
        {
          title: "TV Commercials",
          description: "Let your brand be heard even in between the drama and the action of your fave shows."
        },
        {
          title: "Cinema Advertising",
          description: "Shine on the silver screen with an ad to remember. Complete with stunning VFX and cinematography to further elevate your brand."
        },
        {
          title: "Out of Home (OOH) Media Buy",
          description: "When you're out and about, say it loud and proud. Stunning photos plus a catchy phrase will leave your audience wanting more."
        },
        {
          title: "Digital Out of Home (DOOH) Media Buy",
          description: "Surprise, delight and entice all who lay eyes on your brand's newest animated campaign ad on LED screens around town."
        },
      ]
      break;
    case "branding-creative":
      currentService.value.title = "Branding & Creative Design"
      currentService.value.description = "With a little sparkle and some zing, your new brand identity is ready to take on the world."
      serviceDetails.value = [
        {
          title: "Research & Strategy",
          description: "With meticulous research and strategic planning to guide the development and management of campaigns, your brand is set for growth and success."
        },
        {
          title: "Corporate Identity",
          description: "We can help you craft a cohesive corporate identity that reflects your brand's essence, values, and vision, ensuring consistency across all touchpoints."
        },
        {
          title: "Brand Story",
          description: "Weaving compelling narratives, we bring your brand's essence to life, fostering resonant and meaningful connections for your brand to reach new heights."
        },
        {
          title: "Collateral Design",
          description: "Elevate your brand presence with impactful collateral design, conveying a cohesive visual identity across print and digital platforms seamlessly."
        },
        {
          title: "Communication Design",
          description: "We'll ensure your brand communicates effectively to your desired audience, prompting them to take action or understand complex topics easily."
        },
        {
          title: "Desktop Publishing",
          description: "From letterheads to annual reports, our creative team ensures your brand shines in every detail, down to the envelopes you send out."
        },
        {
          title: "Printing",
          description: "From posters to buntings to thank-you cards, we deliver top-quality prints for your brand."
        },
      ]
      break;
    case "website-apps":
      currentService.value.title = "Websites & Apps"
      currentService.value.description = "Your business’ first point of contact can leave a lasting impression. Build your best brand website with us! "
      serviceDetails.value = [
        {
          title: "UI & UX Design",
          description: "We create innovative and immersive digital user experiences. Utilising the latest in data analysis and behaviour insights, let's maximise your digital presence together."
        },
        {
          title: "Content Management System (CMS)",
          description: "Our marketing department is equipped with streamlined Content Management Systems to enhance digital content creation and team efficiency."
        },
        {
          title: "Mobile Apps",
          description: "We drive maximum user engagement through mobile applications for both Apple and Android ecosystems."
        },
        {
          title: "Web Apps",
          description: "Apps made exclusively for your website, programmed to do whatever you need to stand out and bring a positive experience to your target audience."
        },
        {
          title: "eCommerce",
          description: "Optimise your online retail experience with our eCommerce solutions tailored to drive sales, enhance user experience, and maximise conversions."
        },
        {
          title: "Payment Gateway Integration",
          description: "Securely process transactions with our integrated payment gateway solutions for smooth, secure and reliable online payment experiences."
        },
        {
          title: "API's & System Integrations",
          description: "Effortlessly connect and streamline your digital ecosystem with our expert API integration services, ensuring seamless functionality and enhanced user experiences."
        },
      ]
      break;
    case "video-photography":
      currentService.value.title = "Video & Phototgraphy"
      currentService.value.description = "A picture is worth a thousand words. Tell your brand story with captivating images and engaging videos."
      serviceDetails.value = [
        {
          title: "Video Production",
          description: "We craft captivating visuals through strategic planning, production and creative execution to bring your brand's story to life."
        },
        {
          title: "2D/3D Animation",
          description: "Our dynamic 2D/3D animation approaches adds vibrancy and depth to your visual storytelling."
        },
        {
          title: "Aerial / Drone Videography",
          description: "From product launches to location showcases, this videography technique will wow your audience with stunning, versatile visuals."
        },
        {
          title: "Photography",
          description: "Revamp corporate photos, craft editorials and showcase your products with our photography services for lasting impressions in every shot."
        },
        {
          title: "Voice Over",
          description: "Efficient, cost-effective voice-over services adapt your brand's media for a host of new audiences, delivered promptly with top-notch equipment and skilled actors."
        },
        {
          title: "CGI & VFX",
          description: "Elevate your visuals with cutting-edge CGI & VFX enhancements, adding an immersive edge to your content."
        },
        {
          title: "VR & AR",
          description: "Take your campaign to the next dimension. From immersive 3D environments or fun filter games on social media, augment your brand's presence with VR and AR services."
        },
        {
          title: "Green Screen",
          description: "Transform your scenes with versatile green screen technology, unlocking limitless possibilities for your brand campaign."
        },
      ]
      break;
    case "event-management":
      currentService.value.title = "Event Management"
      currentService.value.description = "From conceptualising all the way to d-day handling, our event management team is poised to bring it all to life. "
      serviceDetails.value = [
        {
          title: "Virtual / Physical / Hybrid Events",
          description: "Online or offline, our event management team will take your projects to the next level. Let’s collaborate to build a memorable experience!"
        },
        {
          title: "Live Streaming",
          description: "Elevate your events with dynamic live streaming solutions for uninterrupted delight, maximising reach with our virtual experiences expertise."
        },
        {
          title: "Event Printing & Rental",
          description: "Elevate your events with dynamic live streaming solutions for uninterrupted delight, maximising reach with our virtual experiences expertise."
        },
        {
          title: "Professional Audio System",
          description: "Let your voice be heard loud and clear. Our team of audio professionals strives to craft immersive, high-quality sonic experiences for your events. "
        },
        {
          title: "Multi-camera Production (MCP)",
          description: "Our production team can help give your video a more dynamic edge with exciting angles for lasting impressions."
        },
      ]
      break;
  }
})

const navs = reactive([
  {
    text: "let's get in touch!",
    slug: 'contact'
  },
  {
    text: "view all services",
    slug: 'services'
  },
  {
    text: "view our work",
    slug: 'work'
  }
])
</script>
<style lang="sass" scoped>
@import "../../assets/sass/responsive.sass"
@import "../../assets/sass/fonts.sass"
@import "../../assets/sass/animations.sass"
@import "../../assets/sass/layout.sass"
@import "../../assets/sass/inputs.sass"

.header-container
  padding-top: 150px
  gap: 45px
  // padding-bottom: 48px
  padding-inline: 0
.services-header
  // height: 400px
  width: 100%
.services-icon
  width: 250px
  // height: 300px
#services
  background: black
.service-detail-grid-2
  display: flex
  flex-direction: column
  flex-wrap: wrap
  justify-content: center
  gap: 60px
  padding: 0 80px
  margin-bottom: 60px
  .service-detail-item
    width: 45%
    flex: 0
    padding: 24px
    border: 1px solid #000000
    color: white
    p:first-child
      font-size: 30px
      font-weight: normal
      margin: 0
    &:hover
      color: #DC9F41
      border: 1px solid #DC9F41

</style>