<template>
  <div class="bg-cyan-9 color-white">
    <div class="section !py-2">
      <MobileTitle>数据一览</MobileTitle>
    </div>
    <div class="flex gap-5 pb-4 op-70">
      <div v-for="items in Curriculums" :key="items" class="text-center">
        <h2 class="text-6xl m0">{{ items.data }}</h2>
        <p class="mt-1">{{ items.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MobileTitle from '../MobileTitle.vue'

const Curriculums = [
  {
    data: ' ',
    description: ' '
  },
  {
    data: '1:7',
    description: '师生比'
  }
]
</script>
