<template>
  <div class="bg-cyan-9">
    <div class="section">
      <MobileTitle>数据一览</MobileTitle>
    </div>
    <div class="flex m-b-10 gap-5">
      <div v-for="items in Curriculums" :key="items" class="text-center">
        <h2 class="text-6xl m0">{{ items.data }}</h2>
        <p>{{ items.description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import MobileTitle from '../MobileTitle.vue'

const Curriculums = [
  {
    data: '1:7',
    description: '师生比'
  },
  {
    data: '1:7',
    description: '师生比'
  }
]
</script>
