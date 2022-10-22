<template>
  <div
    id="container"
    class="my-10 py-5 flex flex-col justify-center items-center"
  >
    <h1 class="text-10 font-300 font-title color-white text-center">
      {{ $t('StudentLife.Clubs.Title') }}
    </h1>
    <div class="flex justify-center items-center w-274">
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
        :loop="true"
        :slides-per-view="4"
        :space-between="10"
        ref="swiper"
        @swiper="getRef"
      >
        <swiper-slide
          v-for="club in clubs"
          :key="club"
          @click="
            ;(clubName = $t(club.name)),
              (clubDescription = $t(club.description)),
              (clubImgs = club.images),
              (showInfo = true)
          "
          class="flex justify-center p-y-3"
        >
          <div
            class="h-220px aspect-1 items-center justify-center flex flex-col"
            style="box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5)"
            :style="{ 'background-color': club.bgColor, color: club.color }"
          >
            <div class="text-8 font-title m-1">
              {{ $t(club.name) }}
            </div>
            <div class="m-1">
              <img
                :src="club.logo"
                class="w-80px aspect-1 object-cover block"
              />
            </div>
          </div>
        </swiper-slide>
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
      <ClubInfo
        v-if="showInfo"
        @close="showInfo = false"
        :name="clubName"
        :description="clubDescription"
        :images="clubImgs"
      ></ClubInfo>
    </div>
  </div>
</template>

<script setup>
import imgFrenchLogo from '../../assets/images/StudentLife/Clubs/French/French.svg'
import imgFrench1 from '../../assets/images/StudentLife/Clubs/French/1.jpeg?webp'
import imgFrench2 from '../../assets/images/StudentLife/Clubs/French/2.png?webp'

import imgSLSD1 from '../../assets/images/StudentLife/Clubs/SLSD/1.jpeg?webp'
import imgSLSD2 from '../../assets/images/StudentLife/Clubs/SLSD/2.jpeg?webp'
import imgSLSD3 from '../../assets/images/StudentLife/Clubs/SLSD/3.jpeg?webp'
import imgSLSD4 from '../../assets/images/StudentLife/Clubs/SLSD/4.jpeg?webp'

import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import ClubInfo from './ClubInfo.vue'
import { ref } from 'vue'

import { Navigation, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/vue'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const modules = [Navigation, A11y]
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

const showInfo = ref(false)
const clubName = ref(null)
const clubDescription = ref(null)
const clubImgs = ref(null)

const frenchImgs = [imgFrench1, imgFrench2]
const SLSDImgs = [imgSLSD1, imgSLSD2, imgSLSD3, imgSLSD4]

const clubs = [
  {
    logo: imgFrenchLogo,
    bgColor: 'rgba(255,251,243,1)',
    color: 'rgba(18,42,43,1)',
    name: 'StudentLife.Clubs.Club1.Name',
    description: 'StudentLife.Clubs.Club1.Description',
    images: frenchImgs
  },
  {
    logo: homeBg1,
    bgColor: 'var(--standard-blue)',
    color: 'white',
    name: 'StudentLife.Clubs.Club2.Name',
    description: 'StudentLife.Clubs.Club2.Description',
    images: SLSDImgs
  },
  {
    logo: homeBg1,
    bgColor: 'rgba(255, 195, 0, 1)',
    color: 'white',
    name: 'StudentLife.Clubs.Club3.Name',
    description: 'StudentLife.Clubs.Club3.Description',
    images: frenchImgs
  },
  {
    logo: homeBg1,
    bgColor: 'rgba(131, 5, 14, 1)',
    color: 'white',
    name: 'StudentLife.Clubs.Club4.Name',
    description: 'StudentLife.Clubs.Club4.Description',
    images: frenchImgs
  }
]
</script>

<style scoped>
#container {
  background-image: url('../../assets/images/campusBg3.png?webp');
  background-repeat: no-repeat;
  background-size: 100% 600px;
}
.swiper-container {
  width: 100%;
  max-width: 100%;
  max-height: 100%;
  min-height: 0;
  min-width: 0;
}
</style>
