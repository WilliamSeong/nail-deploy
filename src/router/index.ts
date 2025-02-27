import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/HomePage.vue";
import Menu from "../components/menu/MainMenu.vue";
// import Test from "../components/home/HomeSixth.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/menu', name: 'menu', component: Menu},
    // { path: '/test', name: 'test', component: Test}
  ],
})

export default router
