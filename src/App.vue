<template>
  <div id="app">
    <Navbar class="z-20 absolute top-0 right-0"/>
    <div class="z-10">
    <router-view />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/NavBar'
import '@/assets/tailwind.css';
</script>
