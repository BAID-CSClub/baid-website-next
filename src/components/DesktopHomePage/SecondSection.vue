<template>
  <section id="secondSection" class="p-y-90px">
    <div class="section">
      <h2 class="color-[var(--standard-blue)] text-9 m-t-0">
        {{ $t('HomePage.SecondSection.Title') }}
      </h2>
      <pre>{{ $t('HomePage.SecondSection.Content') }}</pre>
      <div class="flex justify-end m-t-5">
        <ReadMore to="/about" />
      </div>
    </div>
  </section>
</template>

<script setup>
import ReadMore from '../ReadMore.vue'
</script>
