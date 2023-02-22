<template>
  <div :class="{ 'h-screen overflow-hidden': show }">
    <slot></slot>

    <div
      class="bg-[var(--standard-blue)] fixed top-0 z-10 w-screen h-screen color-white transition-opacity-300"
      :class="{ 'op-0 pointer-events-none': !show }"
    >
      <div
        class="text-55vw absolute scale-110 left-46% translate--50% w-100vw top-68"
        style="letter-spacing: -5vw; line-height: 50vw; text-stroke: 2vw white"
      >
        关于<br />我们
      </div>
      <div
        class="absolute b-1.5 p-3 left-50% translate--50% bottom-15 animate-pulse font-sans"
        @click="show = !show"
      >
        了解更多>>>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const show = ref(true)
</script>
