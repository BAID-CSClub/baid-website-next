<template>
  <section class="section">
    <MobileTitle>遇见BAID</MobileTitle>
    <MobileCard>
      <div class="m-5 color-black">
        <p v-html="pageData.admission_results_content" />
      </div>
    </MobileCard>
  </section>
</template>
<script setup>
import { inject } from 'vue'
import MobileTitle from '../MobileTitle.vue'
import MobileCard from '../MobileCard.vue'

const pageData = inject('data')
</script>
