<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
defineEmits<{ scroll: [id: string] }>()

const parallaxY = ref(0)
const parallaxActive = ref(false)
let rafId = 0
let revealTimeout = 0

function onScroll() {
  if (rafId) return
  rafId = requestAnimationFrame(() => {
    const hero = document.getElementById('hero-title')?.closest('.hero')
    const top = hero?.getBoundingClientRect().top ?? 0
    const height = hero?.getBoundingClientRect().height ?? 0
    if (height > 0 && top < height) {
      parallaxY.value = Math.min(0, top * 0.25)
    } else {
      parallaxY.value = 0
    }
    rafId = 0
  })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
  revealTimeout = window.setTimeout(() => { parallaxActive.value = true }, 1100)
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
  if (revealTimeout) window.clearTimeout(revealTimeout)
})
</script>

<template>
  <section class="hero">
    <div
      class="hero-inner hero-inner--animate"
      :style="parallaxActive ? { transform: `translateY(${parallaxY}px)` } : undefined"
    >
      <h1 id="hero-title" class="hero-title">Nail by Young</h1>
      <p class="hero-tagline">Nail care & beauty in the heart of New York</p>
      <div class="hero-actions">
        <a href="/menu" class="btn btn-primary">View Menu</a>
        <button type="button" class="btn btn-secondary" @click="$emit('scroll', 'hours')">
          Hours
        </button>
        <button type="button" class="btn btn-secondary" @click="$emit('scroll', 'contact')">
          Contact
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, var(--salon-cream, #FDF8F5) 0%, var(--salon-blush, #E8DDDA) 100%);
  padding: 2rem 1.5rem;
  box-sizing: border-box;
}

@media (max-width: 999px) {
  .hero {
    /* Clear fixed hamburger + home promo strip */
    padding-top: max(3.35rem, calc(2rem + env(safe-area-inset-top)));
  }
}

.hero-inner {
  text-align: center;
  max-width: 36rem;
}

.hero-inner--animate {
  opacity: 0;
  transform: translateY(28px) scale(0.98);
  animation: heroReveal 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.15s forwards;
  transition: transform 0.15s ease-out;
}

@keyframes heroReveal {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.hero-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(2.5rem, 8vw, 4rem);
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--text-primary, #3D3230);
  margin: 0 0 0.75rem;
  line-height: 1.15;
}

.hero-tagline {
  font-size: clamp(1rem, 2.5vw, 1.25rem);
  color: var(--text-light, #5C504E);
  margin: 0 0 2.5rem;
  font-weight: 400;
  letter-spacing: 0.01em;
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  justify-content: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  text-decoration: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.2s, color 0.2s, transform 0.1s;
  border: none;
}

.btn-primary {
  background: var(--primary-dark, #8B7355);
  color: #fff;
}

.btn-primary:hover {
  background: var(--primary-color, #B89591);
}

.btn-secondary {
  background: transparent;
  color: var(--text-primary, #3D3230);
  border: 1.5px solid var(--salon-rose, #C9A9A6);
}

.btn-secondary:hover {
  background: var(--bg-accent);
  border-color: var(--primary-dark);
}
</style>
