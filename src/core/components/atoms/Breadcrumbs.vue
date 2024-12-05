<template>
    <nav :class="cn('breadcrumbs text-sm', $props.class)">
        <ul class="text-sm">
            <li v-for="item in items" :key="item.path">
                <router-link :to="item.path">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>
<script lang="ts">
import { ComponentMixin } from '@/common/mixins';
import { defineComponent } from 'vue';

interface RouteItem {
    name: string
    path: string
}

export default defineComponent({
    data() {
        return {
            items: [] as RouteItem[]
        }
    },
    watch: {
        $route() {
            this.getRoute()
        }
    },
    methods: {
        getRoute() {
            const uniqueRoutes = new Set()
            this.items = this.$route.matched
                .filter((route: any) => route.name)
                .reduce((acc: any, route) => {
                    const routeIdentifier = route.name
                    if (!uniqueRoutes.has(routeIdentifier)) {
                        uniqueRoutes.add(routeIdentifier)
                        acc.push({
                            name: route.name,
                            path: route.path
                        })
                    }
                    return acc
                }, [])
        }
    },
    created() {
        this.getRoute()
    },
    mixins: [ComponentMixin]
})
</script>