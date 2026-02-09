<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef, { rootMargin: '0px 0px -80px 0px' })

interface Review {
  name: string
  rating: number
  text: string
  date?: string
}

const reviews: Review[] = [
  {
    name: 'Lucy',
    rating: 5,
    text: 'My go-to nail salon. Only one I use on UWS. Mani always lasts a really long time. Very clean. Nice people.',
    date: 'JAN 2026'
  },
  {
    name: 'Stephanie',
    rating: 5,
    text: 'I saw Fanne and Lisa - they did a fantastic job. I was running late and they stayed open just for me. Great service and attention to detail. I\’ll be back!',
    date: 'DEC 2025'
  },
  {
    name: 'Dennis',
    rating: 5,
    text: 'I had the microdermabrasion procedure done, which came with skin and blackhead cleaning, light massage, and a rubber mask to end. The whole process was so soothing and relaxing! My skin afterwards was glowing and I got a lot of compliments on it.',
    date: 'OCT 2025'
  },
  {
    name: 'Seonghee',
    rating: 5,
    text: 'I truly recommend this nail salon. The staff are kind and attentive, making me feel comfortable from start to finish. Most importantly, their skills are outstanding, and the designs are both detailed and beautifully done—I was really impressed with the results.',
    date: 'SEP 2025'
  },
  {
    name: 'Amy',
    rating: 5,
    text: 'It’s always a pleasure getting my nails done here. Amy’s nail designs are top tier!! Make sure you book her in advance since she can get busy. Sook is great at taking care of ingrown nails if you’re getting a pedicure!',
    date: 'SEP 2025'
  }
]

const currentIndex = ref(0)
const isAutoPlaying = ref(true)
let autoPlayInterval: number | null = null

const nextReview = () => {
  currentIndex.value = (currentIndex.value + 1) % reviews.length
}

const prevReview = () => {
  currentIndex.value = (currentIndex.value - 1 + reviews.length) % reviews.length
}

const goToReview = (index: number) => {
  currentIndex.value = index
}

const startAutoPlay = () => {
  if (autoPlayInterval) return
  autoPlayInterval = window.setInterval(() => {
    if (isAutoPlaying.value) {
      nextReview()
    }
  }, 5000) // Change review every 5 seconds
}

const stopAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval)
    autoPlayInterval = null
  }
}

onMounted(() => {
  startAutoPlay()
})

onUnmounted(() => {
  stopAutoPlay()
})
</script>

<template>
  <section ref="sectionRef" class="reviews-section" :class="{ 'reveal--visible': isVisible }">
    <div class="reviews-container">
      <h2 class="reviews-title">What Our Customers Say</h2>
      
      <div class="reviews-carousel-wrapper">

        <div class="reviews-carousel">
          <div 
            class="reviews-track" 
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
          >
            <div 
              v-for="(review, index) in reviews" 
              :key="index"
              class="review-card"
              @mouseenter="isAutoPlaying = false"
              @mouseleave="isAutoPlaying = true"
            >
              <div class="review-stars" aria-label="5 star review">
                <span
                  v-for="i in review.rating"
                  :key="i"
                  class="star"
                >
                  ★
                </span>
              </div>
              <p class="review-text">"{{ review.text }}"</p>
              <div class="review-footer">
                <span class="review-name">{{ review.name }}</span>
                <span v-if="review.date" class="review-date">{{ review.date }}</span>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div class="reviews-dots">
        <button
          v-for="(review, index) in reviews"
          :key="index"
          class="dot"
          :class="{ 'dot--active': currentIndex === index }"
          @click="goToReview(index)"
          :aria-label="`Go to review ${index + 1}`"
        />
      </div>
    </div>
  </section>
</template>

<style scoped>
.reviews-section {
  padding: 4rem 1.5rem;
  background: var(--section-bg, transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.reviews-section.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

.reviews-container {
  width: 100%;
  max-width: 48rem;
  margin: 0 auto;
}

.reviews-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.5rem, 4vw, 2rem);
  font-weight: 400;
  color: var(--text-primary, #3D3230);
  margin: 0 0 2.5rem;
  text-align: center;
  letter-spacing: 0.02em;
}

.reviews-carousel-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.carousel-btn {
  background: var(--primary-light, #E8DDDA);
  border: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: var(--text-primary, #3D3230);
  cursor: pointer;
  transition: background 0.2s, transform 0.1s;
  flex-shrink: 0;
  z-index: 2;
}

.carousel-btn:hover {
  background: var(--primary-color, #B89591);
  color: var(--bg-light, #fff);
}

.carousel-btn:active {
  transform: scale(0.95);
}

.reviews-carousel {
  flex: 1;
  overflow: hidden;
  position: relative;
}

.reviews-track {
  display: flex;
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.review-card {
  min-width: 100%;
  padding: 2rem 1.5rem;
  background: var(--salon-blush, #E8DDDA);
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(61, 50, 48, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.review-stars {
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.star {
  color: #FFB800;
  font-size: 1.25rem;
  line-height: 1;
}

.review-text {
  font-size: clamp(0.95rem, 2vw, 1.05rem);
  line-height: 1.7;
  color: var(--text-primary, #3D3230);
  margin: 0;
  text-align: center;
  font-style: italic;
}

.review-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(61, 50, 48, 0.1);
}

.review-name {
  font-weight: 600;
  font-size: 0.95rem;
  color: var(--text-primary, #3D3230);
}

.review-date {
  font-size: 0.85rem;
  color: var(--text-light, #5C504E);
  opacity: 0.7;
}

.reviews-dots {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
}

.dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;
  border: none;
  background: var(--primary-light, #E8DDDA);
  cursor: pointer;
  transition: background 0.2s, transform 0.2s;
  padding: 0;
}

.dot:hover {
  transform: scale(1.2);
}

.dot--active {
  background: var(--primary-color, #B89591);
  width: 1.25rem;
  border-radius: 0.25rem;
}

@media (max-width: 640px) {
  .carousel-btn {
    width: 2rem;
    height: 2rem;
    font-size: 1.25rem;
  }

  .review-card {
    padding: 1.5rem 1.25rem;
  }

  .review-footer {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }

  .reviews-carousel-wrapper {
    gap: 0.25rem;
  }
}
</style>
