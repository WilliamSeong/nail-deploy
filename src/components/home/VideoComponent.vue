<script setup lang="ts">

import Video from "../../assets/The Human Eye Closeup - Macro slow-motion 1080.mp4";

</script>

<template>

    <div class="video-container">
        <video autoplay muted loop class="myVideo">
            <source :src="Video" type="video/mp4">
        </video>

        <div class="content">
            <h1 class="title">Nail by Young</h1>
            <button class="button">Contact Us!</button>
        </div>

    </div>

</template>

<style scoped>

    .video-container{
        width: 100%;
        height: 60vh;
        position: relative;
        overflow: hidden;
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
    }

    .button:hover {
        background: #ddd;
        color: black;
    }

</style>