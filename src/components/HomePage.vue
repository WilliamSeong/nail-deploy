<script setup lang="ts">
import Nav from './NavBar.vue'
import First from './home/HomeFirst.vue'
import Second from './home/HomeSecond.vue'
import Reviews from './home/HomeReviews.vue'
import Gallery from './home/HomeGallery.vue'
import Third from './home/HomeThird.vue'
import Sixth from './home/HomeSixth.vue'
import Foot from './FooterBar.vue'

function scroll(x: string) {
  if (x) {
    document.getElementById(x)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <div class="home-container">
    <Nav />
    <First @scroll="scroll" />
    <Second />
    <Reviews />
    <Gallery />
    <Third id="hours" />
    <Sixth id="contact" />
    <Foot />
  </div>
</template>

<style scoped>
.home-container {
  width: 100%;
}
</style>