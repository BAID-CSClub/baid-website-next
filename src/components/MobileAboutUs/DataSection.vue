<template>
  <div class="color-white bg-[var(--standard-blue)]">
    <section class="section">
      <MobileTitle>{{ $t('AboutUs.Data.Title') }}</MobileTitle>
      <div class="flex flex-col gap-5">
        <div v-for="datum in pageData.data" :key="datum" class="text-center">
          <span class="text-24 font-bold font-sans">{{ datum.content }}</span>
          <p>{{ datum.name }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { inject } from 'vue'
import MobileTitle from '../MobileTitle.vue'
const pageData = inject('data')
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
