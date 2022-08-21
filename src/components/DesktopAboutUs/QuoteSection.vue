<template>
  <section class="section">
    <div id="quote" class="flex-col p-y-10 font-sans items-center">
      <div class="text-9 font-700">“</div>
      <div class="flex items-center">
        <div class="flex-col text-center p-5" style="flex: 2">
          <p class="content" style="font-size: 1.5rem">
            {{ $t('AboutUs.Quote.Content') }}
          </p>
          <p class="text-right content" style="font-size: 1.5rem">
            ——{{ $t('AboutUs.Quote.Name') }}
          </p>
        </div>
        <div style="flex: 1" class="flex justify-center p-5">
          <img
            :src="homeBg1"
            style="width: 12rem; height: 12rem; object-fit: cover"
            alt="pic1"
          />
        </div>
      </div>
      <div class="text-9 font-700 text-right">”</div>
    </div>
  </section>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
</script>

<style></style>
