<template>
  <div class="section">
    <NotFancyTitle
      :cn="$t('AboutUs.Overview.Title')"
      en="Overview"
      color="blue"
    ></NotFancyTitle>
    <pre
      >{{ $t('AboutUs.Overview.Content') }}
    </pre>
  </div>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
</script>
