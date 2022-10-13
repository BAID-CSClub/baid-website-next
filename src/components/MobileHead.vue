<template>
  <section
    class="h-65 f-full flex items-center justify-center"
    :style="{ 'background-image': `url(${props.img})` }"
  >
    <h1 class="color-white text-12">
      <slot></slot>
    </h1>
  </section>
</template>

<script setup>
const props = defineProps(['img'])
</script>
