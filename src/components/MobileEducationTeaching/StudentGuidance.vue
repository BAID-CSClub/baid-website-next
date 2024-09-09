<template>
  <div>
    <div class="font-black">
      <h2 class="text-8 font-black text-[var(--standard-red)] m-y-4">
        全面的学生指导
      </h2>
    </div>

    <div
      class="h-50 rd-5 drop-shadow flex flex-col justify-end box-border my-6 mx-2 bg-cover overflow-hidden"
      v-for="data in pageData.student_mentorship"
      :key="data.title"
      :style="{ backgroundImage: `url(${data.image})` }"
    >
      <div class="gradient-bg p-4 color-white">
        <div class="text-6 font-black">
          {{ data.title }}
        </div>
        <div v-html="data.content"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { inject } from 'vue'
const pageData = inject('data')
</script>

<style scoped>
.gradient-bg {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0.5) 100%
  );
}
</style>
