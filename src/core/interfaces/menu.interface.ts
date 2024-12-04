import { RouteLocationRaw } from "vue-router";

export interface IItemsMenu {
  title: string;
  icon?: string;
  link: RouteLocationRaw;
}
