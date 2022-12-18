<template>
  <div class="max-h-100vh h-100vh">
    <div class="relative m-b-6vh m-t-10vh">
      <div class="text-[var(--standard-red)] font-black text-14">
        自主探索<br />多样的<br />学习方式
      </div>
      <div
        class="font-black text-gray-300 text-8 absolute top-12 z--1 lh-16 text-black"
      >
        Learning<br />Method
      </div>
    </div>
    <div class="grid grid-flow-row grid-cols-2 grid-rows-2">
      <div
        class="b-4 b-[var(--standard-red)] b-rd-4 w-95% text-10 font-1000 text-white m-1.5 text-center box-border block p-l-9 p-r-9"
        style="
          background: url(https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
          background-size: cover;
        "
        @click="
          () => {
            bigtitle = passage.bigtitle
            description = passage.description
            images = passage.images
            introdisplay = true
          }
        "
        v-for="passage in LeaningMethods"
        :key="passage"
      >
        {{ $t(passage.title) }}
      </div>
    </div>
    <Intro
      :description="description"
      :bigtitle="bigtitle"
      :display="introdisplay"
      :image="images"
      @onExit="introdisplay = false"
    ></Intro>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import Intro from './LearningMethodIntro.vue'

const bigtitle = ref('标题')
const description = ref('默认介绍')
const images = ref(
  'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
)
const introdisplay = ref(false)
const LeaningMethods = [
  {
    title: 'EducationTeaching.Learning.Method1.Title',
    bigtitle: 'EducationTeaching.Learning.Method1.BigTitle',
    description: 'EducationTeaching.Learning.Method1.Description',
    images: homeBg1
  },
  {
    title: 'EducationTeaching.Learning.Method2.Title',
    bigtitle: 'EducationTeaching.Learning.Method2.BigTitle',
    description: 'EducationTeaching.Learning.Method2.Description',
    images: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    title: 'EducationTeaching.Learning.Method3.Title',
    bigtitle: 'EducationTeaching.Learning.Method3.BigTitle',
    description: 'EducationTeaching.Learning.Method3.Description',
    images: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    title: 'EducationTeaching.Learning.Method4.Title',
    bigtitle: 'EducationTeaching.Learning.Method4.BigTitle',
    description: 'EducationTeaching.Learning.Method4.Description',
    images: homeBg1
  }
]
</script>
