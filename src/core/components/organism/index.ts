import { defineAsyncComponent } from "vue";

const HeaderBar = defineAsyncComponent(() => import("./HeaderBar.vue"));

export { HeaderBar };
