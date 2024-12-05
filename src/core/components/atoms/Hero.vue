<template>
    <section class="text-center my-16">
        <h1 class="text-4xl md:text-6xl font-bold mb-6 text-gray-900">
            El Suicidio: Un Desafío Global <br>
            de Salud Pública
        </h1>
        <p class="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            El suicidio es impulsado por una combinación de factores personales y contextuales. Comprender sus causas y
            grupos de riesgo es clave para implementar estrategias efectivas de prevención a nivel global.
        </p>
        <a href="#informacion"
            class="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700">
            Más Información
            <i class="bi bi-arrow-right ml-2 text-xl" />
        </a>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { Carousel } from '../molecules';

export default defineComponent({
    components: {
        Carousel
    }
})
</script>