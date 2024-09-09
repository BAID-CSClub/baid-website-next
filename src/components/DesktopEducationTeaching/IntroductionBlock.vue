<template>
  <div
    class="bg-white text-[var(--standard-red)] b-6 b-[var(--standard-red)] text-6 p-1vw font-title"
  >
    {{ props.title }}
    <pre class="mt-1">{{ props.content }}</pre>
  </div>
</template>

<script setup>
const props = defineProps(["title", "content"]);
</script>
