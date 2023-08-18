<template>
  <div class="section">
    <div class="flex items-center">
      <div
        v-for="datum in pageData.data"
        :key="datum"
        class="text-center flex flex-col m-16"
      >
        <span class="text-24 font-bold font-sans">
          {{ datum.content }}
        </span>
        <p class="text-8">{{ datum.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const data = [
  {
    number: '1:7',
    'zh-CN': { name: '师生比' },
    'en-US': { name: 'Student Teacher Ratio' }
  },
  {
    number: '1:7',
    'zh-CN': { name: '师生比' },
    'en-US': { name: 'Student Teacher Ratio' }
  },
  {
    number: '1:7',
    'zh-CN': { name: '师生比' },
    'en-US': { name: 'Student Teacher Ratio' }
  },
  {
    number: '1:7',
    'zh-CN': { name: '师生比' },
    'en-US': { name: 'Student Teacher Ratio' }
  }
]
const pageData = inject('data')
</script>
