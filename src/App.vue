<script setup lang="ts">
import { ref, provide } from 'vue'
import './styles/themes.css'

const THEME_KEY = 'nail-by-young-theme'
function getStoredTheme(): boolean {
  try {
    return localStorage.getItem(THEME_KEY) === 'dark'
  } catch {
    return false
  }
}
const isDark = ref(getStoredTheme())

function toggleDark() {
  isDark.value = !isDark.value
  try {
    localStorage.setItem(THEME_KEY, isDark.value ? 'dark' : 'light')
  } catch (_) {}
}

provide('theme', { isDark, toggleDark })
</script>

<template>
  <div :class="isDark ? 'theme-dark' : 'theme-light'">
    <router-view />
  </div>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
</style>
