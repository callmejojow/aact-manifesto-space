<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { onMounted } from "vue"
import AOS from "aos"
import NavDropdown from '@/components/NavDropdown.vue'
import CarouselComponent from '@/components/CarouselComponent.vue'

const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

let madeInQueer = {
  artist1:{
    idx: 1,  // for internal use
    format: [AllowedFormats.Image, AllowedFormats.Video],  // for rendering  # TODO: ADD LINK TO VIDEO IN DESCRIPTION!!
    visible: true,
    artist_name: "Rising Lai",
    ins_handle: ["@loveintersectionsm", "@davidngstagram", "@jensungshine"],
    quote: '“I am a Taiwanese, a Hakka, and a homosexual person. Growing up and living with the conflicting histories that these identities bring, I was challenged to live with frictions and contradictions, of which I am proud.”',
    bio: 'As a designer and artist with a background in Industrial Design and a Master\'s in Fine Art & Design, Rising Lai (they/them) brings a unique global perspective to their art and design. Born and raised in Taiwan before relocating to Rotterdam, Rising is dedicated to exploring the stories and complexities of human creations, from industrial products to cultural artefacts.\n' +
        '\n' +
        'But there is more to Rising\'s art and design practice than meets the eye. Deeply rooted in their own experiences as a queer individual in society, Rising uses their work to challenge normative definitions of gender and create a world without discrimination. Through a framework and guide for researching material culture and demonstrating theoretical concepts through craft, Rising focuses on traditions, folk culture, and craftsmanship to invite viewers to consider the deeper meanings and significance behind the materials and artefacts that shape our world.\n' +
        '\n' +
        'Whether through their crafted objects or thought-provoking installations, Rising Lai\'s work invites viewers to explore the deeper complexities of human creations and the impact they have on society.\n',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "Crafting Desire: Queering",
    description: "",
    directory: '/assets/MadeInQueer/Rising',
    artworks: {
      art1: {
        name: "Foundation",
        year: '',
        medium: "",
        file_name: "Foundation.jpg",
      },
      art2: {
        name: "Full Piece Assembled",
        year: '',
        medium: "",
        file_name: "FullPieceAssembled.jpg",
      },
      art3: {
        name: "Full Piece Open Framework",
        year: '',
        medium: "",
        file_name: "FullPieceOpenFramework.jpg",
      },
      art4: {
        name: "Small Models",
        year: '',
        medium: "",
        file_name: "SmallModels.jpg",
      },
      art5: {
        name: "Intro: Story Of Me And The Red Sleep Bed",
        year: '',
        medium: "",
        file_name: "https://www.youtube.com/watch?v=0i8i-kE3qH0",
      },
    },
    slides:[  // todo: not sure why this is not showing
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/Foundation.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/FullPieceAssembled.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/FullPieceOpenFramework.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/SmallModels.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist2:{
    idx: 2,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Gillian Lapuz",
    ins_handle: ["@gillizn"],
    quote: '“As an Asian artist, and a first-generation Canadian, queer theory has only previously been digested through a Eurocentric lens [... which] is often described through the experience of a perspective that is not mine.”',
    bio: 'Gillian Lapuz is an interdisciplinary artist based in Toronto, Canada. Lapuz is currently completing his BEd at the University of Windsor in the intermediate/senior level with teachables in Visual Arts and General Social Science. Lapuz’ body of work revolves around investigating and developing facets of queer identity. His interest of connection and relationship has ventured into a material based practice that examines personal intersecting aspects of love, fear and humour. Inspired by the material process of developing work, Lapuz attempts to render queer imagery through print, textiles, illustrations and wearable art. Lapuz completed his BFA undergraduate studies at OCADU majoring in Printmaking and minoring in Material Arts and Design: Textiles.',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "Joker: Wildcard",
    description: "",
    directory: '/assets/MadeInQueer/Gillian',
    artworks: {
      art1: {
        name: "Group",
        year: '',
        medium: "",
        file_name: "group.jpg",
      },
      // art2: {
      //   name: "Individual",
      //   year: '',
      //   medium: "",
      //   file_name: ['1.jpg', '1.2.jpg',  // todo: reduce # of featured images
      //     '2.jpg', '2.2.jpg',
      //     '3.jpg', '3.3.jpg',
      //     '4.jpg', '4.2.jpg',
      //     '5.jpg', '5.2.jpg',
      //     '6.jpg', '6.2.jpg',
      //     '7.jpg', '7.2.jpg',],
      // },
      slides:[  // todo: not sure why this is not showing
        {
          image:require("@/assets/bg.svg"),
          content:`<img src="${require("@/assets/MadeInQueer/Gillian/group.jpg")}" class="object-contain h-[48rem]"/>`,
        },
      ],
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
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "Bronze Series",
    description: "",
    directory: '/assets/MadeInQueer/Josh',
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
        file_name: "Masquerader1.jpg",  // ["Masquerader1.jpg", "Masquerader2.jpg", "Masquerader3.jpg"],
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
        file_name: "StayAtHome002.jpg",  // ["StayAtHome001.jpg", "StayAtHome002.jpg", "StayAtHome003.jpg", "StayAtHome013.jpg"],
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/HyphenatedBeing.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/SeeYouSoon.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/Cannon.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/Guardians.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/Masquerader1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/CeremonialVessel.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Josh/StayAtHome002.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist4:{
    idx: 8,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Mia Yaguchi-Chow",
    ins_handle: ["@bitchfits"],
    quote: '“I often feel like I don\'t fit into conventional Western communities of queerness [...] Not that I don\'t appreciate these communities -- I do, and I\'m grateful to be welcomed into the one\'s I\'m part of, but it\'s not how I often choose to instinctively express or engage with my queerness.”',
    bio: 'My name is Mia and I\'m a non-binary Japanese/Chinese multifaceted creative particularly focused in visual art, photography, illustration, graphic design, acting, and more. Currently, I am studying my Masters of Arts in Fashion at Toronto Metropolitan University, where I also received my Bachelors of Design in Fashion in 2021. Professionally, I work as a freelance/contract graphic designer and photographer and am an ACTRA member. Within both my professional and creative/personal work, I always aim to contribute to discourses that invite contemplation or critical reflection as this is a relationship I share with my own work. Art is a method of communication for me and I like to share these discussions with others and use it as a tool to get to know others, and if I can contribute to progressive change with it then that’s a bonus.',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "Self Portraits",
    description: "",
    directory: '/assets/MadeInQueer/Mia',
    artworks: {  // TODO to be picked out by Sheng
      art1: {
        name: "",
        year: '',
        medium: "",
        file_name: ".jpg",
      },
    },
  },
  artist5:{
    idx: 20,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Marisa Yue Chuen Müsing",
    ins_handle: ["@marisamusing", "https://www.marisamusing.com/"],
    quote: '“As someone mixed-Asian and queer, both these parts of me felt really intertwined at a time where I was truly figuring out myself again after years of trying to associate myself with a facade of who I was..”',
    bio: 'Marisa Müsing (she/they) is an artist & designer from Tkaronto, Canada. She has a background in architecture, having graduated from the University of Waterloo School of Architecture (UW), and currently pursuing her Masters of Art in Architecture at the Royal College of Art (RCA), London UK. Constantly driven by the process of fabrication and making, her work ranges from architecture, furniture design, 3D animations, fashion, painting and sculpture. Marisa has lectured and taught at Parsons School of Design, Harvard GSD, Rhode Island School of Design and ELISAVA. In 2018 Marisa co-founded müsing-sellés, a design and architecture studio that plays with furniture and the scalability of object creation. They have made international acclaim, presenting work in a variety of international galleries and shows. As a mixed-asian queer artist, her work focuses on concepts of body and identity, experimenting through different mediums to express feminist ideals through artistic representation. She is constantly seeking new creative ventures in multiple mediums and scales that allow for playful & beautiful interpretations of the world.',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '/assets/MadeInQueer/Marisa',
    artworks: {
      art1: {
        name: "Fruit Room",
        year: '',
        medium: "",
        file_name: "FRUIT_ROOM_1.jpg",
      },
      art2: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_1.jpg",
      },
      art3: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_2.jpg",
      },
      art4: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_3.jpg",
      },
      art5: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_4.jpg",
      },
      art6: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_5.jpg",
      },
      art7: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_6.jpg",
      },
      art8: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_7.jpg",
      },
      art9: {
        name: "",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_8.jpg",
      },
      art10: {
        name: "Laced Bodies",
        year: '',
        medium: "",
        file_name: "Laced_Bodies_9.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/FRUIT_ROOM_1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_4.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_5.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_6.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_7.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_8.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Marisa/Laced_Bodies_9.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist6:{
    idx: 25,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Eric Chengyang",
    ins_handle: ["@monkeywearstie"],
    quote: 'By integrating storytelling with historical research and contemporary art, my practice explores the themes of symbiotic duality and paradox, such as the intersections and proximity between the East and the West.',
    bio: 'Eric Chengyang’s practice integrates storytelling with visual arts, through the use of historical archives, museum collections, and hybrid media. Coming from a multilingual Chinese-Canadian background, their works explore the themes of symbiotic duality and paradox, with a focus on the intersections and proximity between the East and the West, while challenging the conventional notion of the East-West Dichotomy. Aiming to build bridges through multidisciplinary art practices, Eric is also one-half of an artist duo called the Dawat Yan Project, co-founded with Mariam Magsi. (Pronouns: They/He)',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '/assets/MadeInQueer/Eric',
    artworks: {
      art1: {
        name: "Fen-tao 分桃",
        year: '',
        medium: "",
        file_name: "ASplitPeach.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Eric/ASplitPeach.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist7:{
    idx: 26,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Beau Gomez",
    ins_handle: ["@beaugomezx"],
    quote: 'Through sharing personal and collective histories, I am constantly inspired by practices of radical hospitality within the queer Asian community as a means to nurture, mobilize, transgress, and liberate.',
    bio: 'Beau Gomez is a Filipino-Canadian visual artist based in Toronto and Montréal. His practice is informed by ideas, challenges and conversations around cross-cultural narratives, as they relate to positions of queerness and community. \n' +
        '\n ' +
        'Select exhibitions include Propeller Art Gallery, Magenta Foundation, Artspace Gallery, La Gaîté Lyrique, and ' +
        'TIFF Bell Lightbox. He equally devotes his time to community engagement, and has contributed to organizations ' +
        'including Reel Asian Film Festival, The Site Magazine, Pride Toronto/Montréal and Critical Distance Centre for ' +
        'Curators. In 2019, he launched Fixer, a gathering of emerging image-makers, writers and creative thinkers in an ' +
        'engaged critique on works in progress. Beau holds a BFA in Photography Studies from Toronto Metropolitan University.',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "You’re here, too",
    description: "",
    directory: '/assets/MadeInQueer/Beau',
    artworks: {
      art1: {
        name: "1",
        year: '',
        medium: "Digital Photography",
        file_name: "YoureHereToo1.jpg",
      },
      art2: {
        name: "2",
        year: '',
        medium: "Digital Photography",
        file_name: "YoureHereToo2.jpg",
      },
      art3: {
        name: "3",
        year: '',
        medium: "Digital Photography",
        file_name: "YoureHereToo3.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Beau/YoureHereToo1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Beau/YoureHereToo2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Beau/YoureHereToo3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist8:{
    idx: 27,  // for internal use
    format: AllowedFormats.Video,
    visible: true,
    artist_name: "Yichen Li & Ling Tang",
    ins_handle: [],
    quote: 'We are queer because we dismantle and question everything that is seemingly stable.',
    bio: 'Yichen Li and Ling Tang have worked together as an artist duo since 2020.\n' +
        '\n' +
        'Yichen Li: reading MA in Sculpture at Royal College of Art. Her field of research is smog/fog/smoke/mist sculpture. Her consider smog, smoke and fog as living things that are fragile, subversive, ephemeral yet generous and all-encompassing.\n' +
        '\n' +
        'Ling Tang: Sociology as art and vice versa. Dr Ling Tang is an artist academic whose art media range from academic writing, creative writing to music, photography, and film. She obtained her D.Phil. at University of Oxford and is now based at Hong Kong Baptist University. Their songs can be found on music streaming platforms (e.g. Spotify and 网易云) with the name Lyn Dawn or 唐凌.\n',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "",
    description: "",
    directory: '',
    artworks: {
      art1: {
        name: "Penumbra asks umbra：I am a fish（罔两问景：我是一只鱼）",
        year: '',
        medium: "Digital Video",
        file_name: "https://vimeo.com/426460337",  // todo contact artist about youtube/embed link
      },
    },
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