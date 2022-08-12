<template>
  <section
    class="contentArea flex justify-around md:flex-row flex-col min-h-180"
  >
    <NewsBlock
      v-for="(news, i) in newsList"
      :title="news.title"
      :abstract="news.abstract"
      :img="img"
      :color="news.color"
      :pos="{ 0: 'center', 1: 'start', 2: 'end' }[i % 3]"
      :link="news.link"
      :key="i"
    />
  </section>
</template>

<script setup>
import NewsBlock from './NewsBlock.vue'
import img from '../../assets/images/homeBg1.jpg'

const newsList = [
  {
    title: '题目',
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要',
    color: '#B9C9C7',
    link: '/114514'
  },
  {
    title: '题目',
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要',
    color: '#F2A640',
    link: '/114514'
  },
  {
    title: '题目',
    abstract: '摘要摘要摘要摘要摘要摘要摘要摘要',
    color: '#B5C2A1',
    link: '/114514'
  }
]
</script>
