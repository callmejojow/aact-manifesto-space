<template>
    <div class="bg-transparent flex justify-start lg:justify-center items-center py-4 px-4 md:px-0">
        <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
        <p class="text-black tracking-widest ml-6">MANIFESTO</p>
    </div>
    <div class="flex flex-col lg:grid lg:grid-cols-2 justify-end md:justify-start relative overflow-hidden h-full pt-4 md:pt-0">
        <div class="col-span-1 justify-self-center px-8 md:px-10 lg:px-16">
            <h1 class="text-3xl lg:text-4xl font-medium tracking-widest text-left">The Bitten Peach:</h1>
            <h1 class="text-3xl lg:text-4xl font-medium tracking-widest text-left mt-2">Decolonizing Queer Asians</h1>
            <p class="mt-4 text-sm font-thin">May 2023</p>
            <p class="text-xl my-10">
                AACT MANIFESTO is pleased to present The Bitten Peach: Decolonizing Queer Asians, a group exhibition curated by Emily Gong and Shengyu Cai.
            </p>
            <div class="flex flex-col space-y-4 leading-6 pb-4">
                <p class="font-thin">
                    Intrigued by the parallel existence of the peach in both Western and Eastern queer cultures, AACT is curating its inaugural online exhibition - The Bitten Peach: Decolonizing Queerness.
                </p>
                <p class="font-thin">
                    We are interested in the intersectionality of Asian and queer identities, and the lived experiences of these community members. The current queer cultural canon is predominantly held together by the Western gaze. Confronting the marginalization of Asian communities in contemporary queer culture, AACT invites all artists to share their experiences, existing research, and observations through artworks of various mediums. We want to impose these critical questions: is current queer theory also a colonized project of Eurocentrism? How does queer activism take place in different forms in different communities? How do we decolonize queerness?
                </p>
                <p class="font-thin">
                    We welcome diverse critical positions. Collectively, we aim to present an exhibition that celebrates broader definitions of queerness from different world views. We bite the peach together.
                </p>
            </div>
        </div>
        <div class="col-span-1 flex flex-col lg:grid-cols-3 lg:grid justify-start lg:min-h-screen">
                <div class="col-span-1 h-40 lg:h-screen bg-cover" style="background-image: url('img/curation-topic1.fd438742.png')">
                    <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <span class="text-white text-4xl text-center font-thin">MADE IN QUEER</span>
                    </div>
                </div>
                <div class="col-span-1 h-40 lg:h-screen bg-cover" style="background-image: url('img/curation-topic2.35b2c23a.jpg')">
                    <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <span class="text-white text-4xl text-center font-thin">BODY POLITICS</span>
                    </div>
                </div>
                <div class="col-span-1 h-40 lg:h-screen bg-cover" style="background-image: url('img/curation-topic3.e774224c.jpg')">
                    <div class="w-full h-full flex  justify-center items-center backdrop-brightness-50">
                        <span @mouseover="showTopic" class="text-white text-4xl text-center font-thin">YELLOW PERILS</span>
                    </div>
                </div>
        </div>
    </div>
</template>
<script setup>

</script>