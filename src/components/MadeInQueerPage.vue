<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { onMounted } from "vue"
import AOS from "aos"

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
  },
}

console.log(madeInQueer)
onMounted(() => {AOS.init()})
</script>
<template class="bg-white">
    <div class="bg-transparent flex justify-center items-center py-4 px-4 md:px-0 border-b border-gray-200/80">
        <a href="/">
            <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
        </a>
        <p class="text-black tracking-widest ml-6">MANIFESTO</p>
    </div>
    <!-- Generic Breadcrumbs -->
    <div class="hidden lg:flex lg:justify-start lg:items-center lg:p-4">
        <BreadCrumbs />
        <span class="ml-4 text-sm text-gray-400/80">
            Body Politics
        </span>
    </div>
    <div class="lg:hidden p-4">
        <p class="ml-4 text-sm text-gray-500 hover:text-gray-700">
            The Bitten Peach: Decolonizing Queer Asians
        </p>
    </div>
    <!-- For mobile,there should be a bar of section anchors on this page with #, Now I'm focusing on desktop ui-->
    <!-- Banner -->
    <kinesis-container>
        <section class="h-[48rem] lg:h-screen w-screen bg-cover bg-fixed banner2-url">
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
    <section class="p-20 md:p-14 sm:p-10 p-6 tracking-wide leading-6">
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
    <div v-for="artist in madeInQueer" :key="artist">
    <!-- Quote of the Topic -->
    <section class="h-80 lg:h-[48rem] w-screen bg-cover bg-scroll quote2-url">
        <div class="w-full h-80 lg:h-[48rem] flex flex-col items-center justify-center px-20 md:px-14 sm:px-10 px-6 bg-black/70" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out">
            <p class="font-thin tracking-wider max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="600">
                {{artist.quote}}
            </p>
            <p class="mt-10 z-20 text-white/90 font-semibold text-xl md:text-2xl lg:text-3xl text-white text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="1000">
                {{artist.artist_name}}
            </p>
        </div>
    </section>
    <!-- Art pieces of a certain artist with his/her introduction -->
    <section class="p-20 md:p-14 sm:p-10 p-6 tracking-wide leading-6">
        <div class="flex justify-between items-center">
            <p class="font-semibold text-xl">{{artist.topic_name}}</p>
            <p class="text-lg">{{artist.artist_name}}</p>
        </div>
        <!-- placeholder for carousel of this artist's pieces -->
        <div v-for="art in artist.artworks" :key="art">
            <p>{{art.name}}</p>
        </div>
    </section>
    </div>
</template>
<style>
.banner2-url {
    background-image: url('../assets/cover1.jpg');
}

.quote2-url {
    background-image: url('../assets/MadeInQueer/Josh/Fig5_Ceremonial Vessel 2.jpg');
}
</style>