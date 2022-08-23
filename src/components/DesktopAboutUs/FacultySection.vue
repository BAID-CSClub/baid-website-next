<template>
  <section class="section">
    <div id="faculty" class="flex-col items-center">
      <NotFancyTitle cn="师资" en="Faculty" color="blue"></NotFancyTitle>
      <div class="flex items-center text-center">
        <div class="ratio w-1/2">{{ $t('AboutUs.Faculty.Ratio') }}</div>
        <p class="content w-1/2">{{ $t('AboutUs.Faculty.Content') }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
</script>
<style>
.ratio {
  font-size: 4.5rem;
  font-weight: 700;
}
</style>
