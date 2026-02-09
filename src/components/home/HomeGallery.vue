<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef, { rootMargin: '0px 0px -60px 0px' })

const photos = [
  // Update these filenames to match the images in `public/Photos`
  '/Photos/chairs.jpg',
  '/Photos/main_room.jpg',
  '/Photos/pedicure.jpg',
  '/Photos/store_front.jpg',
  '/Photos/wall.jpg',
]
</script>

<template>
  <section ref="sectionRef" class="gallery-section" :class="{ 'reveal--visible': isVisible }">
    <div class="gallery-inner">
      <div class="gallery-header">
        <h2 class="gallery-title">Our Work</h2>
        <p class="gallery-subtitle">
          A glimpse of the manicures, pedicures, and designs our clients love.
        </p>
      </div>

      <div class="gallery-strip" aria-label="Photo gallery of nail work">
        <div class="gallery-track">
          <figure
            v-for="(src, index) in photos"
            :key="index"
            class="gallery-card"
          >
            <img
              :src="src"
              class="gallery-image"
              loading="lazy"
              :alt="`Nail by Young work photo ${index + 1}`"
            />
          </figure>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.gallery-section {
  padding: 3.5rem 1.5rem;
  background: var(--section-bg, transparent);
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.gallery-section.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

.gallery-inner {
  max-width: 64rem;
  margin: 0 auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 2rem;
}

.gallery-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 400;
  color: var(--text-primary, #3d3230);
  margin: 0 0 0.75rem;
  letter-spacing: 0.02em;
}

.gallery-subtitle {
  margin: 0;
  font-size: clamp(0.9rem, 2vw, 1rem);
  color: var(--text-light, #5c504e);
}

.gallery-strip {
  margin-top: 0.5rem;
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.gallery-strip::-webkit-scrollbar {
  height: 6px;
}

.gallery-strip::-webkit-scrollbar-track {
  background: transparent;
}

.gallery-strip::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.12);
  border-radius: 999px;
}

.gallery-track {
  display: flex;
  gap: 1rem;
  min-width: 100%;
}

.gallery-card {
  flex: 0 0 70%;
  max-width: 18rem;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 30px rgba(61, 50, 48, 0.12);
  background: #000;
}

.gallery-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (min-width: 768px) {
  .gallery-card {
    flex-basis: 30%;
  }
}
</style>

