<template>
  <div>
    <CarouselHorizontal :images="[imgHeader1, imgHeader2]">
      <h1 class="text-18 font-300 font-sans color-white">
        {{ $t('StudentLife.Title') }}
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
import imgHeader1 from '../../assets/images/StudentLife/Header 1.jpg?webp'
import imgHeader2 from '../../assets/images/StudentLife/Header 2.jpg?webp'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import ClubsSection from '../../components/DesktopStudentLife/ClubsSection.vue'
import ActivitiesSection from '../../components/DesktopStudentLife/ActivitiesSection.vue'
</script>

<style></style>
