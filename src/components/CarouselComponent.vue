<script setup>
import { defineProps } from 'vue';
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

defineProps({ slides: Array })
</script>
<template>
    <vueper-slides :infinite="false" :bullets="false" :slide-ratio="9 / 16" fixed-height="100vh" fade :touchable="false">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :content="slide.content" :image="slide.image" />
    </vueper-slides>
</template>