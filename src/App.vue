<script setup lang="ts">
  import { RouterView } from 'vue-router'
  import "./styles/themes.css";
</script>

<template>
  <div class="theme-light">
    <router-view></router-view>
  </div>
</template>

<style>

  *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      outline: 1px red solid;
    }


</style>
