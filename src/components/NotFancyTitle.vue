<template>
  <!-- TODO: More vertical optimization -->
  <div class="w-max" :class="{
    'text-right': right,
    'write-vertical-right': vertical,
  }" :style="{ 'margin-bottom': margin ? '24px' : '0px' }">
    <!-- CN -->
    <h1 class="color-#122A28 m-0 text-10 font-300 font-title" v-if="$i18n.locale === 'zh-CN'"
      :class="{ 'color-white': props.color === 'white' }">
      <span v-for="word in cn" :key="word">
        <span>{{ word.left }}</span>
        <span :class="{
          'color-[var(--standard-blue)]': props.color === 'blue',
          'color-[var(--standard-red)]': props.color === 'red'
        }">{{ word.colored }}</span>
        <span>{{ word.right }}</span>
      </span>
    </h1>
    <!-- EN -->
    <h1 class="color-#122A28 m-0 text-9 font-title font-light"
      :class="{ 'font-bold !text-11': $i18n.locale === 'en-US', 'color-white': props.color === 'white' }">
      <span v-for="word in en" :key="word">
        <span>{{ word.left }}</span>
        <span :class="{
          'color-[var(--standard-blue)]': props.color === 'blue',
          'color-[var(--standard-red)]': props.color === 'red'
        }">{{ word.colored }}</span>
        <span>{{ word.right }}</span>
      </span>
    </h1>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps([
  'cn',
  'en',
  'color',
  'right',
  'vertical',
  'noMargin'
])

function compute(string) {
  return string.split(' ').map((word) => {
    return { left: word[0], colored: word[1], right: word.slice(2) + ' ' }
  })
}

const cn = computed(() => compute(props.cn))
const en = computed(() => compute(props.en))
const right = computed(() => {
  if (props.right === undefined) {
    return false
  }
  return true
})
const vertical = computed(() => {
  if (props.vertical === undefined) {
    return false
  }
  return true
})
const margin = computed(() => {
  if (props.noMargin === undefined) {
    return true
  }
  return false
})
</script>
