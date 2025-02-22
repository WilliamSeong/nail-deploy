import { createRouter, createWebHistory } from 'vue-router'
import Home from "../components/HomePage.vue";
import About from "../components/AboutPage.vue";
import Test from "../components/TestComponent.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component: About},
    { path: '/test', name: 'test', component: Test}
  ],
})

export default router
