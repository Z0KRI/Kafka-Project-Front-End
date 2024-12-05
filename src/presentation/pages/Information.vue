<template>
    <div class="flex w-full gap-5">
        <card class="bg-white sticky top-24 h-[30%]" title="Temas:" />
        <card class="bg-white w-full">
            <header class="flex flex-col gap-2">
                <h3 class="text-2xl font-semibold">Salud mental</h3>
                <span class="flex gap-4 ps-6">
                    <i class="bi bi-activity text-4xl text-blue-700" />
                    <p>Este tema incluye información sobre la condición de salud emocional y sentimientos depresivos;
                        morbilidad sobre trastornos mentales y del comportamiento; suicidios y relación respecto de las
                        muertes violentas.</p>
                </span>
            </header>
            <suicides-registered />
            <entities-violent-deaths />
        </card>
    </div>
</template>
<script lang="ts">
import { EntitiesViolentDeaths, SuicidesRegistered } from '@/application/mental-health';
import { Card } from '@/core/components/atoms';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Card,
        SuicidesRegistered,
        EntitiesViolentDeaths
    }
})
</script>