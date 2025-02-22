<script setup lang="ts">

    import { ref, onMounted } from 'vue';

    const images = [
                    "https://picsum.photos/seed/2/2560/1440",
                    "https://picsum.photos/seed/3/2560/1440",
                    "https://picsum.photos/seed/4/2560/1440",
                    "https://picsum.photos/seed/5/2560/1440",
                    "https://picsum.photos/seed/6/2560/1440"
                    ];

    const currentImage = ref(0);
    function next() {
        let next = (currentImage.value + 1) % images.length;
        currentImage.value = next;
    }

    function timer() {
        setInterval(next, 10000);
    }

    onMounted(() => {
        timer();
    });

</script>

<template>
    <div class="image-container" v-for="(image, index) in images" :key="`image-${index}`">
        <img :class="currentImage === index ? 'active' : 'image'" :src="image"/>
    </div>
</template>

<style scoped>

    .image-container{
        width: 100vw;
        height: 50vh;
        position: absolute;
    }

    .image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        transition: all 1000ms ease-in-out;
    }

    .active{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 1;
        transition: all 1000ms ease-in-out;
    }

</style>