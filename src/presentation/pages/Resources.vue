<template>
    <main class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Lenguajes</h2>
        <div class="flex w-full flex-wrap gap-4">
            <card class="max-w-[24%] bg-white text-center" title="Typescript">
                <div class="flex justify-center">
                    <img src="https://www.svgrepo.com/show/374146/typescript-official.svg" class="w-[25%]">
                </div>
            </card>
        </div>
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Framework's</h2>
        <div class="flex w-full flex-wrap gap-4">
            <card class="max-w-[24%] bg-white text-center" :title="item.framework" v-for="(item, index) in frameworks"
                key="1">
                <div class="flex justify-center">
                    <img :src="item.icon" :alt="item.icon" class="w-[25%]">
                </div>
            </card>
        </div>
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Base de Datos</h2>
        <div class="flex w-full flex-wrap gap-4">
            <card class="max-w-[24%] bg-white text-center">
                <div class="flex justify-center">
                    <img src="https://www.svgrepo.com/show/303251/mysql-logo.svg" class="w-[50%]">
                </div>
            </card>
        </div>
        <h2 class="text-3xl font-bold mb-6 text-gray-900">Librerías</h2>
        <div class="flex w-full flex-wrap gap-4">
            <card class="max-w-[24%] bg-white text-center" :title="item.lib" v-for="(item, index) in libs" :key="index">
                <div class="flex justify-center">
                    <img :src="item.icon" :alt="item.icon" class="w-[25%]">
                </div>
            </card>
        </div>
    </main>
</template>
<script lang="ts">
import { Card } from '@/core/components/atoms';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Card
    },
    data() {
        const frameworks: { framework: string, icon: string }[] = [
            {
                framework: 'Vue js',
                icon: 'https://www.svgrepo.com/show/303494/vue-9-logo.svg'
            },
            {
                framework: 'Nest Js',
                icon: 'https://www.svgrepo.com/show/373871/nest-service-ts.svg'
            },
            {
                framework: 'Vite',
                icon: 'https://www.svgrepo.com/show/374167/vite.svg'
            },
            {
                framework: 'Prisma',
                icon: 'https://www.svgrepo.com/show/354210/prisma.svg'
            }
        ]

        const libs: { lib: string, icon: string }[] = [
            {
                lib: 'Bootstrap Icons',
                icon: 'https://www.svgrepo.com/show/353498/bootstrap.svg'
            },
            {
                lib: 'Tailwind',
                icon: 'https://www.svgrepo.com/show/374118/tailwind.svg'
            },
            {
                lib: 'Chart Js',
                icon: 'https://www.chartjs.org/img/chartjs-logo.svg'
            }
        ]

        return {
            frameworks,
            libs
        }
    },
})
</script>