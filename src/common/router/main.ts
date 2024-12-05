import { createRouter, createWebHistory } from "vue-router";

const baseApp = "/app";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Home",
      component: () => import("@/presentation/pages/Index.vue"),
    },
    {
      path: `${baseApp}/information`,
      name: "Information",
      component: () => import("@/presentation/pages/Information.vue"),
    },
    {
      path: `${baseApp}/resources`,
      name: "Resources",
      component: () => import("@/presentation/pages/Resources.vue"),
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
