<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import NavDropdown from '@/components/NavDropdown.vue'
</script>
<template>
    <div class="relative scroll-smooth font-open max-h-screen w-screen overflow-x-hidden">
        <div class="sticky top-0 z-20 bg-ivory">
            <div class="flex items-center justify-start lg:justify-center py-4 px-4 border-b border-stone-200/80">
                <a href="/">
                    <img src="@/assets/manifesto-logo-black.svg" class="w-6 h-6" alt="Website Logo" />
                </a>
                <p class="text-black tracking-widest ml-6">MANIFESTO</p>
                <div class="absolute right-4 text-ivory z-40">
                    <NavDropdown />
                </div>
            </div>
            <!-- Generic Breadcrumbs -->
            <div class="hidden lg:flex lg:justify-start lg:items-center lg:p-4">
                <BreadCrumbs />
                <span class="ml-4 text-sm text-stone-400/80 capitalize">
                    meet the team
                </span>
            </div>
        </div>
        <div class="min-h-screen relative bg-ivory px-6 md:px-10 lg:px-12 xl:px-16 pt-16 team-bg bg-contain bg-no-repeat bg-right-bottom">
            <h1 class="capitalize font-extrabold text-2xl md:text-3xl lg:text-5xl text-black/80">our team memebers</h1>
            <div class="py-6 grid md:grid-cols-2 gap-16 justify-start mx-auto z-20">
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team leader name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team leader name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team leader name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team leader name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team leader name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team leader name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>