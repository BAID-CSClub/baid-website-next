<template>
  <div>
    <CarouselHorizontal :images="[imgHeader1]">
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
import imgHeader1 from '../../assets/images/EducationTeaching/Header_1.jpg?webp'

import CurriculumsIntroduction from '../../components/DesktopEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethods from '../../components/DesktopEducationTeaching/LearningMethods.vue'
import StudentGuidance from '../../components/DesktopEducationTeaching/StudentGuidance.vue'
import WonderfulMoments from '../../components/DesktopEducationTeaching/WonderfulMoments.vue'
</script>
