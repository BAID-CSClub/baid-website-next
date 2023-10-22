<template>
  <div class="section font-sans">
    <div>
      <NotFancyTitle
        :cn="$t('JoinUs.Faculty.Title')"
        en="Work with Us"
        color="blue"
      ></NotFancyTitle>

      <p class="mb-5">在北京中学开放创新的教育生态中，每一位教职员工都能找到发光发热的舞台。只要您热爱学生，有教育情怀，有国际视野，国际部热忱欢迎您的加盟!</p>
      <pre v-html="pageData.faculty"></pre>
    </div>
  </div>
</template>
<script setup>
import { inject } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'
const pageData = inject('data')

// function open (url) {
//   window.open(url)
// }
</script>
