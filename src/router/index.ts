import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";
import ShopList from "@/views/Shops/ShopList.vue";
import SpecialisationList from "@/views/Specialisations/SpecialisationList.vue";
import CorporationList from "@/views/Corporations/CorporationList.vue";
import Logs from "@/views/Logs/Logs.vue";

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
    component: ShopList
  },
  {
    path: "/corps",
    name: "Корпорации",
    component: CorporationList
  },
  {
    path: "/goods",
    name: "Товары",
    component: Home
  },
  {
    path: "/specs",
    name: "Специализации",
    component: SpecialisationList
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
