<template>
  <MobileTitleSplash
    :top="$t('AboutUs.Splash.Top')"
    :bottom="$t('AboutUs.Splash.Bottom')"
    color="blue"
  >
    <MobileHead :img="imgHeader1"></MobileHead>
    <section>
      <OverviewSection></OverviewSection>
      <AlumniSection></AlumniSection>
      <AccreditationSection></AccreditationSection>
      <DataSection></DataSection>
    </section>
  </MobileTitleSplash>
</template>

<script setup>
import OverviewSection from '../../components/MobileAboutUs/OverviewSection.vue'
import AlumniSection from '../../components/MobileAboutUs/AlumniSection.vue'
import DataSection from '../../components/MobileAboutUs/DataSection.vue'
import AccreditationSection from '../../components/MobileAboutUs/AccreditationSection.vue'
import MobileTitleSplash from '../../components/MobileTitleSplash.vue'
import MobileHead from '../../components/MobileHead.vue'
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg?webp'

import dataZH from '@data/zh-CN/AboutUs.json'
import dataEN from '@data/en-US/AboutUs.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
