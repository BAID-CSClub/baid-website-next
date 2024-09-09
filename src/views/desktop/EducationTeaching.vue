<template>
  <div>
    <CarouselHorizontal :images="data.carousel_images || []">
      <h1 class="text-18 font-sans color-white">
        {{ $t('views.EducationTeaching') }}
      </h1>
    </CarouselHorizontal>
    <section id="curriculums">
      <CurriculumsIntroduction />
    </section>
    <section id="learningMethods">
      <LearningMethods />
    </section>
    <section id="studentGuidance">
      <StudentGuidance />
    </section>
    <section id="wonderfulMoments">
      <WonderfulMoments />
    </section>
  </div>
</template>
<script setup>
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import CurriculumsIntroduction from '../../components/DesktopEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethods from '../../components/DesktopEducationTeaching/LearningMethods.vue'
import StudentGuidance from '../../components/DesktopEducationTeaching/StudentGuidance.vue'
import WonderfulMoments from '../../components/DesktopEducationTeaching/WonderfulMoments.vue'

// Data
import dataZH from '@data/zh-CN/Education.json'
import dataEN from '@data/en-US/Education.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
