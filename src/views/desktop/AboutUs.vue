<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2]">
      <h1 class="text-18 color-white">
        {{ $t('AboutUs.Title') }}
      </h1>
    </CarouselHorizontal>
    <VisionSection />
    <AlumniSection />
    <section class="bg-gray-200">
      <HonorSection />
    </section>
    <section class="bg-[var(--standard-blue)]">
      <TestCenterSection />
    </section>
    <section>
      <div class="section important:p-b-0">
        <NotFancyTitle cn="师资" en="Faculty" color="blue"></NotFancyTitle>
      </div>
      <div
        :style="{ backgroundImage: 'url(' + homeBg2 + ')' }"
        style="background-size: cover; background-position: center"
      >
        <div
          class="text-white h-80 flex justify-center items-center"
          style="background-color: rgba(0, 0, 0, 0.5)"
        >
          <FacultySection />
        </div>
      </div>
    </section>

    <QuoteMessage
      author="WHO"
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem sequi consequatur nisi non? Fugiat magnam dicta laboriosam mollitia corrupti sed! Repellat quidem quae ad iusto natus aliquam maxime iure ex!"
      :avatar="avatar"
    />
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'

import avatar from '../../assets/images/homeBg1.jpg'

import VisionSection from '../../components/DesktopAboutUs/VisionSection.vue'
import AlumniSection from '../../components/DesktopAboutUs/AlumniSection.vue'
import HonorSection from '../../components/DesktopAboutUs/HonorSection.vue'
import TestCenterSection from '../../components/DesktopAboutUs/TestCenterSection.vue'
import FacultySection from '../../components/DesktopAboutUs/FacultySection.vue'
import QuoteMessage from '../../components/QuoteMessage.vue'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import NotFancyTitle from '../../components/NotFancyTitle.vue'
</script>
