<template>
  <div class="section">
    <div class="flex-col items-center">
      <NotFancyTitle cn="学校荣誉" en="Honors" color="blue"></NotFancyTitle>
      UNDER CONSTRUCTION
      <!-- <div class="flex mb-10">
        <div class="mr-auto pr-2">
          <img
            :src="imgJKY"
            class="w-full h-full aspect-1 max-w-xs object-cover block"
            alt="pic1"
          />
        </div>
        <div class="mx-auto px-2">
          <img
            :src="imgCIS"
            class="w-full h-full aspect-1 max-w-xs object-cover block"
            alt="pic1"
          />
        </div>
        <div class="ml-auto pl-2">
          <img
            :src="imgCambridge"
            class="w-full h-full aspect-1 max-w-xs object-cover block"
            alt="pic1"
          />
        </div>
      </div>
      <div class="flex items-center mt-10">
        <p class="mr-7 w-1/2">
          {{ $t('AboutUs.Honor.Content') }}
        </p>
        <div class="ml-7 w-1/2 flex justify-end">
          <img
            :src="imgACT"
            class="w-full h-full max-w-lg aspect-1 object-cover"
            alt="pic1"
          />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import imgACT from '../../assets/images/AboutUs/ACT.jpeg?webp'
import imgCIS from '../../assets/images/AboutUs/CIS.jpeg?webp'
import imgCambridge from '../../assets/images/AboutUs/Cambridge.jpeg?webp'
import imgJKY from '../../assets/images/AboutUs/JKY.jpeg?webp'
// import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
</script>

<style>
.honor-small-pic {
  padding: 0 2.5rem;
}
</style>
