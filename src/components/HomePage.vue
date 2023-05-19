<script setup>
    import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { ref, onMounted } from 'vue'
const buttonOpacity = ref(0);
import bgImg from '@/assets/curation-topic1.webp'

function navigateWithFadeOut(url) {
  const body = document.querySelector("body");
  body.classList.add("fade-out");

  setTimeout(() => {
    window.location.href = url;
  }, 500); // Wait for 500ms (the duration of the fade-out animation) before navigating
}

onMounted(() => {
  setTimeout(() => {
    buttonOpacity.value = 1;
  }, 1600);
})

</script>
<style>
    .fade-out {
  animation: fadeOut 0.2s ease-out forwards;
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
<template>
    <main class="min-h-screen max-h-full overflow-hidden relative bg-cover bg-center bg-fixed lg:bg-right-top" :style="`background-image: url(${bgImg});`">
        <div class="h-[calc(100vh+132px)] w-screen m-0 bg-black/20 flex flex-col justify-between">
            <div class="flex justify-start lg:justify-center items-center pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-0 pb-2 md:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-white.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-ivory z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="self-start flex items-center justify-center text-ivory max-w-screen">
                <span class="sr-only">Current Curation</span>
                <div class="pl-6 md:pl-12 lg:pl-24">
                    <p class="text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide" :style="{ opacity: buttonOpacity, transition: 'opacity 60ms ease-in' }">The Bitten Peach:</p>
                    <p class="text-2xl md:text-4xl lg:text-5xl font-medium tracking-wide" :style="{ opacity: buttonOpacity, transition: 'opacity 120ms ease-in' }">
                        Decolonizing Queer Asians
                    </p>
                    <button @click="navigateWithFadeOut('/exhibitions')" type="button" :style="{ opacity: buttonOpacity, transition: 'opacity 200ms ease-in' }" class="z-20 mt-6 md:mt-9 lg:mt-12 border border-ivory/60 px-6 py-2 md:py-4 text-ivory/60 hover:border/ivory hover:text-ivory bg-ivory/10 md:text-base text-small">Explore Now</button>
                </div>
            </div>
            <FooterComponent class="text-ivory/70 mb-7" />
        </div>
    </main>
</template>