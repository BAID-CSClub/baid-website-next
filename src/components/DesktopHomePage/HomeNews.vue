<template>
  <div class="section">
    <div class="flex items-center justify-between">
      <NotFancyTitle cn="新闻" en="News" color="blue"></NotFancyTitle>
      <router-link
        class="flex items-center gap-1 color-black decoration-none op-80 hover:op-100 transition"
        :to="'/' + $i18n.locale + '/news'"
      >
        <span class="font-sans">{{ $t('HomePage.ReadMore') }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M2 8a.75.75 0 0 1 .75-.75h8.787L8.25 4.309a.75.75 0 0 1 1-1.118L14 7.441a.75.75 0 0 1 0 1.118l-4.75 4.25a.75.75 0 1 1-1-1.118l3.287-2.941H2.75A.75.75 0 0 1 2 8Z"
          />
        </svg>
      </router-link>
    </div>

    <div class="grid grid-cols-3 gap-8">
      <NewsCard :news="props.newsList[0]" bg="var(--standard-blue)" :light="true" />
      <NewsCard :news="props.newsList[1]" bg="#eee" />
      <NewsCard :news="props.newsList[2]" bg="var(--standard-red)" :light="true" />
    </div>
  </div>
</template>

<script setup>
import NotFancyTitle from '../NotFancyTitle.vue'
import NewsCard from './NewsCard.vue'

const props = defineProps(['newsList'])
</script>

<style scoped>
.special-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
</style>
