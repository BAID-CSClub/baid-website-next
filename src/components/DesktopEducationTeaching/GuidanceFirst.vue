<template>
  <div class="flex justify-between my-45px">
    <div class="h-full mx-10 w-40%">
      <IntroductionBlock title="ok" :content="dummyContent" class="w-full" />
      <img :src="img1" alt="" class="w-full m-t-10 object-cover" />
    </div>
    <div class="h-full mx-10 w-40%">
      <img :src="img1" alt="" class="w-full m-b-10 object-cover" />
      <IntroductionBlock title="ok" :content="dummyContent" class="w-full" />
    </div>
    <NotFancyTitle
      cn="学生指导"
      en="Student Guidance"
      color="red"
      vertical
    ></NotFancyTitle>
  </div>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import img1 from '../../assets/images/le1.png?webp'
import IntroductionBlock from './IntroductionBlock.vue'
const dummyContent = 'Introduction goes here!\nAnother line'
</script>
