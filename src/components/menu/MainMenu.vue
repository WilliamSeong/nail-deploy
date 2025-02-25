<script setup lang="ts">

    import { ref, onMounted, onUnmounted } from 'vue';

    import Nav from "../NavBar.vue";
    import Item from "./MenuItem.vue";
    import Foot from "../FooterBar.vue";

    const mouseX = ref(0);
    const mouseY = ref(0);
    const centerX = ref(0);
    const centerY = ref(0);
    function mouseMove(event : MouseEvent) {
        mouseX.value = event.screenX;
        mouseY.value = event.screenY;
        centerX.value = window.innerWidth / 2;
        centerY.value = window.innerHeight / 2;
        // console.log(mouseX.value - centerX.value, mouseY.value - centerY.value);
        document.documentElement.style.setProperty('--imgX', `${(mouseX.value - centerX.value)/10}px`);
        document.documentElement.style.setProperty('--imgY', `${(mouseY.value - centerY.value)/10}px`);
    }

    const navHeight = ref(0);
    function getNavHeight(){
        const navElement = document.querySelector('.menu');
        if (navElement) {
            navHeight.value = navElement.getBoundingClientRect().height;
            document.documentElement.style.setProperty('--navHeight', `${navHeight.value}px`);
            console.log(navHeight.value);
        }
    }

    onMounted(() => {
        window.addEventListener('mousemove', mouseMove);
        getNavHeight();
    });

</script>

<template>
    <Nav />
    <div class="menu-container">
        <div class="mobile-header">
            <h1>Nail By Young</h1>
        </div>

        <div class="menu-background-container">
            <!-- <h1>{{ `(${mouseX}, ${mouseY})` }}</h1> -->
            <img class="background-img" src="https://picsum.photos/seed/13/2560/1440"/>
        </div>

        <div class="menu-contents">
            
            <div class="menu-manicure">
                <h1>Manicure</h1>
                <hr />
                <div class="item">
                    <Item name="Manicure" price="20"/>
                </div>

                <Item name="French Manicure" price="25"/>
                <Item name="Buffin Manicure" price="25"/>
                <Item name="Change Polish" price="13"/>
                <Item name="Soak Off Color Gel Manicure" price="39"/>
                <Item name="Soak Off French Gel Manicure" price="48"/>
                <Item name="Spa Manicure" price="35"/>
                <Item name="Kid's Manicure (under 9yr)" price="13"/>
            </div>

            <div class="menu-category">
                <h1>Pedicure</h1>
                <hr />
                <Item name="Pedicure" price="30"/>
                <Item name="French Pedicure" price="35"/>
                <Item name="Buffing Pedicure" price="35"/>
                <Item name="Change Polish" price="15"/>
                <Item name="Soak off Color Gel Pedicure" price="48"/>
                <Item name="Soak off French Gel Pedicure" price="58"/>
                <Item name="Spa Pedicure" price="65"/>
                <Item name="Organic Spa Pedicure (All Natural)" price="80"/>
                <Item name="Kid's Pedicure" price="20"/>
            </div>

            <div class="menu-category">
                <h1>Full Set</h1>
                    <hr />
                <Item name="Tip with UV GEL" price="90"/>
                <Item name="UV Gel Plain" price="85"/>
                <Item name="UV Gel with Permanent French" price="100"/>
                <Item name="Tip with Permanent French UV Gel" price="110"/>
            </div>

            <div class="menu-category">
                <h1>Fill In</h1>
                <hr />
                <Item name="UV Gel with French" price="80"/>
                <Item name="UV Gel Fill Ins" price="60"/>
            </div>

            <div class="menu-category">
                <h1>Paraffin Treatment</h1>
                <hr />
                <Item name="Hands" price="13"/>
                <Item name="Feet" price="15"/>
            </div>

            <div class="menu-callus">
                <h1>Callus Elimination</h1>
                <span class="dots"></span>
                <span class="item-price">$15</span>
            </div>

            <div class="menu-category">
                <h1>Removal</h1>
                <hr />
                <Item name="Soak off Color Gel" price="8"/>
                <Item name="Hard Gel" price="20"/>
            </div>

            <div class="menu-waxing">
                <h1>Waxing</h1>
                <hr />
                <Item name="Eyebrows" price="15"/>
                <Item name="Lips" price="12"/>
                <Item name="Chin" price="13"/>
                <Item name="Cheeks" price="18"/>
                <Item name="Under Arm" price="17"/>
                <Item name="Full Arm" price="35"/>
                <Item name="Half Arm(Upper)" price="18"/>
                <Item name="Half Arm(Lower)" price="22"/>
                <Item name="Full Leg" price="40"/>
                <Item name="Half Leg(Knee Up)" price="23"/>
                <Item name="Half Leg(Knee Down)" price="22"/>
                <Item name="Bikini" price="20"/>
                <Item name="Semi-Brazilian (Leave a Landing Strip)" price="40"/>
                <Item name="Brazilian Bikini (Take It All Off)" price="42"/>
                <Item name="Butt" price="15"/>
                <Item name="Belly" price="20"/>
                <Item name="All Toes (Fingers)" price="13"/>
                <Item name="Chest" price="37"/>
                <Item name="Back" price="45"/>
                <Item name="Shoulder" price="20"/>
                <Item name="Neck" price="20"/>
                <Item name="Whole Face" price="48"/>
            </div>
        </div>
    </div>
    <div class="home-last">
      <Foot />
    </div>
