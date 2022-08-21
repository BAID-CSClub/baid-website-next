<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2]">
      <h1 class="text-18 font-300 font-sans color-white">
        {{ $t('EducationTeaching.Title') }}
      </h1>
    </CarouselHorizontal>
    <CurriculumsIntroduction />
    <LearningMethod />
    <StudentGuidence />
    <WonderfulMoment />
  </div>
</template>
<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'

import CurriculumsIntroduction from '../../components/DesktopEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethod from '../../components/DesktopEducationTeaching/LearningMethod.vue'
import StudentGuidence from '../../components/DesktopEducationTeaching/StudentGuidence.vue'
import WonderfulMoment from '../../components/DesktopEducationTeaching/WonderfulMoment.vue'
</script>
