<template>
    <card class="bg-chablis-200 text-center">
        <p class="text-4xl font-bold text-rose-600 mb-2" v-if="indicator.series">{{ indicator.series.indicador }}</p>
        <p class="text-gray-700">Suicidios registrados de forma violenta</p>
    </card>
</template>
<script lang="ts">
import { Card } from '@/core/components/atoms';
import { defineComponent } from 'vue';
import { IndicatorMixin } from './indicator.mixin';

export default defineComponent({
    components: {
        Card
    },
    mixins: [IndicatorMixin]
})
</script>