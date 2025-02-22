<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import Nav from "./NavBar.vue";
    import Foot from "./FooterBar.vue";

</script>

<template>
    <div class="home-container">
        
        <div class="home-nav">
            <Nav />
        </div>

        <div class="home-first">
            <div class="announcement">
                <h1>Coming Soon</h1>
            </div>
            <img class="home-first-img" :src="`https://picsum.photos/seed/13/2560/1440`" />
        </div>

        <div class="home-last">
            <Foot />
        </div>
    </div>
</template>

<style scoped>

    *{
        transition: 500ms;
    }

    .home-container {
        width: 100%;
    }

    .announcement{
        display: flex;
        position: fixed;
        z-index: 999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        font-size: 3vw;
    }

    .home-nav {
        width: 100%;
        position: fixed;
        z-index: 2;
    }

    .home-first {
        height: 90vh;
        flex-direction: column;
        align-items: center;
    }

    .home-first-img {
        width: 100%;
        aspect-ratio: 1;
        height: 90vh;
        object-fit: cover;
        z-index: 1;
    }

  

    .home-last {
        height: 10vh;
        position: relative;
        z-index: 1;
    }


</style>