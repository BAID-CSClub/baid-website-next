<template>
  <div>
    <HomeBackground />
    <MobileHead :img="imgHeader1"></MobileHead>
    <section class="p-3">
      <MobileCard> </MobileCard>
      <MobileCard> </MobileCard>
      <MobileCard> </MobileCard>
      <MobileCard> </MobileCard>
      <MobileCard> </MobileCard>
      <MobileCard> </MobileCard>
    </section>
  </div>
</template>

<script setup>
import MobileHead from '../../components/MobileHead.vue'

import imgHeader1 from '../../assets/images/StudentLife/Header 1.jpg?webp'
</script>
