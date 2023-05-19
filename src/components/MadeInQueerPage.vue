<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'
import SmoothScroll from 'smooth-scroll'
import { madeInQueer } from '@/madeInQueer.js';
import { useScrollObserver } from '@/useScrollObserver.js'
import { ref, onMounted, computed, watch } from "vue"

/* eslint-disable no-unused-vars */
const navItems = ref([]);
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();

onMounted(() => {
    let scroll;

    // Create a function to initialize SmoothScroll with an offset
    function initializeSmoothScroll(offset) {
      if (scroll !== undefined) scroll.destroy(); // Destroy the old instance, if it exists

      scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800,
        offset: offset,
      });
    }

    // Create a function to adjust offset based on window size
    function adjustOffset() {
      if (window.innerWidth >= 1024) { // lg screens and above
        initializeSmoothScroll(136); // your offset for lg screens
      } else {
        initializeSmoothScroll(104); // your offset for smaller screens
      }
    }

    // Initialize SmoothScroll and adjust the offset on page load
    adjustOffset();

    // Adjust the offset whenever the window is resized
    window.addEventListener('resize', adjustOffset);

    navItems.value = document.querySelectorAll(".nav-item");
    navItems.value.forEach((el, index) => {
        const targetId = el.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        startObserving(targetElement, index, onIntersection);
    });
    // const offset = 104;
    // const scroll = new SmoothScroll('a[href*="#"]', {
    //     speed: 1000,
    //     easing: 'easeInOutCubic',
    //     offset: offset,
    // });
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
    <div class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-50 top-0 bg-ivory pt-4 sm:pt-6 lg:pt-4 px-6 sm:px-12 lg:px-16">
            <div class="flex justify-start lg:justify-center items-center lg:border-b lg:border-stone-400/50 pb-6 lg:pb-4">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Dark Logo" />
                </a>
                <div class="absolute right-0 sm:right-7 lg:right-10 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="pt-3.5 hidden lg:flex lg:justify-start lg:items-center pb-6 lg:pb-3">
                <BreadCrumbs :main-page="false" />
                <span class="ml-3 text-sm text-stone-500/80">
                    Made In Queer
                </span>
            </div>
            <div class="lg:hidden flex items-center justify-start w-full text-stone-700 text-sm">
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
            <nav ref="navbar" class="bg-ivory t-0 border-b border-stone-600 lg:pb-2 flex space-x-5 overflow-x-auto max-w-screen text-sm scrollbar-hide">
                <a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-bold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">
                    About
                </a>
                <a v-for="(artist, index) in madeInQueerArray" :key="'nav_item_' + index" :href="`#artist_${index}`" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-bold text-stone-800': activeIndex == index + 1, 'text-stone-500': activeIndex != index + 1 }">
                    {{artist.artist_name}}
                </a>
            </nav>
        </div>
        <div class="overflow-scroll scroll-smooth">
            <!-- Banner -->
            <section id="page_banner" class="h-[calc(100vh-104px)] w-full bg-cover bg-top banner2-url">
                <div class="bg-black/50 w-full h-[calc(100vh-104px)] flex flex-col items-start justify-center lg:pl-16 sm:pl-12 pl-6">
                    <p class="lg:leading-[29px] hidden lg:block lg:text-2xl text-ivory/90">
                        The Bitten Peach: Decolonizing Queer Asians
                    </p>
                    <p class="leading-[29px] sm:leading-[44px] lg:leading-[77px] text-ivory/90 font-medium text-2xl sm:text-4xl lg:text-[64px] text-ivory text-center">
                        Made In Queer
                    </p>
                </div>
            </section>
            <!-- Introduction of the sub section -->
            <section id="about" class="h-fit px-6 sm:px-12 lg:px-16">
                <h2 class="pt-6 mb-6 lg:mb-12 text-xl lg:text-4xl font-bold">About</h2>
