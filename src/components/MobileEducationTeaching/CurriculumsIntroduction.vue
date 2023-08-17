<template>
  <div>
    <div class="relative font-black text-center">
      <h2 class="text-8 tracking-5 m-y-4">课程体系</h2>
    </div>
    <swiper
      :slides-per-view="1"
      :space-between="10"
      :modules="modules"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoHeight="true"
    >
      <swiper-slide v-for="(item, index) in pageData.curriculums" :key="index">
        <div class="rd-5 box-border m-2 drop-shadow p-2">
          <div class="flex items-center">
            <img :src="icons[index]" class="w-18 block" />
            <h3 class="m-x-2 text-6">{{ item.name }}</h3>
          </div>
          <div class="flex flex-col items-center m-y-2">
            <pre class="m-x-4" v-html="item.content" />
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import number1 from '../../assets/images/Number_1.svg'
import number2 from '../../assets/images/Number_2.svg'
import number3 from '../../assets/images/Number_3.svg'

import { Swiper, SwiperSlide } from 'swiper/vue'
import { A11y, Pagination } from 'swiper'

import 'swiper/css'
import 'swiper/css/pagination'
import { inject } from 'vue'

const modules = [Pagination, A11y]

const pageData = inject('data')

const icons = [number1, number2, number3]
</script>
<style scoped>
.swiper {
  padding-bottom: 2rem !important;
}
</style>
