<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from './components/NavBar'
import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>
