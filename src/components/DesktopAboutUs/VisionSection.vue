<template>
  <section class="section">
    <div class="flex" id="vision">
      <div class="mr-7 w-1/2">
        <img :src="homeBg1" class="max-w-full max-h-full" alt="pic1" />
      </div>
      <div class="ml-7 w-1/2">
        <div class="flex justify-end">
          <NotFancyTitle cn="愿景" en="Vision" color="blue" right></NotFancyTitle>
        </div>
        <p class="content w-90%">
          {{ $t('AboutUs.Vision.Content') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
</script>
