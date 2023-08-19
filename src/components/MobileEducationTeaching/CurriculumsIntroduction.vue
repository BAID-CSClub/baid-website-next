<template>
  <div>
    <div class="relative font-black text-center">
      <h2 class="text-8 tracking-5 m-y-4">
        {{ $t('EducationTeaching.Curriculums.Title') }}
      </h2>
      <!-- <h2 class="text-4 tracking-wider text-gray-300 m-0!">Curriculums</h2> -->
    </div>
    <MobileCard :items="pageData.curriculums" :border="false" :autoplay="false">
      <template #item="{ name, content, index }">
        <div class="m-b-8 flex flex-col color-black">
          <div class="flex items-center m-x-2">
            <img :src="icons[index]" class="w-18 block" />
            <h3 class="m-x-2 text-6">{{ name }}</h3>
          </div>
          <pre class="m-y-2 m-x-4" v-html="content" />
        </div>
      </template>
    </MobileCard>
  </div>
</template>

<script setup>
import number1 from '../../assets/images/Number_1.svg'
import number2 from '../../assets/images/Number_2.svg'
import number3 from '../../assets/images/Number_3.svg'
import MobileCard from '../MobileCard.vue'

import 'swiper/css'
import 'swiper/css/pagination'
import { inject } from 'vue'

const pageData = inject('data')

const icons = [number1, number2, number3]
</script>
<style scoped>
.swiper {
  padding-bottom: 2rem !important;
}
</style>
