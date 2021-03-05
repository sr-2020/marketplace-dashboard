import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Logs from "@/views/Logs/Logs.vue";
import Corporations from "@/views/Corporations/Corporations.vue";
import Shops from "@/views/Shops/Shops.vue";
import Specialisations from "@/views/Specialisations/Specialisations.vue";
import ShopsList from "@/views/Shops/ShopsList.vue";
import Shop from "@/views/Shops/Shop.vue";
import Actions from "@/views/Actions.vue";
import NotFound from "@/components/common/NotFound.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Actions
  },
  {
    path: "/shops",
    component: Shops,
    children: [
      {
        path: "",
        component: ShopsList
      },
      {
        path: "add",
        component: Shop,
        meta: {add: true}
      },
      {
        path: ":id",
        component: Shop
      }
    ]
  },
  {
    path: "/corps",
    component: Corporations
  },
  // {
  //   path: "/goods",
  // },
  {
    path: "/specs",
    component: Specialisations
  },
  {
    path: "/logs",
    component: Logs
  },
  {
    path: "/404",
    component: NotFound
  },
  {
    path: "/*",
    redirect: "/404"
  }
];

const router = new VueRouter({
  routes
});

export default router;
