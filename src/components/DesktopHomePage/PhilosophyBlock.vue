<template>
  <div class="flex-1 h-100 color-white">
    <div class="m-5">
      <h2 class="text-8 !m-0 tracking-wide">
        {{ props.title }}
      </h2>
      <!-- <pre class="text-6 leading-normal text-right">{{ props.content }}</pre> -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'content', 'blue'])
</script>
