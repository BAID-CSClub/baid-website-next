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
import { ref, watchEffect } from 'vue'

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
