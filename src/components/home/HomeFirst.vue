<script setup lang="ts">

    import { onMounted, onUnmounted, ref } from 'vue';

    const headerName = ref("hidden");

    const handleScroll = (): void => {
        const scrollPosition = window.scrollY

        if (scrollPosition === 0) {
        headerName.value = "1";
        } else {
        headerName.value = "0";
        }
    }

    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })


</script>

<template>

    <div class="home-first">
        <div class="mobile-title">
            Nail By Young
        </div>
        <img class="home-first-img" :src="`https://picsum.photos/seed/13/2560/1440`" />
    </div>


</template>

<style scoped>

    @media (max-width : 999px) {
        .mobile-title{
            position: fixed;
            font-family: Papyrus, Fantasy;
            z-index: 4;
            margin: 1vh 0;
            color: var(--primary-dark);
            opacity: v-bind(headerName);
            transition: 500ms;
        }
        
        .home-first {
            height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .home-first-img {
            width: 100%;
            aspect-ratio: 1;
            height: 60vh;
            object-fit: cover;
            z-index: 2;
        }
    }

    @media (min-width: 1000px) {
    
        .mobile-title{
            display: none;
        }
        
        .home-first {
            height: 60vh;
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .home-first-img {
            width: 100%;
            aspect-ratio: 1;
            height: 60vh;
            object-fit: cover;
            z-index: 2;
        }
    }
</style>