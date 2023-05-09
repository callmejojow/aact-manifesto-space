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
    <main class="min-h-screen bg-ivory font-inter">
        <div class="sticky z-20 top-0 bg-ivory h-36 lg:h-full mb-12 lg:mb-0">
            <div class="flex justify-start md:justify-center items-center pt-6 lg:pt-4 px-6 md:px-12 lg:px-0 pb-6 lg:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="w-2/3 opacity-90" alt="Website Dark Logo" />
                </a>
                <div class="absolute right-4 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <!-- navigation -->
            <div class="lg:hidden px-6 md:px-12 lg:px-24">
                <p class="text-sm text-stone-500 hover:text-stone-700">
                    The Bitten Peach: Decolonizing Queer Asians
                </p>
            </div>
            <ul class="mx-6 md:mx-12 lg:mx-24 lg:hidden bg-ivory py-1.5 border-b border-stone-600 flex space-x-5 overflow-x-auto max-w-screen">
                <li><a href="#about" class="nav-item inline-block ivoryspace-nowrap text-stone-600 text-sm" :class="{'font-bold': activeIndex == 0 }">About</a></li>
                <li><a href="#sections" class="nav-item inline-block ivoryspace-nowrap text-stone-600 text-sm" :class="{'font-bold': activeIndex == 1 }">Sections</a></li>
            </ul>
        </div>
        <!-- end of navigation -->
        <div class="grid grid-cols-1 lg:grid-cols-2 justify-center items-start relative lg:lg:h-[calc(100vh-36px)] mx-auto">
            <div id="about" class="lg:-mt-16 min-h-full max-h-screen overflow-scroll col-span-1 pt-40 -mt-40 px-6 md:px-12 lg:px-16">
                <h1 class="text-3xl lg:text-4xl font-medium text-left">The Bitten Peach:</h1>
                <h1 class=" text-3xl lg:text-4xl font-medium text-left">Decolonizing Queer Asians</h1>
                <p class="text-base font-normal mt-3">May 2023</p>
                <p class="text-2xl my-12">
                    AACT MANIFESTO is pleased to present The Bitten Peach: Decolonizing Queer Asians, a group exhibition curated by Shengyu Cai.
                </p>
                <div class="flex flex-col space-y-6 leading-6 text-left text-base pb-24">
                    <p class="font-normal">
                        Intrigued by the parallel existence of the peach in both Western and Eastern queer cultures, AACT is curating its inaugural online exhibition - The Bitten Peach: Decolonizing Queerness.
                    </p>
                    <p class="font-normal">
                        We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?
                    </p>
                    <p class="font-normal">
                        We welcome diverse critical positions. Collectively, we aim to present an exhibition that celebrates broader definitions of queerness from different world views. We bite the peach together.
                    </p>
                </div>
            </div>
            <div id="sections" class="pb-4 lg:pb-0 pt-36 -mt-36 lg:pt-0 lg:mt-0 col-span-1 flex flex-col lg:flex-row justify-end min-w-screen lg:h-[calc(100vh-36px)] h-screen sm:px-6 md:px-12 lg:px-0 lg:overflow-y-hidden">
                <div class="h-1/3 lg:h-screen lg:w-1/3 bg-center bg-cover group bg-url-1">
                    <a href="/exhibitions/made_in_queer">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                            <p class="text-ivory text-2xl lg:text-4xl text-center font-extralight lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100">MADE IN <span class="inline lg:block">QUEER</span></p>
                        </div>
                    </a>
                </div>
                <div class="h-1/3 lg:h-screen lg:w-1/3 bg-center bg-cover group bg-url-2">
                    <a href="/exhibitions/body_politics">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                            <p class="text-ivory text-2xl lg:text-4xl text-center font-extralight lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100">BODY <span class="inline lg:block">POLITICS</span></p>
                        </div>
                    </a>
                </div>
                <div class="h-1/3 lg:h-screen lg:w-1/3 bg-center bg-cover group bg-url-3">
                    <a href="/exhibitions/yellow_perils">
                        <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 md:transition-all md:ease-in md:ease-out md:duration-300">
                            <p class="text-ivory text-2xl lg:text-4xl text-center font-extralight lg:transition-all lg:ease-in lg:ease-out lg:duration-300 lg:group-hover:opacity-100 lg:opacity-0 opacity-100">YELLOW <span class="inline lg:block">PERILS</span></p>
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <FooterComponent class="text-stone-800/60 bg-ivory border-t border-stone-400/50 lg:px-4" />
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