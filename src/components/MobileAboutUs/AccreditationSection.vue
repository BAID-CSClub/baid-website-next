<template>
  <section class="section">
    <MobileTitle>{{ $t('AboutUs.Accreditation.Title') }}</MobileTitle>
    <pre v-html="pageData.accreditation"></pre>
    <MobileCard :items="accs" :border="false">
      <template #item="{ image, name }">
        <div class="bg-yellow flex flex-col justify-center items-center h-45">
          <img :src="image" class="max-h-15 w-auto h-auto object-cover m-b-2" />
          <span class="font-sans">{{ $t(name) }}</span>
        </div>
      </template>
    </MobileCard>
  </section>
</template>

<script setup>
import { inject } from 'vue'
import MobileCard from '../MobileCard.vue'
import MobileTitle from '../MobileTitle.vue'
import imgACT from '../../assets/images/AboutUs/ACT.svg'
import imgAP from '../../assets/images/AboutUs/AP.svg'
import imgCIS from '../../assets/images/AboutUs/CIS.png?webp'
import imgApple from '../../assets/images/AboutUs/Apple.svg'
import imgCam from '../../assets/images/AboutUs/Cambridge.png?webp'

const pageData = inject('data')

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
