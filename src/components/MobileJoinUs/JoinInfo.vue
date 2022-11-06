<template>
  <div class="min-h-screen snap-start">
    <h2 class="font-600 text-center">{{ props.title }}</h2>
    <pre>{{ props.content }}</pre>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'content'])
</script>
