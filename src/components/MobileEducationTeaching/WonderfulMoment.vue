<!-- eslint-disable no-unused-vars -->
<!-- eslint-disable no-unused-vars -->
<template>
  <div class="flex flex-col items-center">
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :autoplay="{ delay: 1000 }"
      :speed="1000"
      :loop="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="w-100vw h-50vw translate-x--3"
    >
      <swiper-slide
        class="w-full h-full bg-pink flex flex-col items-end justify-end overflow-hidden"
        v-for="items in Slides"
        :key="items"
      >
        <img :src="items.background" class="absolute w-full z-1" />
        <div
          class="absolute h-full w-full bg-gradient-to-lb from-white to-transparent via-transparent z-2"
        ></div>
        <div class="font-black text-6 z-3">
          {{ $t(items.title) }}
        </div>
        <div class="max-w-50% z-3">
          {{ $t(items.description) }}
        </div>
      </swiper-slide>
    </swiper>
    <div class="flex justify-center items-center h-55vw">
      <div class="relative scale-120">
        <div
          class="absolute flex text-10 flex-col w-full font-black text-transparent m-t--2"
        >
          <div
            class="bg-gradient-to-r from-cyan-800 to-pink-300 bg-clip-text z--1 opacity-50%"
          >
            Wonderful
          </div>
          <div
            class="self-end bg-gradient-to-r from-cyan-800 to-pink-300 bg-clip-text opacity-50% m-t-4"
          >
            Moment
          </div>
        </div>
        <div class="text-20 text-center text-dark-200 text-stroke-0.1rem">
          精彩瞬间
        </div>
      </div>
    </div>
    <swiper
      :slides-per-view="1"
      :space-between="0"
      :autoplay="{ delay: 1000 }"
      :speed="1000"
      :loop="true"
      :pagination="{ clickable: true }"
      :scrollbar="{ draggable: true }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
      class="w-100vw h-50vw translate-x--3"
    >
      <swiper-slide
        class="w-full h-full bg-pink flex flex-col items-end justify-end overflow-hidden"
        style="
          background: url(https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80);
          background-size: cover;
        "
        v-for="items in Images"
        :key="items"
      >
        <img :src="items.background" class="absolute w-full z--2 top-0" />
      </swiper-slide>
    </swiper>
    <div class="bg-black w-100vw" style="height: calc(100vh - 160vw)"></div>
  </div>
</template>
<script setup>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/hash-navigation'
import 'swiper/css/autoplay'

const onSwiper = (swiper) => {
  console.log(swiper)
}
const onSlideChange = () => {
  console.log('slide change')
}
const Slides = [
  {
    title: 'EducationTeaching.WonderfulMoment.Slides.Slide1.Title',
    description: 'EducationTeaching.WonderfulMoment.Slides.Slide1.Description',
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  },
  {
    title: 'EducationTeaching.WonderfulMoment.Slides.Slide2.Title',
    description: 'EducationTeaching.WonderfulMoment.Slides.Slide2.Description',
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  },
  {
    title: 'EducationTeaching.WonderfulMoment.Slides.Slide3.Title',
    description: 'EducationTeaching.WonderfulMoment.Slides.Slide3.Description',
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  }
]
const Images = [
  {
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  },
  {
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  },
  {
    background:
      'https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1776&q=80'
  }
]
</script>
