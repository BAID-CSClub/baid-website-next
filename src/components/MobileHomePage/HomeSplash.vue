<template>
  <div class="relative" :class="{ 'h-screen overflow-hidden': show }">
    <slot></slot>
    <div
      class="bg-blue fixed top-0 w-full h-full transition-opacity-300 z-1"
      :class="{ 'op-0 pointer-events-none': !show }"
    >
      <!-- Foreground -->
      <div
        class="w-full h-90% relative"
        @touchmove="onMove"
        @touchstart="onStart"
      >
        <!-- BG -->
        <Swiper
          class="h-full brightness-80"
          @slide-change="change($event.activeIndex)"
          @swiper="swiper = $event"
          :resistance-ratio="0"
        >
          <SwiperSlide v-for="img in pageData.carousel_images" :key="img">
            <img
              :src="img"
              class="w-full h-full object-cover"
              alt=""
              srcset=""
            />
          </SwiperSlide>
        </Swiper>

        <!-- Content -->
        <div
          class="border-l-3 p-l-3 border-white absolute bottom-10 left-10% color-white w-70% z-1"
        >
          <h2 class="m-t-3 mb-1 font-black text-8">
            这里是<br />北京中学国际部！
          </h2>
          <p class="font-sans m0 m-b-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          </p>
        </div>

        <!-- DOTS -->
        <div class="absolute bottom-3 left-50% translate-x--50% flex z-1">
          <div
            v-for="(_, index) in pageData.carousel_images"
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
          <svg viewBox="0 0 48 48">
            <g fill="none">
              <path
                d="M8.366 16.116a1.25 1.25 0 0 0 0 1.768l14.75 14.75a1.25 1.25 0 0 0 1.768 0l14.75-14.75a1.25 1.25 0 0 0-1.768-1.768L24 29.982L10.134 16.116a1.25 1.25 0 0 0-1.768 0z"
                fill="currentColor"
              ></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, inject } from "vue";
import { SwiperSlide, Swiper } from "swiper/vue";
import "swiper/css";

const pageData = inject("data");

const current = ref(0);
let swiper;

const show = ref(true);

function change(index) {
  console.log(pageData.carousel_images);
  if (
    current.value !== index &&
    index < pageData.carousel_images.length &&
    index >= 0
  ) {
    current.value = index;
    swiper.slideTo(index);
  }
}

let startY = 0;

function onStart(e) {
  startY = e.touches[0].clientY;
}

function onMove(e) {
  const deltaY = e.touches[0].clientY - startY;

  if (deltaY < -100) {
    show.value = false;
  }
}
</script>
