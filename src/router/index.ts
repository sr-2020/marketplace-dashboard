import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Действия',
    component: Home
  },
  {
    path: '/shops',
    name: 'Магазины',
    component: Home
  },
  {
    path: '/corps',
    name: 'Корпорации',
    component: Home
  },
  {
    path: '/goods',
    name: 'Товары',
    component: Home
  },
  {
    path: '/specs',
    name: 'Специализации',
    component: Home
  },
  {
    path: '/others',
    name: 'Всякое',
    component: Home
  },
]

const router = new VueRouter({
  routes
})

export default router
