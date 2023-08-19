<template>
  <section class="section">
    <MobileTitle>{{ $t('AboutUs.Overview.Title') }}</MobileTitle>
    <pre v-html="pageData.overview"></pre>
  </section>
</template>

<script setup>
import MobileTitle from '../MobileTitle.vue'

import { inject } from 'vue'

const pageData = inject('data')
</script>
