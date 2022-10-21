<template>
  <div
    class="border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] w-full h-46 max-w-100"
    :class="{ 'bg-[var(--standard-blue)] color-white': props.blue }"
  >
    <div class="m-4">
      <h2 class="text-8 !m-0 tracking-wide">
        {{ props.top }}
      </h2>
      <hr
        class="w-70% self-center border-width-2 border-solid border-color-[var(--standard-blue)] m-y-3"
        :class="{ 'border-color-white': props.blue }"
      />
      <pre class="text-6 leading-normal text-right">{{ props.bottom }}</pre>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['top', 'bottom', 'blue'])
</script>
