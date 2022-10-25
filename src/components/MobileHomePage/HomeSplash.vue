<template>
  <div class="relative">
    <slot></slot>
    <div class="fixed">
      <!-- Foreground -->
    </div>
  </div>
</template>

<script setup>
import img1 from '../../assets/images/HomePage/Autumn.jpg'
import img2 from '../../assets/images/HomePage/Dongba1.jpg'

const images = [img1, img2]
</script>
