<template>
  <HomeSplash>
    <!-- BG -->
    <HomeBackground />
    <MobileHead :img="firstImg"> {{ $t('views.HomePage') }}</MobileHead>
    <section class="section">
      <MobileTitle>{{ data.introduction_title }}</MobileTitle>
      <VideoCard :cover="firstImg"></VideoCard>
      <br />
      <MobileTitle>{{ $t('HomePage.EducationPhilosophy.Title') }}</MobileTitle>
      <MobileCard
        :items="
          ['motto', 'spirit', 'key_competency', 'cultivation'].map((key) => ({
            key
          }))
        "
        :bg="swiperBg"
        :autoplay="true"
        @change="swiperBg = swiperBg === 'white' ? 'blue' : 'white'"
      >
        <template #item="{ key }">
          <div class="m-5 m-b-8">
            <h3
              class="m-y-0"
              :class="{
                'color-[var(--standard-blue)]': swiperBg === 'white',
                'color-white': swiperBg === 'blue'
              }"
            >
              {{ data[key + '_title'] }}
            </h3>
            <p
              class="m-y-3"
              :class="{
                'color-black': swiperBg === 'white',
                'color-white': swiperBg === 'blue'
              }"
            >
              {{ data[key + '_content'] }}
            </p>
          </div>
        </template>
      </MobileCard>
      <MobileTitle>遇见BAID</MobileTitle>
      <MobileCard>
        <div class="m-5 color-black">
          <p v-html="data.admission_results_content" />
        </div>
      </MobileCard>
    </section>
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

const swiperBg = ref('white')

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
