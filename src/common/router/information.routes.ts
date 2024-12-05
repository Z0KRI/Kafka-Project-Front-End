import { RouteRecordRaw } from "vue-router";

const baseApp = "/app";

export const informationRoutes: RouteRecordRaw[] = [
  {
    path: `${baseApp}/information`,
    name: "Information",
    component: () => import("@/presentation/pages/Information.vue"),
  },
];
