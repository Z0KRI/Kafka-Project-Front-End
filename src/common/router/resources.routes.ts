import { RouteRecordRaw } from "vue-router";

const baseApp = "/app";

export const resourcesRoutes: RouteRecordRaw[] = [
  {
    path: `${baseApp}/resources`,
    name: "Resources",
    component: () => import("@/presentation/pages/Resources.vue"),
  },
];
