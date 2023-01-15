<template>
  <MobileSplash>
    <MobileHeader />
    <main>
      <slot></slot>
    </main>
  </MobileSplash>
  <!-- <MobileFooter /> -->
</template>

<script setup>
// import MobileFooter from '../components/MobileFooter.vue'
import MobileHeader from '../components/MobileHeader.vue'
import MobileSplash from '../components/MobileSplash.vue'
</script>
