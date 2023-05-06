const AllowedFormats = {
  Image: "image",
  Video: "video",
  Text: "text",
}

export const madeInQueer = {
  artist1:{
    idx: 1,  // for internal use
    format: AllowedFormats.Image,  // for rendering
    visible: true,
    artist_name: "Rising Lai",
    ins_handle: ["@loveintersectionsm", "@davidngstagram", "@jensungshine"],
    quote: '“I am a Taiwanese, a Hakka, and a homosexual person. Growing up and living with the conflicting histories that these identities bring, I was challenged to live with frictions and contradictions, of which I am proud.”',
    bio: 'As a designer and artist with a background in Industrial Design and a Master\'s in Fine Art & Design, Rising Lai (they/them) brings a unique global perspective to their art and design. Born and raised in Taiwan before relocating to Rotterdam, Rising is dedicated to exploring the stories and complexities of human creations, from industrial products to cultural artefacts.\n' +
        '\n' +
        'But there is more to Rising\'s art and design practice than meets the eye. Deeply rooted in their own experiences as a queer individual in society, Rising uses their work to challenge normative definitions of gender and create a world without discrimination. Through a framework and guide for researching material culture and demonstrating theoretical concepts through craft, Rising focuses on traditions, folk culture, and craftsmanship to invite viewers to consider the deeper meanings and significance behind the materials and artefacts that shape our world.\n' +
        '\n' +
        'Whether through their crafted objects or thought-provoking installations, Rising Lai\'s work invites viewers to explore the deeper complexities of human creations and the impact they have on society.',
    topic_name: "Made in Queer",
    quote_bg_url: require('@/assets/MadeInQueer/Rising/FullPieceOpenFramework.jpg'),
    collection_title: "Crafting Desire: Queering",
    description: "The project 'Crafting Desire: Queering the Red Sleep Bed' highlights the intersectionality of culture and sexuality in the Taiwanese context. 'Crafting Desire: Queering' acknowledges the problematic ideology within the material culture and provides a solution to break down the patriarchal system. It deconstructs the power structures embedded in the bed norm and rebuilds a queer heritage that reflects Taiwan's diverse and inclusive values nowadays.\n" +
        "\n" +
        "Firstly, by analysing the expression in the crafting of the Red Sleep Bed, the project recognises the oppressive stories that the bed carries and how it was used to promote gender stereotypes, patriarchy, fertility, and heteronormativity. Secondly, queering the Red Sleep Bed reclaims and transforms a traditional artefact, in an attempt to embrace gender diversity.\n" +
        "\n" +
        "This work encourages viewers to reflect on binary thinking and recognise the experiences of queer Asians. By contextualizing traditional household furniture, this project explores the possibility of decolonizing queer Asians through the lens of materiality and craftsmanship.\n" +
        "\n" +
        "The accompanying video for this series can be viewed  <a href='https://www.youtube.com/watch?v=0i8i-kE3qH0'>here</a>.",
    directory: '/assets/MadeInQueer/Rising',
    artworks: {
      art1: {
        name: "Small Models",
        year: '',
        medium: "",
        file_name: "SmallModels.jpg",
      },
      art2: {
        name: "Full Piece Assembled",
        year: '',
        medium: "",
        file_name: "FullPieceAssembled.jpg",
      },
      art3: {
        name: "Foundation",
        year: '',
        medium: "",
        file_name: "Foundation.jpg",
      },
      art4: {
        name: "Carving Set",
        year: '',
        medium: "",
        file_name: "CarvingSet.jpg",
      },
      art5: {
        name: "Full Piece Open Framework",
        year: '',
        medium: "",
        file_name: "FullPieceOpenFramework.jpg",
      },
    },
    slides:[
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/SmallModels.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/FullPieceAssembled.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/Foundation.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/CarvingSet.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Rising/FullPieceOpenFramework.jpg")}" class="object-contain h-[48rem]"/>`,
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
    bio: 'Gillian Lapuz is an interdisciplinary artist based in Toronto, Canada. Lapuz is currently completing his BEd at the University of Windsor in the intermediate/senior level with teachables in Visual Arts and General Social Science. Lapuz’ body of work revolves around investigating and developing facets of queer identity. His interest in connection and relationship has ventured into a material based practice that examines personal intersecting aspects of love, fear and humour. Inspired by the material process of developing work, Lapuz attempts to render queer imagery through print, textiles, illustrations and wearable art. Lapuz completed his BFA undergraduate studies at OCADU majoring in Printmaking and minoring in Material Arts and Design: Textiles.',
    topic_name: "Made in Queer",
    quote_bg_url: require('@/assets/MadeInQueer/Gillian/group.jpg'),
    collection_title: "Joker: Wildcard",
    description: "This mini collection was created during my online artist residency with Brampton Arts Organization (formerly known as ACCIDA - Arts, Culture, & Creative Industry Development Agency). Joker: Wildcard, features seven garments accompanied with unique wheat pasted, cardboard masks. Each of the garments was created from thrifted materials including bedsheets and curtains. \n" +
        "\n" +
        "While conducting material research during this residency, I wanted to explore the bridges between queer theory and adorning the queer body. Using textiles as the medium to showcase my intersectional identities, I attempted to create a framework of understanding my perspective of what it meant to be a queer, Filipino artist and translate queer theory into material practice. \n" +
        "\n" +
        "I often feel ostracized from my familial and Catholic upbringing for being queer, but also not feeling queer enough in relation to the Eurocentric vision of exploding queerness. Finding myself in a dichotomy that does little to explain and showcase my own experiences, I used this series as a portal to explain wanting to explore gender and sexuality beyond the conventional standards of beauty. Each of these garments, although dull in color palette, is filled with character and personality. There is a connection between the horrors of feeling excluded and the humors of living authentically. In other words, there is a connection between all my identities and my understanding of queerness cannot be removed from my religious background, my familial values, and the love I have for each of my communities. It is difficult to explain my version of being queer without also addressing feelings of fear and joy in conjunction with each other.",
    directory: '/assets/MadeInQueer/Gillian',
    artworks: {
      art1: {
        name: "Individual 1",
        year: '',
        medium: "",
        file_name: "1_2.jpg",
      },
      art2: {
        name: "Individual 2",
        year: '',
        medium: "",
        file_name: "2_2.jpg",
      },
      art3: {
        name: "Individual 3",
        year: '',
        medium: "",
        file_name: "3_3.jpg",
      },
      art4: {
        name: "Individual 4",
        year: '',
        medium: "",
        file_name: "4_2.jpg",
      },
      art5: {
        name: "Individual 5",
        year: '',
        medium: "",
        file_name: "5_2.jpg",
      },
      art6: {
        name: "Individual 6",
        year: '',
        medium: "",
        file_name: "6_2.jpg",
      },
      art7: {
        name: "Individual 7",
        year: '',
        medium: "",
        file_name: "7_2.jpg",
      },
      art8: {
        name: "Group",
        year: '',
        medium: "",
        file_name: "group.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/1_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/2_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/3_3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/4_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/5_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/6_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/7_2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Gillian/group.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist3:{
    idx: 5,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Joshua Lue Chee Kong",
    ins_handle: ["@josh_lu_studio"],
    quote: '“[M]y identity has always felt like a moving target, going back and forth between Chinese and West Indian, but also Hakka Chinese and queer. Having these multiple identities all confined to one body has always been met with confusion, amazement and wonder.”',
    bio: 'Joshua Lue Chee Kong is a Trinidadian Chinese artist based in Toronto, Canada. In 2020, Joshua graduated from OCAD University, Toronto, with a degree in the Interdisciplinary Master’s in Art, Media, and Design. His explorations of home, longing, and belonging interrogate ideas of multiculturalism and assimilation. In particular, the representation of the Chinese in Caribbean culture and its diaspora.',
    topic_name: "Made in Queer",
    quote_bg_url: require('@/assets/MadeInQueer/Josh/CeremonialVessel.jpg'),
    collection_title: "Bronze Series",
    description: "When you see my work will you ever know if I was ever gay or that I am a Trinidadian Chinese from my work without reading my bio? Does it matter to me? I am telling myself this as I write this statement. For a queer Trinidadian Hakka Chinese like myself I have lived with ambiguity my whole life when I have been told “Oh I never knew there were Chinese from the Caribbean” or “Can you just become straight again?”, which has consistently challenged my identity. As an artist, I embrace this ambiguity in my work that confronts what it means to be queer, Hakka and Trinidadian, giving myself the space to reimagine how a queer Trinidadian Hakka Chinese body would look like. Having a fluid identity, inhabiting and flowing within the hyphens between cultures, through the construction of my memories, fantasy, and experiences within these various cultural identities.\n" +
        "\n" +
        "As an artist, I deconstruct these identities and choose what to emphasize or to hide which is the reflection of the struggles I had to endure within my own body. I use the transformative aspects of bronze casting and 3D printing to capture the shifting and mixing of cultures and identities in one body. I am making space for my body, family, ancestors, and the diaspora to become part of this ongoing process of identity production. I hope my work will bring joy and happiness to future queers from the diaspora and the wider Asian community.\n",
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
    bio: 'My name is Mia and I\'m a non-binary Japanese/Chinese multifaceted creative, particularly focused in visual art, photography, illustration, graphic design, acting, and more. Currently, I am studying my Masters of Arts in Fashion at Toronto Metropolitan University, where I also received my Bachelors of Design in Fashion in 2021. Professionally, I work as a freelance/contract graphic designer and photographer and am an ACTRA member. Within both my professional and creative/personal work, I always aim to contribute to discourses that invite contemplation or critical reflection as this is a relationship I share with my own work. Art is a method of communication for me and I like to share these discussions with others and use it as a tool to get to know others, and if I can contribute to progressive change with it then that’s a bonus.',
    topic_name: "Made in Queer",
    quote_bg_url: require('@/assets/MadeInQueer/Mia/Mia2.png'),
    collection_title: "Self Portraits",
    description: "In reflection of how my work entangles with \"Decolonizing Asian Queerness,\" I acknowledge within myself that I still have much work to do inward decolonization. Being East-Asian and born in Toronto, although I may ethnically be Japanese and Chinese, I am culturally and nationally Canadian. I would categorize my identity and behaviour mostly in a Western sense drizzled and spiced with my ethnic identity and upbringing. I take much pride in my ethnic upbringing and identity, and despite my \"Canadianness,\" it still plays a big role in who I am and how I express myself.\n" +
        "\n" +
        "I often think about Asian queerness, especially in comparing Western Asian-Diasporic queerness with what the equivalent would be in Asia. As an artist and overall creative being, self-expression is inherent in everything I do. I've thought very critically about how I can be a walking representation of my people: I've gone through waves of dressing in my culture's clothing to express my cultural identity, while styling it to my tastes and adhering to my queerness. This naturally fluctuates as more elements of my identity become more pronounced on any given day, but that's just a testament to the multiplicity of what makes me, me! \n" +
        "\n" +
        "I started taking so many self-portraits as I felt there was a gap in how I wanted to be represented. Fortunately, I am already a photographer and have the basic equipment to photograph myself. So what had initially been a simple effort at expressing myself in my own photography to appease my own vision became a side-business offering (what I see as) queerified portrait services to others who wish to have quality, accessible portraits that show a side of them that cold corporate (and not queer) services can't offer.\n" +
        "\n" +
        "There is no one way to be Asian and queer and I'm happy to be able to express my ever-changing self and my evolutionary Asian-queerness through my self-portraiture and other creative works.",
    directory: '/assets/MadeInQueer/Mia',
    artworks: {
      art1: {
        name: "Self Portrait 1",
        year: '',
        medium: "",
        file_name: "MiaSelected1.jpg",
      },
      art2: {
        name: "Self Portrait 2",
        year: '',
        medium: "",
        file_name: "MiaSelected2.jpg",
      },
      art3: {
        name: "Self Portrait 3",
        year: '',
        medium: "",
        file_name: "MiaSelected3.jpg",
      },
      art4: {
        name: "Self Portrait 4",
        year: '',
        medium: "",
        file_name: "MiaSelected4.jpg",
      },
      art5: {
        name: "Self Portrait 5",
        year: '',
        medium: "",
        file_name: "MiaSelected5.jpg",
      },
      art6: {
        name: "Self Portrait 6",
        year: '',
        medium: "",
        file_name: "MiaSelected6.jpg",
      },
    },
    slides:[
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Mia/MiaSelected1.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Mia/MiaSelected2.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Mia/MiaSelected3.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Mia/MiaSelected4.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Mia/MiaSelected5.jpg")}" class="object-contain h-[48rem]"/>`,
      },
      {
        image:require("@/assets/bg.svg"),
        content:`<img src="${require("@/assets/MadeInQueer/Mia/MiaSelected6.jpg")}" class="object-contain h-[48rem]"/>`,
      },
    ],
  },
  artist5:{
    idx: 20,  // for internal use
    format: AllowedFormats.Image,
    visible: true,
    artist_name: "Marisa Yue Chuen Müsing",
    ins_handle: ["@marisamusing", "https://www.marisamusing.com/"],
    quote: '“As someone mixed-Asian and queer, both these parts of me felt really intertwined at a time where I was truly figuring out myself again after years of trying to associate myself with a facade of who I was..”',
    bio: 'Marisa Müsing (she/they) is an artist & designer from Tkaronto, Canada. She has a background in architecture, having graduated from the University of Waterloo School of Architecture (UW), and is currently pursuing her Masters of Art in Architecture at the Royal College of Art (RCA) in London, UK. Constantly driven by the process of fabrication and making, her work ranges from architecture, furniture design, 3D animations, fashion, painting and sculpture. Marisa has lectured and taught at Parsons School of Design, Harvard GSD, Rhode Island School of Design and ELISAVA. In 2018, Marisa co-founded müsing-sellés, a design and architecture studio that plays with furniture and the scalability of object creation. They have made international acclaim, presenting work in a variety of international galleries and shows. As a mixed-asian queer artist, her work focuses on concepts of body and identity, experimenting through different mediums to express feminist ideals through artistic representation. She is constantly seeking new creative ventures in multiple mediums and scales that allow for playful & beautiful interpretations of the world.',
    topic_name: "Made in Queer",
    quote_bg_url: require('@/assets/MadeInQueer/Marisa/Laced_Bodies_1.jpg'),
    collection_title: "",
    description: "Fruity Furniture\n" +
        "Growing up, celebrations around food were integral parts of my experience with my grandparents and the primary connection to my Chinese heritage. Chinese traditions around food like Lunar New Year were always very fascinating and magical. And for a short while, I would be a part of something that felt like it came from another time. Often these celebrations were performed around the living room, a central gathering space in my Pau Pau and Gong Gong’s home, as we sat in a circular fashion around the room. The Fruity Furniture ties back to these memories of family connection and food celebration because the furniture become whimsical characters. The Fruity Furniture plays with the sense of wonder that I would experience as a child around food. Designed as small seats of varying proportions, the fruit collection allows us to live out childhood dreams of having food as big as our bodies and seeing the furniture as physical characters with identities of their own. Taking the embodiment of ‘fruity’ the furniture offers levels of whimsy and wonder that also ties to queer and soft identity. They are an expression of self, characters to cherish in your home that are meant to be shared collectively. The collection includes a pear, green apple, plum, peach and berry.\n" +
        "\n" +
        "Laced Bodies\n" +
        "Being mixed-asian and queer is a tender experience, where one lives in the intersectionality of  multiple experiences but also feels a lack of community while embracing each part of one’s identity. Being part of an in-between is an odd and frail experience, where the ability to see this state of being  as something beautiful and powerful can be enriching but is sometimes hard to acknowledge. Laced Bodies is a tender lens that embodies the soft experience of feeling in-between. Through a coupling of glass ‘limbs’, the bespoke glass vessels are able to embrace through subtle bends and folds that mimic the human body. Each fold and curve of the glass reflects bodily forms while the pairing of the vessels reflects a sense of warmth through a fragile and cold material. The coupling vessels resemble a connection to community, identity, and self; their abstract forms allow the viewer to perceive their own personal reflection in the sculptures. By serving as a reminder to the body, the vessels portray the connection to self and other as a personal soft experience. Each vessel was hand-blown and shaped individually. Once cooled, the limbs were carefully assembled to match pairings to make each coupling unique. By using a natural material like glass, the vessels offer gradients of transparency, fluidity, and fragility that tie to the experience of being mixed. \n" +
        "\n" +
        "Laced Bodies was created in collaboration with design studio müsing–sellés in 2019.\n",
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
    quote: '“ By integrating storytelling with historical research and contemporary art, my practice explores the themes of symbiotic duality and paradox, such as the intersections and proximity between the East and the West.”',
    // bio: 'Eric Chengyang’s practice integrates storytelling with visual arts through the use of historical archives, museum collections, and hybrid media. Coming from a multilingual Chinese-Canadian background, their works explore the themes of symbiotic duality and paradox with a focus on the intersections and proximity between the East and the West, while challenging the conventional notion of the East-West Dichotomy. Aiming to build bridges through multidisciplinary art practices, Eric is also one-half of an artist duo called the Dawat Yan Project, co-founded with Mariam Magsi. (Pronouns: They/He)',
    bio: '',  // TODO note: the artist wishes not to share his bio for the exhibition
    topic_name: "Made in Queer",
    quote_bg_url: require("@/assets/MadeInQueer/Eric/ASplitPeach.jpg"),
    collection_title: "",
    description: "Fen-tao 分桃\n" +
        "Literal: the divided peach | Euphemism: homosexuality\n" +
        "\n" +
        "异日，与君游于果园，食桃而甘，不尽，以其半啗君，君曰：爱我哉，忘其口味，以啗寡人。 及弥子色衰爱弛，得罪于君，君曰：是固尝矫驾吾车，又尝啗我以馀桃。—— 节选于《韩非子·说难篇》 \n" +
        "\n" +
        "\"... One day, Mizi Xia and the Duke Ling of Wei were visiting an orchard. When Mizi found a tasty peach, he took a few bites; then, he gave the remainder to the Duke. The Duke was touched by the gesture and said, ‘you adore me so much that you are willing to share this tasty experience with me.’\n" +
        "\n" +
        "As both men aged, the Duke’s attraction toward Mizi diminished. On another day, when Mizi offended the Duke, the Duke responded, ‘this person has offended me several times. For example, he had used the royal chaise by forging my name and authority. Furthermore, he once offered me a leftover peach that he no longer desired’...” \n" +
        "\n" +
        "-- Excerpt taken from Shui Nan (the Difficulties of Persuasion) by Han, Feizi; Translated by Eric Chengyang\n",
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
    quote: '“Through sharing personal and collective histories, I am constantly inspired by practices of radical hospitality within the queer Asian community as a means to nurture, mobilize, transgress, and liberate.”',
    bio: 'Beau Gomez is a Filipino-Canadian visual artist based in Toronto and Montréal. His practice is informed by ideas, challenges and conversations around cross-cultural narratives, as they relate to positions of queerness and community. \n' +
        '\n ' +
        'Select exhibitions include Propeller Art Gallery, Magenta Foundation, Artspace Gallery, La Gaîté Lyrique, and TIFF Bell Lightbox. He equally devotes his time to community engagement, and has contributed to organizations including Reel Asian Film Festival, The Site Magazine, Pride Toronto/Montréal and Critical Distance Centre for Curators. In 2019, he launched Fixer, a gathering of emerging image-makers, writers and creative thinkers in an ' +
        'engaged critique on works in progress. Beau holds a BFA in Photography Studies from Toronto Metropolitan University.',
    topic_name: "Made in Queer",
    quote_bg_url: require("@/assets/MadeInQueer/Beau/YoureHereToo2.jpg"),
    collection_title: "You’re here, too",
    description: "You’re here, too is a series of intimate portraits on being and becoming. Meditative in observation and evocative in tenderness, this work is rooted in meaningful witness between sitter and image-maker, marking a shared reflection on the nuances of queer Asian experience through moments of introspection, resolve, and solitude. \n" +
        "\n" +
        "The accompanying video for this series can be viewed <a href='https://beaugomez.com/yht/wipvid001'>here</a>.",
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
    quote: '“We are queer because we dismantle and question everything that is seemingly stable.”',
    bio: 'Yichen Li and Ling Tang have worked together as an artist duo since 2020.\n' +
        '\n' +
        'Yichen Li: reading MA in Sculpture at Royal College of Art. Her field of research is smog/fog/smoke/mist sculpture. Her considers smog, smoke, and fog as living things that are fragile, subversive, ephemeral yet generous and all-encompassing.\n' +
        '\n' +
        'Ling Tang: Sociology as art and vice versa. Dr. Ling Tang is an artist academic whose art media range from academic writing, creative writing to music, photography, and film. She obtained her D.Phil. at University of Oxford and is now based at Hong Kong Baptist University. Their songs can be found on music streaming platforms (e.g. Spotify and 网易云) with the name Lyn Dawn or 唐凌.',
    topic_name: "Made in Queer",
    quote_bg_url: '',
    collection_title: "",
    description: "Penumbra asks umbra：I am a fish (罔两问景：我是一只鱼）\n" +
        "2020\n" +
        "03’07”\n" +
        "Moving Image\n" +
        "Yichen Li 李依宸 & Ling Tang 唐凌\n" +
        "\n" +
        "Between shape and shadow, there is the penumbra. In ambiguity, they ask…\n" +
        "The penumbra questions three realms: the boundaries between binary sex; the queer desire; and the inevitable anthropocentric projection. Hermaphrodite clownfish turns from orange to brown, then black and white — a process of sexual maturity. It spends its entire life waiting for the moment it becomes female, the “queen”.\n" +
        "\n" +
        "Our work is a penumbra to the world but umbra to our audiences, as they become the penumbra to ask us. We reflect on our anthropocentric projection of the queerness to the hermaphrodite clownfish, and also hope that the audiences will continue to ask…\n" +
        "\n" +
        "The Chinese instruments used in the soundtrack include Guqin, Xun and Erhu. They resonate with Zhuangzi, the classical Daoist text from which the tale Penumbra asks umbra originates.",
    directory: '',
    artworks: {
      art1: {
        name: "Penumbra asks umbra：I am a fish（罔两问景：我是一只鱼）",
        year: '',
        medium: "Digital Video",
        file_name: "https://player.vimeo.com/video/426460337?h=6a786ae515",  // already fixed
      },
    },
  },
}
