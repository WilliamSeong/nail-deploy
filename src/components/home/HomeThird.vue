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
            <div class="hours">
            <h1 class="text-black">Hours</h1>
            <br/>

            <h2>Monday - Friday</h2>
            <p>10:30AM - 8PM</p>
            <br/>

            <h2>Saturday</h2>
            <p>10AM - 7PM</p>
            <br/>

            <h2>Sunday</h2>
            <p>10:30AM - 6:30PM</p>

        </div>
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
        display: flex;
        justify-content: center;
        align-items: center;
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

    .hours{
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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