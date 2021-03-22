import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
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
import Nomenklaturas from "@/views/Nomenklaturas/Nomenklaturas.vue"
import NomenklaturasList from "@/views/Nomenklaturas/NomenklaturasList.vue"
import NomenklaturaPage from "@/views/Nomenklaturas/NomenklaturaPage.vue"
import Skus from "@/views/Skus/Skus.vue"
import SkusList from "@/views/Skus/SkusList.vue"
import SkuPage from "@/views/Skus/SkuPage.vue"

function getChildRoutes(list: any, page: any): RouteRecordRaw[] {
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

const routes: Array<RouteRecordRaw> = [
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
  {
    path: "/skus",
    component: Skus,
    children: getChildRoutes(SkusList, SkuPage)
  },
  {
    path: "/specs",
    component: Specialisations,
    children: getChildRoutes(SpecialisationsList, SpecialisationPage)
  },
  {
    path: "/nomenklaturas",
    component: Nomenklaturas,
    children: getChildRoutes(NomenklaturasList, NomenklaturaPage)
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

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
