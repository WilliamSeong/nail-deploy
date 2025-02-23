<script setup lang="ts" >

</script>

<template>

    <div class="home-fourth">
        <div class="card-container">
            <div class="card-row">
                <div class="card">
                    <div class="card-header">
                        <h1>Manicure</h1>
                    </div>
                    <div class="card-contents">
                        Hello
                    </div>
                </div>

                <div class="card">

                    <div class="card-header">
                        <h1>Waxing</h1>
                    </div>
                    <div class="card-contents">

                    </div>

                </div>

                <div class="card">

                    <div class="card-header">
                        <h1>Pedicure</h1>
                    </div>
                    <div class="card-contents">

                    </div>

                </div>
            </div>

        </div>
    </div>

</template>

<style scoped>

    .home-fourth{
        position: relative;
        width: 100%;
        height: 80vh;
        background: mintcream;
        display: flex;
    }

    .card-container{
        margin: auto;
        width: 50%;
        height: 70%;
    }

    .card-row{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;   
    }

    .card{
        height: 80%;
        width: 30%;
        border-radius: min(32px, 3vw);

        background: lavender;

        position: relative;

        transition: 1000ms ease;
    }

    .card:hover{
        background: rgb(119,221,119);
        /* animation: shake 1000ms ease-in-out; */
    }

    /* @keyframes shake{
        25% { transform: rotate(2deg);}
        75% { transform : rotate(-2deg);}
    } */

    .card-header{
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        transition: top 1000ms ease, transform 1000ms ease;
    }

    .card:hover .card-header{
        top: 3%;
        transform: translate(-50%, 0);
    }
</style>