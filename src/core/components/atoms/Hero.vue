<template>
    <div class="h-[calc(100dvh-9dvh)]">
        <carousel :slides="[
            {
                src: 'https://images.unsplash.com/photo-1621887348744-6b0444f8a058?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
                msg: 'La salud mental es lo mas importante ',
                class: 'justify-start px-52'
            },
            { src: 'https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp' }
        ]" />
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