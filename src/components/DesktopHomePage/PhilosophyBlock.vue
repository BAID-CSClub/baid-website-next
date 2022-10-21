<template>
  <!-- <div
    class="border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] flex w-full max-w-52 h-80 justify-around p-x-3 p-y-6 m-x-4"
    :class="{ 'bg-[var(--standard-blue)] color-white': props.blue }"
  >
    <h2 class="text-9 !m-0 write-vertical-left tracking-wider">
      {{ props.left }}
    </h2>
    <hr
      class="m-x-2 h-75% self-center border-width-2 border-solid border-color-[var(--standard-blue)]"
      :class="{ 'border-color-white': props.blue }"
    />
    <pre
      class="self-end write-vertical-left text-6 leading-normal text-right min-w-120px"
      >{{ props.right }}</pre
    >
  </div> -->
  <div
    class="border-width-3 border-solid border-color-[var(--standard-blue)] color-[var(--standard-blue)] w-full h-46 max-w-100"
    :class="{ 'bg-[var(--standard-blue)] color-white': props.blue }"
  >
    <div class="m-4">
      <h2 class="text-8 !m-0 tracking-wide">
        {{ props.left }}
      </h2>
      <hr
        class="w-70% self-center border-width-2 border-solid border-color-[var(--standard-blue)] m-y-3"
        :class="{ 'border-color-white': props.blue }"
      />
      <pre class="text-6 leading-normal text-right">{{ props.right }}</pre>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['left', 'right', 'blue'])
</script>
