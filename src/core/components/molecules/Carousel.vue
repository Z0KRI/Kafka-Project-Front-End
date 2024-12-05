<template>
    <div :class="cn('carousel w-full h-full', $props.class)">
        <div v-for="(slide, index) in slides" :key="index" :id="'slide' + (index + 1)"
            class="carousel-item relative w-full">
            <div class="w-full h-full bg-cover bg-center" :style="{ backgroundImage: `url('${slide.src}')` }">
                <h3 :class="cn('w-full h-full bg-black/45 flex justify-center items-center text-white', slide.class)"
                    v-if="slide.msg">
                    {{ slide.msg }}
                </h3>
            </div>
            <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a :href="'#slide' + (index === 0 ? slides.length : index)"
                    class="btn btn-circle opacity-20 hover:opacity-80">
                    ❮
                </a>
                <a :href="'#slide' + (index === slides.length - 1 ? 1 : index + 2)"
                    class="btn btn-circle opacity-20 hover:opacity-80">
                    ❯
                </a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { ComponentMixin } from '@/common/mixins';
import { ICarousel } from '@/core/interfaces/carousel.interface';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
    mixins: [ComponentMixin],
    props: {
        slides: {
            type: Array as PropType<ICarousel[]>,
            required: true,
        },
    },
});
</script>