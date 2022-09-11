<template>
  <div class="flex justify-between">
    <img :src="img1" alt="" class="w-40% object-cover" />
    <div class="h-full m-x-10 w-40%">
      <img :src="img1" alt="" class="w-full m-b-10 m-t--10 object-cover" />
      <IntroductionBlock
        content="Introduction goes here!
Another line"
        class="w-full"
      />
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
</script>
