<template>
  <section class="section">
    <div id="honor" class="flex-col items-center">
      <NotFancyTitle cn="学校荣誉" en="Honors" color="blue"></NotFancyTitle>
      <div class="flex mb-10">
        <div class="mr-auto">
          <img :src="homeBg1" class="w-100%, max-w-20rem object-cover block" style="aspect-ratio: 1 / 1" alt="pic1" />
        </div>
        <div class="mx-auto">
          <img :src="homeBg1" class="w-100%, max-w-20rem object-cover block" style="aspect-ratio: 1 / 1" alt="pic1" />
        </div>
        <div class="ml-auto">
          <img :src="homeBg1" class="w-100%, max-w-20rem object-cover block" style="aspect-ratio: 1 / 1" alt="pic1" />
        </div>
      </div>
      <div class="flex items-center mt-10">
        <p class="mr-7 content w-1/2">
          {{ $t('AboutUs.Honor.Content') }}
        </p>
        <div class="ml-7 w-1/2 flex justify-end">
          <img :src="homeBg1" style="
              width: 100%;
              max-width: 30rem;
              aspect-ratio: 1 / 1;
              object-fit: cover;
            " alt="pic1" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
</script>

<style>
.honor-small-pic {
  padding: 0 2.5rem;
}
</style>
