<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2]">
      <h1 class="text-18 font-300 font-sans color-white">SOME TEXT</h1>
    </CarouselHorizontal>
    <VisionSection />
    <AlumniSection />
    <div class="bg-[lightgrey]">
      <HonorSection />
    </div>
    <div class="bg-[var(--standard-blue)]">
      <TestCenterSection />
    </div>
    <FacultySection />
    <QuoteSection />
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'

import VisionSection from '../../components/DesktopAboutUs/VisionSection.vue'
import AlumniSection from '../../components/DesktopAboutUs/AlumniSection.vue'
import HonorSection from '../../components/DesktopAboutUs/HonorSection.vue'
import TestCenterSection from '../../components/DesktopAboutUs/TestCenterSection.vue'
import FacultySection from '../../components/DesktopAboutUs/FacultySection.vue'
import QuoteSection from '../../components/DesktopAboutUs/QuoteSection.vue'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
</script>

<style>
.title {
  font-size: 2.25rem;
  margin: 0;
  color: var(--standard-blue);
}
</style>
