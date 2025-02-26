<script setup lang="ts">

</script>

<template>

    <div class="home-fifth">

        <img class="image" src="https://picsum.photos/seed/4/1920/1080" />
            
        <div class="hours">
            <h1>Open Hours</h1>
            <br/>

            <h3>Monday - Friday</h3>
            <p>10:30AM - 8PM</p>
            <br/>

            <h3>Saturday</h3>
            <p>10AM - 7PM</p>
            <br/>

            <h3>Sunday</h3>
            <p>10:30AM - 6:30PM</p>

        </div>

    </div>

</template>

<style scoped>

    .home-fifth{
        width: 100%;
        height: 70vh;
        background: var(--primary-color);
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .image{
        position: absolute;
        height: 100%;
        width: 100%;
        object-fit: cover;
    }
    
    .hours{
        height: 100%;
        width: 20%;
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: rgba(255,255,255,0.9);
    }

</style>