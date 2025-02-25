<script setup lang="ts">

    import { ref, onMounted, onUnmounted } from 'vue';

    const mouseX = ref(0);
    const mouseY = ref(0);
    const centerX = ref(0);
    const centerY = ref(0);

    function mouseMove(event : MouseEvent) {
        mouseX.value = event.screenX;
        mouseY.value = event.screenY;
        centerX.value = window.innerWidth / 2;
        centerY.value = window.innerHeight / 2;
        // console.log(mouseX.value - centerX.value, mouseY.value - centerY.value);
        document.documentElement.style.setProperty('--imgX', `${(mouseX.value - centerX.value)/10}px`);
        document.documentElement.style.setProperty('--imgY', `${(mouseY.value - centerY.value)/10}px`);
    }

    onMounted(() => {   
        window.addEventListener('mousemove', mouseMove)
    })

    onUnmounted(() => {
        window.removeEventListener('mousemove', mouseMove)
    })



</script>

<template>

    <div class="menu-background-container">
        <h1>{{ `(${mouseX}, ${mouseY})` }}</h1>
        <img class="background-img" src="https://picsum.photos/seed/13/2560/1440"/>
    </div>

</template>

<style scoped>
    .menu-background-container{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3vw;
        position: relative;
    }

    .background-img{
        width: 110%; /* Make image larger than container */
        height: 110%;
        position: fixed;
        top: 50%;
        left: 50%;
        object-fit: cover;
        transform: translate(-50%, -50%) translate(var(--imgX), var(--imgY));;
        pointer-events: none;
    }
</style>