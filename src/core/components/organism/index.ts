import { defineAsyncComponent } from "vue";

const HeaderBar = defineAsyncComponent(() => import("./HeaderBar.vue"));
const FooterComponent = defineAsyncComponent(() => import("./Footer.vue"));

export { HeaderBar, FooterComponent };
