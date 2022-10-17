<template>
  <div class="section">
    <NotFancyTitle
      :cn="$t('AboutUs.Accreditation.Title')"
      en="Accreditation"
      color="blue"
    ></NotFancyTitle>
    <div class="grid grid-cols-4 grid-rows-2 m-t-6">
      <p class="col-span-2">{{ $t('AboutUs.Accreditation.Content') }}</p>
      <div></div>
      <div
        v-for="acc in accs"
        :key="acc"
        class="flex flex-col items-center justify-center m-auto h-40"
      >
        <div class="p-4">
          <img
            :src="acc.image"
            :alt="acc.title"
            class="max-h-14 min-h-12 block"
          />
        </div>
        <p>{{ $t(acc.name) }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgACT from '../../assets/images/AboutUs/ACT.svg'
import imgAP from '../../assets/images/AboutUs/AP.svg'
import imgCIS from '../../assets/images/AboutUs/CIS.png?webp'
import imgApple from '../../assets/images/AboutUs/Apple.svg'
import imgCam from '../../assets/images/AboutUs/Cambridge.png?webp'

import NotFancyTitle from '../NotFancyTitle.vue'

const accs = [
  {
    image: imgAP,
    name: 'AboutUs.Accreditation.AP'
  },
  {
    image: imgACT,
    name: 'AboutUs.Accreditation.ACT'
  },
  {
    image: imgCIS,
    name: 'AboutUs.Accreditation.CIS'
  },
  {
    image: imgCam,
    name: 'AboutUs.Accreditation.Cambridge'
  },
  {
    image: imgApple,
    name: 'AboutUs.Accreditation.Apple'
  }
]
</script>
