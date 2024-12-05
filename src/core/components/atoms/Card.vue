<template>
    <div :class="cn('p-6 rounded-lg shadow-md', $props.class)">
        <h3 class="text-xl font-semibold mb-4 text-gray-900" v-if="title">{{ title }}</h3>
        <slot />
    </div>
</template>
<script lang="ts">
import { ComponentMixin } from '@/common/mixins';
import { defineComponent } from 'vue';

export default defineComponent({
    mixins: [ComponentMixin],
    props: {
        title: {
            type: String,
            required: true
        },
    }
})
</script>