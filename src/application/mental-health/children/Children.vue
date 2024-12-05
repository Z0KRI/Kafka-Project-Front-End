<template>
    <card class="border border-blue-300 my-5" id="children"
        title="Integrantes del hogar de 12 años y más con sentimientos de depresión">
        <div class="flex justify-center items-center">
            <div class="w-1/2 ">
                <Pie :data="data" />
            </div>
        </div>
    </card>
</template>
<script lang="ts">

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'vue-chartjs'

import { Card } from '@/core/components/atoms';
import { defineComponent } from 'vue';
import { ChildrenMixin } from './children.mixin';

ChartJS.register(ArcElement, Tooltip, Legend)

export default defineComponent({
    components: {
        Card,
        Pie
    },
    mixins: [ChildrenMixin]
})
</script>