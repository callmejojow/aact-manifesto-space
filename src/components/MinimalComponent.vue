<template>
  <div>
    <div v-for="(item, index) in items" :key="index" ref="el => el && observeElement(el, index)">
      Item {{ index }}
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useScrollObserver } from "@/useScrollObserver.js";

const items = Array.from({ length: 10 }, (_, i) => `Item ${i}`);
const { startObserving } = useScrollObserver();

function onIntersection(entry, index) {
  if (entry.isIntersecting) {
    console.log("Intersecting:", index);
  }
}

const observeElement = (el, index) => {
  if (el) {
    startObserving(el, index, onIntersection);
  }
};
</script>

<style scoped>
div {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #ccc;
}
</style>
