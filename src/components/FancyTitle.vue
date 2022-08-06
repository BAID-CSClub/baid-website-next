<template>
  <div class="w-max">
    <h1 class="color-#122A28 m-0 text-10 font-title ">
      <span v-for="word in top" :key="word" class="m-r-5">
        <span>{{ word.left }}</span>
        <span
          :class="{
            'color-[var(--standard-blue)]': props.color === 'blue',
            'color-[var(--standard-red)]': props.color === 'red'
          }"
          >{{ word.colored }}</span
        >
        <span>{{ word.right }}</span>
      </span>
    </h1>
    <div class="m-l-8">
      <hr class="border-width-2 border-solid border-color-#122A28" />
      <h1 class="color-#122A28 m-0 text-9 font-title font-300">
        <span v-for="word in btm" :key="word" class="m-r-5">
        <span>{{ word.left }}</span>
        <span
          :class="{
            'color-[var(--standard-blue)]': props.color === 'blue',
            'color-[var(--standard-red)]': props.color === 'red'
          }"
          >{{ word.colored }}</span
        >
        <span>{{ word.right }}</span>
        </span>
      </h1>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['top', 'btm', 'color'])

function compute (string) {
  return string.split(' ').map((word) => {
    return { left: word[0], colored: word[1], right: word.slice(2) }
  })
}

const top = computed(() => compute(props.top))
const btm = computed(() => compute(props.btm))
</script>
