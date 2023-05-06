<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
// import SmoothScroll from 'smooth-scroll'

import { yellowPerils } from '@/yellowPerils.js';
import { useScrollObserver } from '@/useScrollObserver.js'

import { ref, onMounted, computed, watch } from "vue"

/* eslint-disable no-unused-vars */
const navItems = ref([]);
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();

onMounted(() => {
    navItems.value = document.querySelectorAll(".nav-item");
    navItems.value.forEach((el, index) => {
        const targetId = el.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        startObserving(targetElement, index, onIntersection);
    });

    // const scroll = new SmoothScroll('a[href*="#"]', {
    //     speed: 800,
    //     easing: 'easeInOutCubic',
    // });
});

function onIntersection(entry, index) {
    if (entry.isIntersecting) {
        activeIndex.value = index;
    }
}

const yellowPerilsArray = computed(() => Object.values(yellowPerils));

watch(activeIndex, () => {
    const navbarWidth = navbar.value.offsetWidth;
    const activeNavItem = navItems.value[activeIndex.value];

    if (activeNavItem) {
        const activeNavItemOffset = activeNavItem.offsetLeft + activeNavItem.offsetWidth / 2;
        navbar.value.scrollLeft = activeNavItemOffset - navbarWidth / 2;
    }
});
</script>
<template>
    <div class="font-open">
        <div class="snap-y snap-mandatory h-screen overflow-scroll">
            <div class="sticky top-0 z-30 bg-ivory h-36 lg:h-28">
                <div class="flex items-center justify-start lg:justify-center py-[1.1rem] px-4 border-b border-stone-200/80">
                    <a href="/">
                        <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
                    </a>
                    <p class="text-black tracking-widest ml-6">MANIFESTO</p>
                    <div class="absolute right-4 text-ivory z-40">
                        <NavDropdown />
                    </div>
                </div>
                <!-- Generic Breadcrumbs -->
                <div class="hidden lg:flex lg:justify-start lg:items-center lg:p-4">
                    <BreadCrumbs />
                    <span class="ml-4 text-sm text-stone-400/80">
                        Yellow Perils
                    </span>
                </div>
                <div class="lg:hidden p-4">
                    <a href="/exhibitions" class="text-sm text-stone-500 hover:text-stone-700">
                        The Bitten Peach: Decolonizing Queer Asians
                    </a>
                </div>
                <nav ref="navbar" class="lg:hidden bg-ivory t-0 border-b border-stone-600 flex space-x-5 mx-4 overflow-x-auto max-w-screen">
                    <a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600 text-sm" :class="{'font-bold': activeIndex == 0 }">
                        About
                    </a>
                    <a v-for="(artist, index) in yellowPerilsArray" :key="'nav_item_' + index" :href="`#artist_${index}`" class="nav-item inline-block whitespace-nowrap text-stone-600 text-sm" :class="{ 'font-bold': activeIndex == index + 1 }">
                        {{artist.artist_name}}
                    </a>
                </nav>
                <br class="lg:hidden">
            </div>
            <!-- Banner -->
            <section id="page_banner" class="scroll-mt-36 snap-start h-screen min-h-screen w-full bg-cover bg-top banner3-url overflow-hidden z-20">
                <div class="bg-black/50 w-full h-screen flex flex-col items-start justify-center pl-20 md:pl-14 sm:pl-10 pl-6">
                    <p class="text-lg md:text-xl lg:text-2xl text-ivory/90">
                        The Bitten Peach: Decolonizing Queer Asians
                    </p>
                    <p class="z-20 text-ivory/90 font-bold text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
                        YELLOW PERILS
                    </p>
                </div>
            </section>
            <!-- Introduction of the sub section -->
            <section id="about" class="scroll-mt-36 -mb-2 min-h-full max-h-screen snap-start overflow-y-hidden inline-block relative h-full w-full px-20 md:px-14 sm:px-10 px-6 tracking-wide leading-6 bg-ivory">
                <h2 class="text-4xl font-semibold">About</h2>
                <p class="text-md lg:text-lg font-thin">
                    Intrigued by the parallel existence of the peach in both Western and Eastern queer cultures, AACT is curating its inaugural online exhibition - The Bitten Peach: Decolonizing Queerness.
                </p>
                <p class="mt-2 text-md lg:text-lg font-thin">
                    We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?
                </p>
                <p class="mt-2 text-md lg:text-lg font-thin">
                    We welcome diverse critical positions. Collectively, we aim to present an exhibition that celebrates broader definitions of queerness from different world views. We bite the peach together.
                </p>
            </section>
            <div v-for="(artist,index) in yellowPerilsArray" :key="artist" class="scroll-mt-36 snap-start">
                <!-- Quote of the Topic -->
                <section :id="`artist_${index}`" class="bg-bitten h-screen w-screen bg-cover sticky-margin lg:sticky-margin-lg" :style="artist.quote_bg_url ? { backgroundImage: 'url(' + artist.quote_bg_url + ')' } : {}">
                    <div class="h-full flex flex-col items-center justify-center px-20 md:px-14 sm:px-10 px-6 bg-black/70">
                        <p class="font-thin tracking-wider max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-ivory/90">
                            {{artist.quote}}
                        </p>
                        <p class="mt-10 z-20 text-ivory/90 font-semibold text-xl md:text-2xl lg:text-3xl text-ivory text-center">
                            {{artist.artist_name}}
                        </p>
                    </div>
                </section>
                <!-- Art pieces of a certain artist with his/her introduction -->
                <div class="w-full tracking-wide leading-6 bg-ivory">
                    <div v-if="artist.format == 'image' || artist.format == 'mixed'" class="min-h-screen max-h-full">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4">
                            <p class="text-3xl font-bold p-20 md:p-14 sm:p-10 p-6">{{artist.collection_title}}</p>
                            <p class="text-3xl font-bold p-20 md:p-14 sm:p-10 p-6">{{artist.artist_name}}</p>
                        </div>
                        <CarouselComponent :slides="artist.slides" />
                        <div class="min-h-screen max-h-full mt-4 lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 px-4 md:px-6 lg:px-12 pb-6">
                            <div class="lg:w-3/4 min-h-full">
                                <span class="font-semibold text-lg lg:text-2xl">
                                    {{artist.collection_title ? "About " + artist.collection_title : "About This Collection" }}
                                </span>
                                <div class="lg:text-justify" v-html="artist.description" style="white-space: pre-line"> </div>
                            </div>
                            <div class="mt-4 lg:mt-0 lg:w-1/4">
                                <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
                                <p>{{artist.bio}}</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="artist.format == 'text'" class="relative min-h-screen max-h-full bg-black text-ivory lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 p-4 md:p-8 lg:p-12">
                        <div class="lg:w-3/4 flex flex-col">
                            <h3 v-for="art in artist.artworks" :key="art" class="font-semibold text-lg lg:text-2xl">{{art.name}}</h3>
                            <p class="lg:text-justify">
                                {{artist.excerpt1}}
                            </p>
                            <p class="lg:text-justify mt-4">
                                {{artist.excerpt2}}
                            </p>
                            <a href="https://jeffjungsingc.notion.site/Bitten-Peach-Submission-Queer-Asians-on-the-Dancefloor-5dfaf0bca4f34e5d85f146280385fce2" target="_blank" class="self-end justify-self-end underline text-ivory/50 hover:text-ivory/80 p-2">Read More</a>
