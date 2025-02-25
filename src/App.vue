<script setup lang="ts">
    import { RouterView } from 'vue-router'
    import "./styles/themes.css";
</script>

<template>

    <div class="announcement">
        <h1>Development</h1>
    </div>

    <div class="theme-light">
        <router-view></router-view>
    </div>
</template>

<style>

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        /* outline: 1px red solid; */
    }

    .announcement{
        display: flex;
        position: fixed;
        z-index: 999;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(-20deg);
        font-size: 3vw;
        opacity: .25;
        color: red;
        border: 5px red solid;
        transform-origin: 50% 50%;
        pointer-events: none;
    }


</style>
