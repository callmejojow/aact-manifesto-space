<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { onMounted } from "vue"
import AOS from "aos"
import NavDropdown from '@/components/NavDropdown.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

// TODO: Is this too much?
const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

let madeInQueer = {
  artist1:{
    idx: 99,  // for internal use
    format: AllowedFormats.Image,  // for rendering
    visible: true,
    artist_name: "Dummy Artist",
    ins_handle: ["@dummyinshandle"],  // a list b/c some artists have multiple handles
    quote: 'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..',
    topic_name: "Dummy Topic Name",
    quote_bg_url: null,
    description: "", 
    directory: null,
    artworks: {
      art1: {
        name: "Dummy Art Name",
        year: null,
        medium: "Digital Print",
        file_name: "1_identity_card.jpg",
      },
    },
    slides:[
      {
       image:require("@/assets/bg.svg"),
       content:`<img src="${require("@/assets/MadeInQueer/Josh/Fig5_Ceremonial Vessel 2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
}

console.log(madeInQueer)
onMounted(() => {AOS.init()})
</script>
<template class="scroll-smooth font-open">
    <div class="sticky top-0 z-20 bg-white">
        <div class="flex justify-center items-center py-4 px-4 md:px-0 border-b border-gray-200/80">
            <a href="/">
                <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
            </a>
            <p class="text-black tracking-widest ml-6">MANIFESTO</p>
            <div class="absolute right-4 text-white z-40">
              <NavDropdown />
            </div>
        </div>
        <!-- Generic Breadcrumbs -->
        <div class="hidden lg:flex lg:justify-start lg:items-center lg:p-4">
            <BreadCrumbs />
            <span class="ml-4 text-sm text-gray-400/80">
                Body Politics
            </span>
        </div>
        <div class="lg:hidden p-4">
            <a href="/exhibitions" class="text-sm text-gray-500 hover:text-gray-700">
                The Bitten Peach: Decolonizing Queer Asians
            </a>
        </div>
        <ul class="lg:hidden bg-white t-0 border-b border-gray-600 flex space-x-5 mx-4 mb-4 overflow-x-auto max-w-screen">
            <a href="#about" class="inline-block whitespace-nowrap text-gray-600 text-sm">About</a>
            <a v-for="(artist,index) in madeInQueer" :key="artist" :href="`#${index}`" class="inline-block whitespace-nowrap text-gray-600 text-sm">
                {{artist.artist_name}}
            </a>
        </ul>
    </div>
    <!-- Banner -->
    <kinesis-container>
        <section class="h-screen w-full bg-cover banner2-url">
            <div class="w-full h-full flex flex-col items-start justify-center backdrop-brightness-50 pl-20 md:pl-14 sm:pl-10 pl-6">
                <kinesis-element :strength="50" transformOrigin="100% 500%" axis="x" type="depth">
                    <p class="text-lg md:text-xl lg:text-2xl text-white/90">
                        The Bitten Peach: Decolonizing Queer Asians
                    </p>
                </kinesis-element>
                <kinesis-element :strength="50">
                    <p class="z-20 text-white/90 font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center">
                        Made In Queer
                    </p>
                </kinesis-element>
            </div>
        </section>
    </kinesis-container>
    <!-- Introduction of the sub section -->
    <section id="about" class="pt-36 snap-end relative h-screen w-full lg:h-full p-20 md:p-14 sm:p-10 p-6 tracking-wide leading-6">
        <h1 class="text-3xl font-semibold my-4">About</h1>
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
    <div v-for="(artist,index) in madeInQueer" :key="artist">
        <!-- Quote of the Topic -->
        <section :id="index" class="snap-end h-screen w-full h-80 lg:h-[48rem] w-screen bg-cover bg-scroll" :style="{ backgroundImage: 'url(' + artist.quote_bg_url + ')' }" v-if="artist.quote_bg_url">
            <div class="w-full h-full flex flex-col items-center justify-center px-20 md:px-14 sm:px-10 px-6 bg-black/70" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out">
                <p class="font-thin tracking-wider max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="600">
                    {{artist.quote}}
                </p>
                <p class="mt-10 z-20 text-white/90 font-semibold text-xl md:text-2xl lg:text-3xl text-white text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    {{artist.artist_name}}
                </p>
            </div>
        </section>
        <section :id="index" class="snap-end h-screen w-full h-80 lg:h-[48rem] w-screen bg-bitten" v-else>
            <div class="w-full h-full flex flex-col items-center justify-center px-20 md:px-14 sm:px-10 px-6 bg-black/70" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out">
                <p class="font-thin tracking-wider max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="600">
                    {{artist.quote}}
                </p>
                <p class="mt-10 z-20 text-white/90 font-semibold text-xl md:text-2xl lg:text-3xl text-white text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="1000">
                    {{artist.artist_name}}
                </p>
            </div>
        </section>
        <!-- Art pieces of a certain artist with his/her introduction -->
        <section class="snap-end w-full tracking-wide leading-6">
            <!-- placeholder for carousel of this artist's pieces -->
            <!-- <div v-for="art in artist.artworks" :key="art">
                <p>{{art.name}}</p>
            </div> -->
            <div v-if="artist.format == 'image'" class="min-h-screen">
              <div class="lg:flex lg:justify-between lg:items-start gap-4">
                <p class="text-3xl font-bold p-20 md:p-14 sm:p-10 p-6">{{artist.collection_title}}</p>
                <p class="text-3xl font-bold p-20 md:p-14 sm:p-10 p-6">{{artist.artist_name}}</p>
              </div>
              <CarouselComponent :slides="artist.slides" />
              <div class="mt-4 lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 px-4 md:px-6 lg:px-12 pb-6">
                  <div class="lg:w-3/4">
                      <span class="font-semibold text-lg lg:text-2xl">{{artist.collection_title ? artist.collection_title : artist.artist_name }}</span>
                      <p class="lg:text-justify">{{artist.description}}</p>
                  </div>
                  <div class="mt-4 lg:mt-0 lg:w-1/4">
                      <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
                      <p>{{artist.bio}}</p>
                  </div>
              </div>
            </div>
            <div v-if="artist.format == 'text'" class="relative h-full bg-black text-white lg:flex lg:justify-between lg:items-start gap-4 md:gap-12 lg:gap-24 p-4 md:p-8 lg:p-12">
              <div class="lg:w-3/4 flex flex-col">
                  <h3 v-for="art in artist.artworks" :key="art" class="font-semibold text-lg lg:text-2xl">{{art.name}}</h3>
                  <p class="lg:text-justify">
                      {{artist.excert1}}
                  </p>
                  <p class="lg:text-justify mt-4">
                      {{artist.excert2}}
                  </p>
                  <a href="https://jeffjungsingc.notion.site/Bitten-Peach-Submission-Queer-Asians-on-the-Dancefloor-5dfaf0bca4f34e5d85f146280385fce2" target="_blank" class="self-end justify-self-end underline text-white/50 hover:text-white/80 p-2">Read More</a>
              </div>
              <div class="mt-6 lg:mt-0 lg:w-1/4">
                  <span class="font-semibold text-lg lg:text-2xl">{{artist.artist_name}}</span>
                  <p>
                      {{artist.bio}}
                  </p>
              </div>
            </div>
            <div v-if="artist.format == 'video'" class="bg-black min-h-screen snap-start p-6 md:p-8 lg:p-12">
              <div v-for="art in artist.artworks" :key="art" class="aspect-video">
                <iframe :src="art.file_name" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" class="w-full h-full" allowfullscreen></iframe>
              </div>
            </div>
        </section>
    </div>
</template>
<style>
.banner2-url {
    background-image: url('../assets/cover1.jpg');
}

/*
.quote-url {
    background-image: url('../assets/artist-quote1.jpg');
}*/
</style>