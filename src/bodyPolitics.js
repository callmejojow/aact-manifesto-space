// Data Entries
const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

export const bodyPolitics = {
    artist3: {
        idx: 3, // for internal use
        format: AllowedFormats.Image, // for rendering
        visible: true,
        artist_name: "Imran Jatoi",
        ins_handle: ["@imranfaizjatoi"], // a list b/c some artists have multiple handles
        quote: '“Queer people of colour who experience discrimination for being who they are need to learn about their racial identities as well as how to intersect their gender and sexual orientation.”',
        bio: 'Imran Faizyab Jatoi is a Pakistani self-employed visual artist who creates 2D and 3D art forms and performances. His practice underlines queer ideologies with an emphasis on identity, orientation, faith, and autobiographical allusions. He is a postgraduate in Art & Design from Yasar University, Turkey and has contributed to a number of exhibitions. The involvement of his art practice attempts to educate and raise awareness about queer issues centered on identity, gender, and sexuality through multidisciplinary approaches. He enjoys making works that celebrate closeness and facilitates understanding, acceptance, as well as fundamental discussions regarding queer identity, sexuality and current societal movements.',
        topic_name: "Body Politics",
        quote_bg_url: require('@/assets/BodyPolitics/Imran/6_face_to_face.jpg'),
        collection_title: "Unsullied Souls",
        description: "Unsullied Souls explores the celebration of the soul and self identity. Inspired by South Asian metaphors of the lotus flower, the visual process of Unsullied Souls paints the path to enlightenment and captures the concept that celebration arises from suffering. How can we celebrate our inner identities when we don’t experience hardship? In South Asian culture, the floating lotus is a symbol of growth towards purity and enlightenment because even though its roots are in the muddiest water the flower rises above the surface to bloom immaculately. \n" +
            "\n" +
            "Abstractly, Unsullied Souls is also interrelated to the soulful identity of Khwaja Sira, a term used to refer to the third gender in Pakistan. Historically, Khwaja Sira’s were employed at elite households in Indian Subcontinent states during pre-colonial times and have a presence in both Hindu and Islamic traditions of South Asia. British Colonial rule ended the social, economic, cultural, and political bases that supported this community and the Khwaja Sira continue to be a site of social and power struggles in post-colonial Pakistan because they challenge conventional gender boundaries. In Pakistan, their community experiences suppression and a lack of recognition due to their non-conformity to traditional gender binaries. Khawaja Sira are constantly persecuted through marginalization and judgment as they are pushed away by the society as outsiders. \n" +
            "\n" +
            "This exhibition reveals the activism of decolonizing Khwaja Sira identities in a diverse and accepted way. The creative process involves the techniques of stamp printing, inking, and stenciling to illustrate the portraiture as well as the floral and substance elements in an intimate and fluid representation.",
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
                content: `<img src="${require("@/assets/BodyPolitics/Imran/1_identity_card.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/2_silence.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/3_reemerge.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/4_trust.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/5_immaculate.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/6_face_to_face.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/7_in_search_of.jpg")}" class="object-cover lg:object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/8_return_to_yourself.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/9_minute.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Imran/10_levitate.jpg")}" class="object-contain h-screen"/>`,
            },
        ],
    },
    artist9: {
        idx: 9,
        format: AllowedFormats.Image,
        visible: true,
        artist_name: "Geoffrey Cheung",
        ins_handle: ["@geoffrey.l.cheung"],
        quote: '“Our bodies are the substrate for memory’s longevity even as it changes and adapts to our form—our behaviour, our physique, our Asian-ness, and our queerness.”',
        bio: 'Geoffrey Lok-Fay Cheung is a visual artist interested in the themes of tension, conflict, and harmony as they relate to identity, community, and cultural inheritance. His practice is heavily informed by his own lived experiences growing up in Vancouver as a queer first-generation Canadian of Chinese descent. In his current investigations, Cheung explores connection with land and memory as it relates to the immigrant experience. For the better part of the past two decades, Cheung lived and worked out East, most recently in Toronto, as a Medical Animator and Illustrator. He previously received a Master of Science in Biomedical Communications and Bachelor of Science in Life Science. He returned to live in Vancouver for the MFA program at Emily Carr University which is on the unceded territories of the Coast Salish peoples, including the Musqueam, Squamish and Tsleil-Waututh nations.',
        topic_name: "Body Politics",
        quote_bg_url: require("@/assets/BodyPolitics/Geoff/aPalaceForMyForefathers.jpg"),
        collection_title: "Homecoming",
        description: "The impacts of migration are multigenerational. It affects those we leave, those we bring, and those born long after resettlement. Through the action of displacement and in the subsequent retellings of the journey, families and communities begin to blur the lines between individual and collective experience, mixing together their memories of joy, challenge, and trauma. I’ve come to sit with the imperfection of my competing memories—nonlinear, atemporal thoughts that meander and meditate along the erratic threads of experience that connect me and my ancestors to the places we’ve inhabited.\n" +
            "\n" +
            "In my series, “Homecoming,” I was particularly interested in examining how memories are carried in our bodies and in the land, how they inform our ability to find belonging in new places, and how queer bodies complicate these processes. The works in this series are lens-based abstract digital paintings that expose the entanglement of my own memories and inherited ones. Yet time decays and transforms thoughts as we bear it from the past into the present. Our bodies are the substrate for memory’s longevity even as it changes and adapts to our form—our behaviour, our physique, our Asian-ness, and our queerness. In creating these pieces, I wanted to honour the complexities of my family and my community’s past. Simultaneously, I wished to acknowledge my own identities which serve as the vessel for these fractured histories.",
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
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/aPalaceForMyForefathers.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/homecoming.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/pathfinding.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/stifle.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Geoff/towardAMemory.jpg")}" class="object-contain h-screen"/>`,
            },
        ],
    },
    artist11: {
        idx: 11,
        format: AllowedFormats.Text,
        visible: false, // set to false for now
        artist_name: "Jeff Chow Jung Sing 重昇",
        ins_handle: ["@dun.a.way"],
        quote: '“How dance music\'s history is shaped by race and de-racialization, and what additional perspectives being a Queer Asian can contribute to the conversation.”',
        bio: "Arts admin by day and deep house DJ by night, Jeff Chow is a creative gatherer that works between the mediums of DJ-ing, writing, teaching, and designs, and draws inspiration from his queer, migrant, working class experience. Originally from Hong Kong, Jeff moved to Hamilton, Ontario to pursue education but left defeated in spite.",
        topic_name: "Body Politics",
        quote_bg_url: '',
        collection_title: "Queer Asians on the Dancefloor",
        directory: "",
        description: "Jeff is interested in exploring how Asian and queer  —respectively and collectively — contest the genre of electronic dance music (e.g. house, techno, etc.) and the dance floor. The history of dance music is undeniably racialized with roots of underground music within queer Black and Latino populations in New York, Chicago, and Detroit; and also de-racialized through the the whitewashing and commodification of dance music since the late 90s. What more conversations does being a Queer Asian, specifically, bring to the conversation? What does that Queer Asian sound sound like on the dance floor? What does coalition sound like on the dancefloor and what conditions are we creating to reach that? Jeff accepted our invitation to write an essay, In an attempt to address these questions.",
        excerpt1: "Having been raised in Hong Kong for twenty-something years, I only learned about my Chineseness and Queerness when I moved to Canada four years ago. Growing up I was never asked the question Where are you from? Thinking back, there is a certain *thinginess* that comes with the migration process and spending the last few years in suburban Ontario. It all felt like a third puberty — learning how to swim again but this time in olive oil. Breathing at first was hard but as the old saying goes, you get used to it.",
        excerpt2: "The scholar Kathryn Bond Stockton writes about how queer child “grows sideways”,because queer life often defies the linear chronology of marriage and children. Stockton also describes children of color as growing sideways, since their youth is likewise outside the model of the enshrined white child. I have been thinking about how Queer Asian comes to their reckoning through a meandering fuckery of sideways and straightways and sideways. We are being told we fit in and that we can assimilate, yet we are different because of our queerness; we have been told that Asians in America have it good despite our realities tell us otherwise. Where is the Queer Asian heading?",
        link:"https://jeffjungsingc.notion.site/Bitten-Peach-Submission-Queer-Asians-on-the-Dancefloor-5dfaf0bca4f34e5d85f146280385fce2",
        artworks: {
            art1: {
                name: "Queer Asians on the Dancefloor",
                year: "",
                medium: 'Text',
                file_name: 'https://jeffjungsingc.notion.site/Bitten-Peach-Submission-Queer-Asians-on-the-Dancefloor-5dfaf0bca4f34e5d85f146280385fce2',
            },
        },
    },
    artist13: {
        idx: 13,
        format: AllowedFormats.Video,
        visible: false,
        artist_name: "Muchen Zhou / Erin Zhou",
        ins_handle: ["@sailphototo", "@shallisailnow"],
        quote: '“My friends and I encounter challenges related to upholding the family lineage, showing filial piety, and respecting parental authority, which may not be commonly experienced by the queer community in Western cultures.”',
        bio: 'I\'m Muchen, a photographer and videographer. When I was little, both still photos and movie scenes astounded me. Throughout my growing process, photos, movies, and drawing have all been present. Visual pictures have been my main tool to explore my internal expression during my developing process, but more crucial for me right now is to use my works as a medium to resonate with the outside world. Images affect me both consciously and unconsciously throughout my life. I was able to get through some of my darkest years with the diversion of making art out of photographs. I couldn\'t have found it anyplace else, but it gave me the consciousness and voice I needed.',
        topic_name: "Body Politics",
        quote_bg_url: require("@/assets/BodyPolitics/Muchen/MuchenQuoteBackground.jpg"),
        collection_title: "Yang",
        directory: "",
        description: "As the artist and filmmaker of the experimental video \"Yang,\" I delved into the personal experiences and challenges faced by my dear friend Yang. Through a combination of montages and interviews, I aimed to capture the essence of Yang's reflections on his journey, intertwined with his deeply personal explorations of his life experiences.\n" +
            "\n" +
            "The left channel of the video presents a series of carefully curated montages, each with its distinct color pattern. These montages visually represent Yang's life, showcasing various aspects of his personal experiences in an abstract manner. As the colors shift and change, viewers are invited to join Yang on his journey of self-discovery and personal growth.\n" +
            "\n" +
            "The right channel of the video documents my intimate interview with Yang, using both a digital camera and VCR. Through this interview, Yang shares his personal perspective on the challenges of being both Chinese and gay, including the pressure to uphold the family lineage, show filial piety, and respect parental authority.\n" +
            "\n" +
            "\"Yang\" is a deeply personal and intimate work that offers a glimpse into the complex and often challenging experiences of those navigating the intersection of cultural identity and sexual orientation.",
        artworks: {
            art1: {
                name: "Yang",
                year: "",
                medium: 'Film',
                file_name: "https://www.youtube.com/embed/_Of_jsCjsM0",
            },
        },
    },
    artist14: {
        idx: 14,
        format: AllowedFormats.Image,
        visible: true,
        ins_handle: ["@dj.esl"],
        artist_name: "Sophie Stiquée",
        quote: '“As an Asian African who grew up in Mauritius and later immigrated to Toronto… I have experienced the challenges and complexities of balancing these two distinct parts of my identity.”',
        bio: 'Sophie Stiquée is a talented multidisciplinary artist based in Toronto. As a skilled DJ, Sophie has been making waves in the local music scene, delivering electrifying sets and captivating audiences with her unique style. With a background in classical piano, Sophie brings a unique touch to her performances, often incorporating live instrumentation into her sets. Sophie is also a successful drag performer, known for her dynamic stage presence and ability to connect with audiences.',
        topic_name: "Body Politics",
        quote_bg_url: require('@/assets/BodyPolitics/Sophie/04.jpg'),
        collection_title: "Moments of Sophie Stiquée",
        directory: "/assets/BodyPolitics/Sophie",
        description: "Sophie Stiquée (credit: Ryan Tremblay)\n" +
            "This photograph captures a bold and impactful representation of Sophie Stiquée's identity as a queer Asian African immigrant of color in the midst of the COVID-19 pandemic. By transforming COVID-19 masks into a striking outfit, Sophie sends a powerful message of resistance and empowerment in the face of xenophobia and discrimination.\n" +
            '\n' +
            "Sophie Stiquée at Pride Québec\n" +
            "As a Francophone queer immigrant of color, Sophie Stiquée's performance at Pride Québec represents a powerful moment of visibility and representation for individuals who share similar identities and experiences. The photograph, taken during Pride Month at Place d'Youville (an iconic Quebecois landmark and blocks away from Quebec City's gay village), captures the joy and celebration of this euphoric moment. \n" +
            '\n' +
            "Sophie Stiquée at Buddies in Bad Times Theatre\n" +
            "After an electrifying performance to the beats of house music legend Adeva, Sophie Stiquée is seen greeting their chosen family and friends who have come to support them at Lady 5 in the Hold drag pageant. This iconic event takes place at Buddies in Bad Times Theatre, the oldest 2SLGBTQIA+ theatre in Toronto's village and represents a profound moment of community, love, and celebration. Let this photograph serve as a reminder of the importance of chosen family, community, and representation in creating a more just and equitable world for all.\n" +
            '\n' +
            "Sophie Stiquée at Toronto Pride\n" +
            "This photograph, taken by Ryan Tremblay during Toronto Pride, captures a historic moment in which Sophie Stiquée becomes the first Asian-African drag DJ to perform on the international stage.\n" +
            '\n' +
            "Sophie Stiquée with her chosen family (credits: Brock Tremblay)\n" +
            "This photograph documents a powerful moment of community and celebration within Toronto's 2SLGBTQIA+ community. Moments after the It's All Queer Cycle Show, a showcase of queer drag and burlesque artists of color hosted by Sophie's drag mentor and mom, Tygr Willy, the photograph depicts Sophie surrounded by her drag siblings - Sebastian Urmom, Delirios, and Cyanide. This photograph is significant as it showcases the importance of chosen family and community within queer culture. The presence of Tygr Willy, an Asian-indigenous non-binary drag and burlesque artist, as Sophie's drag mentor/mom, highlights the intergenerational and intersectional nature of queer culture and the power of mentorship and support within marginalized communities.",
        artworks: {
            art1: {
                name: "Sophie Stiquée (credit: Ryan Tremblay)",
                year: "",
                medium: "Photography",
                file_name: "01.jpg",
            },
            art2: {
                name: "Sophie Stiquée at Pride Québec\n",
                year: "",
                medium: "Photography",
                file_name: "02.jpg",
            },
            art3: {
                name: "Sophie Stiquée at Buddies in Bad Times Theatre",
                year: "",
                medium: "Photography",
                file_name: "03.jpg",
            },
            art4: {
                name: "Sophie Stiquée at Toronto Pride",
                year: "",
                medium: "Photography",
                file_name: "04.jpg",
            },
            art5: {
                name: "Sophie Stiquée with her chosen family (credits: Brock Tremblay)",
                year: "",
                medium: "Photography",
                file_name: "05.jpg",
            },
        },
        slides: [{
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/01.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/02.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/03.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/04.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Sophie/05.jpg")}" class="object-contain h-screen"/>`,
            },
        ],
    },
    artist12: {
        idx: 12,  // for internal use
        format: AllowedFormats.Image,
        visible: true,
        artist_name: "Theysi Queers",
        ins_handle: ['@gayle_1.jpg', '@sohmusoblue', '@immaterialgir7', '@cold__heat', '@anikazulfikar', '@bisma_jayy', '@thatmeanhag', '@the_khalnaik', '@kinjxl'],
        quote: '“Being queer and South Asian can often feel like two diverging identities that are difficult to navigate simultaneously especially if you\'re also an immigrant.”',
        bio: 'Theysi Queers is a collective of artists, dreamers, makers, and creators in Tkaronto, dreaming of queer futures and realities in the South Asian diaspora. Their mission is to visualize for you the joy of the realities we live in. They want to make real and give flesh to queer daydreams. \n' +
            '\n' +
            'Each season, they will work within a theme to bring you a photo series showcasing collaborative talents of models, stylists, set designers, photographers, and all kinds of artists, and demonstrate what inspires them.\n' +
            '\n' +
            'This season, they look to the written word for inspiration. They are lifting queer stories from the page and bringing you images inspired by our favourite stories.',
        topic_name: "Body Politics",
        collection_title: null,
        quote_bg_url: require('@/assets/BodyPolitics/Theysi/6WhoWeAre.jpg'),
        description: "Theysi Queers is a collective of artists, dreamers, makers, and creators based in Tkaronto. Our vision is to imagine queer futures and realities within the South Asian diaspora.\n" +
            "\n" +
            "Our mission is to share with you the joy and beauty of the realities we live in. We strive to give flesh to our queer daydreams and create art that represents the multifaceted experiences of the LGBTQ+ community.\n" +
            "\n" +
            "As Alok Vaid-Menon once said, \"Whose standards of authenticity are we being held up to in the first place?\" We often find ourselves questioning the lack of vocabulary to describe what we feel for our chosen family, our support system. We reject the idea of being labeled as heterosexual versus homosexual, girl versus boy, sexual versus platonic and instead embrace the diversity of human experiences and identities. Our goal is to celebrate and honor the different forms of love that exist in our lives.\n" +
            "\n" +
            "In these uncertain times, it is crucial to examine our authentic selves and support each other in becoming our true selves. We believe in teaching and encouraging young people to question the world around them and to embrace their unique identities. As Samra Habib wrote in her book, \"We Have Always Been Here: A Queer Muslim Memoir,\" \"Not everyone is equipped for activism in the traditional sense—marching, writing letters to officials—but dedicating your life to understanding yourself can be its own form of protest, especially when the world tells you that you don't exist.”\n" +
            "\n" +
            "Unlearning can be a challenging and exhausting process that requires a lot of support. We want to remind you that we are here for you and that we will continue to create art that represents and celebrates the diversity of our community." +
            "\n" +
            "\n" +
            "Artwork Titles: \n" +
            "1. Giovanni's Room by James Baldwin (1956)\n" +
            "Featuring Gayle (@gayle_1.jpg, 24, she/they) on the left and Sohini (@sohmusoblue, 24, she/they) on the right. Photographed by Zelina (@cold__heat, she/her). Styled by the ethereal Shradha (@immaterialgir7, she/they). \n" +
            "\n" +
            "2. A Suitable Boy by Vikram Seth (1993)\n" +
            "Featuring Aarti Vasudevan (they/she/he, 22) on the left and Shradha (@immaterialgir7, she/they, 22) on the right. Photographed by Zelina (@cold__heat, she/her). Styling and creative direction by Sohini (@sohmusoblue, she/they) and Shradha (@immaterialgir7)\n" +
            "\n" +
            "3. We Have Always Been Here: A Queer Muslim Memoir by Samra Habib (2019)\n" +
            "Featuring Anika Zulfikar (@anikazulfikar, she/her) and Bisma Jay (@bisma_jayy, they/them). Photographed by Zelina (@cold__heat, she/her) along with Bisma (@bisma_jayy) and Sohini (@sohmusoblue). Self-styled. Creative direction: Sohini (@sohmusoblue) \n" +
            "\n" +
            "4. Beyond the Gender Binary\n" +
            "Featuring nora (@thatmeanhag, they/he, 15) on the right and Malav (@the_khalnaik, he/they, 30) on the left. Photographed by the wonderful Zelina (@cold__heat, she/her). Styling and creative direction by Gayle (@gayle_1.jpg, she/they) and Sohini (@sohmusoblue, she/they)Recreating Alok Vaid-Menon’s Beyond the Gender Binary \n" +
            "\n" +
            "5. Biker Gang Baddies\n" +
            "Featuring Gayle (@gayle_1.jpg, she/they), Zuhayr (they/them), nf (they/them), Kinu (@kinjxl, he/they) and Bisma (@bisma_jayy, they/them).\n" +
            "\n" +
            "6. Who We Are",
        directory: "/assets/BodyPolitics/Theysi",
        artworks: {
            art1: {
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
                content:`<img src="${require("@/assets/BodyPolitics/Theysi/1GiovannisRoom.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                image:require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BodyPolitics/Theysi/2ASuitableBoy.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                image:require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BodyPolitics/Theysi/3WeHaveAlwaysBeenHere.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                image:require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BodyPolitics/Theysi/4BeyondtheGenderBinary.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                image:require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BodyPolitics/Theysi/5BikerGangBaddies.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                image:require("@/assets/bg.svg"),
                content:`<img src="${require("@/assets/BodyPolitics/Theysi/6WhoWeAre.jpg")}" class="object-contain h-screen"/>`,
            },
        ],
    },
    artist17: {
        idx: 17,
        format: AllowedFormats.Video, // embedded video
        visible: true,
        ins_handle: ["@sherlchen"],
        artist_name: "Sidi Chen",
        quote: '“[T]he intersectionality of the queer and east Asian diaspora identities roots in how the body becomes an archive of the distances and relations...”',
        bio: 'Sidi Chen is a queer artist in diaspora whose interdisciplinary performance-based practice interrogates the entangled relations held within the collective bodies that are communal, ecological, and planetary. Through his practice, Chen explores subjects of queer diaspora, intergenerational migration, social and environmental shifting to understand and cultivate an Earthly empathy. \n' +
            '\n' +
            'Sidi Chen has been participating in a wide range of residencies, exhibitions, performances, and projects in North America and is currently completing the Master of Fine Arts Program at Emily Carr University of Art + Design (Spring 2023). Chen Sidi Chen is also an independent arts administrator and research for arts-based community development, and is currently residing on the traditional, ancestral, and unceded territories of the xʷməθkwəy̓əm (Musqueam), Skwxwú7mesh (Squamish), and Səl̓ílwətaʔ/Selilwitulh (Tsleil-Waututh) First Nations, known as Vancouver, BC.',
        topic_name: "Body Politics",
        quote_bg_url: require('@/assets/BodyPolitics/Sidi/MirageRaftCover.jpg'),
        collection_title: "Mirage Raft (The Dream Talking Oyster)",
        directory: "", // no directory since it's a video on Youtube
        description: "Mirage Raft (The Dream Talking Oyster) interrogates my own diasporic experience and queer identities by emphasizing the hermaphroditic bodies of oysters and their habitational behaviors that respond to the tidal cycle and planetary rotations. Using an acoustic device, I compose the music through the texture of the oyster shell which has accompanied me through my diasporic journey for nearly 10 years. Every physical movement is captured in the musical score so that the visual and auditory composition is an imaginative representation of the oyster’s absent body. By residing my body inside the oyster shell, I reference the Chinese classical story of Chuang Chou’s Dreaming a Butterfly (庄周梦蝶) to consider if it was the oyster dreaming of me or if I was becoming the oyster, and in doing so I ultimately question the subjectivity of the diasporic experience and find a kinesthetic empathy that transforms the boundaries of the bodies.",
        artworks: {
            art1: {
                name: "Mirage Raft (The Dream Talking Oyster)",
                year: "",
                medium: "Digital Video",
                file_name: "https://www.youtube.com/embed/ASOwIWN4Kvs",
            }
        },
    },
    artist23: {
        idx: 23,
        format: AllowedFormats.Video, // embedded video
        visible: true,
        artist_name: "Jasmine Liaw",
        ins_handle: ["@jasmineliaw_"],
        quote: '“Am I Asian enough within the Hakka Asian diaspora? Am I queer enough within my own physical experience and externalization?”',
        bio: "Jasmine Liaw is a queer emerging Chinese-Canadian interdisciplinary artist in dance performance, new media art, and experimental film. Bicoastal, she is based in so-called Toronto and Vancouver. Her practice explores the complexities of her contemporary views of Hakka diaspora, queerness, and environmental anxiety. She is the Artistic Associate of Chimerik 似不像 Collective, working in interdisciplinary research and creation, and a member of Shoes Off Collective, an emerging artist community centred within the Asian Diaspora. In 2020, she graduated with Distinction at the Conteur Academy in Toronto. Her recent collaborations and presentations include RT Collective Commission Film Program in partnership with Toronto Dance Theatre, in conjunction with Chimerik's project \"Ritual Spective,” Frog in Hand's touring Full Body Exhibit, adelheid dance projects, Chimerik/Theatre Passe Muraille: Digital Creators Lab, Gallery TPW's The Parkettes Projects with Ronnie Clarke, Rumble Theatre, Dawson City International Film Festival, Florence Contemporary Art Gallery, and Quarantine Qapsule partnered with Emily Carr University Library, Lonely Artists Productions, and Myseum of Toronto. She is a 2022 Artworkx Toronto Spotlight Artist. Jasmine is the first Artist-in-Residence of F-O-R-M Recorded Movement Society's Technology and Interaction Program in partnership with Charles Street Video exploring her latest installation work, calling tidal.",
        topic_name: "Body Politics",
        quote_bg_url: require('@/assets/BodyPolitics/Jasmine/XinniCover.jpg'),
        collection_title: "xīn nī 廖芯妮 (understanding you)",
        directory: "", // no directory since it's a video on Youtube
        description: "As an intimate auto-ethnographic, experimental visual poem and moving-portrait, xīn nī 廖芯妮 explores the ancestral and dance-technological embodiments when retracing familial relationships within intergenerational conversations. Bridging the gaps surrounding my Chinese given name and its Hakka translation, this linguistic divide is common in Western diaspora culture, and navigating these marginalized displacements through my contemporary dance practice has created space for healing. I often feel inside and outside of my Hakka culture, as I also question my understanding of queer culture and its intersectionalities. \n" +
            "\n" +
            "Am I Asian enough within the Hakka Asian diaspora? Am I queer enough within my own physical experience and externalization? These themes of decolonizing queerness resonate with how I exist within and challenge the queer Asian diaspora. The film’s physical bending of binaries, as a reactionary connection to ancestral stories and responsive gestural communication devices, lean into the queer self-love and self-curiosity. Queering diasporic culture allows me to exist intimately, experiment with the body sensorially, and investigate the phenomenological consciousness of my queer and cultural displacement. Holding space and appreciation for my elders’ storytelling supports the growing-web of my ancestral knowledge through physical listening exchanges with my family and in my community.",
        artworks: {
            art1: {
                name: "xīn nī 廖芯妮 (understanding you)",
                year: "",
                medium: "Auto-ethnographic, experimental visual poem and moving-portrait", //mod: this video url is not available for html embedding. Need to ask artist to replace.
                file_name: "https://player.vimeo.com/video/809597831?h=48207ec787&badge=0&autopause=0&player_id=0&app_id=58479"
                // file_name: "https://vimeo.com/manage/videos/809597831/48207ec787",
            }
        },
    },
    artist24: {
        idx: 24,
        format: AllowedFormats.Image,
        visible: true,
        artist_name: "Makoto Chi",
        ins_handle: ["@makoto.chi", "@ma__ko__to___"],
        quote: '“As a diasporic trans person, I situate myself in an ever-moving process of embodying and making many truths and contradictions in a culture that loves rigid binaries.”',
        bio: 'Makoto (he/him) is a visual artist from diasporic Ashkenazi and Yonsei Nikkei heritages. Chi grew up in the unceded lands of the xʷməθkʷəy̓əm , Sḵwx̱wú7mesh , and səlilwətaɬ Nations, colonially known as Vancouver. This land base informs much of his work and thought, especially that of being a mixed-race person amongst other racialized people of different ways of being in the world. Chi began dabbling in commercial art in his young teens after artistically gestating in early internet forums. Simultaneously, he started tattooing in a small apartment in the Chinatown neighborhood. He has since gained a BFA in Illustration from Emily Carr University in 2015, and has been cultivating an 18-year internationally recognized tattoo practice - he also takes part in commercial exhibits across turtle island and beyond. Makoto Chi currently lives at Lupinewood Collective, a queer collective housing project in so-called western Massachusetts. He is cultivating slow practices and making art that addresses sexuality amidst rising fascism, about lineage, and unanswerable questions about solidarity and strife in the overlapping communities he experiences.',
        topic_name: "Body Politics",
        quote_bg_url: require('@/assets/BodyPolitics/Makoto/YinYang.jpg'),
        collection_title: null,
        directory: "/assets/BodyPolitics/Makoto",
        description: 'There is an essay by Kai Cheng Thom wherein she states that performing funerary traditions as the eldest “son” did not undo her gender or femininity, because by inhabiting the rites of her ancestors she is showing up fully and honestly. That holding of many truths and contradictions in a culture that loves rigid binaries is where I situate myself -sometimes in comfort, sometimes not - as a mixed-race, transgender queer person. Ideas around ‘Eastern’ or ‘Western’ ways we must show up in the world have, at times, felt like toys, like shelter, and sometimes like cudgels. It is a beautiful space to inhabit, and it is also quite lonely, and I see that loneliness in my communities. Relatedly, the eurocentric lens deftly severs our sense of lineages, spiritualities and relationships with the land. Much of my art is in practicing a type of grief over my own busted connections to the peoples and lands of my predecessors, with the lands I have been born on — and reaching out to find others like me, carving pathways towards ourselves and each other.\n' +
            '\n' +
            'My newer work is the result of ruminating about blood lineage, frayed thoughts about my family and non-blood community, and trying to find ritual acknowledgement of my connection to these relationships. What does it mean to be inherently connected with one’s ancestry? How can this relationship be reconciled when it is likely that my predecessors colonized the ancestors of my loved ones? How do we metabolize that shame? When I am with my comrades, what should I do with these conflicting feelings that we must hold each other close to survive while and at times have extraordinarily hostile conflicts that result in and come from multi-generational traumas? I\'m thinking a lot about the pureness of anger too: anger that has no place to go, that is passed from parent to child, lover to friend, and is absorbed into the collective miasma. Unseen and unaffirmed, the anger turns inward to our spirits and seeps from our mouths and fingertips to touch the people that we want to care for. I\'ve been finding peace by filling the picture space with multiple figures either in combat and/or intimacy. Some of my most cherished relationships and deepest betrayals have been with people who look like me, so I work through that on the canvas or the page. \n' +
            '\n' +
            'To some of us diaspora, the homelands of shared identity can feel like a clear pool of water in a desert. Often it is, and sometimes it is a mirage. One of the traps of colonial thinking is to assume that finding a space populated by people like us will end a type of diasporic loneliness intrinsic to having fragmented and complex identities. I don’t believe a place of perfect mirrors of ourselves and healing exists, and I feel my heart reaching for it, while also resisting assimilation. The figures in my work echo this tension, and are in a cycle of looking for community, losing community, being in conflict and mending all in the same picture frame. I use masks and chimeric elements to indicate a sense of sameness and the grace needed to connect across grave differences. In my art I also think a lot about queer (white) culture in the colonized West and how inescapable it has been to my own sense of self, in particular how I conceive of my sexuality and desire. In my work I try to stare the Eurocentric gaze directly instead of avoiding it, because it is a part of me, and I don’t think it can be cleaved off without losing important parts of myself: like any trauma it is something to grow around instead of bury. The sexuality in my art takes the orientalist gaze and twists its form into something self-made, hedonistic, gay and proudly monstrous.',
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
                content: `<img src="${require("@/assets/BodyPolitics/Makoto/Comets.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Makoto/TwoSnakes.jpg")}" class="object-contain h-screen"/>`,
            },
            {
                content: `<img src="${require("@/assets/BodyPolitics/Makoto/YinYang.jpg")}" class="object-contain h-screen"/>`,
            },
        ],
    },
};