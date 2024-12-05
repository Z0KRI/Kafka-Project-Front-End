<template>
    <card class="border border-blue-300 my-5" title="Suicidios registrados" id="suicides-registered">
        <p class="text-sm mb-3">9,072 Defunciones registradas</p>
        <div role="tablist" class="tabs tabs-lifted">
            <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Gráfica" :checked="true" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <Bar :data="dataGraphic" :options="options" v-if="show" />
            </div>

            <input type="radio" name="my_tabs_2" role="tab" class="tab" aria-label="Tabla" />
            <div role="tabpanel" class="tab-content bg-base-100 border-base-300 rounded-box p-6">
                <table-component :headers="['periodo', 'Defunciones registradas']" :data="dataTable" />
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
import { SuicidesRegisteredMixin } from './suicides-registered.mixin';

import { defineComponent } from 'vue';
import { TableComponent } from '@/core/components/molecules';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default defineComponent({
    mixins: [SuicidesRegisteredMixin],
    components: {
        Card,
        Bar,
        TableComponent
    }
})
</script>