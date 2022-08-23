<template>
  <section class="contentArea">
    <div class="flex justify-end mb--15">
      <NotFancyTitle cn="新闻" en="News" right color="blue"></NotFancyTitle>
    </div>

    <div class="flex justify-around md:flex-row flex-col min-h-180">
      <NewsBlock
        v-for="(news, i) in props.newsList"
        :title="news[locale].title"
        :abstract="news[locale].abstract"
        :img="img"
        :color="news[locale].color"
        :pos="{ 0: 'center', 1: 'start', 2: 'end' }[i % 3]"
        :link="news[locale].link"
        :key="i"
      />
    </div>
  </section>
</template>

<script setup>
import NewsBlock from './NewsBlock.vue'
import img from '../../assets/images/homeBg1.jpg'
import { useI18n } from 'vue-i18n'
import NotFancyTitle from '../NotFancyTitle.vue'

const { locale } = useI18n({ useScope: 'global' })

const props = defineProps(['newsList'])
</script>
