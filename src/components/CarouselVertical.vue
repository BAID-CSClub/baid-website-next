<template>
  <div class="h-screen w-full overflow-hidden relative">
    <div class="absolute flex flex-col w-full" :style="{ top }">
      <img
        v-for="img in props.images"
        :key="img"
        :src="img"
        :alt="img"
        class="h-screen w-full dimmer object-cover"
      />
    </div>
    <div class="absolute right-10 bottom-10">
      <div
        v-for="(img, index) in props.images"
        v-bind:key="img"
        :class="{ 'important-bg-white': current === index }"
        class="dot w-3 h-3 my-3 cursor-pointer"
        v-on:click="
          () => {
            current = index
            resetInterval()
          }
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
import { animate } from 'popmotion'
import { onUnmounted, ref, watch } from 'vue'

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

@keyframes dim {
  from {
    filter: brightness(100%);
  }
  to {
    filter: brightness(70%);
  }
}

/* Make images dimmer after time */
.dimmer {
  animation: dim 5s forwards;
}
</style>
