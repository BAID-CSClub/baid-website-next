<template>
  <div
    class="absolute z-4 top-0 w-100% h-full transition-all-300 flex"
    :class="{ 'left-0': props.show, '-left-100%': !props.show }"
  >
    <div class="bg-[var(--standard-blue)] w-70% h-full"></div>
    <div class="w-30% h-full" @click="emit('close')">
      <!-- Click -->
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  show: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close'])
</script>
