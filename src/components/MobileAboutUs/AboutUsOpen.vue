<template>
  <div
    class="fixed bg-[var(--standard-blue)] w-100vw h-100vh z-100 text-white transition-4 v-motion-fade top-0 z--1"
    v-show="display"
  >
    <div
      class="text-55vw absolute scale-110 left-50% translate--50% w-100vw top-68"
      style="
        letter-spacing: -5vw;
        line-height: 50vw;
        -webkit-text-stroke: 2vw white;
        text-stroke: 2vw white;
      "
    >
      关于<br />我们
    </div>
    <div
      class="absolute b-1.5 p-3 left-50% translate--50% bottom-15 animate-pulse"
      @click="display = !display"
    >
      了解更多>>>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const display = ref(true)
</script>
