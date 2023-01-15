<template>
  <div>
    <MobileHead :img="content?.cover"></MobileHead>

    <section class="section">
      <h3 v-if="loading">Now loading...</h3>
      <div v-else>
        <article>
          <h1>{{ content.title }}</h1>
          <p></p>
        </article>
        <article v-html="content.body"></article>
      </div>
    </section>
  </div>
</template>

<style>
article img {
  width: 100%;
}
</style>

<script setup>
import MobileHead from '../../components/MobileHead.vue'

import '../../assets/styles/article.css'
import { useRoute } from 'vue-router'
import { computed, ref, watch, onMounted } from 'vue'
// import CarouselHorizontal from '../../components/CarouselHorizontal.vue'

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
