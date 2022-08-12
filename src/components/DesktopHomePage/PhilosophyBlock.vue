<template>
  <div
    class="border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] flex w-full max-w-50 h-75 justify-around"
    :class="{ 'bg-[var(--standard-blue)] color-white': props.blue }"
  >
    <h2 class="font-title m-l-3 text-8 font-300">{{ props.left }}</h2>
    <hr class="m-x-2 h-70% self-center border-width-2 border-solid" />
    <p class="self-end m-b-8">{{ props.right }}</p>
  </div>
</template>

<script setup>
const props = defineProps(['left', 'right', 'blue'])
</script>
