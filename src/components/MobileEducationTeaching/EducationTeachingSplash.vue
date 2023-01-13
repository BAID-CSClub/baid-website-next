<template>
  <div
    class="fixed z-10 bg-[var(--standard-red)] w-100vw h-100vh text-white top-0"
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
      教育<br />教学
    </div>
    <div
      class="absolute b-1.5 p-3 left-50% translate--50% bottom-15 animate-pulse"
      @click="
      ()=>{
        display = !display
        $emit('clip')
      }"
    >
      了解更多>>>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const display = ref(true)
</script>
