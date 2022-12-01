<template>
  <div class="w-full h-[calc(100vh-5rem)] mt-20">
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
  </div>
</template>

<script setup>
import camping from '../../assets/images/StudentLife/Activities/Camping.jpg?webp'
import arrow from '../../assets/images/StudentLife/Activities/ZWTZY.jpg?webp'
</script>
