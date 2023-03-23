<template>
  <div class="section">
    <div class="flex items-center">
      <div
        v-for="datum in data"
        :key="datum"
        class="text-center flex flex-col m-16"
      >
        <span class="text-28 font-bold font-sans">
          {{ datum.number }}
        </span>
        <p class="text-8">{{ datum[$i18n.locale].name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
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
</script>
