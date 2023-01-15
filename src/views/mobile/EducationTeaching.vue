<template>
  <div class="font-sans">
    <Splash />
    <div class="h-20"></div>
    <section class="section">
      <Curriculums></Curriculums>
      <LearningMethod></LearningMethod>
      <StudentGuidance></StudentGuidance>
      <WonderfulMoment></WonderfulMoment>
    </section>
  </div>
</template>

<script setup>
import Splash from '../../components/MobileEducationTeaching/EducationTeachingSplash.vue'
import Curriculums from '../../components/MobileEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethod from '../../components/MobileEducationTeaching/LearningMethod.vue'
import StudentGuidance from '../../components/MobileEducationTeaching/StudentGuidance.vue'
import WonderfulMoment from '../../components/MobileEducationTeaching/WonderfulMoments.vue'
</script>
