<template>
  <div
    class="bg-white text-[var(--standard-red)] b-6 b-[var(--standard-red)] text-6 p-1vw font-title"
  >
    简单介绍
    <pre>
      {{ props.content }}
    </pre>
  </div>
</template>

<script setup>
const props = defineProps(['content'])
</script>
