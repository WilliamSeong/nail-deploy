<script setup lang="ts" >

    import { ref, onMounted, onUnmounted } from 'vue';

    function handleScroll() {
        const scrollPosition = window.scrollY
        const card1 = document.getElementById('card1') as HTMLElement
        const card2 = document.getElementById('card2') as HTMLElement
        const card3 = document.getElementById('card3') as HTMLElement

        const card1Position = card1.getBoundingClientRect().top;
        const card2Position = card2.getBoundingClientRect().top;
        const card3Position = card3.getBoundingClientRect().top;
        const pixelHeight = window.innerHeight * 0.75;

        // console.log(card1Position, card2Position, card3Position, pixelHeight);

        const cards = [
            { element: card1, position: card1Position },
            { element: card2, position: card2Position },
            { element: card3, position: card3Position }
        ];

        cards.forEach(({ element, position }) => {
            if (pixelHeight > position) {
                element.classList.add("flip");
            } else {
                element.classList.remove("flip");
            }
        });
    }



    onMounted(() => {
        window.addEventListener('scroll', handleScroll)
    })

    onUnmounted(() => {
        window.removeEventListener('scroll', handleScroll)
    })
</script>

<template>

    <div class="home-fourth">
        <div class="card-container">
            <div class="cards">
                <div id="card1" class="card">
                    <div class="card-header">
                        <h1>Manicure</h1>
                    </div>
                    <div class="card-background">

                    </div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eveniet nisi ex vel, facilis blanditiis!</p>
                    </div>
                </div>

                <div id="card2" class="card">

                    <div class="card-header">
                        <h1>Waxing</h1>
                    </div>
                    <div class="card-background"></div>
                    <div class="card-content">
                        <p class="card-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio harum accusantium unde molestiae nobis? Magni?</p>
                    </div>

                </div>

                <div id="card3"class="card">

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

    .home-fourth{
        position: relative;
        width: 100%;
        height: 80vh;
        background: mintcream;
        display: flex;
    }

    .card-container{
        margin: auto;
    }

    .cards{
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 100%;
    }

    .card{
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
    

    /* Mobile */
    @media (max-width : 1199px) {
        .card-container{
            width: 80%;
            height: 70%;
        }

        .cards{
            flex-direction: column;
        }

        .card{
            height: 30%;
            width: 90%;
        }

        .flip {
            transition: 1000ms ease-in-out;
        }

        .card-header{
            font-size: 2vmin;
        }

        .flip .card-header{
            top: 3%;
            transform: translate(-50%, 0);
        }

        .card-content{
            padding-top: 10%;
            font-size: 2vmax;
        }

        .flip .card-content{
            opacity: 1;
        }
    }

    /* Desktop */
    @media (min-width : 1200px) {
        .card-container{
            width: 50%;
            height: 70%;
        }

        .card{
            height: 80%;
            width: 30%;
        }

        .card:hover{
            cursor: pointer;
            /* animation: shake 250ms ease-in-out; */
        }

        /* @keyframes shake{
            25% { transform: rotate(2deg);}
            75% { transform : rotate(-2deg);}
        } */

        .card-header{
            font-size: 1vmin;
        }

        .card:hover .card-header{
            top: 3%;
            transform: translate(-50%, 0);
        }

        .card-content{
            padding-top: 30%;
            font-size: 2vmin;
        }

        .card:hover .card-content{
            opacity: 1;
        }
    }

    
</style>