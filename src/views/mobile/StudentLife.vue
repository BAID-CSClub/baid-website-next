<template>
  <div class="w-full max-h-screen">
    <HomeBackground />
    <MobileHead :img="imgHeader1"> {{ $t('views.StudentLife') }}</MobileHead>
    <section class="w-full h-[calc(100vh-260px)]">
      <div
        class="flex justify-center items-center flex-col h-50% w-full bg-cover"
        :style="{
          'background-image': `url(${camping})`
        }"
      >
        <h1 class="setColorH1">学生社团</h1>
        <a href="">了解更多</a>
      </div>

      <div
        class="flex justify-center items-center flex-col h-50% w-full bg-cover"
        :style="{
          'background-image': `url(${arrow})`
        }"
      >
        <h1 class="setColorH1">学生活动</h1>
        <a href="">了解更多</a>
      </div>
    </section>
  </div>
</template>

<script setup>
import MobileHead from '../../components/MobileHead.vue'
import imgHeader1 from '../../assets/images/StudentLife/Header_1.jpg?webp'
import camping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import arrow from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
</script>
<style type="text/css">
.setColorH1 {
  color: cyan;
}
</style>
