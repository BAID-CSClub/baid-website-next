<template>
  <div
    class="flex justify-center items-center flex-col h-50% w-full bg-cover"
    :style="{
      'background-image': `url(${props.image})`
    }"
  >
    <h1 class="color-white font-title text-10">
      <span>{{ props.title[0] }}</span>
      <span class="color-yellow">{{ props.title[1] }}</span>
      <span>{{ props.title.substr(2) }}</span>
    </h1>
    <a :href="props.href" class="decoration-none color-yellow">了解更多</a>
  </div>
</template>
<script setup>
const props = defineProps(['title', 'href', 'image'])
</script>
