<template>
  <section id="container">
    <h1 class="text-12 font-300 font-title color-white text-center py-5">
      {{ $t('CampusLife.Clubs.Title') }}
    </h1>
    <div id="clubs" class="flex justify-center">
      <div v-for="club in clubs" class="m-5" :key="club"
        style="height: 250px; width: 250px; box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5); display: flex; flex-direction: column; justify-content: center; align-items: center;"
        :style="{ 'background-color': club.bgColor, 'color': club.color }">
        <div class="text-8 font-title">
          {{ club['zh-CN'] }}
        </div>
        <div>
          <img :src="club.image" style="max-width: 80px; max-height: 80px; aspect-ratio: 1/1; object-fit: cover;" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'

const clubs = [
  {
    image: homeBg1,
    bgColor: 'var(--standard-blue)',
    color: 'white',
    'zh-CN':
      '社团1',
    'en-US':
      'Club 1'
  },
  {
    image: homeBg1,
    bgColor: 'rgba(255,251,243,1)',
    color: 'rgba(18,42,43,1)',
    'zh-CN':
      '社团2',
    'en-US':
      'Club 2'
  },
  {
    image: homeBg1,
    bgColor: 'rgba(255, 195, 0, 1)',
    color: 'white',
    'zh-CN':
      '社团3',
    'en-US':
      'Club 3'
  },
  {
    image: homeBg1,
    bgColor: 'rgba(131, 5, 14, 1)',
    color: 'white',
    'zh-CN':
      '社团4',
    'en-US':
      'Club 4'
  }
]

</script>

<style scoped>
#container {
  background-image: url('../../assets/images/campusBg3.png?webp');
  background-repeat: no-repeat;
  background-size: 100% 600px;
}
</style>
