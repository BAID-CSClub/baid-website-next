<template>
  <div class="section">
    <div class="font-sans flex">
      <div class="text-white flex-col w-1/2 mr-7">
        <h3 class="color-white">
          {{ $t('AboutUs.TestCenter.Title') }}
        </h3>
        <p>{{ $t('AboutUs.TestCenter.Content') }}</p>
      </div>
      <div class="ml-7 w-1/2 flex justify-center items-center">
        <img :src="homeBg1" class="max-w-full max-h-full" alt="pic1" />
      </div>
    </div>
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
