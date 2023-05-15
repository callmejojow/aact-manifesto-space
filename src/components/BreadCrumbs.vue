<template>
  <nav class="flex" aria-label="Breadcrumb">
    <div v-if="!mainPage">
      <ol role="list" class="flex items-center">
        <li>
          <div>
            <a href="#" class="text-stone-600 hover:text-stone-800">
              <img src="@/assets/manifesto-logo-mini.svg" class="h-5 w-5 flex-shrink-0 mr-3" aria-hidden="true" alt="Website Logo" />
            </a>
          </div>
        </li>
        <li v-for="page in pages" :key="page.name">
          <div class="flex items-center">
            <img src="@/assets/arrow.svg" class="h-3 w-3 flex-shrink-0 text-stone-600" aria-hidden="true" alt="Website Logo" />
            <a :href="page.href" class="mx-3 text-sm text-stone-700 hover:text-stone-800" :aria-current="page.current ? 'page' : undefined">{{ page.name }}</a>
          </div>
        </li>
        <img src="@/assets/arrow.svg" class="h-3 w-3 flex-shrink-0 text-stone-600" aria-hidden="true" alt="Website Logo" />
      </ol>
    </div>
    <div v-else>
      <ol role="list" class="flex items-center space-x-3">
        <li>
          <div>
            <a href="/" class="text-stone-600 hover:text-stone-800">
              <img src="@/assets/manifesto-logo-mini.svg" class="h-5 w-5 flex-shrink-0" aria-hidden="true" alt="Website Logo" />
            </a>
          </div>
        </li>
        <li>
          <div class="flex items-center">
            <img src="@/assets/arrow.svg" class="h-3 w-3 flex-shrink-0 text-stone-600" aria-hidden="true" alt="Website Logo" />
          </div>
        </li>
      </ol>
    </div>
  </nav>
</template>
<script setup>
import {defineProps} from 'vue'
const pages = [
  { name: 'Exhibitions', href: '/exhibitions', current: false },
  { name: 'The Bitten Peach', href: '/exhibitions', current: true },
]

defineProps({
  mainPage: Boolean
}) 
</script>