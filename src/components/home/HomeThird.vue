<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const cardRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(cardRef, { rootMargin: '0px 0px -80px 0px' })
</script>

<template>
  <section id="hours" class="hours-section">
    <div ref="cardRef" class="hours-card" :class="{ 'reveal--visible': isVisible }">
      <h2 class="hours-title">Hours</h2>
      <dl class="hours-list">
        <div class="hours-row">
          <dt>Monday – Friday</dt>
          <dd>10:30 AM – 8:00 PM</dd>
        </div>
        <div class="hours-row">
          <dt>Saturday</dt>
          <dd>10:00 AM – 7:00 PM</dd>
        </div>
        <div class="hours-row">
          <dt>Sunday</dt>
          <dd>10:30 AM – 7:00 PM</dd>
        </div>
      </dl>
    </div>
  </section>
</template>

<style scoped>
.hours-section {
  padding: 4rem 1.5rem;
  background: var(--section-bg, transparent);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50vh;
}

.hours-card {
  background: var(--bg-light, #fff);
  padding: 2.5rem 3rem;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(61, 50, 48, 0.06);
  max-width: 23rem;
  width: 100%;
  opacity: 0;
  transform: translateY(36px) scale(0.97);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.hours-card.reveal--visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.hours-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.5rem, 4vw, 1.75rem);
  font-weight: 400;
  color: var(--text-on-light, #3D3230);
  margin: 0 0 1.5rem;
  text-align: center;
  letter-spacing: 0.02em;
}

.hours-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.hours-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1.5rem;
  padding: 0.6rem 0;
  border-bottom: 1px solid var(--salon-blush, #E8DDDA);
}

.hours-row:last-child {
  border-bottom: none;
}

.hours-row dt {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-on-light, #3D3230);
  margin: 0;
}

.hours-row dd {
  font-size: 0.95rem;
  color: var(--text-on-light, #5C504E);
  margin: 0;
  opacity: 0.9;
}
@media (max-width: 600px) {
  .hours-card {
    padding: 2rem 1.5rem;
  }
}
</style>
