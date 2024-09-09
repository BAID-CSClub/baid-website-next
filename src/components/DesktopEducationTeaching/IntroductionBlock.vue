<template>
  <div
    class="bg-white box-border b-6 text-6 p-5 font-title"
    :class="{
      'text-[var(--standard-red)]': props.color === 'red',
      'text-[var(--standard-blue)]': props.color === 'blue'
    }"
  >
    <span>
      {{ props.title }}
    </span>
    <pre class="mt-3" v-html="props.content"></pre>
  </div>
</template>

<script setup>
const props = defineProps(['title', 'content', 'color'])
</script>
