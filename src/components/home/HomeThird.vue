<script setup lang="ts">

    import { ref, onMounted, onUnmounted } from 'vue';

    const handleScroll = (): void => {
        const scrollPosition = window.scrollY
        const card = document.querySelector('.foreground') as HTMLElement
        const cardPosition = card.getBoundingClientRect().top;

        if (scrollPosition > cardPosition) {
            card.classList.add("fade");
        } else {
            card.classList.remove("fade");
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

    <div class="home-third">
        <div class="foreground">
            <h1>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, itaque!
            </h1>
        </div>

        <div class="background">
            <img class="home-third-image" src="https://picsum.photos/seed/1/2560/1440"/>
        </div>
    </div>


</template>

<style scoped>

    .home-third {
        height: 80vh;
        position: relative;
        z-index: 0;
    }

    .foreground {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: var(--overlay-light);
        height: 50vmin;
        width: 50vmin;
        z-index: 1;
        border-radius: min(32px, 3vw);
        opacity: 0;
        transition: 500ms ease-in-out;
    }

    .foreground h1 {
        height: 100%;
        display: flex;
        text-align: center;
        align-items: center;
        justify-content: center;
        font-size: 3vmin;
        color: var(--text-primary);
    }

    .background {
        position: relative;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 0;
    }

    .home-third-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 0;
    }

    .fade {
        opacity: 1;
        transition: 500ms ease-in-out;
    }


</style>