<template>
  <div class="section">
    <div id="faculty" class="flex-col items-center">
      <!-- <div
        :style="{ backgroundImage: 'url(' + homeBg1 + ')' }"
        style="background-size: cover; background-position: center"
      > -->
      <div class="flex items-center">
        <div class="w-1/2 text-center">
          <div class="ratio">{{ $t('AboutUs.Faculty.Ratio') }}</div>
          <div>师生比</div>
        </div>
        <pre class="content w-1/2">{{ $t('AboutUs.Faculty.Content') }}</pre>
      </div>
    </div>
    <!-- </div> -->
  </div>
</template>

<script setup>
// import NotFancyTitle from '../NotFancyTitle.vue'
// import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>
<style>
.ratio {
  font-size: 4.5rem;
  font-weight: 700;
}
</style>
