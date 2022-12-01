<template>
  <div>
    <open class="absolute"></open>
    <section class="p-3 snap-y snap-proximity overflow-y-scroll">
      <Curriculums class="snap-start"></Curriculums>
      <LearningMethod class="snap-start"></LearningMethod>
      <StudentGuidence class="snap-start"></StudentGuidence>
      <WonderfulMoment class="snap-start"></WonderfulMoment>
    </section>
  </div>
</template>

<script setup>
import open from '../../components/MobileEducationTeaching/EducationTeachingOpen.vue'
import Curriculums from '../../components/MobileEducationTeaching/CurriculumsIntroduction.vue'
import LearningMethod from '../../components/MobileEducationTeaching/LearningMethod.vue'
import StudentGuidence from '../../components/MobileEducationTeaching/StudentGuidence.vue'
import WonderfulMoment from '../../components/MobileEducationTeaching/WonderfulMoment.vue'
</script>
