<template>
    <div class="h-dvh">
        <carousel />
    </div>
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