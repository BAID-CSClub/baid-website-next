<template>
  <div id="container" class="my-10 py-5 flex flex-col justify-center items-center">
    <h1 class="text-10 font-300 font-title color-white text-center">
      {{ $t('StudentLife.Clubs.Title') }}
    </h1>
    <div class="flex justify-center items-center w-274">
      <DesktopSwiper slides="4">
        <swiper-slide v-for="club in pageData.clubs" :key="club" @click="
                                    ; (clubName = club.name),
          (clubDescription = club.content),
          (clubImgs = club.images),
          (showInfo = true)
          " class="flex justify-center py-3">
          <div class="h-220px aspect-1 items-center justify-center flex flex-col"
            style="box-shadow: 8px 4px 4px 3px rgba(0, 0, 0, 0.5)"
            :style="{ 'background-color': club.bg_color || 'white', color: club.color || 'black' }">
            <div class="text-8 font-title m-1">
              {{ club.name }}
            </div>
            <div class="m-1">
              <img :src="club.icon" class="w-80px aspect-1 object-cover block" />
            </div>
          </div>
        </swiper-slide>
      </DesktopSwiper>
      <Transition name="fade">
        <ClubInfo v-if="showInfo" @close="showInfo = false" :name="clubName" :description="clubDescription"
          :images="clubImgs"></ClubInfo>
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

<style scoped>
#container {
  background-image: url('../../assets/images/campusBg3.png?webp');
  background-repeat: no-repeat;
  background-size: 100% 600px;
}
</style>
