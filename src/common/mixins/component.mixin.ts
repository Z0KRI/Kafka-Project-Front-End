import { defineComponent, HTMLAttributes, PropType } from "vue";
import { cn } from "@/infrastructure/common/lib/utils";

export const ComponentMixin = defineComponent({
  methods: {
    cn,
  },
  props: {
    class: {
      type: String as PropType<HTMLAttributes["class"]>,
    },
  },
});
