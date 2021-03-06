import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Logs from "@/views/Logs/Logs.vue";
import Corporations from "@/views/Corporations/Corporations.vue";
import Shops from "@/views/Shops/Shops.vue";
import Specialisations from "@/views/Specialisations/Specialisations.vue";
import ShopsList from "@/views/Shops/ShopsList.vue";
import Actions from "@/views/Actions.vue";
import NotFound from "@/components/common/NotFound.vue";
import CorporationList from "@/views/Corporations/CorporationList.vue";
import SpecialisationsList from "@/views/Specialisations/SpecialisationsList.vue";
import SpecialisationPage from "@/views/Specialisations/SpecialisationPage.vue";
import CorporationPage from "@/views/Corporations/CorporationPage.vue";
import ShopPage from "@/views/Shops/ShopPage.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    component: Actions
  },
  {
    path: "/shops",
    component: Shops,
    children: getChildRoutes(ShopsList, ShopPage)
  },
  {
    path: "/corps",
    component: Corporations,
    children: getChildRoutes(CorporationList, CorporationPage)
  },
  // {
  //   path: "/goods",
  // },
  {
    path: "/specs",
    component: Specialisations,
    children: getChildRoutes(SpecialisationsList, SpecialisationPage)
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

function getChildRoutes(list: unknown, page: unknown) {
  return [
    {
      path: "",
      component: list
    },
    {
      path: "add",
      meta: { add: true },
      component: page
    },
    {
      path: ":id",
      component: page
    }
  ];
}

const router = new VueRouter({
  routes
});

export default router;
