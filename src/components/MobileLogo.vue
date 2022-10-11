import { computed, ref } from 'vue';
<template>
  <div
    class="flex items-center justify-center pointer-events-none z-3"
    :class="{
      'absolute transition-all-500 w-full': animate,
      'top-50% m-t--12.5 h-25': stage < 2,
      'top-2.5': stage === 2,
      '!z-13': !dive
    }"
  >
    <img
      src="../assets/images/logoNormal.png?webp"
      alt=""
      class="w-25 h-25 transition-all-500"
      :class="{ '!w-15 !h-15': stage === 2 }"
    />

    <div
      class="whitespace-nowrap truncate transition-all-500 w-40"
      :class="{ '!w-0': stage < 1, '!w-60': stage === 1 }"
    >
      <h1
        class="text-black text-6 m-0 transition-all-300"
        :class="{ '!text-3.5': stage === 2 }"
      >
        北京中学国际部
      </h1>
      <p
        class="font-sans transition-all-300 text-3 m-b-0 m-t-1"
        :class="{ '!text-2 !m-t-0.5': stage === 2 }"
      >
        Beijing Academy International Department
      </p>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
const props = defineProps(['animate'])
const stage = ref(0)
// 0: 仅logo 中心
// 1: logo + 文字 中心
// 2: logo + 文字缩小 顶部

const dive = ref(false)
// dive: z-13 => z-3

const animate = computed(() => props.animate !== undefined)
if (!animate.value) stage.value = 2 // 非动画模式直接跳过

onMounted(() => {
  setTimeout(() => {
    stage.value = 1
    setTimeout(() => {
      stage.value = 2
      setTimeout(() => {
        dive.value = true
      }, 300)
    }, 500)
  }, 300)
})
</script>
