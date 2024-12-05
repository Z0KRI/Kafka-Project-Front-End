import { createRouter, createWebHistory } from "vue-router";
import { informationRoutes } from "./information.routes";
import { resourcesRoutes } from "./resources.routes";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/presentation/pages/Index.vue"),
      children: [...informationRoutes, ...resourcesRoutes],
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: "smooth",
      };
    } else if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
