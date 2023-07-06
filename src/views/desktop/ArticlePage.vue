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
import { watchEffect, ref } from 'vue'
import '../../assets/styles/article.css'

import CarouselHorizontal from '../../components/CarouselHorizontal.vue'

const route = useRoute()

const content = ref(null)
const loading = ref(true)

watchEffect(async () => {
  loading.value = true
  content.value = (
    await import(
      `../../../data/${route.params.lang}/News-${route.params.title}.json`
    )
  ).default

  loading.value = false
})
</script>
