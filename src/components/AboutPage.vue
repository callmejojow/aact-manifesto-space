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
    <main class="min-h-screen bg-ivory max-h-full">
        <div class="sticky z-30 top-0 bg-ivory h-36 lg:h-28 mb-0">
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
        <div class="min-h-full mx-auto px-6 md:px-12 lg:px-16 lg:pb-28 bg-ivory">
            <div id="about" class="min-h-full lg:max-h-[calc(100vh-36px)] lg:overflow-scroll col-span-1 pt-40 -mt-40">
                <div class="flex flex-col lg:max-w-xl mx-auto space-y-6 leading-6 text-left text-base pb-24 pt-10">
                    <h1 class="lg:mt-16 text-3xl lg:text-4xl font-medium text-left">Manifesto Space</h1>
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
            <div id="team" class="pt-36 -mt-36">
                <div class="mx-auto">
                    <div class="mx-auto max-w-2xl lg:mx-0">
                        <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Team</h2>
                    </div>
                    <ul role="list" class="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        <li v-for="member in team" :key="member.name">
                            <img class="aspect-[1/1] w-full rounded object-cover" :src="member.imageUrl" alt="Profile Image" />
                            <h3 class="mt-6 text-2xl font-bold leading-8 tracking-tight text-gray-900">{{ member.name }}</h3>
                            <p class="text-base leading-7 text-gray-600">{{ member.role }}</p>
                            <p class="mt-3 leading-6">{{ member.bio }}</p>
                            <!-- <ul role="list" class="mt-6 flex gap-x-6">
                                <li>
                                    <a :href="member.twitterUrl" class="text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">Twitter</span>
                                        <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                                        </svg>
                                    </a>
                                </li>
                                <li>
                                    <a :href="member.linkedinUrl" class="text-gray-400 hover:text-gray-500">
                                        <span class="sr-only">LinkedIn</span>
                                        <svg class="h-5 w-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                            <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd" />
                                        </svg>
                                    </a>
                                </li>
                            </ul> -->
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <FooterComponent class="min-h-full text-stone-800/60 bg-ivory lg:border-t lg:border-stone-400/50 lg:px-4 pt-28 lg:pt-7 pb-7" />
    </main>
</template>