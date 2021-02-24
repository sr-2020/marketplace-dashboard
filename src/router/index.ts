import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Home from '../views/Home.vue'
import ShopList from '@/views/ShopList.vue'
import SpecialisationList from "@/views/SpecialisationList.vue";

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
    component: ShopList
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
    component: SpecialisationList
  },
  {
    path: '/others',
    name: 'Всякое',
    component: Home
  }
]

const router = new VueRouter({
  routes
})

export default router
