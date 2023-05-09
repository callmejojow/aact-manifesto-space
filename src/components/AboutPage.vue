<script setup>
import BreadCrumbs from '@/components/BreadCrumbs.vue'
import NavDropdown from '@/components/NavDropdown.vue'
</script>
<template>
    <div class="relative scroll-smooth max-h-screen w-screen overflow-x-hidden">
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
        <div class="h-full overflow-hidden min-h-screen relative bg-ivory px-6 md:px-10 lg:px-12 xl:px-16 pt-16 team-bg bg-contain bg-no-repeat bg-right-bottom">
            <h1 class="capitalize font-extrabold text-2xl md:text-3xl lg:text-5xl text-black">our team memebers</h1>
            <div class="py-6 grid md:grid-cols-2 gap-16 justify-start mx-auto z-30">
                <div class="z-20 flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team member name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team member name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team member name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team member name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team member name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
                <div class="flex justify-start items-center gap-4">
                    <div>
                        <img src="@/assets/avatar.png" class="w-24 lg:w-28 w-24 lg:h-28 rounded-full object-contain" />
                    </div>
                    <div>
                        <h2 class="capitalize font-bold text-xl md:text-2xl xl:text-3xl text-black/80">team member name</h2>
                        <p class="font-semibold text-base xl:text-lg">Role/Position (Tenure)</p>
                        <p class="font-semibold text-base xl:text-lg">Visit my socials: @intagram or whatever</p>
                    </div>
                </div>
            </div>
            <div class="z-0 absolute -left-8 top-0 w-32 h-32 bg-bitten rounded-full bg-opacity-80 mix-blend-multiply overflow-hidden blur-md">
            </div>
            <div class="absolute -left-16 -bottom-16 w-[16rem] h-[16rem] bg-bitten rounded-full bg-opacity-30 mix-blend-multiply overflow-hidden blur-xl">
            </div>
            <div class="absolute -right-16 bottom-64 w-96 h-96 bg-bitten rounded-full bg-opacity-70 mix-blend-multiply overflow-hidden blur-lg">
            </div>
        </div>
    </div>
</template>