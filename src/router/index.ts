import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Categorias from '../views/Categorias.vue'
import Clientes from '../views/Clientes.vue'
import Produtos from '../views/Produtos.vue'

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
  },
  {
    path: '/clientes',
    name: 'clientes',
    component: Clientes
  },
  {
    path: '/produtos',
    name: 'produtos',
    component: Produtos
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router