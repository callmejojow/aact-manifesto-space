<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
</script>
<template>
  <main class="h-screen overflow-y-hidden bg-url bg-cover bg-left-top">
    <div class="flex justify-start md:justify-center items-center py-4 px-4 md:px-0">
      <a href="/">
       <img src="@/assets/manifesto-logo.png" class="w-6 h-6" alt="Website Logo" />
      </a> 
      <p class="text-white tracking-widest ml-6">MANIFESTO</p>
      <div class="absolute right-4 text-white z-40">
      <NavDropdown />
      </div>
    </div>
  
  <div class="flex flex-col justify-end items-start md:justify-start max-h-screen text-white/90 relative max-w-screen overflow-hidden ">
    <span class="sr-only">Current Curation</span>
    <div class="absolute px-8 md:px-16 mb-64 md:mb-0 mt-0 md:mt-96">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide">The Bitten Peach</h1>
      <p class="text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-medium my-4">
        Decolonizing Queer Asians
      </p>
      <a href="/exhibitions#about" type="button" class="mt-6 border border-white/60 px-2.5 py-2 text-white/60 hover:border/white hover:text-white bg-white/10">Explore Now</a>
    </div>
  </div>
  </main>
</template>
<style>
.bg-url {
    background-image: url('../assets/cover1.png');
}
</style>