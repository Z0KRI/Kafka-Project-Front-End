<template>
    <main v-if="isHome">
        <hero />
        <section id="informacion" class="pb-16">
            <h2 class="text-3xl font-bold mb-6 text-gray-900">Información Clave</h2>
            <div class="grid md:grid-cols-2 gap-8">
                <card title="Panorama general" class="bg-white">
                    <p class="text-gray-600">
                        Cada año, 726 000 personas se quitan la vida y muchas más lo intentan. Todos los casos son
                        tragedias
                        para las familias, su entorno y todo el país, y dejan efectos duraderos para los allegados. Los
                        suicidios pueden ocurrir a cualquier edad y fueron la tercera causa más frecuente de muerte en
                        las
                        personas de 15 a 29 años a nivel mundial en 2021.
                    </p>
                </card>
                <card title="Grupos de riesgo" class="bg-white">
                    <p class="text-gray-600">
                        En los países de ingresos altos se ha demostrado la relación entre el suicidio y los trastornos
                        mentales, en particular, la depresión y los trastornos por consumo de alcohol, si bien el
                        principal
                        factor de riesgo es, con diferencia, un intento previo de suicidio.
                    </p>
                </card>
            </div>
        </section>
        <section id="estadisticas" class="pb-8">
            <h2 class="text-3xl font-bold mb-6 text-gray-900">Estadísticas</h2>
            <div class="grid md:grid-cols-3 gap-6">
                <card class="bg-chablis-200 text-center">
                    <p class="text-4xl font-bold text-rose-600 mb-2">720 000</p>
                    <p class="text-gray-700">personas fallecen por suicidio. </p>
                </card>
                <card class="bg-chablis-200 text-center">
                    <p class="text-4xl font-bold text-rose-600 mb-2">73%</p>
                    <p class="text-gray-700">de los suicidios ocurren en países de ingresos bajos y medianos. </p>
                </card>
                <card class="bg-chablis-200 text-center">
                    <p class="text-4xl font-bold text-rose-600 mb-2">15 a 29</p>
                    <p class="text-gray-700">años es el rango de edad en el que el suicidio es una de las principales
                        causas
                        de muerte.</p>
                </card>
            </div>
        </section>
    </main>
    <router-view v-else />
</template>
<script lang="ts">
import { Card, Hero } from '@/core/components/atoms';
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';

export default defineComponent({
    components: {
        Hero,
        Card
    },

    data() {
        const route = useRoute();
        return { route }
    },
    computed: {
        isHome() {
            return this.route.name === 'Home';
        }
    }
})
</script>