<template>
    <header class="w-full mx-auto px-14 py-6 flex justify-between items-center sticky top-0 bg-chablis-50 shadow-black drop-shadow-sm">
        <div class="flex items-center gap-2">
            <svg class="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="text-xl font-semibold">SaludMental</span>
        </div>
        <nav class="hidden md:flex items-center gap-6">
            <a href="#informacion" class="text-gray-600 hover:text-gray-900">Información</a>
            <a href="#estadisticas" class="text-gray-600 hover:text-gray-900">Estadísticas</a>
            <a href="#recursos" class="text-gray-600 hover:text-gray-900">Recursos</a>
        </nav>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { MenuService } from '@/presentation/services/menu.service';

export default defineComponent({
    methods: {
        MenuService
    },
})
</script>