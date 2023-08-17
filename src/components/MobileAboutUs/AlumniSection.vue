<template>
  <div class="section">
    <MobileTitle>{{ $t('AboutUs.Alumni.Title') }}</MobileTitle>
    <MobileCard :items="pageData.alumni" :border="false">
      <template #item="{ image, content }">
        <div class="flex">
          <p
            class="w-50% color-black p-3 h-60 box-border overflow-auto"
            v-html="content"
          ></p>
          <img :src="image" class="h-60 w-50% object-cover" />
        </div> </template
      >>
    </MobileCard>
  </div>
</template>

<script setup>
import MobileCard from '../MobileCard.vue'
import MobileTitle from '../MobileTitle.vue'

import { inject } from 'vue'
const pageData = inject('data')
</script>
