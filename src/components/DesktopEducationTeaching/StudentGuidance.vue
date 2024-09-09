<template>
  <div class="bg-gray-1 pt-1 mt-20 p-b-1">
    <div class="section">
      <div class="flex h-50vw max-h-180 min-h-80 justify-between my-45px">
        <div class="h-full mx-10 w-40% flex flex-col gap-10">
          <IntroductionBlock
            :title="pageData.student_mentorship[0].title"
            :content="pageData.student_mentorship[0].content"
            color="red"
          />
          <div
            class="flex-1 bg-cover"
            :style="{
              backgroundImage: `url(${pageData.student_mentorship[0].image})`
            }"
          />
        </div>
        <div class="h-full mx-10 w-40% flex flex-col gap-10">
          <div
            class="flex-1 bg-cover"
            :style="{
              backgroundImage: `url(${pageData.student_mentorship[1].image})`
            }"
          />
          <IntroductionBlock
            :title="pageData.student_mentorship[1].title"
            :content="pageData.student_mentorship[1].content"
            color="red"
          />
        </div>
        <NotFancyTitle
          cn="学生指导"
          en="Student Guidance"
          color="red"
          vertical
        ></NotFancyTitle>
      </div>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
import IntroductionBlock from './IntroductionBlock.vue'

const pageData = inject('data')
</script>
