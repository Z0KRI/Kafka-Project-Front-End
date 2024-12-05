import { defineAsyncComponent } from "vue";

const Breadcrumbs = defineAsyncComponent(() => import("./Breadcrumbs.vue"));
const Hero = defineAsyncComponent(() => import("./Hero.vue"));
const Card = defineAsyncComponent(() => import("./Card.vue"));

export { Hero, Card, Breadcrumbs };
