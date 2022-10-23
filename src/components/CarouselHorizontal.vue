<template>
  <div class="h-[calc(100vh-4.25rem)] w-full overflow-hidden relative mb-45px">
    <div class="absolute flex" :style="{ left }">
      <img
        class="h-[calc(100vh-4.25rem)] w-screen min-w-[var(--shrink-limit)] brightness-80 object-cover"
        v-for="img in props.images"
        :src="img"
        :alt="img"
        :key="img"
      />
    </div>
    <div
      v-if="props.images.length > 1"
      class="absolute right-10 bottom-10 flex"
    >
      <div
        v-for="(img, index) in props.images"
        v-bind:key="img"
        :class="{ 'important-bg-white': current === index }"
        class="dot w-3 h-3 mx-3 cursor-pointer"
        v-on:click="
          () => {
            current = index
            resetInterval()
          }
        "
      ></div>
    </div>
    <div class="absolute pointer-events-none w-full">
      <div
        class="flex justify-center items-center w-full h-[calc(100vh-4.25rem)]"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { animate } from 'popmotion'
import { onUnmounted, ref, watch } from 'vue'

const props = defineProps(['images'])

const current = ref(0)
const left = ref('0vw')

let leftAnimation

watch(current, (index) => {
  if (leftAnimation) leftAnimation.stop()
  leftAnimation = animate({
    from: left.value,
    to: index * -100 + 'vw',
    onUpdate (value) {
      left.value = value
    },
    duration: 300
  })
})

let interval = setInterval(() => {
  current.value = (current.value + 1) % props.images.length
}, 5000)

onUnmounted(() => {
  clearInterval(interval)
})

function resetInterval () {
  clearInterval(interval)
  interval = setInterval(() => {
    current.value = (current.value + 1) % props.images.length
  }, 5000)
}
</script>

<style scoped>
.dot {
  border: 2px solid #fff;
  background-color: transparent;
  border-radius: 50%;
  /* margin-right: 10px; */
}
</style>
