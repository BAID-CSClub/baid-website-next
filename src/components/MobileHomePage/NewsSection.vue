<template>
  <section class="section">
    <MobileTitle>新闻</MobileTitle>
    <MobileCard
      v-for="(item, index) in news.slice(0, 4)"
      :key="index"
      :bg="index % 2 === 0 ? 'blue' : 'white'"
      @click="router.push(item.href)"
    >
      <div class="flex items-center justify-between m-4 min-h-35">
        <img :src="item.cover" class="rounded-xl w-45% h-35" alt="" />
        <div class="w-45%">
          <h3 class="m-0">{{ item.title }}</h3>
        </div>
      </div>
    </MobileCard>
  </section>
</template>

<script setup>
import MobileTitle from '../MobileTitle.vue'

import MobileCard from '../MobileCard.vue'
import { ref, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const news = ref([])
const route = useRoute()
const router = useRouter()

watchEffect(() => {
  fetch(`/${route.params.lang}/db.json`).then((res) => {
    if (res.status === 200) {
      res.json().then((data) => {
        data = Object.values(data)
        // Sort by date
        data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
        news.value = data
      })
    }
  })
})
</script>
