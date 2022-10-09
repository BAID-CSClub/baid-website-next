<template>
  <div
    class="border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] flex w-full max-w-52 h-80 justify-around p-x-3 p-y-6 m-x-4"
    :class="{ 'bg-[var(--standard-blue)] color-white': props.blue }"
  >
    <h2 class="text-9 !m-0 write-vertical-left tracking-widest">
      {{ props.left }}
    </h2>
    <hr
      class="m-x-2 h-75% self-center border-width-2 border-solid border-color-[var(--standard-blue)]"
      :class="{ 'border-color-white': props.blue }"
    />
    <pre
      class="self-end write-vertical-left text-6 tracking-widest leading-normal min-w-120px m-b-4"
      >{{ props.right }}</pre
    >
  </div>
</template>

<script setup>
const props = defineProps(['left', 'right', 'blue'])
</script>
