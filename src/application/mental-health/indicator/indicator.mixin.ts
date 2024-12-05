import { MentalHealthDataModule } from "@/data/mental-health/mental-health.module";
import { IIndicatorModel } from "@/domain/mental-health/models";
import { defineComponent, inject, onMounted, ref } from "vue";

export const IndicatorMixin = defineComponent({
  data() {
    const indicator = ref({} as IIndicatorModel);

    const PLoC = MentalHealthDataModule();

    onMounted(() => {
      PLoC.Indicator()
        .execute()
        .subscribe({
          next: (resp) => {
            indicator.value = resp;
          },
        });
    });

    return { indicator };
  },
});
