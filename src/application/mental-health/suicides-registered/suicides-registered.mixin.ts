import { MentalHealthTableMapper } from "@/data/mental-health/mappers/mentalhealth-table.mapper";
import { MentalHealthDataModule } from "@/data/mental-health/mental-health.module";
import { ISuicidesRegisteredTable } from "@/domain/mental-health/models";
import { defineComponent, onMounted, ref } from "vue";

export const SuicidesRegisteredMixin = defineComponent({
  data() {
    const show = ref(false);
    const dataTable = ref([] as ISuicidesRegisteredTable[]);
    const dataGraphic = ref(
      {} as {
        labels: string[];
        datasets: [{ data: number[]; backgroundColor: string; label: string }];
      }
    );

    const PLoC = MentalHealthDataModule();

    onMounted(() => {
      PLoC.SuicidesRegistered()
        .execute()
        .subscribe({
          next: (resp) => {
            if (resp) {
              dataGraphic.value = {
                labels: resp.map((i) => i.period.toString()),
                datasets: [
                  {
                    label: "Muertes registradas",
                    data: resp.map((i) => i.registeredDeaths),
                    backgroundColor: "#f87979",
                  },
                ],
              };
              dataTable.value = resp.map((i) =>
                MentalHealthTableMapper.toMap(i)
              );
              show.value = true;
            }
          },
        });
    });

    return {
      dataGraphic,
      dataTable,
      options: {
        responsive: true,
      },
      show,
    };
  },
});