<!--                          TODO: update link!!!-->
                        </div>
                        <div class="mt-6 lg:mt-0 lg:w-1/4">
                            <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
                            <p>
                                {{artist.bio}}
                            </p>
                        </div>
                    </div>
                    <div v-if="artist.format == 'video'" class="min-h-screen max-h-full p-6 md:p-8 lg:p-12">
                        <div v-for="art in artist.artworks" :key="art" class="aspect-video">
                            <iframe :src="art.file_name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="w-full h-full lg:h-screen" allowfullscreen></iframe>
                        </div>
                        <div class="mt-4 lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 px-4 md:px-6 lg:px-12 pb-6 min-h-screen max-h-full">
                            <div class="lg:w-3/4">
                                <span class="font-semibold text-lg lg:text-2xl">{{artist.collection_title ? "About " + artist.collection_title : "About This Collection" }}</span>
                                <p class="lg:text-justify">{{artist.description}}</p>
                            </div>
                            <div class="mt-4 lg:mt-0 lg:w-1/4">
                                <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
                                <p>{{artist.bio}}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <FooterComponent class="text-stone-800/60 bg-ivory border-t border-stone-400/50 py-4 md:-mx-8" />
</template>
<style>
.banner3-url {
    background-image: url('../assets/curation-topic3.webp');
}
</style>