<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2]">
      <h1 class="text-18 font-sans color-white">
        {{ $t('views.JoinUs') }}
      </h1>
    </CarouselHorizontal>
    <section id="joinStudent">
      <JoinStudentSection />
    </section>
    <section id="joinFaculty">
      <JoinFacultySection />
    </section>
  </div>
</template>
<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import JoinStudentSection from '../../components/DesktopJoinUs/JoinStudentSection.vue'
import JoinFacultySection from '../../components/DesktopJoinUs/JoinFacultySection.vue'
</script>
