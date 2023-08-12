<template>
  <div>
    <CarouselHorizontal :images="data.carousel_images || []">
      <h1 class="text-18 font-sans color-white">
        {{ $t('views.StudentLife') }}
      </h1>
    </CarouselHorizontal>
    <section id="activities">
      <ActivitiesSection />
    </section>
    <section id="clubs">
      <ClubsSection />
    </section>
  </div>
</template>

<script setup>
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import ClubsSection from '../../components/DesktopStudentLife/ClubsSection.vue'
import ActivitiesSection from '../../components/DesktopStudentLife/ActivitiesSection.vue'

// Data
import dataZH from '@data/zh-CN/StudentLife.json'
import dataEN from '@data/en-US/StudentLife.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
