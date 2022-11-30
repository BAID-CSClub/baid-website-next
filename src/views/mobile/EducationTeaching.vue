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
import HomeBackground from '../../components/MobileHomePage/HomeBackground.vue'
import open from '../../components/MobileEducationTeaching/EducationTeachingOpen.vue'
import Curriculums from '../../components/MobileEducationTeaching/Curriculums.vue'
import LearningMethod from '../../components/MobileEducationTeaching/LearningMethod.vue'
import StudentGuidence from '../../components/MobileEducationTeaching/StudentGuidence.vue'
import WonderfulMoment from '../../components/MobileEducationTeaching/Wonderful moment.vue'
import MobileCard from '../../components/MobileCard.vue'
import MobileHead from '../../components/MobileHead.vue'
import firstImg from '../../assets/images/HomePage/Autumn.jpg'
</script>
