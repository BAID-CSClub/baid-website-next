<template>
  <div class="font-sans">
    <Splash>
      <section class="section">
        <Curriculums></Curriculums>
        <LearningMethod></LearningMethod>
        <StudentGuidance></StudentGuidance>
        <WonderfulMoment></WonderfulMoment>
      </section>
    </Splash>
  </div>
</template>

<script setup>
import Splash from '../../components/MobileEducationTeaching/EducationTeachingSplash.vue'
import Curriculums from '../../components/MobileEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethod from '../../components/MobileEducationTeaching/LearningMethod.vue'
import StudentGuidance from '../../components/MobileEducationTeaching/StudentGuidance.vue'
import WonderfulMoment from '../../components/MobileEducationTeaching/WonderfulMoments.vue'
</script>
