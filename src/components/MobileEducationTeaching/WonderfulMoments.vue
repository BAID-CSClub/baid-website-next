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
        :modules="[Pagination, A11y]"
        :slides-per-view="1"
        :space-between="10"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :loop="true"
        :pagination="{ clickable: true }"
      >
        <swiper-slide v-for="slide in slides" :key="slide">
          <div
            class="m-2 m-t-0! box-border drop-shadow h-50 rd-5 flex flex-col justify-end overflow-hidden"
          >
            <img :src="slide.background" class="absolute object-cover block" />
            <div class="z-1 p-4">
              <h3 class="text-6 m-y-2">
                {{ $t(slide.title) }}
              </h3>
              <div>
                {{ $t(slide.description) }}
              </div>
            </div>
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

const slides = [
  {
    title: 'EducationTeaching.WonderfulMoments.Slides.Slide1.Title',
    description: 'EducationTeaching.WonderfulMoments.Slides.Slide1.Description',
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  },
  {
    title: 'EducationTeaching.WonderfulMoments.Slides.Slide2.Title',
    description: 'EducationTeaching.WonderfulMoments.Slides.Slide2.Description',
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  },
  {
    title: 'EducationTeaching.WonderfulMoments.Slides.Slide3.Title',
    description: 'EducationTeaching.WonderfulMoments.Slides.Slide3.Description',
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  }
]
</script>
