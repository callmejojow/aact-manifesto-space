
<template class="absolute top-0 right-0">
  <div class="flex justify-end item-start p-4 z-40">
    <Menu as="div" class="relative inline-block text-left">
      <MenuButton class="">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </MenuButton>
      <transition
        enter-active-class="transition duration-100 ease-out"
        enter-from-class="transform scale-95 opacity-0"
        enter-to-class="transform scale-100 opacity-100"
        leave-active-class="transition duration-75 ease-in"
        leave-from-class="transform scale-100 opacity-100"
        leave-to-class="transform scale-95 opacity-0"
      >
        <MenuItems
          class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-stone-100 rounded-md bg-ivory/50 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-40 backdrop-blur-lg"
        >
          <div class="px-1 py-1">
            <MenuItem v-slot="{ active }">
              <a
                :class="[
                  active ? 'bg-stone-600/40 text-ivory/80' : 'text-stone-800',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]" href="/"
              >
                Home
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :class="[
                  active ? 'bg-stone-600/40 text-ivory/80' : 'text-stone-800',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]" href="/exhibitions"
              >
                Exhibitions
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :class="[
                  active ? 'bg-stone-600/40 text-ivory/80' : 'text-stone-800',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]" href="/artists"
              >
                Artists
              </a>
            </MenuItem>
            <MenuItem v-slot="{ active }">
              <a
                :class="[
                  active ? 'bg-stone-600/40 text-ivory/80' : 'text-stone-800',
                  'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                ]" href="/about_us"
              >
                About Us
              </a>
            </MenuItem>
          </div>
        </MenuItems>
      </transition>
    </Menu>
  </div>
</template>
<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
</script>