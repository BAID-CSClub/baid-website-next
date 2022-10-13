<template>
  <div>
    <!-- BG -->
    <HomeBackground />
    <MobileHead :img="firstImg">首页</MobileHead>
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
import HomeBackground from '../../components/MobileHomePage/HomeBackground.vue'
import MobileCard from '../../components/MobileCard.vue'
import MobileHead from '../../components/MobileHead.vue'

import firstImg from '../../assets/images/HomePage/Autumn.jpg'
</script>
