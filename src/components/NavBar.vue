<script setup lang="ts">

  import { onMounted, onUnmounted, ref } from 'vue';
  import "../styles/themes.css";

  const headerName = ref("hidden");

  const handleScroll = (): void => {
    const scrollPosition = window.scrollY

    if (scrollPosition === 0) {
      headerName.value = "1";
    } else {
      headerName.value = "0";
    }
  }

  const menu = ref(false);
  function toggleMenu() {
    menu.value = !menu.value;
  }

  function closeMenu() {
    menu.value = false;
  }

  onMounted(() => {
    window.addEventListener('scroll', handleScroll)
  })

  onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
  })

</script>

<template>
<!-- Mobile -->
    <button class="menu-toggle md:hidden" @click="toggleMenu">
        <div class="hamburger-icon">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </button>

    <Transition name="slide" >

        <div class="header" v-if="menu">
            <div class="header-name">
                Nail by Young
            </div>

            <div class="header-line">
                <hr/>
            </div>

            <div class="links">
                <ul class="link-list">
                    <li class="list-item"><router-link to="/" class="list-item-link">Home</router-link></li>
                    <li class="list-item"><router-link to="/menu" class="list-item-link">Menu</router-link></li>
                    <!-- <li class="list-item"><router-link to="/test" class="list-item-link">Test</router-link></li> -->
                </ul>
            </div>
        </div>

    </Transition>

    <Transition name="fade">
        
        <div v-if="menu" class="overlay md:hidden" @click="closeMenu"></div>

    </Transition>

<!-- Desktop -->
    <div class="header-desktop">
        <div class="header-name">
            Nail by Young
        </div>

        <div class="header-line">
            <hr/>
        </div>

        <div class="links">
            <ul class="link-list">
                <li class="list-item"><router-link to="/" class="list-item-link">Home</router-link></li>
                <li class="list-item"><router-link to="/menu" class="list-item-link">Menu</router-link></li>
                <!-- <li class="list-item"><router-link to="/test" class="list-item-link">Test</router-link></li> -->
            </ul>
        </div>
    </div>


</template>

<style scoped>

    @media (max-width : 999px) {
        .header-desktop{
            display: none;
        }

        .header {
            height: 100vh;
            display: flex;
            flex-direction: column;
            width: 40%;
            position: fixed;
            background: mintcream;
            z-index: 4;
        }

        .slide-enter-active,
        .slide-leave-active{
            transition: transform 150ms ease-in;
        }

        .slide-enter-from,
        .slide-leave-to{
            transform: translateX(-250px);
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
            opacity: 0.7;

            transition: transform 0.1s, background-color 0.2s;
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
            align-items: space-around;
            padding: 1px 0;
        }

        .hamburger-icon span {
            height: 2px;
            width: 90%;
            background-color: currentColor;
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
            margin: 1vh 0;
        }

        .list-item-link {
            color: var(--text-light);
            text-decoration: none;
            transition: 250ms;
        }

        .list-item-link:active {
            transform: scale(0.95);
            color: var(--primary-dark);
        }
    }



    @media (min-width : 1000px){
        .overlay,
        .menu-toggle{
            display: none;
        }

        .header-desktop {
            height: auto;
            display: flex;
            flex-direction: column;
            transition: 500ms;
            position: fixed;
            width: 100%;
            z-index: 3;
        }

        .header-desktop:hover {
            background: var(--primary-light);
        }

        .header-desktop:hover .header-name{
            color: var(--text-light);
            opacity: 1;
        }

        .header-desktop:hover .header-line{
            opacity: 1;
        }

        .header-desktop:hover .list-item-link {
            color: var(--text-light);
            opacity: 1;
        }

        .header-name{
            width: 50vw;
            height: auto;
            margin: 0 auto;
            margin-top: 2vh;
            text-align: center;
            font-family: Papyrus, Fantasy;
            font-weight: 700;
            font-size: 3vw;
            color: var(--primary-dark);
            transition: 500ms ease;
            opacity: v-bind(headerName);
        }

        .header-line {
            width: 40vw;
            margin: auto;
            opacity: 0;
            transition: 500ms;
        }

        .links {
            width: 80vw;
            margin: 0 auto;
            padding: 1vh;
        }

        .link-list {
            display: flex;
            list-style: none;
            padding: 0;
        }

        .list-item {
            font-size: 1vw;
            list-style-type: none;
            margin: 0 1vw;
        }

        .list-item-link {
            color: var(--text-light);
            opacity: 0;
            text-decoration: none;
            transition: 500ms;
        }
    }


</style>
