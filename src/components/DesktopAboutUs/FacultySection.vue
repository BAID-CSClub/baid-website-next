<template>
  <section class="section">
    <div id="faculty" class="p-y-10 flex-col items-center">
      <NotFancyTitle cn="师资" en="Faculty" color="blue"></NotFancyTitle>
      <div class="flex items-center p-y-10 text-center">
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
