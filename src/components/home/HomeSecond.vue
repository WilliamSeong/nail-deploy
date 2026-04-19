<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef, { rootMargin: '0px 0px -60px 0px' })
</script>

<template>
  <section ref="sectionRef" class="about" :class="{ 'reveal--visible': isVisible }">
    <div class="about-inner">
      <h2 class="about-title">Welcome</h2>
      <p class="about-text">
        At Nail by Young we focus on quality nail care in a relaxing, friendly environment.
        Whether you're here for a classic manicure, a spa pedicure, or a full set, we're here
        to help you look and feel your best.
      </p>
      <p class="about-text">
        Stop by our Upper West Side location, we'd love to see you!
      </p>
    </div>
  </section>
</template>

<style scoped>
.about {
  padding: 4rem 1.5rem;
  background: var(--section-bg, transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.65s cubic-bezier(0.22, 1, 0.36, 1), transform 0.65s cubic-bezier(0.22, 1, 0.36, 1);
}

.about.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

.about-inner {
  max-width: 36rem;
  text-align: center;
}

.about-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 400;
  color: var(--text-primary, #3D3230);
  margin: 0 0 1.5rem;
  letter-spacing: 0.02em;
}

.about-text {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.7;
  color: var(--text-light, #5C504E);
  margin: 0 0 1rem;
}

.about-text:last-child {
  margin-bottom: 0;
}
</style>
