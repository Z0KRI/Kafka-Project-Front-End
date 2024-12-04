<template>
    <header class="bg-white w-full sticky top-0 z-30">
        <nav class="flex justify-between items-center w-[92%]  mx-auto">
            <div>
                <img class="w-16 cursor-pointer" src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
                    alt="...">
            </div>
            <div
                class="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
                <ul class="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8 transition-all [&>li]:duration-150">
                    <li class="hover:bg-[#83aaee] hover:text-white px-2 py-1 rounded-lg">
                        <a href="#">Salud Mental</a>
                    </li>
                </ul>
            </div>
            <div class="flex items-center gap-6"> </div>
        </nav>
    </header>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>