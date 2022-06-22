import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Edit from '@/views/Edit.vue'
import Calculator from '@/views/Calculator.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component: Edit,
  },
  {
    path: '/calculator',
    name: 'Calculator',
    component: Calculator,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
