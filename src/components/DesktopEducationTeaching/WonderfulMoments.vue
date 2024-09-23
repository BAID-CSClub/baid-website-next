<template>
  <div class="section">
    <div class="mt-10">
      <NotFancyTitle
        cn="精彩瞬间"
        en="Wonderful Moments"
        color="red"
      ></NotFancyTitle>
    </div>

    <div
      class="bg-white h-40vw min-h-150 grid grid-cols-3 grid-rows-3 gap-8 mt-20"
    >
      <div class="col-start-1 row-start-1">
        <img
          :src="pageData.moments[0] || homeBg1"
          alt="Some Image Here"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="col-start-2 row-start-1 row-span-2">
        <img
          :src="pageData.moments[1] || homeBg1"
          alt="Some Image Here"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="col-start-3 row-start-1">
        <img
          :src="pageData.moments[2] || homeBg1"
          alt="Some Image Here"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="col-start-1 row-start-2 row-span-2">
        <img
          :src="pageData.moments[3] || homeBg1"
          alt="Some Image Here"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="col-start-2 row-start-3">
        <img
          :src="pageData.moments[4] || homeBg1"
          alt="Some Image Here"
          class="object-cover object-center w-full h-full"
        />
      </div>

      <div class="col-start-3 row-start-2 row-span-2">
        <img
          :src="pageData.moments[5] || homeBg1"
          alt="Some Image Here"
          class="object-cover object-center w-full h-full"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'
import { inject } from 'vue'

const pageData = inject('data')
</script>
