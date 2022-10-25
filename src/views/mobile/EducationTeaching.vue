<template>
  <div>
    <HomeBackground />
    <MobileHead :img="imgHeader1">
      {{ $t('views.EducationTeaching') }}</MobileHead
    >
    <section class="p-3">TO-DO: Content Here</section>
  </div>
</template>

<script setup>
import MobileHead from '../../components/MobileHead.vue'

import imgHeader1 from '../../assets/images/EducationTeaching/Header_1.jpg?webp'
</script>
