<script setup lang="ts">

</script>

<template>
    <div class="contact-container">
        <div class="contact-header">
            <h1>Contact Us</h1>
        </div>
        <div class="contact-contents">
            
            <div class="address">
                <img class="icon" src="../../assets/address.png" />
                <h1>165 W 72nd St,</h1>
                <h1>New York, NY 10023</h1>
            </div>
            <div class="phone">
                <img class="icon" src="../../assets/phone2.png" />
                <h1>(212) 873-2473</h1>
            </div>
            <div class="email">
                <img class="icon" src="../../assets/email.png" />
                <h1>Example@gmail.com</h1>
            </div>

        </div>
    </div>
</template>

<style scoped>

    .contact-container{
        position: relative;
        width: 100%;
        height: 60vh;
        background: var(--primary-color);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    .contact-header{
        font-size: 2vw;
        margin-bottom: 10vh;
    }

    .contact-contents{
        width: 50%;
        display: flex;
        justify-content: space-around;
        align-items: space-around;
    }

    .address,
    .phone,
    .email{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 33%;
    }

    .icon{
        width: 100px;
        height: 100px;
        object-fit: fill;
        filter: brightness(0);   
    }

</style>