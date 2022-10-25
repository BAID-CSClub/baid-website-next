<template>
  <div class="relative" :class="{ 'h-screen overflow-hidden': show }">
    <slot></slot>
    <div
      class="bg-blue fixed top-0 w-full h-full transition-opacity-300"
      :class="{ 'op-0 pointer-events-none': !show }"
    >
      <!-- Foreground -->
      <div class="w-full h-90% relative">
        <!-- BG -->
        <div
          class="h-full flex transition-all brightness-80"
          @touchstart="onTouchStart"
          @touchmove="onTouchMove"
          @touchend="onTouchEnd"
          :style="{
            width: images.length * 100 + '%',
            marginLeft: 'calc(' + leftPx + 'px - ' + left + '%)'
          }"
        >
          <img
            v-for="img in images"
            :key="img"
            :src="img"
            class="w-full h-full object-cover"
            alt=""
            srcset=""
          />
        </div>

        <!-- Content -->
        <div
          class="border-l-3 p-l-3 border-white absolute bottom-10 left-10% color-white w-70%"
        >
          <h2 class="m-t-3 mb-1 font-black text-8">
            这里是<br />北京中学国际部！
          </h2>
          <p class="font-sans m0 m-b-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          </p>
        </div>

        <!-- DOTS -->
        <div class="absolute bottom-3 left-50% translate-x--50% flex">
          <div
            v-for="(_, index) in images"
            :key="index"
            class="border-solid border-white rounded-50% w-3 h-3 m-x-1"
            :class="{ 'bg-white': index === current }"
            @click="change(index)"
          ></div>
        </div>
      </div>
      <div
        class="text-center font-sans color-white absolute bottom-0 left-50% translate-x--50%"
        @click="show = false"
      >
        <span>Learn More</span>
        <div class="w10 h10 ma">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 48 48"
          >
            <g fill="none">
              <path
                d="M8.366 16.116a1.25 1.25 0 0 0 0 1.768l14.75 14.75a1.25 1.25 0 0 0 1.768 0l14.75-14.75a1.25 1.25 0 0 0-1.768-1.768L24 29.982L10.134 16.116a1.25 1.25 0 0 0-1.768 0z"
                fill="currentColor"
                style="--darkreader-inline-fill: currentColor"
                data-darkreader-inline-fill=""
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import img1 from '../../assets/images/HomePage/Autumn.jpg'
import img2 from '../../assets/images/HomePage/Dongba_1.jpg'

const images = [img1, img2]

const current = ref(0)

const show = ref(true)

const left = ref(0)
const leftPx = ref(0)

const emit = defineEmits(['change'])

function change (index) {
  if (current.value !== index && index < images.length && index >= 0) {
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
  const left = e.touches[0].clientX - startX
  if (current.value === 0 && left > 0) return
  if (current.value === images.length - 1 && left < 0) return
  leftPx.value = Math.min(
    Math.max(left, -window.innerWidth / 1.5),
    window.innerWidth / 1.5
  )
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
