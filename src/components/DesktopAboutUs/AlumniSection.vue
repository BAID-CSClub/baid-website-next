<template>
  <div class="section">
    <div id="alumni" class="items-center">
      <NotFancyTitle
        :cn="$t('AboutUs.Alumni.Title')"
        en="Alumni"
        color="red"
      ></NotFancyTitle>
      <div class="flex">
        <!-- alumnus big pic -->
        <div style="flex: 1" class="mr-5 flex pl-8 items-center">
          <div class="alumni-big-pic-box">
            <img
              :src="alumni[current].image"
              class="w-full object-cover aspect-3/4 transition-all-300 block alumni-big-pic"
              :class="{ 'op-0': transition }"
              alt="pic1"
            />
          </div>
        </div>
        <div style="flex: 2" class="ml-5 swiper-container">
          <div class="relative mb-10">
            <div class="absolute left-20px top-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="56.55765920826161"
                height="53"
                viewBox="0 0 56.55765920826161 53"
                fill="none"
              >
                <defs>
                  <rect
                    id="path_0"
                    x="0"
                    y="0"
                    width="56.55765920826162"
                    height="53"
                  />
                </defs>
                <g
                  opacity="1"
                  transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                >
                  <mask id="bg-mask-0" fill="white">
                    <use xlink:href="#path_0"></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <g
                      opacity="1"
                      transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                    >
                      <path
                        id="path 1"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(31.867098865540292 0)  rotate(0 12.345280171360663 26.5)"
                        opacity="1"
                        d="M0,53L8.98,53C17.66,53 24.69,46.41 24.69,38.28L24.69,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                      />
                      <path
                        id="path 2"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
                        opacity="1"
                        d="M0,53L8.83,53C17.51,53 24.54,46.41 24.54,38.28L24.54,27.75L12.8,27.75C13.1,19.28 19.42,11.52 24.69,9.99L24.69,0C15.06,1.8 0,11.79 0,28.72L0,53Z "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
            <div
              class="p-20 transition-all-300 h-40 justify-center flex flex-col"
              :class="{ 'op-0': transition }"
            >
              <p>
                {{ $t(alumni[current].quote) }}
              </p>
              <p class="text-right">——{{ $t(alumni[current].name) }}</p>
            </div>
            <div class="absolute right-20px bottom-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                width="56.55765920826161"
                height="53"
                viewBox="0 0 56.55765920826161 53"
                fill="none"
              >
                <defs>
                  <rect
                    id="path_0"
                    x="0"
                    y="0"
                    width="56.55765920826162"
                    height="53"
                  />
                </defs>
                <g
                  opacity="1"
                  transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                >
                  <mask id="bg-mask-0" fill="white">
                    <use xlink:href="#path_0"></use>
                  </mask>
                  <g mask="url(#bg-mask-0)">
                    <g
                      opacity="1"
                      transform="translate(0 0)  rotate(0 28.27882960413081 26.5)"
                    >
                      <path
                        id="path 1"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(0 0)  rotate(0 12.345280171360665 26.5)"
                        opacity="1"
                        d="M24.69,0L15.71,0C7.03,0 0,6.59 0,14.72L0,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                      />
                      <path
                        id="path 2"
                        fill-rule="evenodd"
                        style="fill: #122a28"
                        transform="translate(31.867098865540356 0)  rotate(0 12.345280171360667 26.5)"
                        opacity="1"
                        d="M24.69,0L15.86,0C7.18,0 0.15,6.59 0.15,14.72L0.15,25.25L11.89,25.25C11.59,33.72 5.27,41.48 0,43.01L0,53C9.64,51.2 24.69,41.21 24.69,24.28L24.69,0Z "
                      />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
          <div class="flex items-center mt-10">
            <DesktopSwiper slides="3"
              ><swiper-slide v-for="(alumnus, index) in alumni" :key="alumnus"
                ><img
                  :src="alumnus.image"
                  class="w-full object-cover aspect-3/4 opacity-60 transition-all"
                  :class="{
                    '!opacity-100': current === index,
                    'hover:opacity-100 active:brightness-90':
                      current !== index && !transition
                  }"
                  v-on:click="change(index)"
                  alt="pic1" /></swiper-slide
            ></DesktopSwiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgAlum1 from '../../assets/images/AboutUs/Alumni/Alum_1.jpeg?webp'
import imgAlum3 from '../../assets/images/AboutUs/Alumni/Alum_3.jpeg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
import DesktopSwiper from '../DesktopSwiper.vue'

import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'

const alumni = [
  {
    image: imgAlum1,
    name: 'AboutUs.Alumni.1.Name',
    quote: 'AboutUs.Alumni.1.Quote'
  },
  {
    image: homeBg2,
    name: 'AboutUs.Alumni.2.Name',
    quote: 'AboutUs.Alumni.2.Quote'
  },
  {
    image: imgAlum3,
    name: 'AboutUs.Alumni.3.Name',
    quote: 'AboutUs.Alumni.3.Quote'
  }
]

const current = ref(0)
const transition = ref(false)

function change (index) {
  if (index === current.value || transition.value) return
  transition.value = true
  setTimeout(() => {
    current.value = index
    setTimeout(() => {
      transition.value = false
    }, 150)
  }, 300)
}
</script>

<style scoped>
.alumni-big-pic-box {
  box-shadow: -2rem 2rem var(--standard-red), -0.25rem 0.25rem 0.25rem grey;
}
</style>
