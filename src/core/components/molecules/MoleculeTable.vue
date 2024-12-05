<template>
    <div :class="cn('overflow-x-auto', $props.class)">
        <table class="table text-xs">
            <thead>
                <tr>
                    <th></th>
                    <th v-for="(header, index) in headers" :key="index" class="uppercase">
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="hover">
                    <td></td>
                    <td v-for="(header, cellIndex) in headers" :key="cellIndex">
                        {{ row[header] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { RouteLocationAsRelativeGeneric } from 'vue-router';
import { ComponentMixin } from '@/common/mixins';

export default defineComponent({
    mixins: [ComponentMixin],
    props: {
        data: {
            type: Array as () => Record<number, string>[],
            required: true,
        },
        headers: {
            type: Array as () => string[],
            required: true,
        },
        hash: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        rows(): Record<string, string>[] {
            return this.data;
        },
    },
});
</script>