<template>
  <div
    class="h-80 bg-cover bg-center flex items-center"
    :style="{ 'background-image': `url(${props.bg})` }"
  >
    <div class="bg-white/80 px-5 py-8 mr-20 backdrop-blur-5">
      <h2 class="mb-3 mt-0">{{ props.title }}</h2>
      <p>
        <slot />
      </p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['bg', 'title'])
</script>
