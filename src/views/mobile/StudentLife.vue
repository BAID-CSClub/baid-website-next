<template>
  <div class="w-full h-[calc(100vh-5rem)] mt-20">
    <SplashBlockClubs title="学生社团" :image="camping"></SplashBlockClubs>
    <SplashBlockActivities
      title="特色活动"
      :image="archery"
    ></SplashBlockActivities>
  </div>
</template>

<script setup>
import camping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import archery from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
import SplashBlockClubs from '../../components/MobileStudentLife/SplashBlockClubsWithoutJson.vue'
import SplashBlockActivities from '../../components/MobileStudentLife/SplashBlockActivities.vue'
</script>
