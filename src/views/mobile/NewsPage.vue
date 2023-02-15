<template>
  <main>
    <div class="placeholder"></div>
    <section class="section">
      <MobileTitle>新闻</MobileTitle>

      <div v-for="item in news" :key="item.id">
        <MobileCard>
          <div
            class="w-full h-38 bg-cover"
            :style="{ backgroundImage: 'url(' + item.cover + ')' }"
          >
            <div class="w-full h-full bg-black bg-op-30 p-5 box-border">
              <h2 class="m0 text-white truncate">{{ item.title }}</h2>
              <p class="mt-1 color-white op-80">
                {{ item.description }}
              </p>
              <p class="op-50 color-white">
                发布于 {{ item.date.split('T')[0] }}
                {{ item.time.split(':').slice(0, 2).join(':') }}
              </p>
              <p class="">
                <RouterLink class="color-sky" :to="item.href">
                  阅读更多
                </RouterLink>
              </p>
            </div>
          </div>
        </MobileCard>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

import MobileTitle from '../../components/MobileTitle.vue'
import MobileCard from '../../components/MobileCard.vue'

const route = useRoute()

const news = ref([])

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
