<script setup lang="ts">

    import { ref, onMounted, onUnmounted, nextTick } from 'vue';

    import Nav from "../NavBar.vue";
    import Item from "./MenuItem.vue";
    import Foot from "../FooterBar.vue";

    const navHeight = ref(0);
    function getNavHeight(){
        const desktopNav = document.querySelector('.header-desktop');
        const mobileToggle = document.querySelector('.menu-toggle');
        let height = 0;
        if (desktopNav) {
            const h = desktopNav.getBoundingClientRect().height;
            if (h > 0) height = h;
        }
        if (height === 0 && mobileToggle) {
            const rect = mobileToggle.getBoundingClientRect();
            height = rect.bottom + 12;
        }
        const safeHeight = height > 0 ? height : 72;
        navHeight.value = safeHeight;
        document.documentElement.style.setProperty('--navHeight', `${safeHeight}px`);
    }

    onMounted(() => {
        nextTick(() => getNavHeight());
        window.addEventListener('resize', getNavHeight);
    });

    onUnmounted(() => {
        window.removeEventListener('resize', getNavHeight);
    });

</script>

<template>
    <div class="menu-page">
    <Nav />
    <div class="menu-container">
        <div class="mobile-header">
            <h1>Nail By Young</h1>
        </div>

        <div class="menu-contents">
            <h2 class="menu-page-title">Menu</h2>
            <div class="menu-manicure">
                <h1>Manicure</h1>
                <hr />
                <Item name="Manicure" price="22"/>
                <Item name="French Manicure" price="30"/>
                <Item name="Buffing Manicure" price="30"/>
                <Item name="Change Polish" price="15"/>
                <Item name="Soak Off Color Gel Manicure" price="40"/>
                <Item name="Soak Off French Gel Manicure" price="50"/>
                <Item name="Spa Manicure" price="50"/>
                <Item name="Kid's Manicure (under 7yr)" price="15"/>
            </div>

            <div class="menu-category">
                <h1>Pedicure</h1>
                <hr />
                <Item name="Pedicure" price="33"/>
                <Item name="French Pedicure" price="40"/>
                <Item name="Buffing Pedicure" price="40"/>
                <Item name="Change Polish" price="15"/>
                <Item name="Soak off Color Gel Pedicure" price="50"/>
                <Item name="Soak off French Gel Pedicure" price="60"/>
                <Item name="Spa Pedicure" price="70"/>
                <Item name="Organic Spa Pedicure (All Natural)" price="85"/>
                <Item name="Kid's Pedicure" price="20"/>
            </div>

            <div class="menu-category">
                <h1>Full Set</h1>
                    <hr />
                <Item name="Soft Gel-X" price="80"/>
                <Item name="Tip with UV GEL" price="100"/>
                <Item name="UV Gel Plain" price="90"/>
                <Item name="UV Gel with Permanent French" price="110"/>
                <Item name="Tip with Permanent French UV Gel" price="120"/>
            </div>

            <div class="menu-category">
                <h1>Fill In</h1>
                <hr />
                <Item name="UV Gel with French" price="90"/>
                <Item name="UV Gel Fill Ins" price="75"/>
            </div>

            <div class="menu-category">
                <h1>Paraffin Treatment</h1>
                <hr />
                <Item name="Hands" price="15"/>
                <Item name="Feet" price="20"/>
            </div>

            <div class="menu-category">
                <h1>Callus</h1>
                <hr />
                <Item name="Callus Elimination" price="18"/>
            </div>

            <div class="menu-category">
                <h1>Removal</h1>
                <hr />
                <Item name="Soak off Color Gel" price="15"/>
                <Item name="Hard Gel" price="20 and up"/>
            </div>

            <div class="menu-waxing">
                <h1>Waxing</h1>
                <hr />
                <Item name="Eyebrows" price="15"/>
                <Item name="Lips" price="12"/>
                <Item name="Chin" price="13"/>
                <Item name="Cheeks" price="18"/>
                <Item name="Under Arm" price="20"/>
                <Item name="Full Arm" price="40"/>
                <Item name="Half Arm(Upper)" price="20"/>
                <Item name="Half Arm(Lower)" price="24"/>
                <Item name="Full Leg" price="50"/>
                <Item name="Half Leg(Knee Up)" price="30"/>
                <Item name="Half Leg(Knee Down)" price="25"/>
                <Item name="Bikini" price="25"/>
                <Item name="Semi-Brazilian (Leave a Landing Strip)" price="45"/>
                <Item name="Brazilian Bikini (Take It All Off)" price="50"/>
                <Item name="Butt" price="15"/>
                <Item name="Belly" price="24"/>
                <Item name="All Toes (Fingers)" price="13"/>
                <Item name="Chest" price="40"/>
                <Item name="Back" price="45"/>
                <Item name="Shoulder" price="20"/>
                <Item name="Neck" price="20"/>
                <Item name="Whole Face" price="50"/>
            </div>

            <p class="menu-disclaimer">A 3% fee applies to credit card transactions.</p>
        </div>
    </div>
    <div class="home-last">
      <Foot />
    </div>
    </div>
