<template>
  <div id="app">
    <router-view />
    <FooterComponent />
  </div>
</template>

<script setup>
import '@/assets/tailwind.css';
import FooterComponent from '@/components/FooterComponent.vue'
</script>
