<template>
  <footer
    class="w-full bg-black h-70 mt-45px"
    :style="{ 'background-image': 'url(' + imgFooter + ')' }"
  >
    <div class="cover w-full h-full">
      <div class="flex color-white w-full h-full justify-center items-center">
        <div class="w-50% mx-24 text-right">FOOTER CONTENT</div>
        <div class="w-50% mx-24">
          <img
            class="w-sm inline object-cover"
            :src="logoFullWhite"
            alt="logo"
          />
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup>
import logoFullWhite from '../assets/images/logoFullWhite.png?webp'
import imgFooter from '../assets/images/Footer-blue.jpg?webp'
</script>
<style>
footer {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}
.cover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
