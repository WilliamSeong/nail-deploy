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

        <Nav />

        <First />

        <Second />

        <Third />

        <Fourth />

        <Foot />

    </div>
</template>

<style scoped>
    .home-container {
        width: 100%;
    }

</style>