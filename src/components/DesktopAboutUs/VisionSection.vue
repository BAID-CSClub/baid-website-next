<template>
  <section class="section">
    <div class="flex p-y-10" id="vision">
      <div style="width: 50%" class="pr-7">
        <img
          :src="homeBg1"
          style="max-width: 100%; max-height: 100%"
          alt="pic1"
        />
      </div>
      <div style="width: 50%" class="pl-7">
        <div class="flex justify-end m-b-10">
          <FancyTitle top="愿景" btm="Vision" color="blue" right></FancyTitle>
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
import FancyTitle from '../FancyTitle.vue'
</script>
