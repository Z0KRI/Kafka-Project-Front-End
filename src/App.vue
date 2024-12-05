<template>
  <header-bar />
  <div class="px-20">
    <router-view />
  </div>
  <footer-component />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { FooterComponent, HeaderBar } from './core/components/organism';

export default defineComponent({
  components: {
    HeaderBar,
    FooterComponent
  }
})
</script>