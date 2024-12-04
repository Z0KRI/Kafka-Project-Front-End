import { defineAsyncComponent } from "vue";

const Hero = defineAsyncComponent(() => import("./Hero.vue"));

export { Hero };
