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
          :image="imgED"
          :name="$t('StudentLife.Activities.Event1.Name')"
          :description="$t('StudentLife.Activities.Event1.Description')"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="imgCamping"
          :name="$t('StudentLife.Activities.Event2.Name')"
          :description="$t('StudentLife.Activities.Event2.Description')"
        ></EventsImg>
      </div>
      <div class="relative" style="grid-row-start: span 2">
        <EventsImg
          :image="imgZWTZY"
          :name="$t('StudentLife.Activities.Event4.Name')"
          :description="$t('StudentLife.Activities.Event4.Description')"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="imgBZB"
          :name="$t('StudentLife.Activities.Event3.Name')"
          :description="$t('StudentLife.Activities.Event3.Description')"
        ></EventsImg>
      </div>
      <div
        class="relative"
        style="grid-row-start: span 2; grid-column-start: span 2"
      >
        <EventsImg
          :image="imgBZHSY"
          :name="$t('StudentLife.Activities.Event6.Name')"
          :description="$t('StudentLife.Activities.Event6.Description')"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="homeBg1"
          :name="$t('StudentLife.Activities.Event5.Name')"
          :description="$t('StudentLife.Activities.Event5.Description')"
        ></EventsImg>
      </div>
    </div>
  </div>
</template>

<script setup>
import NotFancyTitle from '../../components/NotFancyTitle.vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import EventsImg from './EventsImg.vue'

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
