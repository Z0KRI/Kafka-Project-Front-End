<template>
    <header
        class="w-full mx-auto px-14 py-6 flex justify-between items-center sticky top-0 bg-chablis-50 shadow-black drop-shadow-sm">
        <div class="flex items-center gap-2">
            <svg class="h-6 w-6 text-rose-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
            <span class="text-xl font-semibold">SaludMental</span>
        </div>
        <nav class="hidden md:flex items-center gap-6">
            <router-link :to="{ name: 'Home' }" class="text-gray-600 hover:text-gray-900">Inicio</router-link>
            <router-link :to="{ name: 'Information' }"
                class="text-gray-600 hover:text-gray-900">Información</router-link>
            <router-link :to="{ name: 'Home', hash: '#estadisticas' }"
                class="text-gray-600 hover:text-gray-900">Estadísticas</router-link>
            <router-link :to="{ name: 'Resources' }" class="text-gray-600 hover:text-gray-900">Recursos</router-link>
        </nav>
    </header>
    <breadcrumbs class="px-20" v-if="isNotHome" />
</template>
<script lang="ts">
import { useRoute } from 'vue-router';
import { defineComponent } from 'vue';

import { MenuService } from '@/presentation/services/menu.service';
import { Breadcrumbs } from '../atoms';

export default defineComponent({
    methods: {
        MenuService
    },
    components: {
        Breadcrumbs
    },
    data() {
        const route = useRoute();
        return { route }
    },
    computed: {
        isNotHome() {
            return this.route.name !== 'Home';
        }
    }
})
</script>