<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

import { madeInQueer } from '@/madeInQueer.js';
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

});

function onIntersection(entry, index) {
    if (entry.isIntersecting) {
        activeIndex.value = index;
    }
}

const madeInQueerArray = computed(() => Object.values(madeInQueer));

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
    <div class="bg-ivory max-h-full">
        <div class="snap-y snap-mandatory h-screen overflow-scroll">
            <div class="sticky z-30 top-0 bg-ivory h-32 lg:h-28 pt-4 md:pt-6 lg:pt-4 px-6 md:px-12 lg:px-0">
                <div class="flex justify-start lg:justify-center items-center lg:border-b lg:border-stone-400/50 pb-6 lg:pb-4">
                    <a href="/">
                        <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Dark Logo" />
                    </a>
                    <div class="absolute right-0 md:right-6 text-stone-600/80 hover:text-stone-800/50 z-40">
                        <NavDropdown />
                    </div>
                </div>
                <div class="pt-3.5 hidden lg:flex lg:justify-start lg:items-center lg:px-12 lg:border-b lg:border-stone-400/50 pb-6 lg:pb-3">
                    <BreadCrumbs :main-page="false" />
                    <span class="ml-4 text-sm text-stone-500/80">
                        Made In Queer
                    </span>
                </div>
                <div class="lg:hidden flex items-center justify-start w-96 text-stone-700 text-base">
                    <a href="/" class="hover:text-stone-900">
                        Home
                    </a>
                    <p class="mx-2">/</p>
                    <a href="/exhibitions" class="hover:text-stone-900">
                        The Bitten Peach
                    </a>
                    <p class="mx-2">/</p>
                    <button disabled class="text-stone-600">
                        Made In Queer
                    </button>
                </div>
                <nav ref="navbar" class="lg:hidden bg-ivory t-0 border-b border-stone-600 flex space-x-5 overflow-x-auto max-w-screen text-base">
                    <a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-bold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">
                        About
                    </a>
                    <a v-for="(artist, index) in madeInQueerArray" :key="'nav_item_' + index" :href="`#artist_${index}`" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-bold text-stone-800': activeIndex == index + 1, 'text-stone-500': activeIndex != index + 1 }">
                        {{artist.artist_name}}
                    </a>
                </nav>
            </div>
            <!-- Banner -->
            <section id="page_banner" class="scroll-mt-32 lg:scroll-mt-28 snap-start h-screen min-h-screen w-full bg-cover bg-top banner2-url overflow-hidden z-20">
                <div class="bg-black/50 w-full h-screen flex flex-col items-start justify-center pl-20 md:pl-14 sm:pl-10 pl-6">
                    <p class="text-lg md:text-xl lg:text-2xl text-ivory/90">
                        The Bitten Peach: Decolonizing Queer Asians
                    </p>
                    <p class="z-20 text-ivory/90 font-bold text-4xl md:text-5xl lg:text-6xl text-ivory text-center">
                        Made In Queer
                    </p>
                </div>
            </section>
            <!-- Introduction of the sub section -->
            <section id="about" class="pt-6 scroll-mt-32 lg:scroll-mt-28 snap-start min-h-full px-20 md:px-14 sm:px-10 px-6">
                <h2 class="mb-6 lg:mt-16 lg:mb-10 text-xl font-bold">About</h2>
                <p class="font-normal text-sm leading-5 lg:text-lg">
                    Intrigued by the parallel existence of the peach in both Western and Eastern queer cultures, AACT is curating its inaugural online exhibition - The Bitten Peach: Decolonizing Queerness.
                </p>
                <p class="font-normal mt-3 text-sm leading-5 lg:text-lg">
                    We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?
                </p>
                <p class="font-normal mt-3 text-sm leading-5 lg:text-lg">
                    We welcome diverse critical positions. Collectively, we aim to present an exhibition that celebrates broader definitions of queerness from different world views. We bite the peach together.
                </p>
            </section>
            <div v-for="(artist,index) in madeInQueerArray" :key="index" class="scroll-mt-32 lg:scroll-mt-28 snap-start pb-20">
                <!-- Quote of the Topic -->
                <section :id="`artist_${index}`" class="bg-bitten h-[calc(100vh-36px)] lg:h-[calc(100vh-28px)] w-screen bg-cover sticky-margin lg:sticky-margin-lg" :style="artist.quote_bg_url ? { backgroundImage: 'url(' + artist.quote_bg_url + ')' } : {}">
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
                <div class="w-screen tracking-wide leading-6 bg-ivory px-20 md:px-14 sm:px-10 px-6">
                    <div v-if="artist.format == 'image' || artist.format == 'mixed'" class="min-h-screen max-h-full">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4 pt-12 pb-4">
                            <p class="text-2xl font-bold">{{artist.artist_name}}</p>
                            <p class="text-lg font-light italic">{{artist.collection_title}}</p>
                        </div>
                        <CarouselComponent :slides="artist.slides"/>
                        <div class="min-h-screen mt-4 lg:flex lg:justify-between lg:items-start lg:gap-24 pb-6">
                            <div class="w-full lg:w-3/4 min-h-full pt-8">
                                <span v-if="artist.collection_title" class="font-bold leanding-4">
                                    About <span class="italic">{{artist.collection_title}}</span>
                                </span>
                                <span v-else class="font-bold leanding-4">
                                    About This Collection
                                </span>
                                <div class="lg:text-justify" v-html="artist.description" style="white-space: pre-line"> </div>
                            </div>
                            <div class="mt-4 lg:mt-0 lg:w-1/4 pt-4">
                                <span class="font-bold leading-4">{{artist.artist_name}}</span>
                                <div class="lg:text-justify" v-html="artist.bio" style="white-space: pre-line"> </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="artist.format == 'text'" class="min-h-screen max-h-full w-full lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 mx-auto">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4 pt-12 pb-4">
                            <p class="text-2xl font-bold">{{artist.artist_name}}</p>
                            <p class="text-lg font-light italic">{{artist.collection_title}}</p>
                        </div>
                        <div class="lg:w-3/4 flex flex-col">
                            <p class="text-base leading-6">
                                {{artist.excerpt1}}
                            </p>
                            <p class="text-base mt-3 leading-6">
                                {{artist.excerpt2}}
                            </p>
                            <a :href="artist.link" target="_blank" class="self-end justify-self-end underline text-bitten/50 hover:text-bitten p-2">Read More</a>
                        </div>
                        <div class="mt-6 lg:mt-0 lg:w-1/4">
                            <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
