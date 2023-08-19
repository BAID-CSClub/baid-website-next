<template>
  <HomeSplash>
    <!-- BG -->
    <HomeBackground />
    <MobileHead :img="firstImg"> {{ $t('views.HomePage') }}</MobileHead>
    <section class="section">
      <MobileTitle>{{ data.introduction_title }}</MobileTitle>
      <MobileCard>
        <pre class="m-5 color-black" v-html="data.introduction"></pre>
      </MobileCard>
      <VideoCard class="m-b-0" :cover="firstImg"></VideoCard>
    </section>
    <EducationPhilosophy></EducationPhilosophy>
    <AdmissionResults></AdmissionResults>
    <PrincipalMessage></PrincipalMessage>
    <NewsSection :news="news"></NewsSection>
  </HomeSplash>
</template>

<script setup>
import HomeBackground from '@/components/MobileHomePage/HomeBackground.vue'
import MobileCard from '@/components/MobileCard.vue'
import MobileHead from '@/components/MobileHead.vue'

import firstImg from '../../assets/images/HomePage/Autumn.jpg?webp'
import VideoCard from '../../components/VideoCard.vue'
import MobileTitle from '../../components/MobileTitle.vue'
import { ref, computed, provide, watchEffect } from 'vue'
import NewsSection from '../../components/MobileHomePage/NewsSection.vue'
import PrincipalMessage from '../../components/MobileHomePage/PrincipalMessage.vue'
import HomeSplash from '../../components/MobileHomePage/HomeSplash.vue'

import { useI18n } from 'vue-i18n'
// Data
import dbZH from '@data/zh-CN/db.json'
import dbEN from '@data/en-US/db.json'
import dataZH from '@data/zh-CN/Home.json'
import dataEN from '@data/en-US/Home.json'
import { useRoute } from 'vue-router'
import AdmissionResults from '../../components/MobileHomePage/AdmissionResults.vue'
import EducationPhilosophy from '../../components/MobileHomePage/EducationPhilosophy.vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)

const news = ref([])
const route = useRoute()

watchEffect(() => {
  let data
  if (route.params.lang === 'zh-CN') {
    data = Object.values(dbZH)
  } else {
    data = Object.values(dbEN)
  }

  // Sort by date
  data.sort((a, b) => {
    return new Date(b.date) - new Date(a.date)
  })
  news.value = data
})
</script>
