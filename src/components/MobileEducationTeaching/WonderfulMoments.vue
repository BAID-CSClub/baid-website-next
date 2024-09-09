<template>
  <div>
    <h2 class="relative m-y-8 flex flex-col justify-center items-center">
      <div
        class="absolute flex text-10 flex-col w-full font-black text-transparent"
      >
        <div
          class="bg-gradient-to-r from-cyan-800 to-pink-300 bg-clip-text z--1 opacity-50%"
        >
          Wonderful
        </div>
        <div
          class="self-end bg-gradient-to-r from-cyan-800 to-pink-300 bg-clip-text opacity-50% m-t-4 z--1"
        >
          Moment
        </div>
      </div>
      <div class="text-20 text-center text-dark-200">精彩瞬间</div>
    </h2>
    <div>
      <swiper
        :modules="[Autoplay, Pagination, A11y]"
        :slides-per-view="1"
        :space-between="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="img in pageData.moments" :key="img">
          <div
            class="m-2 m-t-0! box-border drop-shadow h-50 rd-5 flex flex-col justify-end overflow-hidden"
          >
            <img :src="img" class="absolute object-cover block" />
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script setup>
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Autoplay, A11y } from 'swiper'
import { inject } from 'vue'

const pageData = inject('data')
</script>
