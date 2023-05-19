<script setup>
import { defineProps } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

defineProps({ slides: Array })
</script>
<template>
    <vueper-slides lazy lazy-load-on-drag class="no-shadow" :infinite="false" :bullets="false" :slide-ratio="3 / 4">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content" />
    </vueper-slides>
</template>

<style>
    .vueperslides__arrow {color: black;}
</style>