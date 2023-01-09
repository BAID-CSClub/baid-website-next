<template>
  <div
    class="flex justify-center items-center flex-col h-50% w-full bg-cover overflow-scroll"
    :style="{
      'background-image': `url(${props.image})`
    }"
  >
    <h1 class="color-white font-title text-10">
      <span>{{ props.title[0] }}</span>
      <span class="color-yellow">{{ props.title[1] }}</span>
      <span>{{ props.title.substr(2) }}</span>
    </h1>
    <span class="decoration-none color-yellow" @click="showPop = true"
      >了解更多</span
    >
    <div
      class="fixed top-0 bg-black bg-op-70 w-full h-screen flex justify-center items-center"
      @click="showPop = false"
      :class="{
        'z-20 op-100': showPop,
        'z-0 op-0 pointer-events-none': !showPop
      }"
    >
      <div
        class="bg-white rounded-xl p-10 max-h-screen overflow-scroll"
        id="clubsPopWindow"
      >
        <h1 class="m0 mb-5">学生社团</h1>
        <h4 class="m0 mb-5">(左右滑动查看更多内容)</h4>
        <swiper
          :modules="modules"
          :slides-per-view="1"
          :space-between="5"
          :pagination="{ clickable: true }"
          @swiper="onSwiper"
          @slideChange="onSlideChange"
          autoHeight
          class="overflow-scroll"
        >
          <swiper-slide
            class="overflow-scroll"
            v-for="club in clubs"
            :key="club"
          >
            <h2>{{ $t(club.name) }}</h2>
            <p>
              {{ $t(club.description) }}
            </p>
            <swiper
              :modules="modules"
              :slides-per-view="1"
              :space-between="5"
              :pagination="{ clickable: true }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
              class="overflow-scroll"
            >
              <swiper-slide v-for="img in club.images" :key="img">
                <img :src="img" alt="" class="h-45 w-100% object-cover" />
              </swiper-slide>
            </swiper>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { clubs } from '../../data/Clubs.js'
/* initializing_swiper */

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps(['title', 'image']) // TODO: More about dialog
const showPop = ref(false)
</script>
