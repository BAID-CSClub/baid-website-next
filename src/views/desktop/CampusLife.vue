<template>
  <div>
    <CarouselHorizontal :images="[homeBg1, homeBg2, homeBg3, campusBg1]">
      <h1 class="text-18 font-300 font-sans color-white"> {{ $t("CampusLife.Title") }}</h1>
    </CarouselHorizontal>
    <ActivitiesSection />
    <ClubsSection />
    <EventsSection />
  </div>
</template>

<script setup>
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import homeBg2 from '../../assets/images/homeBg2.jpg?webp'
import homeBg3 from '../../assets/images/homeBg3.jpg?webp'
import campusBg1 from '../../assets/images/campusBg1.png?webp'
import CarouselHorizontal from '../../components/CarouselHorizontal.vue'
import ClubsSection from '../../components/DesktopCampusLife/ClubsSection.vue'
import ActivitiesSection from '../../components/DesktopCampusLife/ActivitiesSection.vue'
import EventsSection from '../../components/DesktopCampusLife/EventsSection.vue'
</script>

<style>
</style>