<!--                <p class="font-normal text-sm sm:text-base lg:text-xl leading-5 sm:leading-6 lg:leading-8">-->
<!--                  Made in Queer celebrates artists who explore the discursive or material reflection of relational queerness, where their lived experiences, identities, memories are projected onto physical objects, structures, and our built environment.-->
<!--                </p>-->
<!--                <p class="mt-3 lg:mt-9 font-normal text-sm sm:text-base lg:text-xl leading-5 sm:leading-6 lg:leading-8">-->
<!--                    We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?-->
<!--                </p>-->
                <p class="pb-[94px] sm:pb-24 mt-3 lg:mt-9 font-normal text-sm sm:text-base lg:text-xl leading-5 sm:leading-6 lg:leading-8">
                  Made in Queer celebrates artists who explore the discursive or material reflection of relational queerness, where their lived experiences, identities, memories are projected onto physical objects, structures, and our built environment.
                </p>
            </section>
            <div v-for="(artist,index) in madeInQueerArray" :key="index" class="pb-[94px] sm:pb-24">
                <!-- Quote of the Topic -->
                <section :id="`artist_${index}`" class="bg-bitten h-[calc(100vh-104px)] w-screen bg-cover" :style="artist.quote_bg_url ? { backgroundImage: 'url(' + artist.quote_bg_url + ')' } : {}">
                    <div class="h-full flex flex-col items-center justify-center lg:px-64 md:px-32 px-6 bg-black/70">
                        <p class="font-thin tracking-wider max-w-4xl text-base lg:text-2xl text-ivory/90">
                            {{artist.quote}}
                        </p>
                        <p class="mt-4 lg:mt-6 z-20 text-ivory/90 font-semibold text-base lg:text-2xl text-ivory text-center">
                            {{artist.artist_name}}
                        </p>
                    </div>
                </section>
                <!-- Art pieces of a certain artist with his/her introduction -->
                <div class="w-screen tracking-wide leading-6 bg-ivory px-20 px-6 sm:px-12 lg:px-16">
                    <div v-if="artist.format == 'image' || artist.format == 'mixed'" class="h-full">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4 pt-12 pb-4 lg:pt-20 lg:pb-8">
                            <p class="lg:text-4xl text-2xl font-bold">{{artist.artist_name}}</p>
                            <p class="lg:text-4xl text-lg font-light italic">{{artist.collection_title}}</p>
                        </div>
                        <div class="block md:hidden h-full" v-for="(art,index) in artist.artworks" :key="index">
                            <img :src="art.file_name" alt="artwork" class="max-w-screen mb-3" />
                        </div>
                        <CarouselComponent class="hidden md:block" :slides="artist.slides" />
                        <div class="h-full lg:flex lg:justify-between lg:items-start lg:gap-14 lg:pt-12 pt-14 pb-6 lg:pb-12">
                            <div class="w-full lg:w-2/3 min-h-full">
                                <span v-if="artist.collection_title" class="text-sm sm:text-base lg:text-[28px] font-bold leanding-4">
                                    About <span class="italic">{{artist.collection_title}}</span>
                                </span>
                                <span v-else class="font-bold leanding-4 text-sm sm:text-base lg:text-[28px]">
                                    About This Collection
                                </span>
                                <div class="mt-4 whitespace-pre-line text-sm sm:text-base lg:text-xl" v-html="artist.description"> </div>
                            </div>
                            <div class="mt-4 lg:mt-0 lg:w-1/3">
                                <span class="font-bold leading-4 text-sm sm:text-base lg:text-[28px]">{{artist.artist_name}}</span>
                                <div class="mt-4 whitespace-pre-line text-sm sm:text-base lg:text-xl" v-html="artist.bio"> </div>
                            </div>
                        </div>
                    </div>
                    <div v-if="artist.format == 'text'" class="h-full w-full lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 mx-auto">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4 pt-[60px] pb-6 lg:pt-24 lg:pb-12">
                            <p class="text-2xl font-bold">{{artist.artist_name}}</p>
                            <p class="text-lg font-light italic">{{artist.collection_title}}</p>
                        </div>
                        <div class="lg:w-2/3 flex flex-col">
                            <p class="text-base leading-6">
                                {{artist.excerpt1}}
                            </p>
                            <p class="text-base mt-3 leading-6">
                                {{artist.excerpt2}}
                            </p>
                            <a :href="artist.link" target="_blank" class="self-end justify-self-end underline text-bitten/50 hover:text-bitten p-2">Read More</a>
                        </div>
                        <div class="mt-6 lg:mt-0 lg:w-1/3">
                            <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
                            <!--                            <p> {{artist.bio}} </p>-->
                            <div v-html="artist.bio" style="white-space: pre-line"> </div>
                        </div>
                    </div>
                    <div v-if="artist.format == 'video'" class="h-full">
                        <div class="lg:flex lg:justify-between lg:items-start gap-4 pt-[60px] pb-6 lg:pt-24 lg:pb-12">
                            <p class="text-2xl font-bold">{{artist.artist_name}}</p>
                            <p class="text-lg font-light italic">{{artist.collection_title}}</p>
                        </div>
                        <div v-for="art in artist.artworks" :key="art" class="aspect-video">
                            <iframe :src="art.file_name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="w-full h-full" allowfullscreen></iframe>
                        </div>
                        <div class="h-full lg:flex lg:justify-between lg:items-start lg:gap-14 lg:pt-12 pt-14 pb-6 lg:pb-12">
                            <div class="w-full lg:w-2/3 min-h-full">
                                <span v-if="artist.collection_title" class="text-sm lg:text-[28px] font-bold leanding-4">
                                    About <span class="italic">{{artist.collection_title}}</span>
                                </span>
                                <span v-else class="font-bold leanding-4 text-sm sm:text-base lg:text-[28px]">
                                    About This Collection
                                </span>
                                <div class="mt-4 whitespace-pre-line text-sm sm:text-base lg:text-xl" v-html="artist.description"> </div>
                            </div>
                            <div class="mt-4 lg:mt-0 lg:w-1/3">
                                <span class="font-bold leading-4 text-sm sm:text-base lg:text-[28px]">{{artist.artist_name}}</span>
                                <div class="mt-4 whitespace-pre-line text-sm sm:text-base lg:text-xl" v-html="artist.bio"> </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pt-16 md:pt-9 lg:px-16 sm:px-12 px-6">
                <p class="text-xl lg:text-2xl font-bold mb-6 mt-2">Continue To</p>
                <div class="bg-url-1 w-full h-60 bg-top bg-cover">
                    <a href="/exhibitions/body-politics">
                        <div class="backdrop-brightness-50 w-full h-full flex items-center md:transition-all md:ease-in md:ease-out md:duration-300 hover:backdrop-brightness-100">
                            <p class="text-center mx-auto text-ivory font-extralight text-4xl lg:text-7xl">BODY POLITICS</p>
                        </div>
                    </a>
                </div>
                <div class="bg-url-3 w-full h-60 bg-top bg-cover">
                    <a href="/exhibitions/yellow-perils">
                        <div class="backdrop-brightness-50 w-full h-full flex items-center md:transition-all md:ease-in md:ease-out md:duration-300 hover:backdrop-brightness-100">
                            <p class="text-center mx-auto text-ivory font-extralight text-4xl lg:text-7xl">YELLOW PERILS</p>
                        </div>
                    </a>
                </div>
            </div>
            <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50" />
        </div>
    </div>
</template>
<style>
.banner2-url {
    background-image: url('../assets/curation-topic1.webp');
}
</style>