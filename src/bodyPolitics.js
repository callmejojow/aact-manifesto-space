// Data Entries
const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

export const bodyPolitics = {
    artist1: {
        idx: 3, // for internal use
        format: AllowedFormats.Image, // for rendering
        visible: true,
        artist_name: "Imran Jatoi",
        ins_handle: ["@imranfaizjatoi"], // a list b/c some artists have multiple handles
        quote: '“Queer people of colour who experience discrimination for being who they are, need to learn about their racial identities as well as how to intersect their gender and sexual orientation.”',
        bio: 'Imran Faizyab Jatoi is a Pakistani self-employed visual artist, creating 2d and 3d art forms and performances. His practice underlines queer ideologies with an emphasis on identity, orientation, faith and autobiographical allusions. He is postgraduate in Art & Design from Yasar University, Turkey and contributed to number of exhibitions. The involvement of his art practice is to educate and make awareness about queer issues center on an investigation of Identity, especially gender and sexuality, through multidisciplinary approaches. He will likely to make work that mechanism with closeness and empowers understanding, accepting, and basic discussions about queer identity, sexuality and contemporary societal movement.',
        topic_name: "Body Politics",
        quote_bg_url: require('@/assets/BodyPolitics/Imran/6_face_to_face.jpg'),
        collection_title: "Unsullied Souls",
        description: "Through Safe Distance, Jamie compares the HIV pandemic in the 1980s with COVID-19 pandemic since 2020. She would like to remind people to stay alert to the history of ostracization and discrimination against queer community in society. She also highlights how queer Chinese individuals experience “double whammy” of racism and homophobia. By addressing the above issues, Jamie hopes to promote the message that “We should embody kindness and empathy with people from all walks of life” in her film.",
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
        slides: [{
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/1_identity_card.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/2_silence.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/3_reemerge.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/4_trust.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/5_immaculate.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/6_face_to_face.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/7_in_search_of.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/8_return_to_yourself.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/9_minute.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Imran/10_levitate.jpg")}" class="object-contain h-[48rem]"/>`,
            },
        ],
    },
    artist2: {
        idx: 9,
        format: AllowedFormats.Image,
        visible: true,
        artist_name: "Geoffrey Cheung",
        ins_handle: ["@geoffrey.l.cheung"],
        quote: '“Our bodies are the substrate for memory’s longevity even as it changes and adapts to our form—our behaviour, our physique, our Asian-ness, and our queerness.”',
        bio: 'Geoffrey Lok-Fay Cheung is a visual artist interested in the themes of tension, conflict, and harmony as they relate to identity, community, and cultural inheritance. His practice is heavily informed by his own lived experiences growing up in Vancouver as a queer first-generation Canadian of Chinese descent. In his current investigations, Cheung explores connection with land and memory as it relates to the immigrant experience. For the better part of the past two decades, Cheung lived and worked out East, most recently in Toronto, as a Medical Animator and Illustrator. He previously received a Master of Science in Biomedical Communications and Bachelor of Science in Life Science. He returned to live in Vancouver for the MFA program at Emily Carr University which is on the unceded territories of the Coast Salish peoples, including the Musqueam, Squamish and Tsleil-Waututh nations.',
        topic_name: "Body Politics",
        quote_bg_url: require("@/assets/BodyPolitics/Geoff/aPalaceForMyForefathers.jpg"),
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
        slides: [{
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/aPalaceForMyForefathers.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/homecoming.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/pathfinding.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/stifle.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/towardAMemory.jpg")}" class="object-contain h-[48rem]"/>`,
            },
        ],
    },
    artist3: {
        idx: 11,
        format: AllowedFormats.Text,
        visible: false, // set to false for now
        artist_name: "Jeff Chow Jung Sing 重昇",
        ins_handle: ["@dun.a.way"],
        quote: '"How dance music\'s history is shaped by race and de-racialization, and what additional perspectives being a Queer Asian can contribute to the conversation."',
        bio: "Arts admin by day and deep house DJ by night, Jeff Chow is a creative gatherer that works between the mediums of DJ-ing, writing, teaching, designs and draw inspiration from his queer, migrant, working class experience. Originally from Hong Kong, Jeff moved to Hamilton, Ontario pursuing education but left defeated in spite.",
        topic_name: "Body Politics",
        quote_bg_url: '',
        collection_title: "",
        directory: "",
        description: "",
        excert1: "Having been raised in Hong Kong for twenty-something years, I only learned about my Chineseness and Queerness when I moved to Canada four years ago. Growing up I was never asked the question Where are you from? Thinking back, there is a certain *thinginess* that comes with the migration process and spending the last few years in suburban Ontario. It all felt like a third puberty — learning how to swim again but this time in olive oil. Breathing at first was hard but as the old saying goes, you get used to it.",
        excert2: "The scholar Kathryn Bond Stockton writes about how queer child “grows sideways”,because queer life often defies the linear chronology of marriage and children. Stockton also describes children of color as growing sideways, since their youth is likewise outside the model of the enshrined white child. I have been thinking about how Queer Asian comes to their reckoning through a meandering fuckery of sideways and straightways and sideways. We are being told we fit in and that we can assimilate, yet we are different because of our queerness; we have been told that Asians in America have it good despite our realities tell us otherwise. Where is the Queer Asian heading?",
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
                file_name: "https://www.youtube.com/embed/_Of_jsCjsM0",
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
        quote_bg_url: require('@/assets/BodyPolitics/Sophie/04.jpg'),
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
        slides: [{
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/01.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/02.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/03.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/04.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/05.jpg")}" class="object-contain h-[48rem]"/>`,
            },
        ],
    },
    artist6: {
        idx: 17,
        format: AllowedFormats.Video, // embedded video
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
        directory: "", // no directory since it's a video on Youtube
        description: "",
        artworks: {
            art1: {
                name: "Mirage Raft (The Dream Talking Oyster)",
                year: "",
                medium: "Digital Video",
                file_name: "https://www.youtube.com/embed/ASOwIWN4Kvs", // TODO: not sure if substituting the video link here is the right way to do it, but there are artists who have multiple videos
            }
        },
    },
    artist7: {
        idx: 23,
        format: AllowedFormats.Video, // embedded video
        visible: true,
        artist_name: "Jasmine Liaw",
        ins_handle: ["@jasmineliaw_"],
        quote: '“Am I Asian enough within the Hakka Asain diaspora? Am I queer enough within my own physical experience and externalization?”',
        bio: "Jasmine Liaw is a queer emerging Chinese-Canadian interdisciplinary artist in dance performance, new media art, and film. Bicoastal, she is based in so-called Toronto and Vancouver. Her practice focuses on the interconnections of conceptual realms of dance and digital/new media landscapes. As an emerging artist, Jasmine is compelled to explore her contemporary views of Asian diaspora. She is the Artistic Associate of Chimerik 似不像 Collective, working in interdisciplinary research and creation, and a member of Shoes Off Collective, an emerging artist community centred within the Asian Diaspora. In 2020, she graduated with Distinction at the Conteur Academy in Toronto. Her recent collaborations and presentations include RT Collective Commission Film Program in partnership with Toronto Dance Theatre, in conjunction with Chimerik's project \"\"Ritual Spective,” Frog in Hand's touring Full Body Exhibit, adelheid dance projects, Chimerik/Theatre Passe Muraille: Digital Creators Lab, Gallery TPW's The Parkettes Projects with Ronnie Clarke, Rumble Theatre, Dawson City International Film Festival, Florence Contemporary Art Gallery, Italy,  and Quarantine Qapsule partnered with Emily Carr University Library, Lonely Artists Productions, and Myseum of Toronto. She is a 2022 Artworkx Toronto Spotlight Artist. Jasmine is F-O-R-M Recorded Movement Society Artist-in-Residence in their Technology and Interaction Program exploring her latest installation work, SONIC COLOUR: extended.",
        topic_name: "Body Politics",
        quote_bg_url: "",
        collection_title: "",
        directory: "", // no directory since it's a video on Youtube
        description: "",
        artworks: {
            art1: {
                name: "xīn nī 廖芯妮 (understanding you)",
                year: "",
                medium: "Auto-ethnographic, experimental visual poem and moving-portrait", //mod: this video url is not available for html embedding. Need to ask artist to replace.
                file_name: ""
                // file_name: "https://vimeo.com/manage/videos/809597831/48207ec787",
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
        quote_bg_url: require('@/assets/BodyPolitics/Makoto/YinYang.jpg'),
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
        slides: [{
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Makoto/Comets.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Makoto/TwoSnakes.jpg")}" class="object-contain h-[48rem]"/>`,
            },
            {
                image: require("@/assets/bg.svg"),
                content: `<img src="${require("@/assets/BodyPolitics/Makoto/YinYang.jpg")}" class="object-contain h-[48rem]"/>`,
            },
        ],
    },
};