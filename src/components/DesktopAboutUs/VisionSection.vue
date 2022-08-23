<template>
  <section class="section">
    <div class="flex p-y-10" id="vision">
      <div class="pr-7 w-1/2">
        <img :src="homeBg1" style="max-width: 100%; max-height: 100%" alt="pic1" />
      </div>
      <div class="pl-7 w-1/2">
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
