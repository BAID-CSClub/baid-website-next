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
    <div class="flex h-130">
      <div class="flex-1 relative b-1 b-black b-solid b-r-0 m-t--1px m-b--1px">
        <div
          class="transition-opacity-300 h-full cursor-pointer"
          :class="{ 'op-0': transition }"
          @click="router.push(props.newsList[current].href)"
        >
          <img
            :src="props.newsList[current].cover"
            alt=""
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 w-full special-bg">
            <h2 class="font-sans color-white text-9 mb-2 ml-10">
              {{ props.newsList[current].title }}
            </h2>
            <p class="font-sans color-white text-7 mb-10 ml-10">
              {{ props.newsList[current].abstract }}
            </p>
          </div>
        </div>
      </div>

      <div class="w-85 flex flex-col">
        <div
          class="h-25% flex b-1 b-black b-solid transition-all-300 bg-white m-t--1px m-b--1px"
          :class="{
            'scale-107 shadow-lg !bg-[var(--standard-red)] border-color-[var(--standard-red)]':
              current === index && !transition
          }"
          v-for="(news, index) in props.newsList.slice(0, 4)"
          :key="index"
          v-on:click="change(index)"
        >
          <div class="w-50% ml-3 mt-3">
            <p
              class="font-sans color-gray-8 text-4 mb-0 transition-color-300"
              :class="{ '!color-gray-2': current === index && !transition }"
            >
              {{ news.date.toLocaleString().substring(0, 10) }}
            </p>
            <h3
              class="my-1 font-sans color-[var(--standard-blue)] text-6 transition-color-300"
              style="
                overflow: hidden;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                white-space: pre-wrap;
              "
              :class="{ 'color-white': current === index && !transition }"
            >
              {{ news.title }}
            </h3>
          </div>
          <img
            :src="news.cover"
            class="w-50% transition-all-300 object-cover aspect-4/3"
            :class="{ 'm-2': current === index && !transition }"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NotFancyTitle from '../NotFancyTitle.vue'

import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['newsList'])

const current = ref(0)

const transition = ref(false)

function change (index) {
  if (index === current.value || transition.value) return
  transition.value = true
  setTimeout(() => {
    current.value = index
    transition.value = false
  }, 300)
}
</script>

<style scoped>
.special-bg {
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}
</style>
