<template>
  <header-bar />
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { HeaderBar } from './core/components/organism';

export default defineComponent({
  components: {
    HeaderBar
  }
})
</script>