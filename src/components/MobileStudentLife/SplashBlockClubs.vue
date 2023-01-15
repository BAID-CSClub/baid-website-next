<template>
  <div
    class="flex justify-center items-center flex-col h-50% w-full bg-cover font-sans"
    :style="{
      'background-image': `url(${props.image})`
    }"
  >
    <h2 class="color-white font-title text-10">
      <span>{{ props.title[0] }}</span>
      <span class="color-yellow">{{ props.title[1] }}</span>
      <span>{{ props.title.substr(2) }}</span>
    </h2>
    <span class="decoration-none color-yellow" @click="showPop = true"
      >了解更多</span
    >
    <Transition name="fade" mode="out-in">
      <div
        class="backdrop flex justify-center items-center"
        @click="showPop = false"
        v-if="showPop"
      >
        >
        <div
          class="bg-white rd-5 p-8 w-80vw h-70vh box-border overflow-auto"
          id="clubsPopWindow"
        >
          <h2 class="m-t-0 m-b-4">学生社团</h2>
          <span>(左右滑动查看更多内容)</span>
          <swiper
            :modules="[Navigation, A11y]"
            :slides-per-view="1"
            :loop="true"
            :autoHeight="true"
          >
            <swiper-slide v-for="club in clubs" :key="club">
              <h3>{{ $t(club.name) }}</h3>
              <p class="my-4">
                {{ $t(club.description) }}
              </p>
              <swiper
                :modules="[Autoplay, A11y]"
                :slides-per-view="1"
                :autoplay="{
                  delay: 2500,
                  disableOnInteraction: false
                }"
              >
                <swiper-slide v-for="img in club.images" :key="img">
                  <img
                    :src="img"
                    alt=""
                    class="w-full object-cover aspect-3/2"
                  />
                </swiper-slide>
              </swiper>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { clubs } from '../../data/Clubs.js'
/* initializing_swiper */

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Navigation, Autoplay, A11y } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'

const props = defineProps(['title', 'image']) // TODO: More about dialog
const showPop = ref(false)
</script>
