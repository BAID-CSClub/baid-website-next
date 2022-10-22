<template>
  <div
    class="backdrop flex items-center justify-center p-20 box-border"
    @click.self="$emit('close')"
  >
    <div
      class="w-full max-w-50vw max-h-80vh bg-white rounded-3xl p-10 box-border overflow-auto"
    >
      <h3>
        {{ props.name }}
      </h3>
      <pre class="m-y-4">{{ props.description }}</pre>
      <div class="flex items-center p-x-4">
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
          :pagination="{ clickable: true }"
          :loop="true"
          :slides-per-view="1"
          :space-between="10"
          ref="swiper"
          @swiper="getRef"
        >
          <swiper-slide v-for="(img, index) in props.images" :key="img"
            ><img
              :src="img"
              class="w-full object-cover transition-all aspect-3/2 object-cover"
              :class="{
                '!opacity-100': current === index,
                'hover:opacity-100 active:brightness-90':
                  current !== index && !transition
              }"
              v-on:click="change(index)"
              alt="pic1"
          /></swiper-slide>
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
    </div>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, Pagination, A11y]
const props = defineProps(['name', 'description', 'images'])
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

<style>
.backdrop {
  top: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
}
.swiper-pagination-bullet-active {
  background-color: var(--standard-red);
}
</style>