<!--                            <p> {{artist.bio}} </p>-->
                            <div class="" v-html="artist.bio" style="white-space: pre-line"> </div>
                        </div>
                    </div>
                    <div v-if="artist.format == 'video'" class="min-h-screen max-h-full">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4 pt-12 pb-4">
                            <p class="text-2xl font-bold">{{artist.artist_name}}</p>
                            <p class="text-lg font-light italic">{{artist.collection_title}}</p>
                        </div>
                        <div v-for="art in artist.artworks" :key="art" class="aspect-video">
                            <iframe :src="art.file_name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="w-full h-full lg:h-screen" allowfullscreen></iframe>
                        </div>
                        <div class="min-h-screen mt-4 lg:flex lg:justify-between lg:items-start lg:gap-24 pb-6">
                            <div class="w-full lg:w-3/4 min-h-full pt-8">
                                <span v-if="artist.collection_title" class="font-bold leanding-4">
                                    About <span class="italic">{{artist.collection_title}}</span>
                                </span>
                                <span v-else class="font-bold leanding-4">
                                    About This Collection
                                </span>
                                <div class="lg:text-justify" v-html="artist.description" style="white-space: pre-line"> </div>
                            </div>
                            <div class="mt-4 lg:mt-0 lg:w-1/4 pt-4">
                                <span class="font-bold leading-4">{{artist.artist_name}}</span>
                                <div class="lg:text-justify" v-html="artist.bio" style="white-space: pre-line"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="snap-start"></div>
            <FooterComponent class="text-stone-800/60 bg-ivory border-t border-stone-400/50 py-4 md:-mx-8" />
        </div>
    </div>
</template>
<style>
.banner2-url {
    background-image: url('../assets/curation-topic1.webp');
}
</style>