<template>
  <div
    id="container"
    class="my-10 py-5 flex flex-col justify-center items-center bg-gray-200"
  >
    <h1 class="text-10 font-300 font-title text-center">
      {{ $t('StudentLife.Clubs.Title') }}
    </h1>
    <div class="flex justify-center items-center w-274">
      <DesktopSwiper autoplay="true" slides="4">
        <swiper-slide
          v-for="club in pageData.clubs"
          :key="club"
          @click="
            () => {
              clubName = club.name
              clubDescription = club.content
              clubImgs = club.images
              showInfo = true
            }
          "
          class="flex justify-center py-3"
        >
          <div
            class="h-220px aspect-1 items-center justify-center flex flex-col transition-300 hover:shadow-xl"
            :style="{ 'background-color': club.bg_color, color: club.color }"
          >
            <div class="text-8 font-title m-1">
              {{ club.name }}
            </div>
            <div class="m-1">
              <img
                :src="club.icon"
                class="w-80px aspect-1 object-cover block"
              />
            </div>
          </div>
        </swiper-slide>
      </DesktopSwiper>
      <Transition name="fade">
        <ClubInfo
          v-if="showInfo"
          @close="showInfo = false"
          :name="clubName"
          :description="clubDescription"
          :images="clubImgs"
        ></ClubInfo>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import ClubInfo from './ClubInfo.vue'
import DesktopSwiper from '../DesktopSwiper.vue'
import { ref, inject } from 'vue'
import { SwiperSlide } from 'swiper/vue'

const pageData = inject('data')

const showInfo = ref(false)
const clubName = ref(null)
const clubDescription = ref(null)
const clubImgs = ref(null)
</script>
