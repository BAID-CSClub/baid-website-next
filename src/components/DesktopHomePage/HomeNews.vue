<template>
  <div class="section">
    <NotFancyTitle cn="新闻" en="News" color="blue"></NotFancyTitle>
    <div class="flex h-130">
      <div class="flex-1 relative border-1">
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

      <div class="w-80">
        <div
          class="flex-row flex b-1 h-32 transition-all-300 bg-white"
          :class="{
            'scale-107 shadow-lg !bg-[var(--standard-red)] border-color-[var(--standard-red)]':
              current === index && !transition
          }"
          v-for="(news, index) in props.newsList.slice(0, 4)"
          :key="index"
          v-on:click="change(index)"
        >
          <div class="w-50% pl-3">
            <p
              class="font-sans color-gray-8 text-4 mt-3 mb-0 transition-color-300"
              :class="{ '!color-gray-2': current === index && !transition }"
            >
              {{ news.date.toLocaleString().substring(0, 10) }}
            </p>
            <p
              class="font-sans color-[var(--standard-blue)] text-6 transition-color-300 h-20 overflow-hidden"
              style="text-overflow: ellipsis; white-space: pre-wrap"
              :class="{ 'color-white': current === index && !transition }"
            >
              {{
                news.title.length > 15
                  ? news.title.substring(0, 15) + '...'
                  : news.title
              }}
            </p>
          </div>
          <img
            :src="news.cover"
            class="w-50% transition-all-300 object-cover"
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
