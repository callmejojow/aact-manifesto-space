<script setup>
    import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { onMounted } from "vue"
import AOS from "aos"
const headers = [
    'about',
    'artist1',
    'artist2',
    ]

const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}


let bodyPolitics = {
  artist1:{
    idx: 3,  // for internal use
    format: AllowedFormats.Image,  // for rendering
    visible: true,
    artist_name: "Imran Jatoi",
    ins_handle: ["@imranfaizjatoi"],  // a list b/c some artists have multiple handles
    quote: '“Queer people of colour who experience discrimination for being who they are, need to learn about their racial identities as well as how to intersect their gender and sexual orientation.”',
    bio: 'Imran Faizyab Jatoi is a Pakistani self-employed visual artist, creating 2d and 3d art forms and performances. His practice underlines queer ideologies with an emphasis on identity, orientation, faith and autobiographical allusions. He is postgraduate in Art & Design from Yasar University, Turkey and contributed to number of exhibitions. The involvement of his art practice is to educate and make awareness about queer issues center on an investigation of Identity, especially gender and sexuality, through multidisciplinary approaches. He will likely to make work that mechanism with closeness and empowers understanding, accepting, and basic discussions about queer identity, sexuality and contemporary societal movement.',
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "Unsullied Souls",
    description: "TBC",
    directory: "/assets/BodyPolitics/Imran",
    artworks: {
      art1: {
        name: "شناختی کارڈ (Identity Card)",
        year: "",
        medium: "Digital Print",
        file_name: "1_identity_card.jpg",
      },
      art2: {
        name: "Silence",
        year: "",
        medium: "Digital Print",
        file_name: "2_silence.jpg",
      },
      art3: {
        name: "Re-emerge",
        year: "",
        medium: "Digital Print",
        file_name: "3_reemerge.jpg",
      },
      art4: {
        name: "Trust",
        year: "",
        medium: "Digital Print",
        file_name: "4_trust.jpg",
      },
      art5: {
        name: "Immaculate",
        year: "",
        medium: "Digital Print",
        file_name: "5_immaculate.jpg",
      },
      art6: {
        name: "آمنے سامنے (face to face)",
        year: "",
        medium: "Digital Print",
        file_name: "6_face_to_face.jpg",
      },
      art7: {
        name: "In Search Of",
        year: "",
        medium: "Digital Print",
        file_name: "7_in_search_of.jpg",
      },
      art8: {
        name: "Return to Yourself",
        year: "",
        medium: "Digital Print",
        file_name: "8_return_to_yourself.jpg",
      },
      art9: {
        name: "Minute",
        year: "",
        medium: "Digital Print",
        file_name: "9_minute.jpg",
      },
      art10: {
        name: "Levitate",
        year: "",
        medium: "Digital Print",
        file_name: "10_levitate.jpg",
      },
    },
  },
  artist2:{
    idx: 9,
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Geoffrey Cheung",
    ins_handle: ["@geoffrey.l.cheung"],
    quote: '“Our bodies are the substrate for memory’s longevity even as it changes and adapts to our form—our behaviour, our physique, our Asian-ness, and our queerness.”',
    bio: 'Geoffrey Lok-Fay Cheung is a visual artist interested in the themes of tension, conflict, and harmony as they relate to identity, community, and cultural inheritance. His practice is heavily informed by his own lived experiences growing up in Vancouver as a queer first-generation Canadian of Chinese descent. In his current investigations, Cheung explores connection with land and memory as it relates to the immigrant experience. For the better part of the past two decades, Cheung lived and worked out East, most recently in Toronto, as a Medical Animator and Illustrator. He previously received a Master of Science in Biomedical Communications and Bachelor of Science in Life Science. He returned to live in Vancouver for the MFA program at Emily Carr University which is on the unceded territories of the Coast Salish peoples, including the Musqueam, Squamish and Tsleil-Waututh nations.',
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    description: "TBC",
    directory: "/assets/BodyPolitics/Geoff",
    artworks: {
      art1: {
        name: "A Palace for My Forefathers",
        year: "",
        medium: 'Photography',
        file_name: "aPalaceForMyForefathers.jpg",
      },
      art2: {
        name: "Homecoming",
        year: "",
        medium: 'Photography',
        file_name: "homecoming.jpg",
      },
      art3: {
        name: "Pathfinding",
        year: "",
        medium: 'Photography',
        file_name: "pathfinding.jpg",
      },
      art4: {
        name: "Stifle",
        year: "",
        medium: 'Photography',
        file_name: "stifle.jpg",
      },
      art5: {
        name: "Toward a Memory",
        year: "",
        medium: 'Photography',
        file_name: "towardAMemory.jpg",
      },
    },
  },
  artist3: {
    idx: 11,
    format: AllowedFormats.Text,
    visible: false,  // set to false for now
    artist_name: "Jeff Chow Jung Sing 重昇",
    ins_handle: ["@dun.a.way"],
    quote: '"How dance music\'s history is shaped by race and de-racialization, and what additional perspectives being a Queer Asian can contribute to the conversation."',
    bio: "Arts admin by day and deep house DJ by night, Jeff Chow is a creative gatherer that works between the mediums of DJ-ing, writing, teaching, designs and draw inspiration from his queer, migrant, working class experience. Originally from Hong Kong, Jeff moved to Hamilton, Ontario pursuing education but left defeated in spite.",
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    directory: "",
    description: "",
    artworks: {
      art1: {
        name: "Queer Asians on the Dancefloor",
        year: "",
        medium: 'Text',
        file_name: 'https://jeffjungsingc.notion.site/Bitten-Peach-Submission-Queer-Asians-on-the-Dancefloor-5dfaf0bca4f34e5d85f146280385fce2',
      },
    },
  },
  artist4: {
    idx: 13,
    format: AllowedFormats.Video,
    visible: false,
    artist_name: "Muchen Zhou / Erin Zhou",
    ins_handle: ["@sailphototo", "@shallisailnow"],
    quote: '“My friends and I encounter challenges related to upholding the family lineage, showing filial piety, and respecting parental authority, which may not be commonly experienced by the queer community in Western cultures.”',
    bio: 'I\'m Muchen, a photographer and videographer. When I was little, both still photos and movie scenes astounded me. Throughout my growing process, photos, movies, and drawing have all been present. Visual pictures have been my main tool to explore my internal expression during my developing process, but more crucial for me right now is to use my works as a medium to resonate with the outside world. Images affect me both consciously and unconsciously throughout my life. I was able to get through some of my darkest years with the diversion of making art out of photographs. I couldn\'t have found it anyplace else, but it gave me the consciousness and voice I needed.',
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    directory: "",
    description: "",
    artworks: {
      folder: "",
      art1: {
        name: "Yang",
        year: "",
        medium: 'Film',
        file_name: "N/A",  // todo: contact artist to upload the video to youtube
      },
    },
  },
  artist5: {
    idx: 14,
    format: AllowedFormats.Image,
    visible: true,
    ins_handle: ["@dj.esl"],
    artist_name: "Sophie Stiquée",
    quote: '“As an Asian African who grew up in Mauritius and later immigrated to Toronto… I have experienced the challenges and complexities of balancing these two distinct parts of my identity.”',
    bio: 'Sophie Stiquée is a talented multidisciplinary artist based in Toronto. As a skilled DJ, Sophie has been making waves in the local music scene, delivering electrifying sets and captivating audiences with her unique style. With a background in classical piano, Sophie brings a unique touch to her performances, often incorporating live instrumentation into her sets. Sophie is also a successful drag performer, known for her dynamic stage presence and ability to connect with audiences. In June 2023, Sophie will showcase her work at an art exhibition organized by the City of Toronto, exploring the universe of drag and the intersectionality of being queer and Mauritian through a series of portraits of queer Mauritians. With a passion for creativity and a drive to make an impact, Sophie is poised for continued success in the world of music and art.',
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    directory: "/assets/BodyPolitics/Sophie",
    description: "",
    artworks: {
      art1: {
        name: "01",
        year: "",
        medium: "Photography",
        file_name: "01.jpg",
      },
      art2: {
        name: "02",
        year: "",
        medium: "Photography",
        file_name: "02.jpg",
      },
      art3: {
        name: "03",
        year: "",
        medium: "Photography",
        file_name: "03.jpg",
      },
      art4: {
        name: "04",
        year: "",
        medium: "Photography",
        file_name: "04.jpg",
      },
      art5: {
        name: "05",
        year: "",
        medium: "Photography",
        file_name: "05.jpg",
      },
    },
  },
  artist6:{
    idx: 17,
    format: AllowedFormats.Video,  // embedded video
    visible: true,
    ins_handle: ["@sherlchen"],
    artist_name: "Sidi Chen",
    quote: '"[T]he intersectionality of the queer and east Asian diaspora identities roots in how the body becomes an archive of the distances and relations... ”',
    bio: '"Sidi Chen is a queer artist in diaspora whose interdisciplinary performance-based practice interrogates the entangled relations held within the collective bodies that are communal, ecological, and planetary. Through his practice, Chen explores subjects of queer diaspora, intergenerational migration, social and environmental shifting to understand and cultivate an Earthly empathy. \n' +
        '\n' +
        'Sidi Chen has been participating in a wide range of residencies, exhibitions, performances, and projects in North America and is currently completing the Master of Fine Arts Program at Emily Carr University of Art + Design (Spring 2023). Chen Sidi Chen is also an independent arts administrator and research for arts-based community development, and is currently residing on the traditional, ancestral, and unceded territories of the xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) First Nations, known as Vancouver, BC."',
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    directory: "",  // no directory since it's a video on Youtube
    description: "",
    artworks: {
      art1: {
        name: "Mirage Raft (The Dream Talking Oyster)",
        year: "",
        medium: "Digital Video",
        file_name: "https://www.youtube.com/watch?v=ASOwIWN4Kvs",  // TODO: not sure if substituting the video link here is the right way to do it, but there are artists who have multiple videos
      }
    },
  },
  artist7: {
    idx: 23,
    format: AllowedFormats.Video,  // embedded video
    visible: true,
    artist_name: "Jasmine Liaw",
    ins_handle: ["@jasmineliaw_"],
    quote: '“Am I Asian enough within the Hakka Asain diaspora? Am I queer enough within my own physical experience and externalization?”',
    bio: "Jasmine Liaw is a queer emerging Chinese-Canadian interdisciplinary artist in dance performance, new media art, and film. Bicoastal, she is based in so-called Toronto and Vancouver. Her practice focuses on the interconnections of conceptual realms of dance and digital/new media landscapes. As an emerging artist, Jasmine is compelled to explore her contemporary views of Asian diaspora. She is the Artistic Associate of Chimerik 似不像 Collective, working in interdisciplinary research and creation, and a member of Shoes Off Collective, an emerging artist community centred within the Asian Diaspora. In 2020, she graduated with Distinction at the Conteur Academy in Toronto. Her recent collaborations and presentations include RT Collective Commission Film Program in partnership with Toronto Dance Theatre, in conjunction with Chimerik's project \"\"Ritual Spective,” Frog in Hand's touring Full Body Exhibit, adelheid dance projects, Chimerik/Theatre Passe Muraille: Digital Creators Lab, Gallery TPW's The Parkettes Projects with Ronnie Clarke, Rumble Theatre, Dawson City International Film Festival, Florence Contemporary Art Gallery, Italy,  and Quarantine Qapsule partnered with Emily Carr University Library, Lonely Artists Productions, and Myseum of Toronto. She is a 2022 Artworkx Toronto Spotlight Artist. Jasmine is F-O-R-M Recorded Movement Society Artist-in-Residence in their Technology and Interaction Program exploring her latest installation work, SONIC COLOUR: extended.",
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    directory: "",  // no directory since it's a video on Youtube
    description: "",
    artworks: {
      art1: {
        name: "xīn nī 廖芯妮 (understanding you)",
        year: "",
        medium: "Auto-ethnographic, experimental visual poem and moving-portrait",  // todo: check with curatorial team on this
        file_name: "https://vimeo.com/manage/videos/809597831/48207ec787",
      }
    },
  },
  artist8: {
    idx: 24,
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Makoto Chi",
    ins_handle: ["@makoto.chi", "@ma__ko__to___"],
    quote: '“As a diasporic trans person, I situate myself in an ever-moving process of embodying and making many truths and contradictions in a culture that loves rigid binaries.”',
    bio: 'Makoto (he/him) is a visual artist from diasporic Ashkenazi and Yonsei Nikkei heritages. Chi grew up in the unceded lands of the xʷməθkʷəy̓əm , Sḵwx̱wú7mesh , and səlilwətaɬ Nations, colonially known as vancouver. This land base informs much of his work and thought, especially that of being a mixed-race person amongst other racialized people of different ways of being in the world. Chi began dabbling in commercial art in his young teens after artistically gestating in early internet forums. Simultaneously, he started tattooing in a small apartment in the Chinatown neighborhood. He has since gained a BFA in Illustration from Emily Carr University in 2015, and has been cultivating an 18-year internationally recognized tattoo practice - he also takes part in commercial exhibits across turtle island and beyond. Makoto Chi currently lives at Lupinewood Collective, a queer collective housing project in so-called western massachusetts. He is cultivating slow practices, and making art addressing sexuality amidst rising fascism, about lineage, and unanswerable questions about solidarity and strife in the overlapping communities he experiences.',
    topic_name: "Body Politics",
    quote_bg_url: "",
    collection_title: "",
    directory: "/assets/BodyPolitics/Makoto",
    artworks: {
      art1: {
        name: "Comets",
        year: "",
        medium: "Digital Painting",
        file_name: "Comets.jpg",
        description: "",
      },
      art2: {
        name: "Two Snakes",
        year: "",
        medium: "Digital Painting",
        file_name: "TwoSnakes.jpg",
        description: "",
      },
      art3: {
        name: "Yin Yang",
        year: "",
        medium: "Digital Painting",
        file_name: "YinYang.jpg",
        description: "",
      },
    },
  },
}

