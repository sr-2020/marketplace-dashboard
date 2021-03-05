import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import Logs from "@/views/Logs/Logs.vue";
import Corporations from "@/views/Corporations/Corporations.vue";
import Shops from "@/views/Shops/Shops.vue";
import Specialisations from "@/views/Specialisations/Specialisations.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Действия",
    component: Home
  },
  {
    path: "/shops",
    name: "Магазины",
    component: Shops
  },
  {
    path: "/corps",
    name: "Корпорации",
    component: Corporations
  },
  {
    path: "/goods",
    name: "Товары",
    component: Home
  },
  {
    path: "/specs",
    name: "Специализации",
    component: Specialisations
  },
  {
    path: "/logs",
    name: "Логирование",
    component: Logs
  }
];

const router = new VueRouter({
  routes
});

export default router;
