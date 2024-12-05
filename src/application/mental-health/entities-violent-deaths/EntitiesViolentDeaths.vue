<template>
    <card class="border border-blue-300 my-5" id="entities-violent-deaths"
        title="Porcentaje de defunciones registradas por suicidio con respecto al total de muertes violentas por entidad federativa">
        <p class="text-sm mb-3">10.8% Porcentaje</p>
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Gráfica" :checked="true" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <Bar :data="dataGraphic" :options="options" v-if="show" />
                <p class="text-sm flex flex-col my-5">
                    <span class="font-semibold">Notas y Llamadas:</span>
                    El cálculo se realizó con base en las defunciones generales de residencia habitual de la persona
                    fallecida. La información corresponde a los suicidios registrados y clasificados con base en la
                    Clasificación Internacional de Enfermedades (CIE); para los años de 1994 a 1997, CIE-9, Suicidios y
                    lesiones autoinfligidas (950-959); a partir de 1998, a la CIE-10, Lesiones autoinfligidas
                    intencionalmente (X60-X84).
                </p>
            </div>

            <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="Tabla" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <table-component :headers="['entidad', 'porcentaje']" :data="dataTable" />
            </div>
        </div>
    </card>
</template>
<script lang="ts">
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

import { Card } from '@/core/components/atoms';
import { TableComponent } from '@/core/components/molecules';
import { EntitiesViolentDeathsMixin } from './entities-violent-deaths.mixin';

import { defineComponent } from 'vue';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
    mixins: [EntitiesViolentDeathsMixin],
    components: {
        Card,
        Bar,
        TableComponent
    }
})
</script>