</template>

<style scoped>

    .menu-page {
        min-height: 100vh;
        display: flex;
        flex-direction: column;
    }

    .menu-container{
        width: 100%;
        flex: 1;
        position: relative;
        padding-top: var(--navHeight, 56px);
        background: var(--menu-container-bg, var(--salon-blush, #E8DDDA));
        color: var(--text-primary);
    }

    .menu-contents{
        margin: 0 auto;
        min-height: 100%;
        position: relative;
        z-index: 1;
        background: var(--menu-content-bg, #FDF8F5);
        border: 1px solid var(--menu-content-border, rgba(0, 0, 0, 0.08));
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

    .menu-page-title {
        display: none;
    }

    .menu-disclaimer {
        margin: 2rem 0 0;
        padding-top: 1.25rem;
        border-top: 1px solid var(--menu-content-border, rgba(0, 0, 0, 0.08));
        font-size: 0.85rem;
        color: var(--text-on-menu-content, #5C504E);
        text-align: center;
        grid-column: 1 / -1;
    }

    .home-last{
            width: 100%;
            flex-shrink: 0;
        }

    @media (max-width : 999px) {
        .mobile-header{
            width: 100%;
            display: flex;
            justify-content: center;
            position: relative;
            z-index: 2;
            padding: 1.5rem 0 0.75rem;
            font-family: Georgia, 'Times New Roman', serif;
            font-weight: 500;
            font-size: 1.4rem;
            letter-spacing: 0.12em;
            text-transform: uppercase;
            color: var(--text-primary);
            background: transparent;
        }

        .menu-container{
            padding-top: var(--navHeight, 56px);
        }

        .menu-contents{
            width: 100%;
            max-width: 640px;
            padding: 1.75rem 1.75rem 2.5rem;
            margin: 0 auto;
            border-radius: 18px 18px 0 0;
            box-shadow: 0 10px 35px rgba(0, 0, 0, 0.12);
        }

        .menu-contents h1{
            font-size: 1.1rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            margin-bottom: 0.35rem;
            color: var(--text-on-menu-content, #3D3230);
        }

        .menu-contents hr{
            border: none;
            border-top: 1px solid var(--menu-content-border, rgba(0, 0, 0, 0.12));
            margin-bottom: 0.75rem;
        }

        .menu-manicure{
            font-size: 0.95rem;
            margin-bottom: 2.5rem;
        }

        .menu-category{
            font-size: 0.95rem;
            margin: 2.25rem 0;
        }

        .menu-callus {
            font-size: 0.95rem;
            margin-top: 2rem;
        }

        .menu-waxing{
            font-size: 0.95rem;
            margin-top: 2.5rem;
            margin-bottom: 2.5rem;
        }
    }

    @media (min-width : 1000px){

        .mobile-header{
            display: none;
        }

        .menu-container{
            padding-top: 0;
        }

        .menu-contents{
            width: 100%;
            max-width: none;
            margin: 0;
            padding: 4rem 2rem 5rem;
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1.5rem;
            align-content: start;
        }

        .menu-page-title {
            display: block;
            grid-column: 1 / -1;
            font-family: Georgia, 'Times New Roman', serif;
            font-size: clamp(1.75rem, 2.5vw, 2.25rem);
            font-weight: 500;
            letter-spacing: 0.2em;
            text-transform: uppercase;
            color: var(--text-on-menu-content, #3D3230);
            text-align: center;
            margin-bottom: 2.5rem;
        }

        .menu-manicure,
        .menu-category,
        .menu-waxing {
            font-size: clamp(0.875rem, 1vw, 0.95rem);
            min-width: 0;
            background: var(--menu-card-bg, var(--bg-light));
            border-radius: 14px;
            padding: 1.5rem 1.75rem;
            border: 1px solid var(--menu-content-border, rgba(0, 0, 0, 0.08));
            box-shadow: 0 2px 12px var(--shadow-color, rgba(0, 0, 0, 0.06));
        }

        .menu-manicure {
            margin-bottom: 0;
        }

        .menu-category {
            margin: 0;
        }

        .menu-waxing {
            margin-top: 0;
            padding-bottom: 0;
            grid-column: 1 / -1;
        }

        .menu-callus {
            margin-top: 0;
        }

        .menu-contents h1 {
            font-size: 0.8rem;
            font-weight: 600;
            letter-spacing: 0.18em;
            text-transform: uppercase;
            color: var(--primary-dark, #8B7355);
            margin-bottom: 1rem;
            padding-bottom: 0.5rem;
            border-bottom: 1px solid var(--menu-content-border, rgba(0, 0, 0, 0.08));
        }

        .menu-contents hr {
            display: none;
        }

        .menu-disclaimer {
            grid-column: 1 / -1;
            margin-top: 2.5rem;
        }
    }

</style>