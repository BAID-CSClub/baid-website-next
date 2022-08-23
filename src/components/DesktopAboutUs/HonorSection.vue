<template>
  <section class="section">
    <div id="honor" class="p-y-10 flex-col items-center">
      <NotFancyTitle cn="学校荣誉" en="Honors" color="blue"></NotFancyTitle>
      <div class="flex pt-10 pb-10">
        <div class="honor-small-pic">
          <img :src="homeBg1" class="max-w-full max-h-full" alt="pic1" />
        </div>
        <div class="honor-small-pic">
          <img :src="homeBg1" class="max-w-full max-h-full" alt="pic1" />
        </div>
        <div class="honor-small-pic">
          <img :src="homeBg1" class="max-w-full max-h-full" alt="pic1" />
        </div>
      </div>
      <div class="flex items-center">
        <p class="pr-7 content w-1/2">
          {{ $t('AboutUs.Honor.Content') }}
        </p>
        <div class="pl-7 w-1/2">
          <img :src="homeBg1" class="max-w-full max-h-full" alt="pic1" />
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
