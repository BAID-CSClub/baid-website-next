<template>
  <div class="color-white bg-[var(--standard-blue)]">
    <section class="section">
      <MobileTitle>{{ $t('AboutUs.Data.Title') }}</MobileTitle>
      <div class="flex gap-5">
        <div v-for="items in Curriculums" :key="items" class="text-center">
          <h2 class="text-6xl m0">{{ items.data }}</h2>
          <p class="mt-1">{{ items.description }}</p>
        </div>
      </div>
    </section>
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
