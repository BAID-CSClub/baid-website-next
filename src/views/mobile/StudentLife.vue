<template>
  <div class="w-full h-[calc(100vh-5rem)] mt-20">
    <SplashBlock title="学生社团" href="#" :image="camping"></SplashBlock>
    <SplashBlock title="特色活动" href="#" :image="archery"></SplashBlock>
  </div>
</template>

<script setup>
import camping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import archery from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
import SplashBlock from '../../components/MobileStudentLife/SplashBlock.vue'
</script>