</template>

<style scoped>

    .menu-background-container{
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .background-img{
        position: fixed;
        object-fit: cover;
        pointer-events: none;
    }

    .menu-container{
        width: 100%;
        height: 100%;
        position: relative;
        padding-top: var(--navHeight);
    }

    .menu-contents{
        margin: 0 auto;
        height: 100%;
        position: relative;
        z-index: 1;
        background: rgba(255,255,255,0.3);
    }

    .dots {
        border-bottom: 2px dotted var(--primary-dark);
        flex-grow: 1;
        position: relative;
        align-self: flex-end;
        margin-bottom: 0.5em;
        border-color: gray;
    }

    .menu-manicure{
        margin-bottom: 5vh;
    }

    .menu-category{
        margin: 5vh 0;
    }

    .menu-callus {
        display: flex;
        align-items: baseline;
    }

    .home-last{
            height: 10vh;
            width: 100%;
        }

    @media (max-width : 999px) {
        .menu-background-container{
            position: absolute;
            top: 0;
        }

        .background-img{
            width: 100%;
            height: 100%;
        }

        .mobile-header{
            width: 100%;

            display: flex;
            justify-content: center;
            position: relative;
            z-index: 2;

            font-family: Papyrus, Fantasy;
            color: var(--primary-dark);
            background: transparent;
        }

        .menu-container{
            padding-top: var(--navHeight);
        }

        .menu-contents{
            width: 70%;
        }

        .menu-manicure{
            font-size: 1.5vmax;
        }

        .menu-category{
            font-size: 1.5vmax;
        }

        .menu-callus {
            font-size: 1.5vmax;
        }

        .menu-waxing{
            font-size: 1.5vmax;
            margin-top: 5vh;
            margin-bottom: 5vh;
        }
    }

    @media (min-width : 1000px){

        .mobile-header{
            display: none;
        }

        .menu-background-container{
            position: fixed;
        }

        .background-img{
            width: 110%;
            height: 110%;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%) translate(var(--imgX), var(--imgY));;
        }

        .menu-container{
            padding-top: 0;
        }

        .menu-contents{
            width: 40%;
            padding: 0 5%;
            padding-top: 10vh;
        }

        .menu-manicure{
            font-size: 1vw;
        }

        .menu-waxing{
            font-size: 1vw;
            margin-top: 5vh;
        }

        .menu-category{
            font-size: 1vw;
        }

        .menu-callus {
            font-size: 1vw;
        }

        .menu-waxing{
            padding-bottom: 5vh;
        }
    }

</style>