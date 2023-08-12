<template>
  <div class="section">
    <div class="flex justify-end">
      <NotFancyTitle
        :cn="$t('StudentLife.Activities.Title')"
        en="Activities"
        color="red"
        right
      ></NotFancyTitle>
    </div>
    <div
      class="grid gap-1 grid-rows-4"
      style="grid-template-columns: 3fr 3fr 2fr"
    >
      <div class="relative" style="grid-row-start: span 3">
        <EventsImg
          :image="pageData?.activities[0].image"
          :name="pageData?.activities[0].name"
          :description="pageData?.activities[0].content"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="pageData?.activities[1].image"
          :name="pageData?.activities[1].name"
          :description="pageData?.activities[1].content"
        ></EventsImg>
      </div>
      <div class="relative" style="grid-row-start: span 2">
        <EventsImg
          :image="pageData?.activities[2].image"
          :name="pageData?.activities[2].name"
          :description="pageData?.activities[2].content"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="pageData?.activities[3].image"
          :name="pageData?.activities[3].name"
          :description="pageData?.activities[3].content"
        ></EventsImg>
      </div>
      <div
        class="relative"
        style="grid-row-start: span 2; grid-column-start: span 2"
      >
        <EventsImg
          :image="pageData?.activities[4].image"
          :name="pageData?.activities[4].name"
          :description="pageData?.activities[4].content"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="pageData?.activities[5].image"
          :name="pageData?.activities[5].name"
          :description="pageData?.activities[5].content"
        ></EventsImg>
      </div>
    </div>
  </div>
</template>

<script setup>
import NotFancyTitle from '../../components/NotFancyTitle.vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import EventsImg from './EventsImg.vue'
import {inject} from 'vue'

const pageData = inject("data");

import imgBZHSY from '../../assets/images/StudentLife/Activities/BZHSY.jpg?webp'
import imgZWTZY from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
import imgCamping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import imgBZB from '../../assets/images/StudentLife/Activities/BZB.jpg?webp'
import imgED from '../../assets/images/StudentLife/Activities/ED.jpg?webp'
</script>

<style scoped>
.pic {
  background-image: url('../../assets/images/homeBg1.jpg?webp');
  background-size: auto;
  background-repeat: no-repeat;
}

#event1 p {
  width: 510px;
  word-break: break-all;
  white-space: pre-line;
}

#event2 p {
  width: 510px;
  word-break: break-all;
  white-space: pre-line;
}

#event3 p {
  width: 727px;
  word-break: break-all;
  white-space: pre-line;
}
</style>
