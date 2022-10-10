<template>
  <div>
    <CarouselHorizontal :images="[imgHeader1]">
      <h1 class="text-18 color-white">
        {{ $t('AboutUs.Title') }}
      </h1>
    </CarouselHorizontal>
    <section id="overview"><OverviewSection /></section>
    <section id="alumni"><AlumniSection /></section>
    <section id="accreditation" class="bg-gray-200">
      <AccreditationSection />
      <!-- <div class="bg-[var(--standard-blue)]">
        <TestCenterSection />
      </div> -->
    </section>
    <section id="faculty">
      <div class="section important:p-b-0">
        <NotFancyTitle cn="师资" en="Faculty" color="blue"></NotFancyTitle>
      </div>
      <div
        :style="{ backgroundImage: 'url(' + imgHeader1 + ')' }"
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
import imgHeader1 from '../../assets/images/AboutUs/Header 1.jpg?webp'

import OverviewSection from '../../components/DesktopAboutUs/OverviewSection.vue'
import AlumniSection from '../../components/DesktopAboutUs/AlumniSection.vue'
import AccreditationSection from '../../components/DesktopAboutUs/AccreditationSection.vue'
import FacultySection from '../../components/DesktopAboutUs/FacultySection.vue'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import NotFancyTitle from '../../components/NotFancyTitle.vue'
</script>
