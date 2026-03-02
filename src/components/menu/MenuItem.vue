<script setup lang="ts">

    defineProps({
        name: String,
        price: String
    })

</script>

<template>
    <div class="menu-item">
            <span class="item-name">{{name}}</span>
            <span class="dots"></span>
            <span class="item-price">${{price}}</span>
    </div>
</template>

<style>

    .menu-item{
        width: 100%;
        position: relative;
        display: flex;
        justify-content: space-between;
        z-index: 2;
        gap: 1vw;
        align-items: baseline;
    }

    @media (min-width: 1000px) {
        .menu-item {
            padding: 0.35rem 0;
            gap: 0.75rem;
        }
    }

    .item-name{
        color: var(--text-on-menu-content, #3D3230);
    }

    .dots{
        border-bottom: 2px dotted var(--menu-dots-color, rgba(0, 0, 0, 0.2));
        flex-grow: 1;
        position: relative;
        align-self: flex-end;
        margin-bottom: 0.5em;
    }

    .item-price{
        color: var(--text-on-menu-content, #3D3230);
        height: 100%;
    }
</style>