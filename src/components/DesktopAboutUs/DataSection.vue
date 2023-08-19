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

const pageData = inject('data')
</script>
