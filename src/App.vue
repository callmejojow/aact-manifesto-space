<template>
  <div id="app">
    <router-view />
    <FooterComponent class="absolute bottom-12 inset-x-0"/>
  </div>
</template>

<script setup>
import '@/assets/tailwind.css';
import FooterComponent from '@/components/FooterComponent.vue'
</script>
