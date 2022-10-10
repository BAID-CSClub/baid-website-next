<template>
  <div class="section">
    <NotFancyTitle
      :cn="$t('AboutUs.Accreditation.Title')"
      en="Accreditation"
      color="blue"
    ></NotFancyTitle>
    <p>需不需要一段文字介绍？</p>
    <div class="flex items-center justify-center m-t-6">
      <div
        v-for="acc in accs"
        :key="acc"
        class="flex flex-col items-center justify-center m-x-auto"
      >
        <img :src="acc.image" :alt="acc.title" class="h-18 m-4" />
        <p>{{ acc.title }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgACT from '../../assets/images/AboutUs/ACT.svg'
import imgAP from '../../assets/images/AboutUs/AP.svg'
import imgCIS from '../../assets/images/AboutUs/CIS.png?webp'

import NotFancyTitle from '../NotFancyTitle.vue'

const accs = [
  {
    image: imgAP,
    title: 'AP'
  },
  {
    image: imgACT,
    title: 'ACT GAC'
  },
  {
    image: imgCIS,
    title: 'CIS'
  }
]
</script>

<style></style>