console.log(bodyPolitics)
onMounted(() => {AOS.init()})
</script>
<template class="bg-white scroll-smooth">
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
        <p class="text-sm text-gray-500 hover:text-gray-700">
            The Bitten Peach: Decolonizing Queer Asians
        </p>
    </div>
    <ul class="lg:hidden sticky t-0 border-b border-gray-600 flex space-x-2 mx-4 mb-4">
        <li v-for="header in headers" :key="header">
            <a>{{header}}</a>
        </li>
    </ul>
    <!-- Banner -->
    <kinesis-container>
        <section class="h-screen w-full bg-cover bg-fixed banner1-url">
            <div class="w-full h-full flex flex-col items-start justify-center backdrop-brightness-50 pl-20 md:pl-14 sm:pl-10 pl-6">
                <kinesis-element :strength="50" transformOrigin="100% 500%" axis="x" type="depth">
                    <p class="text-lg md:text-xl lg:text-2xl text-white/90">
                        The Bitten Peach: Decolonizing Queer Asians
                    </p>
                </kinesis-element>
                <kinesis-element :strength="50">
                    <p class="z-20 text-white/90 font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center">
                        BODY POLITICS
                    </p>
                </kinesis-element>
            </div>
        </section>
    </kinesis-container>
    <!-- Introduction of the sub section -->
    <section id="about" class="h-screen w-full lg:h-full p-20 md:p-14 sm:p-10 p-6 tracking-wide leading-6">
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
    <div v-for="artist in bodyPolitics" :key="artist">
    <!-- Quote of the Topic -->
    <section class="h-screen w-full h-80 lg:h-[48rem] w-screen bg-cover bg-scroll quote1-url">
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
    <section class="h-screen w-full p-20 md:p-14 sm:p-10 p-6 tracking-wide leading-6">
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
.banner1-url {
    background-image: url('../assets/section2-1.jpg');
}

.quote1-url {
    background-image: url('../assets/artist-quote1.jpg');
}
</style>