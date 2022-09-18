<template>
  <section class="section">
    <NotFancyTitle cn="学生活动" en="Activities" color="red"></NotFancyTitle>

    <div class="flex h-130">
      <div class="flex-1 relative">
        <img
          :src="activities[current].image"
          alt=""
          class="w-full h-full object-cover"
        />
        <div
          class="absolute bottom-0 w-full special-bg transition-opacity-300"
          :class="{ 'op-0': transition }"
        >
          <h2 class="font-sans color-white text-9 mb-2 ml-10">
            {{ activities[current][$i18n.locale].title }}
          </h2>
          <p class="font-sans color-white text-7 mb-10 ml-10">
            {{ activities[current][$i18n.locale].content }}
          </p>
        </div>
      </div>

      <div class="w-80">
        <div
          class="flex-row flex border b-1 h-30 transition-all-300 bg-white"
          :class="{
            'scale-107 shadow-lg !bg-[var(--standard-red)] border-color-[var(--standard-red)]':
              current === index && !transition
          }"
          v-for="(activity, index) in activities"
          v-on:click="change(index)"
        >
          <div class="w-50% pl-3">
            <p
              class="font-sans color-gray-8 text-4 mt-3 mb-0 transition-color-300"
              :class="{ '!color-gray-2': current === index && !transition }"
            >
              {{ activity.date }}
            </p>
            <p
              class="font-sans color-[var(--standard-blue)] text-6 transition-color-300"
              :class="{ 'color-white': current === index && !transition }"
            >
              {{ activity[$i18n.locale].title }}
            </p>
          </div>
          <img
            :src="homeBg1"
            class="w-50% transition-all-300 object-cover"
            :class="{ 'm-2': current === index && !transition }"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import homeBg1 from '../../assets/images/homeBg1.jpg?webp'
import NotFancyTitle from '../NotFancyTitle.vue'

const activities = [
  {
    image: homeBg1,
    date: '2021.09.01',
    'zh-CN': {
      title: '标题...',
      content: '介绍...'
    },
    'en-US': {
      title: 'Title...',
      content: 'Description...'
    }
  },
  {
    image: homeBg1,
    date: '2021.09.02',
    'zh-CN': {
      title: '标题...',
      content: '介绍...'
    },
    'en-US': {
      title: 'Title...',
      content: 'Description...'
    }
  }
]

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
