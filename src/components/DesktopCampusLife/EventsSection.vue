<template>
  <section class="section">
    <div class="flex justify-end">
      <NotFancyTitle
        cn="活动"
        en="Activities"
        color="red"
        right
      ></NotFancyTitle>
    </div>
    <div
      class="grid gap-1"
      style="
        grid-template-columns: 4fr 4fr 3fr;
        grid-template-rows: repeat(4, 1fr);
      "
    >
      <div class="relative" style="grid-row-start: span 3">
        <EventsImg
          :image="homeBg1"
          :name="$t('CampusLife.Events.Event1.Name')"
          :description="$t('CampusLife.Events.Event1.Description')"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="homeBg1"
          :name="$t('CampusLife.Events.Event1.Name')"
          :description="$t('CampusLife.Events.Event1.Description')"
        ></EventsImg>
      </div>
      <div class="relative" style="grid-row-start: span 2">
        <EventsImg
          :image="homeBg1"
          :name="$t('CampusLife.Events.Event1.Name')"
          :description="$t('CampusLife.Events.Event1.Description')"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="homeBg1"
          :name="$t('CampusLife.Events.Event1.Name')"
          :description="$t('CampusLife.Events.Event1.Description')"
        ></EventsImg>
      </div>
      <div
        class="relative"
        style="grid-row-start: span 2; grid-column-start: span 2"
      >
        <EventsImg
          :image="imgBZHSY"
          :name="$t('CampusLife.Events.Event2.Name')"
          :description="$t('CampusLife.Events.Event2.Description')"
        ></EventsImg>
      </div>
      <div class="relative">
        <EventsImg
          :image="homeBg1"
          :name="$t('CampusLife.Events.Event3.Name')"
          :description="$t('CampusLife.Events.Event3.Description')"
        ></EventsImg>
      </div>
    </div>
  </section>
</template>

<script setup>
import NotFancyTitle from '../../components/NotFancyTitle.vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import EventsImg from './EventsImg.vue'

import imgBZHSY from '../../assets/images/CampusLife/BZHSY.jpg?webp'
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
