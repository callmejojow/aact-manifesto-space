<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <a href="#" class="text-gray-400 hover:text-gray-500">
            <img src="@/assets/manifesto-logo-black.svg" class="h-5 w-5 flex-shrink-0" aria-hidden="true" alt="Website Logo" />
          </a>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
          <a :href="page.href" class="ml-4 text-sm text-gray-500 hover:text-gray-700" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
        </div>
      </li>
      <ChevronRightIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
    </ol>
  </nav>
</template>
<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const pages = [
  { name: 'Exhibitions', href: '/exhibitions', current: false },
  { name: 'The Bitten Peach', href: '/exhibitions', current: true },
]
</script>