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

/*div.slide-left {
  width:100%;
  overflow:hidden;
}
div.slide-left p {
  animation: slide-left 5s;
}*/

/*@keyframes slide-left {
  from {
    margin-left: 100%;
    width: 300%; 
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}*/

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
        <div class="h-[calc(100vh+6rem)] md:h-[calc(100vh+4rem)] w-screen m-0 font-open bg-black/20 flex flex-col justify-between">
            <div class="flex justify-start md:justify-center items-center pt-4 md:pt-6 lg:pt-4 px-6 md:px-12 lg:px-0">
                <a href="/">
                    <img src="@/assets/manifesto-logo-white.svg" class="w-2/3 opacity-90" alt="Website Logo" />
                </a>
                <div class="absolute right-0 text-ivory z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="self-start flex items-center justify-center text-ivory max-w-screen">
                <span class="sr-only">Current Curation</span>
                <div class="pl-12 md:pl-24 lg:pl-36">
                    <p class="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-wide" :style="{ opacity: buttonOpacity, transition: 'opacity 100ms ease-in' }">The Bitten Peach</p>
                    <p class="text-lg sm:text-2xl md:text-3xl lg:text-4xl tracking-wider font-medium my-4" :style="{ opacity: buttonOpacity, transition: 'opacity 150ms ease-in' }">
                        Decolonizing Queer Asians
                    </p>
                    <button @click="navigateWithFadeOut('/exhibitions')" type="button" :style="{ opacity: buttonOpacity, transition: 'opacity 350ms ease-in' }" class="z-20 mt-6 border border-ivory/60 px-2.5 py-2 text-ivory/60 hover:border/ivory hover:text-ivory bg-ivory/10">Explore Now</button>
                </div>
            </div>
            <FooterComponent class="text-ivory/70 mb-2" />
        </div>
    </main>
</template>