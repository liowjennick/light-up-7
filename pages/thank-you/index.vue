<template>
  <div class="thank-you-container">
    <img
          class="title-image"
          src="../../assets/images/thank-you/thank-you.png"
          alt="Thank You"
        />
    <h1 class="white-text">Your submission has been received.</h1>
    <p class="white-text">Our team will contact you soon.</p>
  </div>
</template>

<script setup>
useHead({
  title: "Thank You - Your Website",
  meta: [{ name: "description", content: "Thank you for your submission." }]
});
</script>

<style scoped>
.thank-you-container {
  text-align: center;
  padding-top: 200px;
  padding-bottom: 120px;
}

.white-text {
  color: white;
}
.title-image {
  width: 50%;
  max-width: 100%;
  margin-top: 50px;
  margin-bottom: 40px; 
}

@media (max-width: 768px) {
  .title-image {
    width: 90%; 
  }
}

</style>
