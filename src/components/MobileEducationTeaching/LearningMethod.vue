<template>
  <div>
    <div class="relative">
      <h2 class="text-[var(--standard-red)] font-black! text-8 m-y-4">
        自主探索<br />多样的<br />学习方式
      </h2>
    </div>
    <div
      class="rd-5 text-8 text-white m-y-6 m-x-2 text-center drop-shadow h-40 flex items-center justify-center"
      style="
        background: url(https://images.unsplash.com/photo-1560785496-3c9d27877182?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80);
        background-size: cover;
      "
      @click="
        () => {
          bigtitle = passage.bigtitle
          description = passage.description
          image = passage.image
          show = true
        }
      "
      v-for="passage in LeaningMethods"
      :key="passage"
    >
      {{ $t(passage.title) }}
    </div>
    <Transition name="fade" mode="out-in">
      <MobilePopup v-if="show" @close="show = false">
        <template v-slot:content>
          <h3 class="text-6 text-black font-black">
            {{ $t(bigtitle) }}
          </h3>
          <img :src="image" class="rd-5 m-y-4 w-full block" />
          <p>
            {{ $t(description) }}
          </p></template
        ></MobilePopup
      ></Transition
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import MobilePopup from '../MobilePopup.vue'

const bigtitle = ref()
const description = ref()

const show = ref(false)
const LeaningMethods = [
  {
    title: 'EducationTeaching.LearningMethods.Method1.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method1.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method1.Description',
    image: homeBg1
  },
  {
    title: 'EducationTeaching.LearningMethods.Method2.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method2.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method2.Description',
    image:
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    title: 'EducationTeaching.LearningMethods.Method3.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method3.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method3.Description',
    image:
      'https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80'
  },
  {
    title: 'EducationTeaching.LearningMethods.Method4.Title',
    bigtitle: 'EducationTeaching.LearningMethods.Method4.BigTitle',
    description: 'EducationTeaching.LearningMethods.Method4.Description',
    image: homeBg1
  }
]
</script>
