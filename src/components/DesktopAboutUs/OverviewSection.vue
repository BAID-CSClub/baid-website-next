<template>
  <div class="section">
    <NotFancyTitle
      :cn="$t('AboutUs.Overview.Title')"
      en="Overview"
      color="blue"
    ></NotFancyTitle>
    <pre v-html="pageData.overview"></pre>
  </div>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
