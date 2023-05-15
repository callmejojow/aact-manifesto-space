<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import NavDropdown from '@/components/NavDropdown.vue'
import FooterComponent from '@/components/FooterComponent.vue'

import { team } from '@/team.js';
import { useScrollObserver } from '@/useScrollObserver.js'
import { ref, onMounted } from "vue"
import SmoothScroll from 'smooth-scroll'
/* eslint-disable no-unused-vars */
const navbar = ref(null);
const activeIndex = ref(-1);
const { startObserving } = useScrollObserver();

onMounted(() => {
    const aboutSection = document.getElementById("about");
    const teamSection = document.getElementById("team");
    startObserving(aboutSection, 0, onIntersection);
    startObserving(teamSection, 1, onIntersection);

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
    <main class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-30 top-0 bg-ivory h-26 lg:h-full mb-0 lg:border-b lg:border-stone-400/50">
            <div class="flex justify-start lg:justify-center items-center pt-4 md:pt-6 lg:pt-4 px-6 md:px-12 lg:px-0 pb-6 lg:pb-4 lg:border-b lg:border-stone-400/50">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="h-6 lg:h-8 opacity-90 lg:ml-4" alt="Website Dark Logo" />
                </a>
                <div class="absolute right-0 md:right-6 text-stone-600/80 hover:text-stone-800/50 z-40">
                    <NavDropdown />
                </div>
            </div>
            <div class="pt-3.5 hidden lg:flex lg:justify-start lg:items-center px-6 md:px-12 lg:border-b lg:border-stone-400/50 pb-6 lg:pb-3">
                <BreadCrumbs :main-page="true" />
                <span class="ml-3 text-sm text-stone-500/80">
                    About Us
                </span>
            </div>
            <!-- navigation -->
            <div class="lg:hidden px-6 md:px-12 lg:px-24">
                <p class="text-base text-stone-500">
                    About Us
                </p>
            </div>
            <ul class="mx-6 md:mx-12 lg:mx-24 lg:hidden bg-ivory t-0 border-b border-stone-600 flex space-x-3 overflow-x-auto max-w-screen">
                <li><a href="#about" class="nav-item inline-block whitespace-nowrap text-stone-600" :class="{'font-bold text-stone-800': activeIndex == 0, 'text-stone-500': activeIndex != 0 }">Manifesto Space</a></li>
                <li><a href="#team" class="nav-item inline-block whitespace-nowrap" :class="{ 'font-bold text-stone-800': activeIndex == 1, 'text-stone-500': activeIndex != 1 }">Team</a></li>
            </ul>
        </div>
        <!-- end of navigation -->
        <div class="min-h-full mx-auto lg:pb-28 bg-ivory">
            <div id="about" class="min-h-full lg:max-h-[calc(100vh-36px)] lg:overflow-scroll col-span-1 pt-40 -mt-40 px-6 md:px-12 lg:px-16">
                <div class="flex flex-col lg:max-w-xl mx-auto leading-6 text-left text-base pb-12 ">
                    <h1 class="my-6 lg:my-10 text-2xl lg:text-3xl lg:font-medium font-bold text-left">Manifesto Space</h1>
                    <p class="font-normal">
                        Intrigued by the parallel existence of the peach in both Western and Eastern queer cultures, AACT is curating its inaugural online exhibition - The Bitten Peach: Decolonizing Queerness.
                    </p>
                    <p class="mt-6 font-normal">
                        We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?
                    </p>
                    <p class="mt-6 font-normal">
                        We welcome diverse critical positions. Collectively, we aim to present an exhibition that celebrates broader definitions of queerness from different world views. We bite the peach together.
                    </p>
                </div>
            </div>
            <div id="team" class="pt-36 -mt-36 lg:pt-0 lg:mt-0 px-6 md:px-12 lg:px-16">
                <div class="mx-auto">
                    <div class="mx-auto lg:mx-0">
                        <h2 class="mb-4 lg:mb-10 text-2xl lg:text-3xl lg:font-medium font-bold text-left">Team</h2>
                    </div>
                    <ul role="list" class="mx-auto grid grid-cols-1 md:gap-x-12 lg:gap-x-16 gap-y-16 md:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <li v-for="member in team" :key="member.name">
                            <img class="aspect-[1/1] rounded object-cover" :src="member.imageUrl" alt="Profile Image" />
                            <h3 class="mt-4 lg:mt-6 lg:text-2xl font-bold text-gray-900">{{ member.name }}</h3>
                            <p class="lg:leading-7 lg:mt-1 text-base text-gray-600">{{ member.role }}</p>
                            <p class="text-base mt-3 leading-6">{{ member.bio }}</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <FooterComponent class="text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50 pt-28 md:pt-14 lg:pt-7 pb-7 px-2 md:px-8 lg:px-4" />
    </main>
</template>