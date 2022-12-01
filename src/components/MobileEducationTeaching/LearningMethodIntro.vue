<template>
  <div
    class="h-100vh w-100vw fixed top-0 left-0 z-100 flex items-center justify-center"
    v-show="display"
  >
    <div
      class="bg-black h-100vh w-100vw opacity-30% fixed top-0 left-0 z-100"
      @click="$emit('onExit')"
    ></div>
    <div
      class="bg-white w-86% h-85% z-200 b-rd-10 shadow-xl box-border p-10 overflow-y-scroll flex overflow-x-clip flex-col items-center"
    >
      <div class="text-7 text-black font-black m-b-2 w-full m-t--2">
        {{ bigtitle }}
      </div>
      <img :src="image" class="w-110% rd-5 m-b-2" />
      <div class="text-5 text-center w-105%">
        {{ description }}
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps(['description', 'bigtitle', 'display', 'image'])

console.log(props.description)
</script>
