<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
import { ref, onMounted, onUnmounted } from 'vue'
import coverMobile from '@/assets/cover2.png'
import coverDesktop from '@/assets/cover1.png'

function navigateWithFadeOut(url) {
  const body = document.querySelector("body");
  body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 500); // Wait for 500ms (the duration of the fade-out animation) before navigating
}

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
<style>
.fade-out {
  animation: fadeOut 0.5s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
</style>
<template>
  <main class="overflow-hidden h-screen bg-cover bg-right-top" :style="`background-image: url(${bgImage});`">
    <div class="flex justify-start md:justify-center items-center py-4 px-4 md:px-0">
      <a href="/">
       <img src="@/assets/manifesto-logo.png" class="w-6 h-6" alt="Website Logo" />
      </a> 
      <p class="text-white tracking-widest ml-6">MANIFESTO</p>
      <div class="absolute right-0 text-white z-40">
      <NavDropdown />
      </div>
    </div>
  
  <div class="flex flex-col items-start justify-start text-white/90 max-w-screen">
    <span class="sr-only">Current Curation</span>
    <kinesis-container>
    <div class="pl-6 sm:pl-12 md:pl-16 mt-96">
      <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide"><kinesis-element :strength="30" transformOrigin="100% 500%" type="depth">The Bitten Peach</kinesis-element></h1>
      <p class="text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-medium my-4">
        <kinesis-element :strength="70" transformOrigin="100% 500%" type="depth">Decolonizing Queer Asians</kinesis-element>
      </p>
      <button @click="navigateWithFadeOut('/exhibitions#about')" type="button" class="z-20 mt-6 border border-white/60 px-2.5 py-2 text-white/60 hover:border/white hover:text-white bg-white/10">Explore Now</button>
    </div>
    </kinesis-container>
  </div>
  </main>
</template>