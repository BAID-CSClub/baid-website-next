<template>
  <div class="w-screen h-[calc(100vh-5rem)] font-sans">
    <div class="placeholder"></div>
    <SplashBlock title="学生社团" :image="camping"></SplashBlock>
    <SplashBlock title="特色活动" :image="archery"></SplashBlock>
  </div>
</template>

<script setup>
import camping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import archery from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
import SplashBlock from '../../components/MobileStudentLife/SplashBlock.vue'
</script>
