const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
  Mixed: "mixed",
}

export const yellowPerils = {
  artist1:{
    idx: 4,  // for internal use
    format: AllowedFormats.Video,  // for rendering
    visible: true,
    artist_name: "Love Intersections",
    ins_handle: ["@loveintersections"],  // a list b/c some artists have multiple handles
    quote: '“A core part of our recent practice as queer Chinese artists, has been exploring the relationship between our identities as queer Chinese artists, and how our anti-racist arts practice can work in solidarity with struggles to decolonize.”',
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
        file_name: "https://www.youtube.com/embed/B91Fx_143Fk",
      },
    },
  },
  artist2:{
    idx: 7,  // for internal use
    format: AllowedFormats.Video,  // for rendering
    visible: true,
    artist_name: "Jamie Chi",
    ins_handle: ["@safedistance_docu", "@jamiechi_"],  // a list b/c some artists have multiple handles
    quote: '“A core part of our recent practice as queer Chinese artists, has been exploring the relationship between our identities as queer Chinese artists, and how our anti-racist arts practice can work in solidarity with struggles to decolonize.”',
    bio: "Jamie Chi (she/they) is an independent filmmaker and photographer, using her work to advocate for LGBTQ+ rights. After receiving an MA in cultural studies at Université Jean Moulin Lyon 3, France, Jamie advocated for Asian LGBTQ+ rights through her film. \n" +
        "\n" +
        "Jamie studied experimental filmmaking at the University of the Philippines Diliman in 2019 and was selected for the Ricky Lee Script Writing Program organised by the Cinemalaya Institute in 2021.  In 2022, her film 《Safe Distance: Chapter 1》won the Short Film Audience Award in the 33rd Hong Kong Lesbian and Gay Film Festival.",
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: '', 
    description: "",
    directory: "",
    artworks: {
      art1: {
        name: "Safe Distance",
        year: '',
        medium: "Film/Documentary",
        file_name: "https://www.youtube.com/embed/Jj5WbiY__Pw",
      },
    },
  },
  artist3:{
    idx: 10,  // for internal use
    format: AllowedFormats.Mixed, 
    visible: true,
    artist_name: "Andi Vicente",
    ins_handle: ["@andivice", "http://anakpublishing.ca/BitterMelanin.html"],  // a list b/c some artists have multiple handles
    quote: '“I identify as Queer, Non-Binary, Filipino/a/x, Ilocano, Isneg. To be seen by others like you can be a gift, a moment of euphoria. Sometimes it can bring about forced relationships. Solidarity is not simply based on the similar ways we experience oppression. Solidarity is compassionate.”',
    bio: 'Andi (they/them) is a visual artist whose interdisciplinary practice is humbled and radicalized by their work with different communities. Through installation and digital collage, they’ve explored intersectional identities, precarious livelihoods and the juxtaposition of movements. Andi aims to broaden an understanding of oppressed experiences and encourage collective empowerment through the answering of the questions “Who is not here with us and how can I be there for you?" Author and Editor of Bitter Melanin',
    topic_name: "Yellow Peril",
    collection_title:'',
    quote_bg_url: '',  // require('@/assets/YellowPerils/Josh/CeremonialVessel.jpg'),
    description: "See more details by clicking the Link below.",
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
        file_name: "freedom_actually_release.jpg",
      },
      art3: {
        name: "makibaka (to struggle and to fight)",
        year: '',
        medium: "",
        file_name: "to_struggle_and_to_fight.jpg",
      },
      art4: {
        name: "malgré eux (despite them)",
        year: '',
        medium: "",
        file_name: "despite_them.jpg",
      },
      art5: {
        name: "thank you [i learned of my legacy and my ancestors through the harms made by yours]",
        year: '',
        medium: "",
        file_name: "thank_you.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/barbed_dreams.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/freedom_actually_release.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/to_struggle_and_to_fight.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/despite_them.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/YellowPerils/Andi/thank_you.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist4: {
    idx: 12,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Theysi Queers",
    ins_handle: [],  // todo: ins handles are in their descriptions
    quote: '“Being queer and South Asian can often feel like two diverging identities that are difficult to navigate simultaneously especially if you\'re also an immigrant.”',
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
    quote: '“From sleeping together and uninhibited dancing to daily conversations, I seem to find out which community I am in and which community I am excluded from.”',
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
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Snack Witch",
    ins_handle: [],
    quote: '“I see my experiments with [the translation of materials, text, images, and sound between physical and digital spaces] as a way to understand my in-betweenness: of nationalities, cultures, homes, gender, and languages.”',
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
    quote: '“I\'m aware that my Chinese upbringing contributed to my sense of responsibility and lack of boundaries, but I still struggle with navigating the individualistic and fragmented nature of North American queer communities.”',
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
    quote: '“Until recently I\'ve been intimidated to explore the intersection of my ethnicity and queerness. I’m now recognizing that they have always been intricately intertwined and an essential part of who I am.”',
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