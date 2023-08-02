<template>
  <div>
    <CarouselHorizontal :images="[imgHeader1]">
      <h1 class="text-18 font-sans color-white">
        {{ $t('views.AboutUs') }}
      </h1>
    </CarouselHorizontal>
    <section id="overview"><OverviewSection /></section>
    <section id="alumni"><AlumniSection /></section>
    <section id="accreditation" class="bg-gray-200">
      <AccreditationSection />
    </section>
    <section id="data">
      <div class="section important:p-b-0">
        <NotFancyTitle
          :cn="$t('AboutUs.Data.Title')"
          en="Data"
          color="blue"
        ></NotFancyTitle>
      </div>
      <div
        :style="{ backgroundImage: 'url(' + imgHeader1 + ')' }"
        style="background-size: cover; background-position: center"
      >
        <div
          class="text-white h-90 flex items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <DataSection />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import imgHeader1 from '../../assets/images/AboutUs/Header_1.jpg?webp'

import OverviewSection from '../../components/DesktopAboutUs/OverviewSection.vue'
import AlumniSection from '../../components/DesktopAboutUs/AlumniSection.vue'
import AccreditationSection from '../../components/DesktopAboutUs/AccreditationSection.vue'
import DataSection from '../../components/DesktopAboutUs/DataSection.vue'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import NotFancyTitle from '../../components/NotFancyTitle.vue'

// Data
import dataZH from '@data/zh-CN/AboutUs.json'
import dataEN from '@data/en-US/AboutUs.json'

import { useI18n } from 'vue-i18n'
import { computed, provide } from 'vue'

const { locale } = useI18n({ useScope: 'global' })

// Provide page data
const data = computed(() => (locale.value === 'zh-CN' ? dataZH : dataEN))
provide('data', data)
</script>
