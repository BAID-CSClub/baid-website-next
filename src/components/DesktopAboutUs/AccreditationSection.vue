<template>
  <div class="section">
    <NotFancyTitle
      :cn="$t('AboutUs.Accreditation.Title')"
      en="Accreditation"
      color="blue"
    ></NotFancyTitle>
    <p>{{ $t('AboutUs.Accreditation.Content') }}</p>
    <div class="flex items-center justify-center m-t-6">
      <div
        v-for="acc in accs"
        :key="acc"
        class="flex flex-col items-center justify-center m-x-auto"
      >
        <img :src="acc.image" :alt="acc.title" class="h-16 m-4" />
        <p>{{ acc[$i18n.locale].name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import imgACT from '../../assets/images/AboutUs/ACT.svg'
import imgAP from '../../assets/images/AboutUs/AP.svg'
import imgCIS from '../../assets/images/AboutUs/CIS.png?webp'
import imgApple from '../../assets/images/AboutUs/Apple.svg'

import NotFancyTitle from '../NotFancyTitle.vue'

const accs = [
  {
    image: imgAP,
    'zh-CN': {
      name: 'AP 授权校'
    },
    'en-US': {
      name: 'AP Authorized'
    }
  },
  {
    image: imgACT,
    'zh-CN': {
      name: 'ACT GAC 授权校'
    },
    'en-US': {
      name: 'ACT GAC Authorized'
    }
  },
  {
    image: imgCIS,
    'zh-CN': {
      name: 'CIS 认证校'
    },
    'en-US': {
      name: 'CIS Accredited'
    }
  },
  {
    image: imgApple,
    'zh-CN': {
      name: 'Apple 杰出学校'
    },
    'en-US': {
      name: 'Apple Distinguished School'
    }
  }
]
</script>

<style></style>

}, 'ACT': { name: 'ACT GAC授权校' }, 'CIS': { name: 'CIS认证校' }, 'Apple': {
name: 'Apple杰出学校' },
