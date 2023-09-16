<template>
  <div class="section">
    <div class="flex items-center flex-row">
      <div
        v-for="datum in pageData.data"
        :key="datum"
        class="items-center text-center flex flex-col m-24"
      >
        <div v-html="datum.icon"></div>
        <span class="text-16 font-bold font-sans">
          {{ datum.content }}
        </span>
        <p class="text-4">{{ datum.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'

const pageData = inject('data')
</script>
