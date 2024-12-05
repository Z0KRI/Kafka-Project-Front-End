<template>
    <div class="flex w-full gap-5">
        <card class="bg-white sticky top-24 min-w-[25%] h-[30%]" title="Temas:">
            <div class="collapse collapse-plus bg-base-200">
                <input type="checkbox" />
                <div class="collapse-title text-xl font-medium">Salud Mental</div>
                <div class="collapse-content flex flex-col gap-2">
                    <router-link to="#suicides-registered"
                        class="hover:bg-chablis-400 hover:text-white transition-all duration-200 p-4 rounded-lg">
                        Suicidios registrados
                    </router-link>
                    <router-link to="#entities-violent-deaths"
                        class="hover:bg-chablis-400 hover:text-white transition-all duration-200 p-4 rounded-lg">
                        Porcentaje de defunciones ...
                    </router-link>
                    <router-link to="#children"
                        class="hover:bg-chablis-400 hover:text-white transition-all duration-200 p-4 rounded-lg">
                        Integrantes del hogar de 12 ...
                    </router-link>
                </div>
            </div>
        </card>
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
            <children />
        </card>
    </div>
</template>
<script lang="ts">
import { Children, EntitiesViolentDeaths, SuicidesRegistered } from '@/application/mental-health';
import { Card } from '@/core/components/atoms';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Card,
        SuicidesRegistered,
        EntitiesViolentDeaths,
        Children
    }
})
</script>