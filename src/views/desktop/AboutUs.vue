<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2]">
      <h1 class="text-18 color-white">
        {{ $t('AboutUs.Title') }}
      </h1>
    </CarouselHorizontal>
    <section id="overview"><OverviewSection /></section>
    <section id="alumni"><AlumniSection /></section>
    <section id="honor" class="bg-gray-200">
      <HonorSection />
      <div class="bg-[var(--standard-blue)]">
        <TestCenterSection />
      </div>
    </section>
    <section id="faculty">
      <div class="section important:p-b-0">
        <NotFancyTitle cn="师资" en="Faculty" color="blue"></NotFancyTitle>
      </div>
      <div
        :style="{ backgroundImage: 'url(' + homeBg2 + ')' }"
        style="background-size: cover; background-position: center"
      >
        <div
          class="text-white h-90 flex items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <FacultySection />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'

import OverviewSection from '../../components/DesktopAboutUs/OverviewSection.vue'
import AlumniSection from '../../components/DesktopAboutUs/AlumniSection.vue'
import HonorSection from '../../components/DesktopAboutUs/HonorSection.vue'
import TestCenterSection from '../../components/DesktopAboutUs/TestCenterSection.vue'
import FacultySection from '../../components/DesktopAboutUs/FacultySection.vue'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import NotFancyTitle from '../../components/NotFancyTitle.vue'
</script>
