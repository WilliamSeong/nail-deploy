<script setup lang="ts">

    import { ref, onMounted, onUnmounted } from 'vue';
    import Video from "../../assets/The Human Eye Closeup - Macro slow-motion 1080.mp4";
    import Image from "../../assets/backup-eye.png";


    const headerName = ref("hidden");

    const handleScroll = (): void => {
        const scrollPosition = window.scrollY

        if (scrollPosition === 0) {
        headerName.value = "1";
        } else {
        headerName.value = "0";
        }
    }

    const useVideoBackground = ref(true);
    const videoLoaded = ref(false);
    function checkSupport() {
        // Check if device is mobile (simplified check)
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        console.log("Checking mobile: ", isMobile);

        // Check if video size might be problematic (over 5MB is considered large for mobile)
        const video = document.createElement('myVideo');
        video.onloadedmetadata = () => {
            videoLoaded.value = true;
        }
        
        // Fall back to image if on mobile or video fails to load in reasonable time
        if (isMobile) {
            // Give video a chance to load but use fallback if it takes too long
            setTimeout(() => {
                if (!videoLoaded.value) {
                    useVideoBackground.value = false;
                }
            }, 3000);
        }
    }


    onMounted(() => {
        window.addEventListener('scroll', handleScroll);
        checkSupport();
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })


</script>

<template>

    <div class="home-first">
        <div class="video-container">
        <video v-if="useVideoBackground" autoplay muted loop class="myVideo" :poster="Image">
            <source :src="Video" type="video/mp4">
        </video>

        <img v-else :src="Image" alt="Eye closeup background" class="myVideo" />

        <div class="content">
            <h1 class="title">Nail by Young</h1>
            <button class="button">Contact Us!</button>
        </div>

    </div>
    </div>


</template>

<style scoped>

    .home-first {
        height: 60vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .video-container{
        width: 100%;
        height: 60vh;
        position: relative;
        overflow: hidden;
        z-index: 2;
    }

    .myVideo{
        position: relative;
        min-width: 100%;
        min-height: 100%;
        width: auto;
        height: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        object-fit: cover;
    }

    .content{
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0%;
        background: rgba(255,255,255,0.1);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .title{
        font-family: Papyrus, Fantasy;
        font-size: 2vmax;
    }

    .button {
        width: auto;
        font-size: 1vmax;
        padding: 10px;
        border: none;
        background: #000;
        color: #fff;
        cursor: pointer;
        border-radius: 30px;
    }

    .button:hover {
        background: #ddd;
        color: black;
    }

</style>