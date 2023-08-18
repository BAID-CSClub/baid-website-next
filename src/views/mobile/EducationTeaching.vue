<template>
  <div class="font-sans">
    <MobileTitleSplash
      :top="$t('EducationTeaching.Splash.Top')"
      :bottom="$t('EducationTeaching.Splash.Bottom')"
      color="red"
    >
      <div class="placeholder"></div>
      <section class="section">
        <Curriculums></Curriculums>
        <LearningMethod></LearningMethod>
        <StudentGuidance></StudentGuidance>
        <WonderfulMoment></WonderfulMoment>
      </section>
    </MobileTitleSplash>
  </div>
</template>

<script setup>
import Curriculums from '../../components/MobileEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethod from '../../components/MobileEducationTeaching/LearningMethod.vue'
import StudentGuidance from '../../components/MobileEducationTeaching/StudentGuidance.vue'
import WonderfulMoment from '../../components/MobileEducationTeaching/WonderfulMoments.vue'
import MobileTitleSplash from '../../components/MobileTitleSplash.vue'

import dataZH from '@data/zh-CN/Education.json'
import dataEN from '@data/en-US/Education.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
