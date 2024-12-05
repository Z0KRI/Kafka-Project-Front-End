import { defineAsyncComponent } from "vue";

const Indicator = defineAsyncComponent(
  () => import("./indicator/Indicator.vue")
);

const SuicidesRegistered = defineAsyncComponent(
  () => import("./suicides-registered/SuicidesRegistered.vue")
);

const EntitiesViolentDeaths = defineAsyncComponent(
  () => import("./entities-violent-deaths/EntitiesViolentDeaths.vue")
);

export { Indicator, SuicidesRegistered, EntitiesViolentDeaths };
