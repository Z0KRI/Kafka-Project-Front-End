import { MentalHealthTableMapper } from "@/data/mental-health/mappers/mentalhealth-table.mapper";
import { MentalHealthDataModule } from "@/data/mental-health/mental-health.module";
import { IEntityViolentDeathsTableModel } from "@/domain/mental-health/models";
import { defineComponent, onMounted, ref } from "vue";

export const EntitiesViolentDeathsMixin = defineComponent({
  data() {
    const show = ref(false);
    const dataTable = ref([] as IEntityViolentDeathsTableModel[]);
    const dataGraphic = ref(
      {} as {
        labels: string[];
        datasets: [{ data: number[]; backgroundColor: string; label: string }];
      }
    );

    const PLoC = MentalHealthDataModule();

    onMounted(() => {
      PLoC.EntityViolentDeaths()
        .execute()
        .subscribe({
          next: (resp) => {
            if (resp) {
              dataGraphic.value = {
                labels: resp.map((i) => i.entity),
                datasets: [
                  {
                    label: "Muertes registradas",
                    data: resp.map((i) => i.percentage),
                    backgroundColor: "#738fbd",
                  },
                ],
              };
              dataTable.value = resp.map((i) =>
                MentalHealthTableMapper.violentDeaths(i)
              );
              show.value = true;
            }
          },
        });
    });

    return {
      dataTable,
      dataGraphic,
      options: {
        responsive: true,
      },
      show,
    };
  },
});
