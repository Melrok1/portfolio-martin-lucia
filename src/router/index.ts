import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import LuckaView from '../views/LuckaView.vue'
import AboutView from '../views/AboutView.vue'
import HomeView from '../views/HomeView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/lucka',
    name: 'lucka',
    component: LuckaView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
