<template>
  <div>
    <slot></slot>
    <MobileLogo animate />
    <div class="z-10 absolute top-0 splash-bg bg-white h-screen w-screen"></div>
  </div>
</template>

<script setup>
import MobileLogo from './MobileLogo.vue'
</script>

<style>
@keyframes fade {
  from {
    opacity: 100%;
  }
  to {
    opacity: 0%;
  }
}

.splash-bg {
  /* animation: fade 0.3s forwards ease-out; */
  animation-delay: 1s;
}
</style>
