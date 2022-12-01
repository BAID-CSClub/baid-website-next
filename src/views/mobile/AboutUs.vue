<template>
  <div>
    <open class="absolute"></open>
    <section class="p-3 snap-y snap-proximity overflow-y-scroll">
      <Curriculums class="snap-start"></Curriculums>
      <LearningMethod class="snap-start"></LearningMethod>
      <WonderfulMoment class="snap-start"></WonderfulMoment>
      <StudentGuidence class="snap-start"></StudentGuidence>
    </section>
  </div>
</template>

<script setup>
import open from '../../components/MobileAboutUs/AboutUsOpen.vue'
import Curriculums from '../../components/MobileAboutUs/AboutUsIntroduction.vue'
import LearningMethod from '../../components/MobileAboutUs/AboutUsAlumni.vue'
import StudentGuidence from '../../components/MobileAboutUs/AboutUsCompare.vue'
import WonderfulMoment from '../../components/MobileAboutUs/AboutUsBlock.vue'
</script>
