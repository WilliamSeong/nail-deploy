<script setup lang="ts">
import { ref } from 'vue'
import { useScrollReveal } from '../../composables/useScrollReveal'

const sectionRef = ref<HTMLElement | null>(null)
const { isVisible } = useScrollReveal(sectionRef, { rootMargin: '0px 0px -60px 0px' })
</script>

<template>
  <section id="contact" ref="sectionRef" class="contact" aria-labelledby="contact-heading" :class="{ 'reveal--visible': isVisible }">
    <div class="contact-inner">
      <h2 id="contact-heading" class="contact-title">Contact Us</h2>
      <p class="contact-intro">Visit us on the Upper West Side or get in touch.</p>
      <div class="contact-grid">
        <a class="contact-item" target="blank" href="https://www.google.com/maps/place/Nail+by+Young/@40.7785478,-73.9834483,17z/data=!3m2!4b1!5s0x89c2588a39ed72bb:0xae59a85cfa2bb7fe!4m6!3m5!1s0x89c259932a9df6bb:0xa52f2fd483b5c198!8m2!3d40.7785438!4d-73.980868!16s%2Fg%2F11r_b_qn53?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D">
          <span class="contact-icon-wrap" aria-hidden="true">
            <img class="contact-icon" src="../../assets/address.png" alt="" />
          </span>
          <div class="contact-text">
            <span class="contact-label">Address</span>
            <p class="contact-value">165 W 72nd St,<br />New York, NY 10023</p>
          </div>
        </a>
        <div class="contact-item">
          <span class="contact-icon-wrap" aria-hidden="true">
            <img class="contact-icon" src="../../assets/phone2.png" alt="" />
          </span>
          <div class="contact-text">
            <span class="contact-label">Phone</span>
            <a href="tel:+12128732473" class="contact-value contact-link">(212) 873-2473</a>
          </div>
        </div>
        <div class="contact-item">
          <span class="contact-icon-wrap" aria-hidden="true">
            <img class="contact-icon" src="../../assets/email.png" alt="" />
          </span>
          <div class="contact-text">
            <span class="contact-label">Email</span>
            <a href="mailto:yougnnails72@yahoo.com" class="contact-value contact-link">yougnnails72@yahoo.com</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  padding: 4.5rem 1.5rem;
  background: var(--section-bg, transparent);
  color: var(--text-primary, #3D3230);
  opacity: 0;
  transform: translateY(32px);
  transition: opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
}

.contact.reveal--visible {
  opacity: 1;
  transform: translateY(0);
}

.contact-inner {
  max-width: 56rem;
  margin: 0 auto;
  text-align: center;
}

.contact-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(1.6rem, 4vw, 2rem);
  font-weight: 400;
  margin: 0 0 0.5rem;
  letter-spacing: 0.02em;
  color: var(--text-primary, #3D3230);
}

.contact-intro {
  font-size: clamp(0.95rem, 1.5vw, 1.05rem);
  color: var(--text-light, #5C504E);
  opacity: 0.95;
  margin: 0 0 2.5rem;
  max-width: 28rem;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
  gap: 2rem;
  justify-items: center;
  text-align: center;
}

.contact-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.25rem;
  min-width: 0;
  width: 100%;
  max-width: 18rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.7);
  box-shadow: 0 2px 12px rgba(61, 50, 48, 0.08);
  transition: background 0.2s ease, box-shadow 0.2s ease, transform 0.2s ease;
  text-decoration: none;
  color: var(--text-on-light, #3D3230);
}

.contact-item:hover {
  background: rgba(255, 255, 255, 0.9);
  box-shadow: 0 4px 20px rgba(61, 50, 48, 0.12);
  transform: translateY(-4px);
}

.contact-icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  flex-shrink: 0;
}

.contact-icon {
  width: 2.25rem;
  height: 2.25rem;
  opacity: 0.9;
  filter: brightness(0);
}

.contact-text {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
}

.contact-label {
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: var(--text-on-light, #5C504E);
  font-weight: 500;
  opacity: 0.9;
}

.contact-value {
  font-size: 1rem;
  margin: 0;
  line-height: 1.5;
  color: var(--text-on-light, #3D3230);
}

.contact-link {
  color: var(--text-on-light, #3D3230);
  text-decoration: none;
  text-underline-offset: 4px;
  transition: opacity 0.2s ease;
}

.contact-link:hover {
  text-decoration: underline;
  opacity: 0.85;
}

.contact-link:focus-visible {
  outline: 2px solid var(--primary-dark, #8B7355);
  outline-offset: 3px;
  border-radius: 2px;
}
</style>
