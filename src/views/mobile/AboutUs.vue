<template>
  <div>
    <open class="absolute"></open>
    <section>
      <Curriculums></Curriculums>
      <LearningMethod></LearningMethod>
      <WonderfulMoment></WonderfulMoment>
      <StudentGuidence></StudentGuidence>
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
