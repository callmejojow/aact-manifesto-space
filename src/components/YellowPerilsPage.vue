<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { onMounted } from "vue"
import AOS from "aos"

const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

let madeInQueer = {
  artist1:{
    idx: 1,  // for internal use
    format: [AllowedFormats.Image, AllowedFormats.Video],  // for rendering  # TODO: MIXED MEDIA!! Both images and an embedded video
    visible: true,
    artist_name: "Rising Lai",
    ins_handle: ["@loveintersectionsm", "@davidngstagram", "@jensungshine"],
    quote: '“I am a Taiwanese, a Hakka, and a homosexual person. Growing up and living with the conflicting histories that these identities bring, I was challenged to live with frictions and contradictions, of which I am proud.”',
    bio: 'As a designer and artist with a background in Industrial Design and a Master\'s in Fine Art & Design, Rising Lai (they/them) brings a unique global perspective to their art and design. Born and raised in Taiwan before relocating to Rotterdam, Rising is dedicated to exploring the stories and complexities of human creations, from industrial products to cultural artefacts.\n' +
        '\n' +
        'But there is more to Rising\'s art and design practice than meets the eye. Deeply rooted in their own experiences as a queer individual in society, Rising uses their work to challenge normative definitions of gender and create a world without discrimination. Through a framework and guide for researching material culture and demonstrating theoretical concepts through craft, Rising focuses on traditions, folk culture, and craftsmanship to invite viewers to consider the deeper meanings and significance behind the materials and artefacts that shape our world.\n' +
        '\n' +
        'Whether through their crafted objects or thought-provoking installations, Rising Lai\'s work invites viewers to explore the deeper complexities of human creations and the impact they have on society.\n',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "Crafting Desire: Queering",
    description: "",
    directory: '/assets/YellowPerils/Rising',
    artworks: {
      art1: {
        name: "Selected Views",
        year: '',
        medium: "",
        file_name: ["Foundation.jpg", "FullPieceAssembled.jpg", "FullPieceOpenFramework.jpg", "SmallModels.jpg",],
      },
      art2: {
        name: "Intro: Story Of Me And The Red Sleep Bed",
        year: '',
        medium: "",
        file_name: "https://www.youtube.com/watch?v=0i8i-kE3qH0",
      },
    },
  },
  artist2:{
    idx: 2,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Gillian Lapuz",
    ins_handle: ["@gillizn"],
    quote: '“As an Asian artist, and a first-generation Canadian, queer theory has only previously been digested through a Eurocentric lens [... which] is often described through the experience of a perspective that is not mine.”',
    bio: 'Gillian Lapuz is an interdisciplinary artist based in Toronto, Canada. Lapuz is currently completing his BEd at the University of Windsor in the intermediate/senior level with teachables in Visual Arts and General Social Science. Lapuz’ body of work revolves around investigating and developing facets of queer identity. His interest of connection and relationship has ventured into a material based practice that examines personal intersecting aspects of love, fear and humour. Inspired by the material process of developing work, Lapuz attempts to render queer imagery through print, textiles, illustrations and wearable art. Lapuz completed his BFA undergraduate studies at OCADU majoring in Printmaking and minoring in Material Arts and Design: Textiles.',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "Joker: Wildcard",
    description: "",
    directory: '/assets/YellowPerils/Gillian',
    artworks: {
      art1: {  // TODO: check with Jolie to see if can just use a list for all the individual files
        name: "Group",
        year: '',
        medium: "",
        file_name: "group.jpg",
      },
      art2: {
        name: "Individual",
        year: '',
        medium: "",
        file_name: ['1.jpg', '1.2.jpg',  // TODO: This is what I was referring to. All images are just depictions of the same project so we don't need to give them separate names
            '2.jpg', '2.2.jpg',
            '3.jpg', '3.3.jpg',
            '4.jpg', '4.2.jpg',
            '5.jpg', '5.2.jpg',
            '6.jpg', '6.2.jpg',
            '7.jpg', '7.2.jpg',],
      },
    },
  },
  artist3:{
    idx: 5,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Joshua Lue Chee Kong",
    ins_handle: ["@josh_lu_studio"],
    quote: '“[M]y identity has always felt like a moving target, going back and forth between Chinese and West Indian, but also Hakka Chinese and queer. Having these multiple identities all confined to one body has always been met with confusion, amazement and wonder.”',
    bio: 'Joshua Lue Chee Kong is a Trinidadian artist based in Toronto, Canada. In 2020, Joshua graduated from OCAD University, Toronto, with a degree in the Interdisciplinary Master’s in Art, Media, and Design. His explorations of home, longing, and belonging interrogate ideas of multiculturalism and assimilation. In particular, the representation of the Chinese in the Caribbean culture and its diaspora.',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "Bronze Series",
    description: "",
    directory: '/assets/YellowPerils/Josh',
    artworks: {
      art1: {
        name: "Hyphenated Being",
        year: '2020',
        medium: "3D Printed Resin",
        dimensions: '3 x 2.25 x 6.35 in',
        file_name: "HyphenatedBeing.jpg",
      },
      art2: {
        name: "See You Soon",
        year: '2020',
        medium: "3D Print and Wax",
        dimensions: '5 x 7 in',
        file_name: "SeeYouSoon.jpg",
      },
      art3: {
        name: "Cannon",
        year: '2020',
        medium: "Bronze",
        dimensions: '5 x 3 x 8 in',
        file_name: "Cannon.jpg",
      },
      art4: {
        name: "Guardians",
        year: '2020',
        medium: "Bronze",
        dimensions: '11.5 x 4 x 14 in',
        file_name: "Guardians.jpg",
      },
      art5: {
        name: "Masquerader",
        year: '2020',
        medium: "Bronze",
        dimensions: '4.25 x 3 x 10.75 in',
        file_name: ["Masquerader1.jpg", "Masquerader2.jpg", "Masquerader3.jpg"],
      },
      art6: {
        name: "Ceremonial Vessel",
        year: '2020',
        medium: "Bronze",
        dimensions: '6 x 7.25 x 1.5 in',
        file_name: "CeremonialVessel.jpg",
      },
      art7: {
        name: "Stay at Home",
        year: '2020',
        medium: "Bronze",
        dimensions: '20 x 3.5 x 3.5 in',
        file_name: ["StayAtHome001.jpg", "StayAtHome002.jpg", "StayAtHome003.jpg", "StayAtHome013.jpg"],
      },
    },
  },
  artist4:{
    idx: 8,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Mia Yaguchi-Chow",
    ins_handle: ["@bitchfits"],
    quote: '“I often feel like I don\'t fit into conventional Western communities of queerness [...] Not that I don\'t appreciate these communities -- I do, and I\'m grateful to be welcomed into the one\'s I\'m part of, but it\'s not how I often choose to instinctively express or engage with my queerness.”',
    bio: 'My name is Mia and I\'m a non-binary Japanese/Chinese multifaceted creative particularly focused in visual art, photography, illustration, graphic design, acting, and more. Currently, I am studying my Masters of Arts in Fashion at Toronto Metropolitan University, where I also received my Bachelors of Design in Fashion in 2021. Professionally, I work as a freelance/contract graphic designer and photographer and am an ACTRA member. Within both my professional and creative/personal work, I always aim to contribute to discourses that invite contemplation or critical reflection as this is a relationship I share with my own work. Art is a method of communication for me and I like to share these discussions with others and use it as a tool to get to know others, and if I can contribute to progressive change with it then that’s a bonus.',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "Self Portraits",
    description: "",
    directory: '/assets/YellowPerils/Mia',
    artworks: {
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: ".jpg",
      },
    },
  },
  artist5:{
    idx: 1,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "",
    ins_handle: [],
    quote: '',
    bio: '',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '/assets/YellowPerils/',
    artworks: {
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: ".jpg",
      },
    },
  },
  artist6:{
    idx: 1,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "",
    ins_handle: [],
    quote: '',
    bio: '',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '/assets/YellowPerils/',
    artworks: {
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: ".jpg",
      },
    },
  },
  artist7:{
    idx: 1,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "",
    ins_handle: [],
    quote: '',
    bio: '',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '/assets/YellowPerils/',
    artworks: {
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: ".jpg",
      },
    },
  },
  artist8:{
    idx: 1,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "",
    ins_handle: [],
    quote: '',
    bio: '',
    topic_name: "Yellow Perils",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '/assets/YellowPerils/',
    artworks: {
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: ".jpg",
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
        <section class="h-[48rem] lg:h-screen w-screen bg-cover bg-fixed banner3-url">
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
    <section class="h-80 lg:h-[48rem] w-screen bg-cover bg-scroll quote3-url">
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
.banner3-url {
    background-image: url('../assets/YellowPerils/Mia/Mia1.jpeg');
}

.quote3-url {
    background-image: url('../assets/YellowPerils/Mia/Mia2.png');
}
</style>