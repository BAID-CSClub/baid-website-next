<template>
  <section class="section">
    <MobileTitle>新闻</MobileTitle>
    <MobileCard
      v-for="(item, index) in news"
      :key="index"
      :bg="index % 2 === 0 ? 'blue' : 'white'"
    >
      <div class="flex items-center justify-between m-4 min-h-35">
        <img :src="item.image" class="rounded-xl w-45% h-35" alt="" />
        <div class="w-45%">
          <h3 class="m-0">{{ item.title }}</h3>
          <p class="m0 m-t-4">{{ item.abstract }}</p>
        </div>
      </div>
    </MobileCard>
  </section>
</template>

<script setup>
import MobileTitle from '../MobileTitle.vue'

import image from '../../assets/images/HomePage/Autumn.jpg'
import MobileCard from '../MobileCard.vue'

const news = [
  {
    image,
    title: '题目题目',
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要。。'
  },
  {
    image,
    title: '题目题目',
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要。。'
  },
  {
    image,
    title: '题目题目',
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要。。'
  }
]
</script>
