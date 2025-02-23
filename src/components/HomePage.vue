<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import Nav from "./NavBar.vue";

    import First from "./home/HomeFirst.vue";
    import Second from "./home/HomeSecond.vue";
    import Third from "./home/HomeThird.vue";
    import Fourth from "./home/HomeFourth.vue";

    import Foot from "./FooterBar.vue";

</script>

<template>
    <div class="home-container">

        <div class="announcement">
            <h1>Development</h1>
        </div>

        <Nav />

        <First />

        <Second />

        <Third />

        <Fourth />

        <Foot />

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
        transform: translate(-50%, -50%) rotate(-20deg);
        font-size: 3vw;
        opacity: .25;
        color: red;
        border: 5px red solid;
        transform-origin: 50% 50%;
    }

</style>