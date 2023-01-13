<template>
  <div>
    <MobileHead :img="img"></MobileHead>

    <section class="section">
      <h1>Todo: Mobile Article Page</h1>
      <h2>Assigned to lihe07</h2>
      <h3 v-if="loading">Now loading...</h3>
      <article v-else v-html="content?.body"></article>
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

import img from '../../assets/images/HomePage/Dongba_1.jpg'

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
      console.log('Response', res)
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
