<script setup>
import { defineProps } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

defineProps({ slides: Array })
</script>
<template>
    <vueper-slides class="no-shadow" arrows-outside :style="'background-color: #E4E2DD'" :infinite="false" :bullets="false" fixed-height="100vh" fade :touchable="false">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :content="slide.content" />
    </vueper-slides>
</template>

<style>
    .vueperslides__arrow {color: black;}
</style>