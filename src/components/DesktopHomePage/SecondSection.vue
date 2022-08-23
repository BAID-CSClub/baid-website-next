<template>
  <section id="secondSection" class="p-y-90px">
    <div class="section">
      <h2 class="color-[var(--standard-blue)] text-9 m-t-0">
        {{ $t('HomePage.SecondSection.Title') }}
      </h2>
      <p class="content">
        {{ $t('HomePage.SecondSection.Content') }}
      </p>
      <div class="flex justify-end">
        <ReadMore to="/about" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ReadMore from '../ReadMore.vue'
</script>
