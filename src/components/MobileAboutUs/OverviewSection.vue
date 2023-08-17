<template>
  <div>
    <MobileHead :img="imgHeader1"> {{ $t('views.AboutUs') }}</MobileHead>
    <section class="section">
      <MobileTitle>{{ $t('AboutUs.Overview.Title') }}</MobileTitle>

      <pre v-html="pageData.overview"></pre>
    </section>
  </div>
</template>

<script setup>
import MobileHead from '../MobileHead.vue'
import MobileTitle from '../MobileTitle.vue'
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg?webp'

import { inject } from 'vue'

const pageData = inject('data')
</script>
