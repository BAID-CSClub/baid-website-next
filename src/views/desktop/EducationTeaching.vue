<template>
  <div>
    <CarouselHorizontal :images="[imgHeader1, imgHeader2, imgHeader3]">
      <h1 class="text-18 font-sans color-white">
        {{ $t('views.EducationTeaching') }}
      </h1>
    </CarouselHorizontal>
    <section id="curriculum">
      <CurriculumsIntroduction />
    </section>
    <section id="learningMethods">
      <LearningMethods />
    </section>
    <section id="studentGuidence">
      <StudentGuidence />
    </section>
    <section id="wonderfulMoments">
      <WonderfulMoment />
    </section>
  </div>
</template>
<script setup>
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import imgHeader1 from '../../assets/images/EducationTeaching/Header_1.jpg?webp'
import imgHeader2 from '../../assets/images/EducationTeaching/Header_2.jpg?webp'
import imgHeader3 from '../../assets/images/EducationTeaching/Header_3.jpg?webp'

import CurriculumsIntroduction from '../../components/DesktopEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethods from '../../components/DesktopEducationTeaching/LearningMethods.vue'
import StudentGuidence from '../../components/DesktopEducationTeaching/StudentGuidence.vue'
import WonderfulMoment from '../../components/DesktopEducationTeaching/WonderfulMoment.vue'
</script>
