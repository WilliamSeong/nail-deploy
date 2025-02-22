<script setup lang="ts">

</script>

<template>

    <div class="home-first">
        <img class="home-first-img" :src="`https://picsum.photos/seed/13/2560/1440`" />
    </div>


</template>

<style scoped>

    .home-first {
        height: 90vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .home-first-img {
        width: 100%;
        aspect-ratio: 1;
        height: 90vh;
        object-fit: cover;
        z-index: 2;
    }

</style>