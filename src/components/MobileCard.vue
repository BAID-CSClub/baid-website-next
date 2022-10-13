<template>
  <div
    class="rounded-4 h-35 w-full shadow-lg box-border"
    :class="{
      'bg-[var(standard-blue)]': props.bg === 'blue',
      'bg-white border-solid border-blue-3': props.bg === 'white'
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  bg: {
    type: String,
    default: 'white'
  }
})
</script>
