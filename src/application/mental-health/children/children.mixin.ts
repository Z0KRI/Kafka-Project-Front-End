import { defineComponent } from "vue";

export const ChildrenMixin = defineComponent({
  data() {
    return {
      data: {
        labels: [
          "No sabe",
          "Se ha sentido deprimido",
          "Nunca se ha sentido deprimido",
        ],
        datasets: [
          {
            backgroundColor: ["#41B883", "#3e598b", "#E11D45"],
            data: [0.6, 32.5, 66.9],
          },
        ],
      },
    };
  },
});
