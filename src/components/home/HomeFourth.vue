<script setup lang="ts" >

    

</script>

<template>

    <div class="home-fourth">
        <div class="card-container">
            <div class="cards">
                <div class="card">
                    <div class="card-header">
                        <h1>Manicure</h1>
                    </div>
                    <div class="card-background">

                    </div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet nisi ex vel, facilis blanditiis!</p>
                    </div>
                </div>

                <div class="card">

                    <div class="card-header">
                        <h1>Waxing</h1>
                    </div>
                    <div class="card-background"></div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum accusantium unde molestiae nobis? Magni?</p>
                    </div>

                </div>

                <div class="card">

                    <div class="card-header">
                        <h1>Pedicure</h1>
                    </div>
                    <div class="card-background"></div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque facere harum, deserunt vel quae placeat.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

    @media (max-width : 1199px) {
        .home-fourth{
            position: relative;
            width: 100%;
            height: 80vh;
            background: mintcream;
            display: flex;
        }

        .card-container{
            margin: auto;
            width: 80%;
            height: 70%;
        }

        .cards{
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            height: 100%;
        }

        .card{
            height: 30%;
            width: 90%;
            border-radius: min(32px, 3vw);

            position: relative;

            transition: all 1000ms ease;
            
            display: flex;
            align-items: flex-end;
        }

        .card-header{
            position: absolute;
            z-index: 2;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: top 500ms ease, transform 500ms ease;
            font-size: 2vmin;
        }

        .card:hover .card-header{
            top: 3%;
            transform: translate(-50%, 0);
        }

        .card-background{
            width: 100%;
            height: 100%;
            border-radius: min(32px, 3vw);

            position: absolute;

            z-index: 0;

            background: var(--primary-color);
        }

        .card-content{
            width: 100%;
            height: 100%;
            border-radius: min(32px, 3vw);

            display: flex;
            z-index: 1;
            padding-top: 10%;

            background: url(https://picsum.photos/seed/4/2560/1440);
            opacity: 0;
            transition: 1000ms ease;
        }

        .card:hover .card-content{
            opacity: 1;
        }



    }

    @media (min-width : 1200px) {
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

        .cards{
            display: flex;
            justify-content: space-around;
            align-items: center;
            height: 100%;   
        }

        .card{
            height: 80%;
            width: 30%;
            border-radius: min(32px, 3vw);

            position: relative;

            transition: all 1000ms ease;
            
            display: flex;
            align-items: flex-end;
        }

        .card:hover{
            cursor: pointer;
            /* animation: shake 1000ms ease-in-out; */
        }

        /* @keyframes shake{
            25% { transform: rotate(2deg);}
            75% { transform : rotate(-2deg);}
        } */

        .card-header{
            position: absolute;
            z-index: 2;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            transition: top 500ms ease, transform 500ms ease;
            font-size: 1vmin;
        }

        .card:hover .card-header{
            top: 3%;
            transform: translate(-50%, 0);
        }

        .card-background{
            width: 100%;
            height: 100%;
            border-radius: min(32px, 3vw);

            position: absolute;

            z-index: 0;

            background: var(--primary-color);
        }

        .card-content{
            width: 100%;
            height: 100%;
            border-radius: min(32px, 3vw);

            display: flex;
            z-index: 1;
            padding-top: 30%;

            background: url(https://picsum.photos/seed/4/2560/1440);
            opacity: 0;
            transition: 1000ms ease;

            font-size: 2vmin;
        }

        .card:hover .card-content{
            opacity: 1;
        }
    }

    
</style>