<script setup>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

defineProps({ slides: Array })

</script>
<template>
    <vueper-slides :slide-ratio="9 / 16" fixed-height="600px" fade :touchable="false">
        <vueper-slide v-for="(slide, i) in slides" :key="i" :image="slide.image" :content="slide.content" />
    </vueper-slides>
</template>