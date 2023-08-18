<template>
  <div
    class="relative p-t-4 md:w-min w-full my-5"
    :style="{ 'align-self': props.pos }"
  >
    <h1 class="absolute top-0 left-10 m-0 color-black font-500 font-sans">
      {{ props.title }}
    </h1>
    <div
      class="bg-red w-25 h-8"
      :style="{ 'background-color': props.color }"
    ></div>
    <div
      class="bg-red w-1 h-8"
      :style="{ 'background-color': props.color }"
    ></div>
    <img :src="props.img" alt="" class="md:w-60 w-full h-90 object-cover" />
    <div
      class="flex md:w-60 w-full b-l-solid m-t--1 m-b-5"
      :style="{ 'border-left-color': props.color }"
    >
      <p class="m-5 h-min font-sans">{{ props.abstract }}</p>
    </div>
    <ReadMore :color="props.color" :to="props.link" />
  </div>
</template>

<script setup>
import ReadMore from '../ReadMore.vue'
const props = defineProps(['title', 'abstract', 'color', 'img', 'pos', 'link'])
</script>
