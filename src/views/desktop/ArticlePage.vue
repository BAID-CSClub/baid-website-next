<template>
  <!-- 加载时，隐藏下面的一切内容 -->
  <div :class="{ 'overflow-hidden w-full h-[calc(100vh-4.25rem)]': loading }">
    <transition name="fade" mode="out-in">
      <div
        v-if="loading"
        class="w-full h-[calc(100vh-4.25rem)] flex items-center justify-center font-sans"
      >
        <h1 class="font-sans">Loading...</h1>
      </div>
      <div v-else>
        <section>
          <CarouselHorizontal :images="[content?.cover]">
            <h1 class="text-16 color-white font-sans">
              {{ content?.title }}
            </h1>
          </CarouselHorizontal>
        </section>
        <section class="section">
          <article>
            <h1 class="font-sans">{{ content?.title }}</h1>
            <p></p>
          </article>
          <article v-html="content?.body"></article>
        </section>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watch, onMounted } from 'vue'
import '../../assets/styles/article.css'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'

const debug = true
const route = useRoute()

const contentPath = computed(() => {
  if (
    route.params.lang &&
    route.params.year &&
    route.params.month &&
    route.params.day &&
    route.params.title
  ) {
    return `/${route.params.lang}/articles/${route.params.year}/${route.params.month}/${route.params.day}/${route.params.title}.json`
  } else {
    return false
  }
})

const content = ref(null)
const loading = ref(true)

onMounted(async () => {
  watch(
    contentPath,
    async (path) => {
      if (!path) return
      loading.value = true

      const res = await fetch(path)
      if (debug) {
        setTimeout(() => (loading.value = false), 1000)
      } else {
        loading.value = false
      }
      if (res.status === 200) {
        content.value = await res.json()
      } else {
        location.href = `/${route.params.lang}/404`
      }
    },
    { immediate: true }
  )
})
</script>
