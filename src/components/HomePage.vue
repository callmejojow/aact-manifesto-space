<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import coverMobile from '@/assets/cover2.png'
import coverDesktop from '@/assets/cover1.png'

const bgImage = ref(coverMobile)

const updateBgImage = () => {
      if (window.innerWidth >= 768) {
        bgImage.value = coverDesktop
      } else {
        bgImage.value = coverMobile
      }
    }

    onMounted(() => {
      updateBgImage()
      window.addEventListener('resize', updateBgImage)
    })

    onUnmounted(() => {
      window.removeEventListener('resize', updateBgImage)
    })
</script>
<template>
  <main class="overflow-hidden h-screen bg-cover bg-right-top" :style="`background-image: url(${bgImage});`">
    <div class="flex justify-start md:justify-center items-center py-4 px-4 md:px-0">
      <a href="/">
       <img src="@/assets/manifesto-logo.png" class="w-6 h-6" alt="Website Logo" />
      </a> 
      <p class="text-white tracking-widest ml-6">MANIFESTO</p>
      <div class="absolute right-4 text-white z-40">
      <NavDropdown />
      </div>
    </div>
  
  <div class="flex flex-col items-start justify-start text-white/90 max-w-screen">
    <span class="sr-only">Current Curation</span>
    <div class="px-16 mt-96">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide">The Bitten Peach</h1>
      <p class="text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-medium my-4">
        Decolonizing Queer Asians
      </p>
      <a href="/exhibitions#about" type="button" class="mt-6 border border-white/60 px-2.5 py-2 text-white/60 hover:border/white hover:text-white bg-white/10">Explore Now</a>
    </div>
  </div>
  </main>
</template>