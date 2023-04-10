<template>
  <div id="app" class="bg-bitten">
    <div class="flex justify-start md:justify-center items-center py-4 px-4 md:px-0">
      <img src="@/assets/manifesto-logo.png" class="w-6 h-6" alt="Website Logo" />
      <p class="text-white tracking-widest ml-6">MANIFESTO</p>
    </div>
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
  }
}
</script>
