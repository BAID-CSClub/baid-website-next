<template>
  <div class="section font-sans">
    <div>
      <NotFancyTitle
        :cn="$t('JoinUs.Student.Title')"
        en="Admission"
        color="red"
      ></NotFancyTitle>

      <pre class="mb-5" v-html="pageData.student"></pre>

      <div
        class="w-full bg-[var(--standard-blue)] color-white mb-8 hover:shadow-xl"
      >
        <img
          :src="pageData.student_first_image"
          class="w-full object-cover h-96"
        />
        <div class="px-8 py-8">
          <h2 class="m0 mb-3 font-bold">{{ pageData.student_first_title }}</h2>
          <pre v-html="pageData.student_first_content"></pre>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-5">
        <ImageCard
          v-for="card in pageData.student_cards"
          :title="card.name"
          :bg="card.image"
          :key="card.name"
        >
          <pre v-html="card.content" />
        </ImageCard>
      </div>
    </div>
  </div>
</template>
<script setup>
import ImageCard from './ImageCard.vue'
import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'

const pageData = inject('data')
</script>
