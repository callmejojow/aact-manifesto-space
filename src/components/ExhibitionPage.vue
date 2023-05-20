<script setup>
import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import { useScrollObserver } from '@/useScrollObserver.js'
import { ref, onMounted } from "vue"
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

    const offset = 88;
    const scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        easing: 'easeInOutCubic',
        offset: offset,
    });
});

function onIntersection(entry, index) {
    if (entry.isIntersecting) {
        activeIndex.value = index;
    }
}
</script>
<template>
    <main class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-30 top-0 bg-ivory h-26 lg:h-full mb-0 lg:border-b lg:border-stone-400/50">
            <div class="flex justify-start lg:justify-center items-center pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-0 pb-2 md:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Dark Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <!-- navigation -->
            <div class="lg:hidden text-stone-500 text-sm flex justify-start items-center px-6 sm:px-12 lg:px-24">
                <a href="/">
                    Home
                </a>
                <span class="mx-3">/</span>
                <a href="/exhibitions">
                    The Bitten Peach
                </a>
            </div>
            <ul class="mx-6 sm:mx-12 lg:mx-24 lg:hidden t-0 border-b border-stone-600 flex space-x-3 overflow-x-auto max-w-screen text-sm">
                <li><a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-semibold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">About</a></li>
                <li><a href="#sections" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-semibold text-stone-800': activeIndex == 1, 'text-stone-500': activeIndex != 1 }">Exhibitions Sections</a></li>
            </ul>
        </div>
        <!-- end of navigation -->
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-start lg:h-[calc(100vh-64px)] mx-auto">
            <div id="about" class="lg:h-full col-span-1 px-6 sm:px-12 lg:px-16 flex flex-col lg:overflow-y-scroll pb-24 lg:pb-0">
                <h1 class="mt-2 sm:mt-4 md:mt-6 lg:mt-16 text-3xl lg:text-4xl font-medium text-left">The Bitten Peach:</h1>
                <h1 class="mt-1 text-3xl lg:text-4xl font-medium text-left">Decolonizing Queer Asians</h1>
                <p class="text-base font-normal mt-3">May 2023</p>
                <p class="text-2xl mt-12 mb-6">
                    MANIFESTO SPACE is thrilled to present <span class="font-semibold italic">The Bitten Peach: Decolonizing Queer Asians</span>, a group exhibition curated by Shengyu Cai.
                </p>
                <div class="flex flex-col space-y-6 leading-6 text-left text-sm sm:text-base">
                    <p class="font-normal">
                        <span class="font-semibold italic">The Bitten Peach: Decolonizing Queer Asians</span> is a curatorial project that explores the intersectionality of Asian and queer identities through various artistic mediums.
                    </p>
                    <p class="font-normal">
                        Intrigued by the parallel existence of the <a class="font-medium text-bitten/80 hover:text-bitten" href="/exhibitions/made-in-queer#artist_5">peach</a> in both Western and Eastern queer cultures, this project seeks to confront the marginalization of Asian communities in contemporary queer culture. The exhibition raises critical questions about the current queer cultural canon, which is predominantly held together by the Western gaze. By bringing together artworks that address the lived experiences of Asian and queer community members, this project creates a platform that celebrates diversity and promotes a deeper understanding of the complex intersections of identity. Artists contribute their experiences, existing research, and observations through artworks of various mediums, aiming to challenge the Eurocentric colonization of queer theory and explore how queer activism manifests in different forms within different communities. The goal is to initiate a process of decolonizing queerness and fostering a more inclusive and diverse understanding of queer identities.
                    </p>
                </div>
            </div>
            <div id="sections" class="col-span-1 flex flex-col lg:flex-row justify-start min-w-screen h-[calc(100vh-88px)] lg:h-[calc(100vh-64px)] sm:px-6 sm:px-12 lg:px-0 lg:overflow-y-hidden">
                <div class="h-1/3 lg:h-screen lg:w-1/3 bg-top lg:bg-center bg-cover group bg-url-1">
                    <a href="/exhibitions/made-in-queer">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                            <p class="text-ivory text-2xl lg:text-4xl text-center font-extralight lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100">MADE IN <span class="inline lg:block">QUEER</span></p>
                        </div>
                    </a>
                </div>
                <div class="h-1/3 lg:h-screen lg:w-1/3 bg-center bg-cover group bg-url-2">
                    <a href="/exhibitions/body-politics">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                            <p class="text-ivory text-2xl lg:text-4xl text-center font-extralight lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100">BODY <span class="inline lg:block">POLITICS</span></p>
                        </div>
                    </a>
                </div>
                <div class="h-1/3 lg:h-screen lg:w-1/3 bg-top lg:bg-center bg-cover group bg-url-3">
                    <a href="/exhibitions/yellow-perils">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                            <p class="text-ivory text-2xl lg:text-4xl text-center font-extralight lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100">YELLOW <span class="inline lg:block">PERILS</span></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50" />
    </main>
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