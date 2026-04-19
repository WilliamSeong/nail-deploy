<script setup lang="ts">

  import { computed, inject, onMounted, onUnmounted, ref, watch } from 'vue'
  import { useRoute } from 'vue-router'
  import '../styles/themes.css'

  const theme = inject<{ isDark: { value: boolean }; toggleDark: () => void }>('theme')
  const isDark = theme?.isDark ?? ref(false)
  const toggleDark = theme?.toggleDark ?? (() => {})

  const route = useRoute()
  const atTop = ref(true)

  const isHomePage = computed(() => route.path === '/')
  const isTransparent = computed(() => isHomePage.value && atTop.value)

  const handleScroll = (): void => {
    if (!isHomePage.value) return
    const heroTitle = document.getElementById('hero-title')
    if (heroTitle) {
      const heroTitleRect = heroTitle.getBoundingClientRect()
      atTop.value = heroTitleRect.bottom > 0
    } else {
      atTop.value = window.scrollY < 10
    }
  }

  watch(() => route.path, (path) => {
    if (path !== '/') atTop.value = false;
  })

  const menu = ref(false)
  function toggleMenu() {
    menu.value = !menu.value
  }

  function closeMenu() {
    menu.value = false
  }

  onMounted(() => {
    if (route.path !== '/') atTop.value = false;
    handleScroll()
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

</script>

<template>
<!-- Mobile -->
    <button class="menu-toggle" :class="{ 'menu-toggle--transparent': isTransparent }" @click="toggleMenu">
        <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>

    <Transition name="slide" >

        <div class="header" v-if="menu">
            <router-link to="/" class="header-name" @click="closeMenu">
                Nail by Young
            </router-link>

            <div class="header-line">
                <hr/>
            </div>

            <div class="links">
                <ul class="link-list">
                    <li class="list-item">
                        <router-link to="/" class="list-item-link" @click="closeMenu">
                            Home
                        </router-link>
                    </li>
                    <li class="list-item">
                        <router-link to="/menu" class="list-item-link" @click="closeMenu">
                            Menu
                        </router-link>
                    </li>
                </ul>
            </div>
            <button type="button" class="theme-toggle" :class="{ 'theme-toggle--dark': isDark }" @click="toggleDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
                <span class="theme-toggle-icon theme-toggle-icon--sun" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                </span>
                <span class="theme-toggle-icon theme-toggle-icon--moon" aria-hidden="true">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                </span>
            </button>
        </div>

    </Transition>

    <Transition name="fade">
        
        <div v-if="menu" class="overlay" @click="closeMenu"></div>

    </Transition>

    <!-- Home promo: fixed strip below 1000px (hamburger z-index 3) -->
    <div
        v-if="isHomePage"
        class="banner home-banner-mobile"
        :class="{ 'banner--transparent': isTransparent }"
    >
        <div class="banner-inner">
            <p class="banner-text">
                <span class="banner-brand">Dazzle Dry</span>
                <span class="banner-sep" aria-hidden="true">·</span>
                <span class="banner-tagline"><em>Dries in <strong>5 min</strong>, lasts up to <strong>10 days</strong></em></span>
            </p>
            <router-link
                to="/menu#dazzle-dry"
                class="banner-cta"
                aria-label="See Dazzle Dry details on the menu"
            >
                See details
            </router-link>
        </div>
    </div>

<!-- Desktop -->
    <div class="header-desktop" :class="{ 'header-desktop--transparent': isTransparent }">
        <div class="header-nav-desktop">
            <router-link to="/" class="header-name">Nail by Young</router-link>
            <nav class="links">
                <ul class="link-list">
                    <li class="list-item"><router-link to="/" class="list-item-link">Home</router-link></li>
                    <li class="list-item"><router-link to="/menu" class="list-item-link">Menu</router-link></li>
                    <li class="list-item list-item--toggle">
                        <button type="button" class="theme-toggle theme-toggle--desktop" :class="{ 'theme-toggle--dark': isDark }" @click="toggleDark" :aria-label="isDark ? 'Switch to light mode' : 'Switch to dark mode'">
                            <span class="theme-toggle-icon theme-toggle-icon--sun" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"/></svg>
                            </span>
                            <span class="theme-toggle-icon theme-toggle-icon--moon" aria-hidden="true">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                            </span>
                        </button>
                    </li>
                </ul>
            </nav>
        </div>
        <div
            v-if="isHomePage"
            class="banner"
            :class="{ 'banner--transparent': isTransparent }"
        >
            <div class="banner-inner">
                <p class="banner-text">
                    <span class="banner-brand">Dazzle Dry</span>
                    <span class="banner-sep" aria-hidden="true">·</span>
                    <span class="banner-tagline"><em>Dries in <strong>5 min</strong>, lasts up to <strong>10 days</strong></em></span>
                </p>
                <router-link
                    to="/menu#dazzle-dry"
                    class="banner-cta"
                    aria-label="See Dazzle Dry details on the menu"
                >
                    See details
                </router-link>
            </div>
        </div>
    </div>


</template>

<style scoped>

    /* Home Dazzle promo — shared look; mobile = fixed strip, desktop = under nav */
    .banner {
        width: 100%;
        margin: 0;
        padding: 0;
        background: linear-gradient(
            180deg,
            color-mix(in srgb, var(--salon-rose, #c9a9a6) 88%, var(--nav-bg, #e8ddda)) 0%,
            var(--salon-rose, var(--primary-light)) 55%,
            color-mix(in srgb, var(--salon-rose, #c9a9a6) 75%, var(--primary-dark, #8b7355) 25%) 100%
        );
        box-shadow: inset 0 1px 0 color-mix(in srgb, #fff 35%, transparent);
        opacity: 1;
        transition:
            opacity 500ms ease,
            color 500ms ease,
            box-shadow 500ms ease;

        color: var(--text-primary, #3d3230);
    }

    .banner-inner {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 0.5rem 1rem;
        max-width: 56rem;
        margin: 0 auto;
        padding: 0.55rem 1.5rem 0.6rem;
        text-align: center;
    }

    .banner-text {
        margin: 0;
        font-size: clamp(0.78rem, 1.15vw, 0.9rem);
        line-height: 1.45;
        letter-spacing: 0.02em;
        color: inherit;
    }

    .banner-brand {
        font-weight: 600;
        letter-spacing: 0.14em;
        text-transform: uppercase;
        font-size: 0.92em;
    }

    .banner-sep {
        margin: 0 0.2rem;
        opacity: 0.55;
        font-weight: 300;
    }

    .banner-tagline em {
        font-style: italic;
        font-weight: 400;
    }

    .banner-cta {
        flex-shrink: 0;
        font-size: clamp(0.72rem, 1vw, 0.82rem);
        font-weight: 600;
        letter-spacing: 0.08em;
        text-transform: uppercase;
        text-decoration: none;
        color: var(--primary-dark, #8b7355);
        padding: 0.28rem 0.75rem;
        border-radius: 999px;
        background: color-mix(in srgb, var(--bg-light, #fff) 55%, transparent);
        transition:
            background-color 500ms ease,
            color 500ms ease,
            border-color 500ms ease,
            transform 500ms ease;
    }

    .banner-cta:hover {
        background: color-mix(in srgb, var(--bg-light, #fff) 88%, transparent);
        border-color: color-mix(in srgb, var(--primary-dark, #8b7355) 70%, transparent);
    }

    .banner-cta:focus-visible {
        outline: 2px solid var(--primary-dark, #8b7355);
        outline-offset: 2px;
    }

    .banner-cta:active {
        transform: scale(0.98);
    }

    .theme-dark .banner-cta {
        color: var(--text-primary, #f2ede9);
        border-color: color-mix(in srgb, var(--text-primary, #f2ede9) 35%, transparent);
        background: color-mix(in srgb, var(--nav-bg, #2c2624) 40%, transparent);
    }

    .theme-dark .banner-cta:hover {
        background: color-mix(in srgb, var(--nav-bg, #2c2624) 65%, transparent);
        border-color: color-mix(in srgb, var(--text-primary, #f2ede9) 50%, transparent);
    }

    .theme-dark .banner-cta:focus-visible {
        outline-color: var(--text-primary, #f2ede9);
    }

    /* Fade banner with nav at hero top. */
    .banner--transparent {
        opacity: 0;
        pointer-events: none;
        box-shadow: none !important;
    }

    @media (max-width: 999px) {
        .home-banner-mobile {
            display: block;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            z-index: 2;
            width: 100%;
            box-sizing: border-box;
            padding-top: max(6px, env(safe-area-inset-top));
            padding-bottom: 6px;
            padding-right: max(10px, env(safe-area-inset-right));
            padding-left: max(52px, calc(12px + env(safe-area-inset-left)));
        }

        .home-banner-mobile .banner-inner {
            padding: 0.3rem 0 0.35rem;
            gap: 0.35rem 0.5rem;
            max-width: none;
            justify-content: flex-start;
            text-align: left;
        }

        .home-banner-mobile .banner-text {
            font-size: clamp(0.68rem, 3.2vw, 0.82rem);
            line-height: 1.35;
            letter-spacing: 0.01em;
            flex: 1;
            min-width: 0;
            text-wrap: balance;
        }

        .home-banner-mobile .banner-brand {
            letter-spacing: 0.08em;
        }

        .home-banner-mobile .banner-cta {
            font-size: clamp(0.62rem, 3vw, 0.74rem);
            padding: 0.2rem 0.5rem;
            letter-spacing: 0.06em;
            align-self: center;
        }

        .header-desktop{
            display: none;
        }

        .header {
            height: 100vh;
            display: flex;
            flex-direction: column;
            width: 80%;
            max-width: 340px;
            position: fixed;
            top: 0;
            left: 0;
            padding: 3.5rem 1.75rem 2rem;
            gap: 1.5rem;
            background: var(--overlay-light);
            z-index: 4;
            box-shadow: 0 0 25px rgba(0, 0, 0, 0.18);
            border-radius: 0 18px 18px 0;
        }

        .slide-enter-active,
        .slide-leave-active{
            transition: transform 150ms ease-in;
        }

        .slide-enter-from,
        .slide-leave-to{
            transform: translateX(-100%);
        }
        .menu-toggle{
            height: 30px;
            width: 30px;

            top: 10px;
            left: 10px;
            margin: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            position: fixed;
            z-index: 3;

            border-radius: 5px;
            border-width: 0;
            background: var(--primary-color);
            opacity: 0.85;

            transition: transform 500ms, background-color 500ms, opacity 500ms;
        }

        .menu-toggle--transparent {
            opacity: 0.4;
        }

        .menu-toggle:active {
            transform: scale(0.95);
            background: var(--primary-dark);
        }

        .hamburger-icon {
            width: 20px;
            height: 14px;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            padding: 1px 0;
        }

        .hamburger-icon span {
            height: 2px;
            width: 90%;
            background-color: var(--bg-light);
        }

        .overlay{
            height: 100%;
            width: 100%;
            background: rgba(0,0,0, 0.4);
            position: fixed;
            z-index: 3;
        }

        .fade-enter-active,
        .fade-leave-active{
            transition: opacity 150ms ease;
        }

        .fade-enter-from,
        .fade-leave-to{
            opacity: 0;
        }

        .header-name{
            width: 100%;
            margin: 0;
            font-family: Georgia, 'Times New Roman', serif;
            font-weight: 500;
            font-size: 1.5rem;
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--text-primary);
            text-decoration: none;
        }

        .header-line {
            width: 40%;
            margin: 0;
            opacity: 0.6;
        }

        .links {
            width: 100%;
            margin: 0 auto;
            padding: 1vh;
        }

        .link-list {
            list-style: none;
            padding: 0;
        }

        .list-item {
            width: 100%;
            margin: 0.75rem 0;
        }

        .list-item-link {
            display: inline-block;
            color: var(--text-light);
            text-decoration: none;
            font-size: 1.05rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            padding: 0.25rem 0;
            transition: color 180ms ease, transform 120ms ease;
        }

        .list-item-link:active {
            transform: scale(0.95);
            color: var(--primary-dark);
        }

        .theme-toggle {
            margin-top: 1rem;
            padding: 0.5rem;
            border: none;
            outline: none;
            border-radius: 8px;
            background: var(--overlay-light);
            color: var(--text-primary);
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background 500ms ease, transform 500ms ease;
            appearance: none;
            box-shadow: none;
        }

        .theme-toggle:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }

        .theme-toggle:hover {
            background: var(--theme-toggle-hover, var(--bg-accent));
        }

        .theme-toggle:active {
            transform: scale(0.95);
        }

        .theme-toggle-icon {
            display: block;
            line-height: 0;
        }

        .theme-toggle-icon--sun {
            display: none;
        }

        .theme-toggle--dark .theme-toggle-icon--sun {
            display: block;
        }

        .theme-toggle--dark .theme-toggle-icon--moon {
            display: none;
        }
    }

    @media (max-width: 380px) {
        .home-banner-mobile .banner-inner {
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .home-banner-mobile .banner-cta {
            align-self: center;
        }
    }

    /* Tablet: a bit more room, centered row like desktop */
    @media (min-width: 640px) and (max-width: 999px) {
        .home-banner-mobile .banner-inner {
            justify-content: center;
            text-align: center;
            padding-left: 0.75rem;
            padding-right: 0.75rem;
        }

        .home-banner-mobile .banner-text {
            font-size: clamp(0.76rem, 1.8vw, 0.88rem);
            flex: 0 1 auto;
        }
    }

    @media (min-width: 1000px) {
        .overlay,
        .menu-toggle{
            display: none;
        }

        .home-banner-mobile {
            display: none !important;
        }

        .header-desktop {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            /* padding: 0.75rem 2rem; */
            min-height: 56px;
            box-sizing: border-box;
            transition: background-color 500ms, color 500ms;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            width: 100%;
            z-index: 3;
            background: var(--nav-bg, var(--primary-light));
            color: var(--text-primary);
        }

        .header-nav-desktop{
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0.75rem 2rem;
            min-height: 56px;
            box-sizing: border-box;
            transition: background-color 500ms, color 500ms;
            width: 100%;
        }

        .header-desktop--transparent {
            background: transparent;
            color: transparent;
            pointer-events: none;
        }

        .header-desktop--transparent .header-name,
        .header-desktop--transparent .list-item-link,
        .header-desktop--transparent .theme-toggle {
            color: transparent;
            opacity: 0;
            pointer-events: none;
        }

        .header-desktop:not(.header-desktop--transparent):hover {
            background: var(--nav-bg, var(--primary-light));
        }

        .header-desktop:not(.header-desktop--transparent):hover .header-name{
            color: var(--text-primary);
        }

        .header-desktop:not(.header-desktop--transparent):hover .list-item-link {
            color: var(--text-primary);
            opacity: 1;
            pointer-events: auto;
        }

        .header-desktop:not(.header-desktop--transparent):hover .theme-toggle {
            opacity: 1;
            pointer-events: auto;
        }

        .header-name {
            margin: 0;
            font-family: Georgia, 'Times New Roman', serif;
            font-weight: 400;
            font-size: clamp(1.1rem, 1.5vw, 1.4rem);
            letter-spacing: 0.08em;
            text-transform: uppercase;
            color: var(--text-primary);
            transition: 500ms ease;
            text-decoration: none;
        }

        .links {
            padding: 0;
            margin: 0;
        }

        .link-list {
            display: flex;
            align-items: center;
            gap: 1.5rem;
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .list-item {
            list-style-type: none;
            margin: 0;
        }

        .list-item-link {
            color: var(--text-primary);
            opacity: 0.9;
            text-decoration: none;
            transition: 500ms;
        }

        .list-item--toggle {
            display: flex;
            align-items: center;
        }

        .theme-toggle--desktop {
            margin-top: 0;
            margin-left: 0;
            padding: 0.4rem;
            border: none;
            outline: none;
            background: var(--nav-bg, var(--primary-light));
            color: var(--text-primary);
            transition: background 500ms ease;
            appearance: none;
            box-shadow: none;
        }

        .theme-toggle--desktop:focus-visible {
            outline: 2px solid currentColor;
            outline-offset: 2px;
        }

        .theme-toggle--desktop:hover {
            background: var(--theme-toggle-hover, var(--bg-accent));
        }

        .theme-toggle-icon {
            display: block;
            line-height: 0;
            color: inherit;
        }

        .theme-toggle-icon--sun {
            display: none;
        }

        .theme-toggle--dark .theme-toggle-icon--sun {
            display: block;
        }

        .theme-toggle--dark .theme-toggle-icon--moon {
            display: none;
        }
    }


</style>
