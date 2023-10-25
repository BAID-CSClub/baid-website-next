<template>
  <div class="section font-sans">
    <div>
      <NotFancyTitle :cn="$t('JoinUs.Faculty.Title')" en="Work with Us" color="blue"></NotFancyTitle>

      <pre class="mb-5" v-html="pageData.faculty" />

      <h2 class="mb-0">{{ pageData.faculty_requirements_title }}</h2>
      <div class="flex w-full mb-8">
        <div class="w-1/2 pr-8" style="border-right: 1px solid darkgray">
          <pre v-html="pageData.faculty_requirements_left" />
        </div>
        <div class="w-1/2 pl-8">
          <pre v-html="pageData.faculty_requirements_right" />
        </div>
      </div>


      <ImageCard :bg="pageData.faculty_card_image" :title="pageData.faculty_card_title">
        <pre v-html="pageData.faculty_card_content" />
      </ImageCard>


      <h2>{{ pageData.faculty_process_title }}</h2>
      <div class="flex w-full mb-3">
        <div class="w-1/2 pr-8" style="border-right: 1px solid darkgray">
          <pre v-html="pageData.faculty_process_left" />
        </div>
        <div class="w-1/2 pl-8">
          <pre v-html="pageData.faculty_process_right" />
        </div>
      </div>
      <pre v-html="pageData.faculty_epilogue" />
    </div>
  </div>
</template>
<script setup>
import camelsImg from '../../assets/images/JoinUs/camels.jpg'

import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
import ImageCard from './ImageCard.vue';
const pageData = inject('data')

// function open (url) {
//   window.open(url)
// }
</script>
