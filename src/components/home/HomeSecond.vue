<script setup lang="ts">

</script>

<template>

    <div id="card" class="home-second">
        <h1> Lorem ipsum dolor sit amet </h1>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Hic, assumenda, dolor maxime ut non id deleniti mollitia
            modi laudantium maiores aut quaerat ipsam. Impedit, ex.
            Amet ad sint, praesentium, aliquid perspiciatis natus
            aliquam expedita, vel eveniet consequuntur odit temporibus!
            Quos alias numquam consequuntur. Temporibus expedita
            laborum debitis, voluptatibus perspiciatis porro culpa et
            soluta accusamus iure eum excepturi. Deleniti nobis enim
            aperiam earum doloremque voluptatum tempora quos dolor
            obcaecati atque. Laborum repellat doloremque ipsum obcaecati
            at! Ipsam ex dolore beatae maiores repellendus repellat
            reiciendis illum, excepturi ducimus ratione tenetur nemo
            voluptate commodi vero officia, nam eligendi nisi veniam
            nulla? Amet harum adipisci repudiandae porro blanditiis,
            deleniti quia neque. Nam omnis cum obcaecati provident
            tempore debitis maiores delectus numquam nesciunt
            exercitationem veniam, illum magni officia animi unde eius
            recusandae fugiat nemo dolores?
        </p>
    </div>


</template>

<style scoped>

    .home-second {
        position: relative;
        width: 100%;
        height: 60vh;
        background: var(--primary-light);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 1;
    }

    .home-second h1 {
        text-align: center;
        margin-bottom: 2vh;
        font-size: 5vmin;
        color: var(--text-primary);
    }

    .home-second p {
        text-align: center;
        width: 30vw;
        z-index: 1;
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        font-size: 1.5vmin;
        color: var(--text-primary);
    }

</style>