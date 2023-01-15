<template>
  <div>
    <div class="relative font-black m-t-20 text-center">
      <div class="text-8 tracking-5">课程体系</div>
      <div class="text-4 tracking-wider text-gray-300 m-t--2">Curriculums</div>
    </div>
    <swiper
      :slides-per-view="1"
      :modules="modules"
      :pagination="{ clickable: true }"
      :loop="true"
      :autoHeight="true"
      class="m-b-2"
    >
      <swiper-slide v-for="item in curriculums" :key="item">
        <div class="flex items-center">
          <img :src="item.icon" class="w-18 block" />
          <h3 class="m-x-2 text-6">{{ $t(item.title) }}</h3>
        </div>
        <div class="flex flex-col items-center m-y-2">
          <pre class="m-x-4">{{ $t(item.description) }}</pre>
        </div>
      </swiper-slide></swiper
    >
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

const modules = [Pagination, A11y]

const curriculums = [
  {
    title: 'EducationTeaching.Curriculums.1.Title',
    description: 'EducationTeaching.Curriculums.1.Description',
    icon: number1
  },
  {
    title: 'EducationTeaching.Curriculums.2.Title',
    description: 'EducationTeaching.Curriculums.2.Description',
    icon: number2
  },
  {
    title: 'EducationTeaching.Curriculums.3.Title',
    description: 'EducationTeaching.Curriculums.3.Description',
    icon: number3
  }
]
</script>
<style scoped>
.swiper-pagination {
  top: 2px;
}
</style>
