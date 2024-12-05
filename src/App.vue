<template>
  <header-bar />
  <router-view />
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