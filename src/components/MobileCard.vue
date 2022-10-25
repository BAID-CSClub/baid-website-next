<template>
  <div
    class="rounded-4 h-35 w-full shadow-lg box-border overflow-hidden relative transition-colors m-y-3"
    :class="{
      'bg-[var(--standard-blue)]': props.bg === 'blue',
      'bg-white  border-[var(--standard-blue)]': props.bg === 'white',
      'border-solid': props.border
    }"
  >
    <slot v-if="!items"></slot>
    <div
      v-else
      class="h-full flex transition-all"
      :style="{
        width: 100 * props.items.length + '%',
        marginLeft: 'calc(' + leftPx + 'px - ' + left + '%)'
      }"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd"
    >
      <div
        v-for="(item, index) in props.items"
        :key="index"
        class="w-full h-full"
      >
        <slot name="item" v-bind="item"></slot>
      </div>
    </div>
    <div class="absolute bottom-3 flex left-50% translate-x--50%" v-if="items">
      <!-- DOTS -->
      <div
        v-for="(_, index) in props.items"
        :key="index"
        class="h-2 m-x-1 rounded-1 transition-all"
        :class="{
          'bg-[var(--standard-blue)]': props.bg === 'white',
          'bg-white': props.bg === 'blue',
          'w-6': current === index,
          'w-2 op-70': current != index
        }"
        @click="change(index)"
      ></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  bg: {
    type: String,
    default: 'white'
  },
  border: {
    type: Boolean,
    default: true
  },
  items: {
    default: undefined
  }
})

const current = ref(0)
const left = ref(0)
const leftPx = ref(0)

const emit = defineEmits(['change'])
function change (index) {
  if (current.value !== index && index < props.items.length && index >= 0) {
    current.value = index
    left.value = current.value * 100
    emit('change')
  }
}

let startX = 0

function onTouchStart (e) {
  startX = e.touches[0].clientX
  leftPx.value = 0
}
function onTouchMove (e) {
  leftPx.value = e.touches[0].clientX - startX
}
function onTouchEnd () {
  console.log(leftPx.value, window.innerWidth)
  if (-leftPx.value > window.innerWidth / 2) {
    change(current.value + 1)
  }
  if (leftPx.value > window.innerWidth / 2) {
    change(current.value - 1)
  }
  leftPx.value = 0
}
</script>
