<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import { onMounted } from "vue"
import AOS from "aos"

const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

let yellowPeril = {
  artist1:{
    idx: 4,  // for internal use
    format: AllowedFormats.Video,  // for rendering
    visible: true,
    artist_name: "Love Intersections",
    ins_handle: ["@loveintersections"],  // a list b/c some artists have multiple handles
    quote: 'A core part of our recent practice as queer Chinese artists, has been exploring the relationship between our identities as queer Chinese artists, and how our anti-racist arts practice can work in solidarity with struggles to decolonize.',
    bio: 'Love Intersections is a media arts collective made up of queer artists of colour dedicated to using collaborative art making and relational storytelling to address systemic racism in our communities. We produce intersectional and intergenerational stories from underrepresented communities of colour – centering the invisible, the spiritual, the metaphysical and the imaginary. We believe in deep and meaningful relationships, that intersectionality is a verb and a call to action, that we must cultivate social trust through collective care and community responsibility. Our desire is to provoke (he)artful social change through a lens of love.',
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: require('@/assets/YellowPerils/Love/YellowPeril.jpg'),
    description: "",
    directory: "",
    artworks: {
      art1: {
        name: "Channeling the Elements; an encounter of time/space",
        year: '2020',
        medium: "Film",
        file_name: "https://www.youtube.com/watch?v=B91Fx_143Fk",
      },
    },
  },
  artist2:{
    idx: 7,  // for internal use
    format: AllowedFormats.Video,  // for rendering
    visible: true,
    artist_name: "Jamie Chi",
    ins_handle: ["@safedistance_docu", "@jamiechi_"],  // a list b/c some artists have multiple handles
    quote: 'A core part of our recent practice as queer Chinese artists, has been exploring the relationship between our identities as queer Chinese artists, and how our anti-racist arts practice can work in solidarity with struggles to decolonize.',
    bio: "Jamie Chi (she/they) is an independent filmmaker and photographer, using her work to advocate for LGBTQ+ rights. After receiving an MA in cultural studies at Université Jean Moulin Lyon 3, France, Jamie advocated for Asian LGBTQ+ rights through her film. \n" +
        "\n" +
        "Jamie studied experimental filmmaking at the University of the Philippines Diliman in 2019 and was selected for the Ricky Lee Script Writing Program organised by the Cinemalaya Institute in 2021.  In 2022, her film 《Safe Distance: Chapter 1》won the Short Film Audience Award in the 33rd Hong Kong Lesbian and Gay Film Festival.",
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "",
    directory: "",
    artworks: {
      art1: {
        name: "Safe Distance",
        year: '',
        medium: "Film/Documentary",
        file_name: "https://www.youtube.com/watch?v=Jj5WbiY__Pw",
      },
    },
  },
  artist3:{
    idx: 10,  // for internal use
    format: [AllowedFormats.Image, AllowedFormats.Video],  // todo: like Rising Lai, multiple formats, check with Jolie
    visible: true,
    artist_name: "Andi Vicente",
    ins_handle: ["@andivice", "http://anakpublishing.ca/BitterMelanin.html"],  // a list b/c some artists have multiple handles
    quote: 'I identify as Queer, Non-Binary, Filipino/a/x, Ilocano, Isneg. To be seen by others like you can be a gift, a moment of euphoria. Sometimes it can bring about forced relationships. Solidarity is not simply based on the similar ways we experience oppression. Solidarity is compassionate.',
    bio: 'Andi (they/them) is a visual artist whose interdisciplinary practice is humbled and radicalized by their work with different communities. Through installation and digital collage, they’ve explored intersectional identities, precarious livelihoods and the juxtaposition of movements. Andi aims to broaden an understanding of oppressed experiences and encourage collective empowerment through the answering of the questions “Who is not here with us and how can I be there for you?" Author and Editor of Bitter Melanin',
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Andi",
    artworks: {
      art1: {
        name: "barbed dreams",
        year: '',
        medium: "",
        file_name: "barbed_dreams.jpg",
      },
      art2: {
        name: "libération en fait (freedom actually _ release)",
        year: '',
        medium: "",
        file_name: "libération_en_fait_(freedom_actually___release).jpg",
      },
      art3: {
        name: "makibaka (to struggle and to fight)",
        year: '',
        medium: "",
        file_name: "makibaka_(to_struggle_and_to_fight).jpg",
      },
      art4: {
        name: "malgré eux (despite them)",
        year: '',
        medium: "",
        file_name: "malgré_eux_(despite_them).jpg",
      },
      art5: {
        name: "thank you [i learned of my legacy and my ancestors through the harms made by yours]",
        year: '',
        medium: "",
        file_name: "thank_you_[i_learned_of_my_legacy_and_my_ancestors_through_the_harms_made_by_yours].jpg",
      },
      art6: {
        name: "PAGKAKAISA",
        year: '',
        medium: "",
        file_name: "https://youtu.be/t9qG14MSVPs",  // todo: check with curatorial team if this should still be included
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/barbed_dreams.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/libération_en_fait_(freedom_actually___release).jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/makibaka_(to_struggle_and_to_fight).jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/malgré_eux_(despite_them).jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/thank_you_[i_learned_of_my_legacy_and_my_ancestors_through_the_harms_made_by_yours].jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist4: {
    idx: 12,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Theysi Queers",
    ins_handle: [],  // todo: ins handles are in their descriptions
    quote: 'Being queer and South Asian can often feel like two diverging identities that are difficult to navigate simultaneously especially if you\'re also an immigrant.',
    bio: '"Theysi Queers is a collective of artists, dreamers, makers, and creators in Tkaronto, dreaming of queer futures and realities in the South Asian diaspora.\n' +
        'Our mission is to visualize for you the joy of the realities we live in. We want to make real and give flesh to queer daydreams.\n' +
        'Each season, we will work within a theme to bring you a photo series showcasing collaborative talents of models, stylists, set designers, photographers, and all kinds of artists, and demonstrate what inspires us.\n' +
        'This season, we look to the written word for inspiration. We are lifting queer stories from the page and bringing you images inspired by our favourite stories."',
    topic_name: "Yellow Peril",
    collection_title: '',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Theysi",
    artworks: {
      art1: {  // todo: every image has a separate artist and a separate description... Check with teams to see how to handle this...
        name: "Giovanni's Room by James Baldwin (1956)",
        year: '',
        medium: "",
        file_name: "1GiovannisRoom.jpg",
      },
      art2: {
        name: "A Suitable Boy by Vikram Seth (1993)",
        year: '',
        medium: "",
        file_name: "2ASuitableBoy.jpg",
      },
      art3: {
        name: "We Have Always Been Here: A Queer Muslim Memoir by Samra Habib (2019)",
        year: '',
        medium: "",
        file_name: "3WeHaveAlwaysBeenHere.jpg",
      },
      art4: {
        name: "Beyond the Gender Binary by Alok Vaid-Menon (2020)",
        year: '',
        medium: "",
        file_name: "4BeyondtheGenderBinary.jpg",
      },
      art5: {
        name: "Biker Gang Baddies",
        year: '',
        medium: "",
        file_name: "5BikerGangBaddies.jpg",
      },
      art6: {
        name: "Who We Are",
        year: '',
        medium: "",
        file_name: "6WhoWeAre.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/1GiovannisRoom.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/2ASuitableBoy.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/3WeHaveAlwaysBeenHere.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/4BeyondtheGenderBinary.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/5BikerGangBaddies.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Theysi/6WhoWeAre.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist5: {
    idx: 15,  // for internal use
    format: AllowedFormats.Video,
    visible: true,
    artist_name: "Hanxuan (Sophie) Jiang",
    ins_handle: [],
    quote: 'From sleeping together and uninhibited dancing to daily conversations, I seem to find out which community I am in and which community I am excluded from',
    bio: 'Hanxuan Jiang is a time-based artist and an art tutor who is currently based in Shanghai. She graduated from Ruskin School of Art, University of Oxford with Distinction (MFA). Her first MA was in Contemporary Art Practice of the Royal College of Art. In 2019, She was announced by Art News of China as one of the most excellent young artists in China (100 in total). Her moving image works were selected in European Short Film Festival, London Independent film Festival, Manchester film festival, 2019 Coventry Biennial, 9th International Video Poetry Festival, etc. Her artworks were collected by 2019 Florence Contemporary art Biennale, National Art Museum of China and Beijing Biennial.',
    topic_name: "Yellow Peril",
    collection_title: '',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "",
    directory: "",
    artworks: {
      art1: {
        name: "The Journey of Displacement",
        year: '',
        medium: "",
        file_name: "",  // todo: embed link from Vimeo
      },
    },
  },
  // artist6: {  // todo: missing materials - should we still include him????
  //   idx: 18,  // for internal use
  //   format: AllowedFormats.Video,
  //   visible: true,
  //   artist_name: "Anto Chan",
  //   ins_handle: [],
  //   quote: '',
  //   bio: '',
  //   topic_name: "Yellow Peril",
  //   collection_title: '',
  //   quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
  //   description: "",
  //   directory: "",
  //   artworks: {
  //     art1: {
  //       name: "",
  //       year: '',
  //       medium: "",
  //       file_name: "",
  //     },
  //   },
  // },
  artist7: {
    idx: 19,  // for internal use
    format: AllowedFormats.Video,
    visible: true,
    artist_name: "Snack Witch",
    ins_handle: [],
    quote: 'I see my experiments with [the translation of materials, text, images, and sound between physical and digital spaces] as a way to understand my in-betweenness: of nationalities, cultures, homes, gender, and languages.',
    bio: '"🔮Snack Witch 🍡 is a Canadian-born Hong Kong-Chinese anglophone, queer woman and grateful, uninvited guest born—and knows she wants to die—on the unceded territories of the xʷməθkwəy̓əm, Skwxwú7mesh, Stó:lō, and Səl̓ílwətaʔ/Selilwitulh peoples. Her interdisciplinary practice investigates the relationship between objects↔place↔migration↔identities, always with humour, sometimes with food. 😉\n' +  // todo check if okay lots of emojis
        '\n' +
        'They’re currently toiling over their MFA on stolen lands of the Kanien’kehá:ka at Concordia University.  A wicked #magicalgirl ✨ eating art + making snacks 🌈⁠, she has exhibited and curated shows across Turtle Island, colonially known as Canada, including Centre CLARK, Montréal; Latitude 53, Edmonton; Xpace Cultural Centre, Toronto; and Hotam Press Bookshop & Gallery, Vancouver; among other spaces and platforms. Their work has been published nationally and internationally.\n' +
        '\n' +
        'They are a recipient of numerous awards, including the BC Arts Council Scholarship and the Dale and Nick Tedeschi Studio Arts Fellowship. She was waitlisted for the SSHRC - Joseph-Armand Bombardier: Canada Graduate Master’s Scholarship."',
    topic_name: "Yellow Peril",
    collection_title: '2033 Essex Rd, Williston, Vermont, USA, 05495',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Snack",
    artworks: {
      art1: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "1snack.jpg",
      },
      art2: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "2snack.jpg",
      },
      art3: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "3snack.jpg",
      },
      art4: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "4snack.jpg",
      },
      art5: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "5snack.jpg",
      },
      art6: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "6snack.jpg",
      },
      art7: {
        name: "2033 Essex Rd, Williston, Vermont, USA, 05495",
        year: '',
        medium: "",
        file_name: "7snack.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/1snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/2snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/3snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/4snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/5snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Snack/6snack.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist8: {
    idx: 21,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Julie Tián",
    ins_handle: [],
    quote: 'I\'m aware that my Chinese upbringing contributed to my sense of responsibility and lack of boundaries, but I still struggle with navigating the individualistic and fragmented nature of North American queer communities.',
    bio: 'Julie Chǔ Níng Tián is a self-taught Chinese-Canadian artist based in tkaronto. Her works explore themes of memory, space, time, and connection. She sees the intricate details often present in her works as a way of conveying care and love to the subject and the recipient. Julie has worked with various local organizations on projects surrounding art and queer belonging. She works primarily with oils, mixed paint, graphite, pen and ink, and embroidery.',
    topic_name: "Yellow Peril",
    collection_title: '2033 Essex Rd, Williston, Vermont, USA, 05495',
    quote_bg_url: require('@/assets/YellowPerils/Julie/JulieTian_1.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Julie",
    artworks: {
      art1: {
        name: "níng nìng",
        year: '',
        medium: "",
        file_name: "JulieTian_1.jpg",
      },
      art2: {
        name: "níng nìng",
        year: '',
        medium: "",
        file_name: "JulieTian_2.jpg",
      },
      art3: {
        name: "níng nìng",
        year: '',
        medium: "",
        file_name: "JulieTian_3.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Julie/JulieTian_1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Julie/JulieTian_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Julie/JulieTian_3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist9: {
    idx: 22,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Michelle Lu",
    ins_handle: ['@tiger___mommy'],
    quote: '[Until recently] I\'ve been intimidated to explore the intersection of my ethnicity and queerness. I’m now recognizing that they have always been intricately intertwined and an essential part of who I am.',
    bio: '"Michelle Lu (she/they) is a multidisciplinary designer and artist from Toronto, Canada. Her practice explores the nuances of identity, collaborative creation, and imagining new forms of community. Lu’s work is motivated by storytelling and the desire to make systems more equitable and accessible.\n' +
        '\n' +
        'Michelle’s work has been featured in exhibitions and publications nationally and internationally. They are also a founding member of here-there collective, a group of interdisciplinary artists who are currently working on the here-there audio archive – a community arts project and home for stories from the Asian Canadian diaspora."',
    topic_name: "Yellow Peril",
    collection_title: 'Mother’s Tongue',
    quote_bg_url: require('@/assets/YellowPerils/Michelle/mothers_tongue.jpg'),
    description: "",
    directory: "/assets/YellowPerils/Michelle",
    artworks: {
      art1: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mothers_tongue.jpg",
      },
      art2: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mt_w1.jpg",
      },
      art3: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mt_w2.jpg",
      },
      art4: {
        name: "Mother’s Tongue",
        year: '',
        medium: "",
        file_name: "mt_w3.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mothers_tongue.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mt_w1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mt_w2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Michelle/mt_w3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
}

console.log(yellowPeril)
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