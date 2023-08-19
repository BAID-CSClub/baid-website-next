<template>
  <div class="flex items-center justify-center swiper-container">
    <!-- arrow left -->
    <div @click="prev">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        class="block"
      >
        <path
          fill="var(--standard-red)"
          d="m32.75 44-20-20 20-20 2.8 2.85L18.4 24l17.15 17.15Z"
        />
      </svg>
    </div>
    <Swiper
      :modules="modules"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false
      }"
      :loop="true"
      :slides-per-view="props.slides"
      :space-between="10"
      ref="swiper"
      @swiper="getRef"
    >
      <slot></slot>
    </Swiper>
    <!-- arrow right -->
    <div @click="next">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="48"
        width="48"
        class="block"
      >
        <path
          fill="var(--standard-red"
          d="m15.2 43.9-2.8-2.85L29.55 23.9 12.4 6.75l2.8-2.85 20 20Z"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Navigation, Autoplay, A11y } from 'swiper'
import { Swiper } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'

const props = defineProps({
  slides: Number,
  autoplay: {
    type: Boolean,
    default: false
  }
})

const modules = computed(() => {
  if (props.autoplay) {
    return [Autoplay, A11y, Navigation]
  } else {
    return [A11y, Navigation]
  }
})

const swiper = ref(null)

function getRef (swiperInstance) {
  swiper.value = swiperInstance
}

function prev () {
  swiper.value.slidePrev()
}
function next () {
  swiper.value.slideNext()
}
</script>
