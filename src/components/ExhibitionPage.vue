<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import {useScrollObserver} from '@/useScrollObserver.js'
import { ref,onMounted } from "vue"
import SmoothScroll from 'smooth-scroll'
/* eslint-disable no-unused-vars */
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();

onMounted(() => {
  const aboutSection = document.getElementById("about");
  const sectionsSection = document.getElementById("sections");
  startObserving(aboutSection, 0, onIntersection);
  startObserving(sectionsSection, 1, onIntersection);

  const scroll = new SmoothScroll('a[href*="#"]', {
    speed: 800,
    easing: 'easeInOutCubic',
  });
});

function onIntersection(entry, index) {
  if (entry.isIntersecting) {
    activeIndex.value = index;
    console.log(activeIndex.value)
  }
}

</script>
<template>
    <main class="min-h-screen font-open">
        <div class="sticky z-20 top-0 bg-ivory h-36 lg:h-full">
            <div class="bg-transparent flex justify-start lg:justify-center items-center py-4 px-4 lg:px-0">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
                </a>
                <p class="text-black tracking-widest ml-6">MANIFESTO</p>
                <div class="absolute right-4 text-ivory z-40">
                    <NavDropdown />
                </div>
            </div>
            <!-- navigation -->
            <div class="lg:hidden p-4">
                <p class="text-sm text-gray-500 hover:text-gray-700">
                    The Bitten Peach: Decolonizing Queer Asians
                </p>
            </div>
            <ul class="lg:hidden bg-ivory t-0 border-b border-gray-600 flex space-x-5 mx-4 mb-4 overflow-x-auto max-w-screen">
                <li><a href="#about" class="nav-item inline-block ivoryspace-nowrap text-gray-600 text-sm" :class="{'font-bold': activeIndex == 0 }">About</a></li>
                <li><a href="#sections" class="nav-item inline-block ivoryspace-nowrap text-gray-600 text-sm" :class="{'font-bold': activeIndex == 1 }">Sections</a></li>
            </ul>
        </div>
        <!-- end of navigation -->
        <div class="font-open grid grid-cols-1 lg:grid-cols-2 justify-center relative overflow-hidden min-h-screen max-h-full pt-4 md:pt-0 bg-ivory mx-auto px-4 lg:px-0">
            <div id="about" class="min-h-screen col-span-1 scroll-mt-[10rem] md:pt-24 md:-mt-24 justify-self-center self-center lg:px-4">
                <h1 class="text-3xl lg:text-4xl font-medium tracking-wide text-left">The Bitten Peach:</h1>
                <h1 class="text-3xl lg:text-4xl font-medium tracking-wide text-left">Decolonizing Queer Asians</h1>
                <p class="mt-4 text-sm font-thin">May 2023</p>
                <p class="text-xl tracking-wide my-10">
                    AACT MANIFESTO is pleased to present The Bitten Peach: Decolonizing Queer Asians, a group exhibition curated by Emily Gong and Shengyu Cai.
                </p>
                <div class="flex flex-col space-y-4 leading-6 pb-4 pr-4 text-left">
                    <p class="font-thin">
                        Intrigued by the parallel existence of the peach in both Western and Eastern queer cultures, AACT is curating its inaugural online exhibition - The Bitten Peach: Decolonizing Queerness.
                    </p>
                    <p class="font-thin">
                        We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?
                    </p>
                    <p class="font-thin">
                        We welcome diverse critical positions. Collectively, we aim to present an exhibition that celebrates broader definitions of queerness from different world views. We bite the peach together.
                    </p>
                </div>
            </div>
            <div id="sections" class="pb-4 pt-36 -mt-36 lg:pt-0 lg:mt-0 col-span-1 flex flex-col lg:flex-row justify-end min-w-screen h-screen lg:min-h-screen">
                <div class="h-1/3 lg:h-screen lg:w-1/3 lg:h-screen bg-cover group bg-url-1">
                    <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                        <a href="/exhibitions/made_in_queer">
                            <span class="text-ivory text-4xl lg:text-2xl text-center font-thin md:transition-all md:ease-in md:ease-out md:duration-300 md:group-hover:opacity-100 md:opacity-0 opacity-100">MADE IN QUEER</span>
                        </a>
                    </div>
                </div>
                <div class="h-1/3 lg:h-screen lg:w-1/3 lg:h-screen bg-cover group bg-url-2">
                    <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                        <a href="/exhibitions/body_politics">
                            <span class="text-ivory text-4xl lg:text-2xl text-center font-thin md:transition-all md:ease-in md:ease-out md:duration-300 md:group-hover:opacity-100 md:opacity-0 opacity-100">BODY POLITICS</span>
                        </a>
                    </div>
                </div>
                <div class="h-1/3 lg:h-screen lg:w-1/3 lg:h-screen bg-cover group bg-url-3">
                    <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                        <a href="/exhibitions/yellow_perils">
                            <span class="text-ivory text-4xl lg:text-2xl text-center font-thin md:transition-all md:ease-in md:ease-out md:duration-300 md:group-hover:opacity-100 md:opacity-0 opacity-100">YELLOW PERILS</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <FooterComponent class="text-stone-800/60 bg-ivory border-t border-stone-400/50 py-4 md:-mx-8"/>
</template>
<style>
.bg-url-1 {
    background-image: url('../assets/curation-topic1.webp');
}

.bg-url-2 {
    background-image: url('../assets/curation-topic2.webp');
}

.bg-url-3 {
    background-image: url('../assets/curation-topic3.webp');
}
</style>