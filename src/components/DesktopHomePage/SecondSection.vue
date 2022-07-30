<template>
  <section class="contentArea">
    <h2 class="color-[var(--standard-blue)] text-9 font-sans">
      {{ $t("HomePage.SecondSection.Title") }}
    </h2>
    <p style="line-height: 25px; letter-spacing: 1px" class="font-500 font-sans">
      {{ $t("HomePage.SecondSection.Content") }}
    </p>
    <div class="flex justify-end">
      <ReadMore to="/demo" />
    </div>
  </section>
</template>

<script setup>
import ReadMore from '../ReadMore.vue'
</script>
