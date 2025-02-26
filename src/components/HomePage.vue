<script setup lang="ts">

    import { ref, onMounted } from 'vue';
    import Nav from "./NavBar.vue";

    import First from "./home/HomeFirst.vue";
    import Second from "./home/HomeSecond.vue";
    import Third from "./home/HomeThird.vue";
    import Fourth from "./home/HomeFourth.vue";
    import Fifth from "./home/HomeFifth.vue";
    import Sixth from "./home/HomeSixth.vue";

    import Foot from "./FooterBar.vue";

    function scroll( x : string) {
        console.log("Emitted", x);
        if(x){
            const element = document.getElementById(x)?.scrollIntoView({ behavior: 'smooth' });
        }
    }

</script>

<template>
    <div class="home-container">

        <Nav />

        <First @scroll="scroll"/>

        <Second />

        <Third />

        <!-- <Fourth /> -->

        <Fifth id="hours"/>

        <Sixth id="contact" />

        <Foot />

    </div>
</template>

<style scoped>
    .home-container {
        width: 100%;
    }

</style>