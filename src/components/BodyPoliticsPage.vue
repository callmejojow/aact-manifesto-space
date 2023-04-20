<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
</script>
<template>
    <div class="bg-transparent flex justify-center items-center py-4 px-4 md:px-0 border-b border-gray-200/80">
        <a href="/">
            <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
        </a>
        <p class="text-black tracking-widest ml-6">MANIFESTO</p>
    </div>
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
    <kinesis-container>
        <section class="h-screen w-screen bg-cover bg-fixed banner-url">
            <div class="w-full h-full flex flex-col items-start justify-center backdrop-brightness-50 pl-20 md:pl-14 sm:pl-10 pl-6">
                <kinesis-element :strength="10">
                    <p class="text-lg md:text-xl lg:text-2xl text-white/90">
                        The Bitten Peach: Decolonizing Queer Asians
                    </p>
                </kinesis-element>
                <kinesis-element :strength="30">
                    <p class="z-20 text-white/90 font-bold text-4xl md:text-5xl lg:text-6xl text-white text-center">
                        BODY POLITICS
                    </p>
                </kinesis-element>
            </div>
        </section>
    </kinesis-container>
</template>
<style>
.banner-url {
    background-image: url('../assets/section2-1.jpg');
}
</style>