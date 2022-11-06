<template>
  <div
    id="container"
    class="my-10 py-5 flex flex-col justify-center items-center"
  >
    <h1 class="text-10 font-300 font-title color-white text-center">
      {{ $t('StudentLife.Clubs.Title') }}
    </h1>
    <div class="flex justify-center items-center w-274">
      <DesktopSwiper slides="4">
        <swiper-slide
          v-for="club in clubs"
          :key="club"
          @click="
            ;(clubName = $t(club.name)),
              (clubDescription = $t(club.description)),
              (clubImgs = club.images),
              (showInfo = true)
          "
          class="flex justify-center py-3"
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
      </DesktopSwiper>
      <Transition>
        <ClubInfo
          v-if="showInfo"
          @close="showInfo = false"
          :name="clubName"
          :description="clubDescription"
          :images="clubImgs"
        ></ClubInfo
      ></Transition>
    </div>
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import ClubInfo from './ClubInfo.vue'
import DesktopSwiper from '../DesktopSwiper.vue'
import { ref } from 'vue'
import { SwiperSlide } from 'swiper/vue'

import imgFrenchLogo from '../../assets/images/StudentLife/Clubs/French/French.svg'
import imgFrench1 from '../../assets/images/StudentLife/Clubs/French/1.jpeg?webp'
import imgFrench2 from '../../assets/images/StudentLife/Clubs/French/2.png?webp'

import imgSLSD1 from '../../assets/images/StudentLife/Clubs/SLSD/1.jpeg?webp'
import imgSLSD2 from '../../assets/images/StudentLife/Clubs/SLSD/2.jpeg?webp'
import imgSLSD3 from '../../assets/images/StudentLife/Clubs/SLSD/3.jpeg?webp'
import imgSLSD4 from '../../assets/images/StudentLife/Clubs/SLSD/4.jpeg?webp'

import imgXHXC from '../../assets/images/StudentLife/Clubs/XHXC/XHXC.png?webp'

import imgNS from '../../assets/images/StudentLife/Clubs/NS/NS.png?webp'

import imgLY from '../../assets/images/StudentLife/Clubs/LY/LY.png?webp'

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
    logo: imgXHXC,
    bgColor: 'var(--standard-red)',
    color: 'white',
    name: 'StudentLife.Clubs.Club4.Name',
    description: 'StudentLife.Clubs.Club4.Description',
    images: frenchImgs
  },
  {
    logo: imgNS,
    bgColor: 'rgba(255, 195, 0, 1)',
    color: 'white',
    name: 'StudentLife.Clubs.Club5.Name',
    description: 'StudentLife.Clubs.Club5.Description',
    images: frenchImgs
  },
  {
    logo: imgLY,
    bgColor: 'rgba(255,251,243,1)',
    color: 'rgba(18,42,43,1)',
    name: 'StudentLife.Clubs.Club6.Name',
    description: 'StudentLife.Clubs.Club6.Description',
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
.v-enter-active {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}

.v-leave-active {
  transition-property: all;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  transition-duration: 150ms;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
