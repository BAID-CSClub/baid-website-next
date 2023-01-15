<template>
  <div>
    <div class="relative">
      <h2 class="text-[var(--standard-red)] font-black! text-8 m-y-8">
        自主探索<br />多样的<br />学习方式
      </h2>
      <!-- <h2 class="font-black text-gray-300 text-6 absolute top-8 z--1 lh-8 m-0!">
        Learning<br />Method
      </h2> -->
    </div>
    <div
      class="rd-5 text-8 text-white m-y-6 text-center drop-shadow h-40"
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
    title: 'EducationTeaching.LearningMethods.Method1.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method1.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method1.Description',
    images: homeBg1
  },
  {
    title: 'EducationTeaching.LearningMethods.Method2.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method2.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method2.Description',
    images:
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    title: 'EducationTeaching.LearningMethods.Method3.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method3.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method3.Description',
    images:
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    title: 'EducationTeaching.LearningMethods.Method4.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method4.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method4.Description',
    images: homeBg1
  }
]
</script>
