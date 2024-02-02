import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/ProductList.vue"),
    },
    {
      path: "/product/:id",
      name: "product-detail",
      component: () => import("../views/ProductDetail.vue"),
    },
  ],
});

export default router;
