<template>
  <div id="app">
    <Navbar class="z-20 absolute top-0 right-0"/>
    <router-view class="z-10"/>
  </div>
</template>

<script>
import Navbar from './components/NavBar'
import '@/assets/tailwind.css';

export default {
  name: 'App',
  components: {
    Navbar
  },
  return() {
  }
}
</script>
