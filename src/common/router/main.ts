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
  ],
});

export default router;
