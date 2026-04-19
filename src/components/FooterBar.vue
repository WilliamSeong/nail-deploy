<script setup lang="ts">
</script>

<template>
    <div class="footer-bar">
        <div class="footer-inner">
            <div class="footer-brand">
                <span class="footer-title">Nail by Young</span>
                <span class="footer-subtitle">Follow & review us</span>
            </div>

            <div class="logos">
                <a href="https://www.instagram.com/amy_nailbyyoung/" target="_blank" aria-label="Visit our Instagram">
                    <img class="logo" src="../assets/insta.png" alt="Instagram logo">
                </a>
                <a href="https://www.yelp.com/biz/nail-by-young-new-york" target="_blank" aria-label="Read our Yelp reviews">
                    <img class="logo" src="../assets/yelp-min.png" alt="Yelp logo">
                </a>
            </div>

            <div class="copyright">
                <p>©2026 Nail by Young · Site by WS</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
  .footer-bar {
    width: 100%;
    background: var(--primary-dark);
    color: var(--bg-light);
    margin-top: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: row;
    min-height: 72px;
    position: relative;
    z-index: 1;
  }

  .footer-inner {
    width: 100%;
    max-width: 1100px;
    margin: 0 auto;
    padding: 0.75rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
  }

  .footer-brand {
    display: flex;
    flex-direction: column;
    gap: 0.1rem;
  }

  .footer-title {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 1rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
  }

  .footer-subtitle {
    font-size: 0.8rem;
    opacity: 0.8;
  }

  .logos {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.85rem;
  }

  .logo {
    height: 24px;
    width: auto;
    filter: grayscale(1);
    opacity: 0.9;
    transition: transform 120ms ease, opacity 120ms ease, filter 120ms ease;
  }

  .logos a:hover .logo,
  .logos a:focus-visible .logo {
    transform: translateY(-1px) scale(1.05);
    opacity: 1;
    /* filter: grayscale(1); */
  }

  .copyright {
    font-size: 0.75rem;
    opacity: 0.8;
  }

  @media (max-width: 640px) {
    .footer-inner {
      flex-direction: column;
      align-items: center;
      text-align: center;
      padding: 1rem 1.25rem;
      gap: 0.75rem;
    }

    .footer-brand {
      align-items: center;
    }

    .copyright {
      order: 3;
    }
  }
  
</style>
