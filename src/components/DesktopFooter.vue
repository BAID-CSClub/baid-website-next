<template>
  <footer class="w-full bg-black h-70">
    <div class="flex color-white w-full h-full justify-center items-center">
      <div class="w-50% mx-24 text-right">FOOTER CONTENT</div>
      <div class="w-50% mx-24">
        <img class="w-sm inline object-cover" :src="logoFullWhite" alt="logo" />
      </div>
    </div>
  </footer>
</template>
<script setup>
import logoFullWhite from '../assets/images/logoFullWhite.png?webp'
</script>
