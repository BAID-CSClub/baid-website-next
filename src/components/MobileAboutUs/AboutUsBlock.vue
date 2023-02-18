<template>
  <div class="p-l-2">
    <MobileCard :items="imgs" :border="false">
      <template #item="{ url }">
        <div class="bg-yellow flex justify-center items-center h-45">
          <img :src="url" alt="" srcset="" class="h-30" />
        </div>
      </template>
    </MobileCard>
  </div>
</template>

<script setup>
import MobileCard from '../MobileCard.vue'

const imgs = [
  { url: 'https://img.js.design/assets/smartFill/img347164da74c4b8.jpg' },
  { url: 'https://img.js.design/assets/smartFill/img347164da74c4b8.jpg' },
  { url: 'https://img.js.design/assets/smartFill/img347164da74c4b8.jpg' },
  { url: 'https://img.js.design/assets/smartFill/img347164da74c4b8.jpg' }
]
</script>
