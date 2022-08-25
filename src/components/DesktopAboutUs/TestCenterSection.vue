<template>
  <section class="section">
    <div id="test-center" class="font-sans flex">
      <div class="text-white flex-col w-1/2 mr-7">
        <h3 class="color-white">
          {{ $t('AboutUs.TestCenter.Title') }}
        </h3>
        <p class="content">{{ $t('AboutUs.TestCenter.Content') }}</p>
      </div>
      <div class="ml-7 w-1/2 flex justify-center items-center">
        <img :src="homeBg1" style="max-width: 100%; max-height: 100%" alt="pic1" />
      </div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
