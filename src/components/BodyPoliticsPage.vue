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

let BodyPolitics = {
  artist1: {
    idx: 3,  // for internal use
    format: AllowedFormats.Image,  // for rendering
    visible: true,
    artist_name: "Imran Jatoi",
    ins_handle: ["@imranfaizjatoi"],  // a list b/c some artists have multiple handles
    quote: '“Queer people of colour who experience discrimination for being who they are, need to learn about their ' +
        'racial identities as well as how to intersect their gender and sexual orientation.”',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: "@/assets/BodyPolitics/Imran",
      description: "",  // TODO: some artists have a single description for a series of works, whereas others have a description for each work. Need to decide how to handle this.
      art1: {
        name: "‎⁨1.شناختی کارڈ (Identity Card)⁩",  // TODO in Arabics - double check on the rendered look
        year: null,
        medium: "Digital Print",
        file_name: "1_identity_card.jpg",
        description: "",  // TODO: see above - maybe we just include both the series description and the individual work description?
      },
      art2: {
        name: "Silence",
        year: null,
        medium: "Digital Print",
        file_name: "2_silence.jpg",
        description: "",
      },
      art3: {
        name: "Re-emerge",
        year: null,
        medium: "Digital Print",
        file_name: "3_reemerge.jpg",
        description: "",
      },
      art4: {
        name: "Trust",
        year: null,
        medium: "Digital Print",
        file_name: "4_trust.jpg",
        description: "",
      },
      art5: {
        name: "Immaculate",
        year: null,
        medium: "Digital Print",
        file_name: "5_immaculate.jpg",
        description: "",
      },
      art6: {
        name: "‎⁨آمنے سامنے (face to face)⁩",
        year: null,
        medium: "Digital Print",
        file_name: "6_face_to_face.jpg",
        description: "",
      },
      art7: {
        name: "In Search Of",
        year: null,
        medium: "Digital Print",
        file_name: "7_in_search_of.jpg",
        description: "",
      },
      art8: {
        name: "Return to Yourself",
        year: null,
        medium: "Digital Print",
        file_name: "8_return_to_yourself.jpg",
        description: "",
      },
      art9: {
        name: "Minute",
        year: null,
        medium: "Digital Print",
        file_name: "9_minute.jpg",
        description: "",
      },
      art10: {
        name: "Levitate",
        year: null,
        medium: "Digital Print",
        file_name: "10_levitate.jpg",
        description: "",
      },
    },
  },
  artist2: {
    idx: 9,
    format: AllowedFormats.Image,
    visible: true,
    ins_handle: ["@geoffrey.l.cheung"],
    artist_name: "Geoffrey Cheung",
    quote: '“Our bodies are the substrate for memory’s longevity even as it changes and adapts to our form—our ' +
        'behaviour, our physique, our Asian-ness, and our queerness.”',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: "@/assets/BodyPolitics/Geoff",
      art1: {
        name: "A Palace for My Forefathers",
        year: "",
        medium: null,
        file_name: "aPalaceForMyForefathers.jpg",
        description: "",
      },
      art2: {
        name: "Homecoming",
        year: "",
        medium: null,
        file_name: "homecoming.jpg",
        description: "",
      },
      art3: {
        name: "Pathfinding",
        year: "",
        medium: null,
        file_name: "pathfinding.jpg",
        description: "",
      },
      art4: {
        name: "Stifle",
        year: "",
        medium: null,
        file_name: "stifle.jpg",
        description: "",
      },
      art5: {
        name: "Toward a Memory",
        year: "",
        medium: null,
        file_name: "towardAMemory.jpg",
        description: "",
      },
    },
  },
  artist3: {
    idx: 11,
    format: AllowedFormats.Text,  // TODO: check with the UI team on how to handle this. Here is the text: https://jeffjungsingc.notion.site/Bitten-Peach-Submission-Queer-Asians-on-the-Dancefloor-5dfaf0bca4f34e5d85f146280385fce2
    visible: false,  // set to false for now
    ins_handle: ["@dun.a.way"],
    artist_name: "Jeff Chow Jung Sing 重昇",
    quote: '"How dance music\'s history is shaped by race and de-racialization, and what additional perspectives being ' +
        'a Queer Asian can contribute to the conversation."',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: null,
      art1: {
        name: "",
        year: "",
        medium: null,
        file_name: "",
        description: "",
      },
    },
  },
  artist4: {
    idx: 13,
    format: AllowedFormats.Video,  // TODO: this is NOT an embedded video. See: https://drive.google.com/file/d/1KEFSM2Tvok77Lslw-SgJt_sQxHZh2da4/view
    visible: false,
    ins_handle: ["@sailphototo", "@shallisailnow"],
    artist_name: "Muchen Zhou / Erin Zhou",
    quote: '“My friends and I encounter challenges related to upholding the family lineage, showing filial piety, and ' +
        'respecting parental authority, which may not be commonly experienced by the queer community in Western cultures.”',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: null,
      art1: {
        name: "",
        year: "",
        medium: null,
        file_name: "",
        description: "",
      },
    },
  },
  artist5: {
    idx: 14,
    format: AllowedFormats.Image,
    visible: true,
    ins_handle: ["@dj.esl"],
    artist_name: "Sophie Stiquée",
    quote: '“As an Asian African who grew up in Mauritius and later immigrated to Toronto… I have experienced the ' +
        'challenges and complexities of balancing these two distinct parts of my identity.” ',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: "@/assets/BodyPolitics/Sophie",
      art1: {
        name: "01",
        year: "",
        medium: "Photography",
        file_name: "01.jpg",
        description: "",
      },
      art2: {
        name: "02",
        year: "",
        medium: "Photography",
        file_name: "02.jpg",
        description: "",
      },
      art3: {
        name: "03",
        year: "",
        medium: "Photography",
        file_name: "03.jpg",
        description: "",
      },
      art4: {
        name: "04",
        year: "",
        medium: "Photography",
        file_name: "04.jpg",
        description: "",
      },
      art5: {
        name: "05",
        year: "",
        medium: "Photography",
        file_name: "05.jpg",
        description: "",
      },
    },
  },
  artist6: {
    idx: 17,
    format: AllowedFormats.Video,  // embedded video
    visible: true,
    ins_handle: ["@sherlchen"],
    artist_name: "Sidi Chen",
    quote: '"[T]he intersectionality of the queer and east Asian diaspora identities roots in how the body becomes an ' +
        'archive of the distances and relations... ”',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: null,  // no folder since it's a video on Youtube
      art1: {
        name: "Mirage Raft (The Dream Talking Oyster)",
        year: "",
        medium: "Digital Video",
        file_name: "https://www.youtube.com/watch?v=ASOwIWN4Kvs",  // TODO: not sure if substituting the video link here is the right way to do it, but there are artists who have multiple videos
        description: "",
      }
    },
  },
  artist7: {
    idx: 23,
    format: AllowedFormats.Video,  // embedded video
    visible: true,
    ins_handle: ["@jasmineliaw_"],
    artist_name: "Jasmine Liaw",
    quote: '“Am I Asian enough within the Hakka Asain diaspora? Am I queer enough within my own physical experience and ' +
        'externalization?”',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {
      folder: null,  // no folder since it's a video on Vimeo
      art1: {
        name: "xīn nī 廖芯妮 (understanding you)",
        year: "",
        medium: "Auto-ethnographic, experimental visual poem and moving-portrait",  // todo: check with curatorial team on this
        file_name: "https://vimeo.com/manage/videos/809597831/48207ec787",
        description: "",
      }
    },
  },
  artist8: {
    idx: 24,
    format: AllowedFormats.Image,
    visible: true,
    ins_handle: ["@makoto.chi", "@ma__ko__to___"],
    artist_name: "Makoto Chi",
    quote: '“As a diasporic trans person, I situate myself in an ever-moving process of embodying and making many ' +
        'truths and contradictions in a culture that loves rigid binaries.” ',
    topic_name: "Body Politics",
    quote_bg_url: null,
    artworks: {  // TODO: Check with Jolie on the file size - original works are extremely large (> 100 MB), reduced size with low quality JPGs
      folder: "@/assets/BodyPolitics/Makoto",
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
        <section class="h-[48rem] lg:h-screen w-screen bg-cover bg-fixed banner-url">
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
    <!-- Quote of the Topic -->
    <section class="h-80 lg:h-[48rem] w-screen bg-cover bg-scroll quote1-url">
        <div class="w-full h-80 lg:h-[48rem] flex flex-col items-center justify-center px-20 md:px-14 sm:px-10 px-6 bg-black/70" data-aos="fade-up" data-aos-anchor-placement="center-bottom" data-aos-easing="ease-in-out">
            <p class="font-thin tracking-wider max-w-4xl text-lg md:text-xl lg:text-2xl xl:text-3xl text-white/90" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="600">
                “Queer people of colour who experience discrimination for being who they are, need to learn about their racial identities as well as how to intersect their gender and sexual orientation.”
            </p>
            <p class="mt-10 z-20 text-white/90 font-semibold text-xl md:text-2xl lg:text-3xl text-white text-center" data-aos="fade-up" data-aos-anchor-placement="top-bottom" data-aos-easing="ease-in-out" data-aos-delay="1000">
                Imran Jatoi
            </p>
        </div>
    </section>
    <!-- Art pieces of a certain artist with his/her introduction -->
    <section class="p-20 md:p-14 sm:p-10 p-6 tracking-wide leading-6">
        <div class="flex justify-between items-center">
            <p class="font-semibold text-xl">Unsullied Souls</p>
            <p class="text-lg">Imran Jatoi</p>
        </div>
        <!-- placeholder for carousel of this artist's pieces -->
        <!-- <div>
            place holder
        </div> -->
    </section>
</template>
<style>
.banner-url {
    background-image: url('../assets/section2-1.jpg');
}
.quote1-url {
    background-image: url('../assets/artist-quote1.jpg');
}
</style>