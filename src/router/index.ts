import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/categorias',
    name: 'categorias',
    component: Categorias
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router