import { defineAsyncComponent } from "vue";

const Carousel = defineAsyncComponent(() => import("./Carousel.vue"));

export { Carousel };
