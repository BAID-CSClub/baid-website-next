<template>
  <div class="flex flex-col justify-center items-center h-screen snap-start">
    <div>
      <img
        :src="imgHeader1"
        alt=""
        class="inline h-50vh max-h-100 aspect-3/4 object-cover rounded-3xl"
      />
    </div>
    <p class="text-6 text-gray600 text-center">欢迎加入</p>
    <p class="text-[var(--standard-blue)] tracking-widest text-center">BAID</p>
    <h2 class="m-0! text-9 font-600 text-center">北京中学国际部</h2>
    <div class="grid m-y-2 grid-cols-2 gap-6">
      <a
        class="decoration-none text-blue font-sans"
        href="#joinStudent"
        @click="$emit('student')"
        >学生申请></a
      >
      <a
        class="decoration-none text-blue font-sans"
        href="#joinFaculty"
        @click="$emit('faculty')"
        >师资招聘></a
      >
    </div>
  </div>
</template>

<script setup>
import imgHeader1 from '../../assets/images/homeBg1.jpg?webp'
</script>
