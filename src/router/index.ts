import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/HomePage.vue'
import Menu from '../components/menu/MainMenu.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/menu', name: 'menu', component: Menu },
  ],
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) {
      return new Promise((resolve) => {
        const scrollToHash = (): void => {
          const el = document.querySelector(to.hash)
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' })
            resolve(false)
            return
          }
          resolve({ top: 0 })
        }
        // Wait a tick so the menu view has painted (especially on client navigations).
        requestAnimationFrame(() => requestAnimationFrame(scrollToHash))
      })
    }
    return { top: 0 }
  },
})

export default router
