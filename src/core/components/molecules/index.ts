import { defineAsyncComponent } from "vue";

const Carousel = defineAsyncComponent(() => import("./Carousel.vue"));
const TableComponent = defineAsyncComponent(() => import("./MoleculeTable.vue"));

export { Carousel, TableComponent };
