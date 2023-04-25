<template>
    <div>
        <div class="bg-transparent flex justify-start lg:justify-center items-center py-4 px-4 lg:px-0">
            <a href="/">
                <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
            </a>
            <p class="text-black tracking-widest ml-6">MANIFESTO</p>
        </div>

        <!-- navigation -->
        <div class="lg:hidden p-4">
            <p class="text-sm text-gray-500 hover:text-gray-700">
                The Bitten Peach: Decolonizing Queer Asians
            </p>
        </div>
        <ul class="lg:hidden border-b border-gray-600 flex space-x-2 mx-4">
            <li><a href="#about">About</a></li>
            <li><a href="#sections">Sections</a></li>
        </ul>
    </div>
    <!-- end of navigation -->

    <div class="flex flex-col lg:grid lg:grid-cols-2 justify-end md:justify-start relative overflow-hidden h-full pt-4 md:pt-0">
        <div id="about" class="col-span-1 justify-self-center self-center px-8 md:px-10 lg:px-16 lg:mb-10">
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
        <div id="sections" class="col-span-1 flex flex-col lg:flex-row justify-end min-w-screen h-screen lg:w-auto lg:min-h-screen">
            <div class="transition-all ease-in ease-out duration-300 lg:shrink lg:hover:grow h-1/3 lg:h-screen bg-cover group bg-url-1">
                <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 transition-all ease-in ease-out duration-300">
                    <a href="/exhibitions/made_in_queer">
                        <span class="text-white text-4xl text-center font-thin transition-all ease-in ease-out duration-300 group-hover:opacity-100 opacity-0">MADE IN QUEER</span>
                    </a>
                </div>
            </div>
            <div class="transition-all ease-in ease-out duration-300 lg:shrink lg:hover:grow h-1/3 lg:h-screen bg-cover group bg-url-2">
                <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 transition-all ease-in ease-out duration-300">
                    <a href="/exhibitions/body_politics">
                        <span class="text-white text-4xl text-center font-thin transition-all ease-in ease-out duration-300 group-hover:opacity-100 opacity-0">BODY POLITICS</span>
                    </a>
                </div>
            </div>
            <div class="transition-all ease-in ease-out duration-300 lg:shrink lg:hover:grow h-1/3 lg:h-screen bg-cover group bg-url-3">
                <div class="w-full h-full flex justify-center items-center backdrop-brightness-50 group-hover:backdrop-brightness-100 transition-all ease-in ease-out duration-300">
                    <a href="/exhibitions/yellow_perils">
                        <span class="text-white text-4xl text-center font-thin transition-all ease-in ease-out duration-300 group-hover:opacity-100 opacity-0">YELLOW PERILS</span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style>
.bg-url-1 {
    background-image: url('../assets/curation-topic1.png');
}

.bg-url-2 {
    background-image: url('../assets/curation-topic2.jpg');
}

.bg-url-3 {
    background-image: url('../assets/curation-topic3.jpg');
}
</style>