<template>
  <div class="h-screen w-screen overflow-hidden relative">
    <div class="absolute" :style="{ top }">
      <img
        v-for="(img, index) in props.images"
        :key="img"
        :src="img"
        :alt="img"
        class="h-screen w-screen brightness-80 object-cover"
        :class="{ 'm-t--4px': index > 0 }"
      />
    </div>
    <div class="absolute right-10 bottom-10">
      <div
        v-for="(img, index) in props.images"
        v-bind:key="img"
        :class="{ 'important-bg-white': current === index }"
        class="dot w-4 h-4 m-y-3 cursor-pointer"
        v-on:click="current = index"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { animate } from 'popmotion'
import { onMounted, ref, watch } from 'vue'

const props = defineProps(['images'])

const current = ref(0)
const top = ref('0vh')

let topAnimation

watch(current, (index) => {
  if (topAnimation) topAnimation.stop()
  topAnimation = animate({
    from: top.value,
    to: index * -100 + 'vh',
    onUpdate (value) {
      top.value = value
    },
    duration: 300
  })
})

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % props.images.length
  }, 5000)
})
</script>

<style scoped>
.dot {
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  /* margin-right: 10px; */
}
</style>
