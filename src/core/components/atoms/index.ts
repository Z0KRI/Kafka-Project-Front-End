import { defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("./Hero.vue"));
const Card = defineAsyncComponent(() => import("./Card.vue"));

export { Hero, Card };
