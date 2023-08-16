<template>
  <div class="h-screen m-t-[-4.25rem] relative overflow-hidden mb-45px">
    <!-- Carousel part -->
    <div class="absolute w-full h-screen">
      <CarouselVertical :images="pageData.carousel_images" />
    </div>
    <!-- Left blue block -->
    <div class="absolute top-0 left-0 bg-#103C74 h-screen op-90 t-0 l-0 w-38% min-w-600px shadow shadow-lg shadow-black">
    </div>

    <!-- Text / content -->
    <div class="absolute bottom-15% font-sans left-0 right-0 pointer-events-none">
      <div class="max-w-77rem ma px-20px">
        <h1 class="text-20 color-white text-shadow-lg m-0">
          {{ pageData.head }}
        </h1>
        <p class="text-7 color-white">
          Welcome to Beijing Academy International Division (BAID)!
        </p>
      </div>
    </div>
    <div
      class="absolute bottom-5 left-1/2 color-white translate-x--1/2 learnMore flex flex-col cursor-pointer active:op-70 transition-opacity"
      v-on:click="scrollTo('#secondSection')">
      <span class="text-6 font-sans select-none">Learn More</span>
      <div class="arrow relative w-full h-1 m-t-1 transition-all">
        <div class="middle transition-all op-0"></div>
        <div class="left transition-all"></div>
        <div class="right transition-all"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Images
import imgSummer from '../../assets/images/HomePage/Summer.jpg?webp'
import imgAutumn from '../../assets/images/HomePage/Autumn.jpg?webp'
import imgDongba1 from '../../assets/images/HomePage/Dongba_1.jpg?webp'
import imgDongba2 from '../../assets/images/HomePage/Dongba_2.jpg?webp'

import CarouselVertical from '../CarouselVertical.vue'
import { inject } from 'vue'

// Data
const pageData = inject('data')
const images = [imgDongba1, imgSummer, imgDongba2, imgAutumn]

function scrollTo(id) {
  const element = document.querySelector(id)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.arrow div {
  position: absolute;
  background-color: white;
  /* border-radius: 3px; */
}

.right {
  width: 50%;
  height: 3px;
  left: 50%;
}

.left {
  width: 50%;
  height: 3px;
  right: 50%;
}

.middle {
  width: 3px;
  height: 10px;
  left: 50%;
  bottom: 0px;
  transform: translateX(-50%);
}

.learnMore:hover .arrow {
  margin-top: 25px;
}

.learnMore:hover .left {
  width: 30px;
  border-radius: 3px;

  transform: rotate(40deg) translateX(6px);
}

.learnMore:hover .right {
  width: 30px;
  border-radius: 3px;
  transform: rotate(-40deg) translateX(-6px);
}

.learnMore:hover .middle {
  opacity: 1;
  height: 30px;
  border-radius: 3px;
  bottom: -10px;
}
</style>
