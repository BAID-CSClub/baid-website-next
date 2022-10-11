<template>
  <MobileSplash>
    <MobileHeader />
    <main>
      <slot></slot>
    </main>
  </MobileSplash>
</template>

<script setup>
import MobileHeader from '../components/MobileHeader.vue'
import MobileSplash from '../components/MobileSplash.vue'
</script>
